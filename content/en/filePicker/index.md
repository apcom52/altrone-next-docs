# File Picker

`FilePicker` is a control for choosing files. A button opens the system file dialog, and the chosen files appear next to it as chips with the name and size. A file can be uploaded to a server automatically: the chip shows the progress, a failure and a retry button.

## Basic usage

```tsx
<FilePicker autoUpload={false} onChange={(files) => console.log(files)} />
```

::playground{src=filePicker/FilePickerBasicDemo caption="Choosing a file without uploading it"}

By default the picker takes one file: a new choice replaces the previous one. `onChange` is called every time the list changes, whether a file was added or removed.

:::warning
`autoUpload` is on by default, so every chosen file is sent to the server right away. If you only need the chosen files, for example to send them together with a form, pass `autoUpload={false}`.
:::

:::note
`onChange` receives the list first and the event second: `(fileList: FileItem[], event) => void`. The event is the native `change` of the file input when files are added, and the click on the delete button when a file is removed.
:::

## Several files

`multiple` lets the user choose several files at once, and every new choice is added to the list.

```tsx
<FilePicker multiple autoUpload={false} />
```

::playground{src=filePicker/FilePickerMultipleDemo caption="Several files in one picker"}

## File types

`accept` is passed to the native file input, so the system dialog shows only the matching files. It takes the same values as the HTML attribute: MIME types, patterns such as `image/*` and extensions.

```tsx
<FilePicker accept="image/*" multiple autoUpload={false} placeholder="Choose images" />
```

::playground{src=filePicker/FilePickerAcceptDemo caption="Only images can be chosen"}

`accept` is a hint for the dialog, not a check: the user can still pick any file, so validate the type on the server too. `placeholder` changes the text of the button.

## Controlled list

Pass `value` and `onChange` to keep the list in your own state. Without `value` the picker keeps the list itself; the initial list for that mode is set by `defaultValue`.

```tsx
const [files, setFiles] = useState<FileItem[]>([]);

<FilePicker multiple autoUpload={false} value={files} onChange={setFiles} />
```

::playground{src=filePicker/FilePickerControlledDemo caption="The list lives in your state"}

Each item is a `FileItem`: `{ id?, filename?, file?, ...anything else }`. `file` is the native `File`; `id` is created automatically when missing; extra fields are kept and handed back, so you can store a server identifier right in the item.

## Uploading to a server

With `autoUpload` the picker sends each chosen file to `url` itself, using the `method` and putting the file into the form field `name`. The chip shows the progress bar while the upload is running.

```tsx
<FilePicker url="/api/upload" method="post" name="file" />
```

Inside a `Form.Field` the `name` is taken from the field, so you can leave it out. When a request ends with a status outside `200–299`, the chip turns red and shows a retry button.

## Custom upload

`autoUploadFn` replaces the built-in request, so you can upload to cloud storage, add headers or use your own client. The function receives the file and four helpers that drive the chip: `startUploading()` switches it to the loading state, `setProgress(uploadedBytes)` moves the progress bar, `complete()` marks success and `fail(message)` marks a failure.

```tsx
<FilePicker
  multiple
  autoUploadFn={async ({ file, startUploading, setProgress, complete }) => {
    startUploading();
    await upload(file, (loaded) => setProgress(loaded));
    complete();
  }}
/>
```

::playground{src=filePicker/FilePickerUploadDemo caption="A simulated upload with progress"}

## Errors and retry

When the upload fails, the chip turns red, an error icon appears with the message in a popover, and a retry button starts the upload again. The message is whatever you pass to `fail(message)`.

```tsx
autoUploadFn={async ({ startUploading, fail }) => {
  startUploading();
  fail("The server is unavailable");
}}
```

::playground{src=filePicker/FilePickerUploadFailDemo caption="A failed upload with a message and a retry button"}

## Removing files

The delete button on a chip removes the file from the list. With `autoUpload` the picker first asks the server to delete the file: by default it sends a `DELETE` request to `url` with the file name, and `removeFileFn` replaces that request. The chip disappears after the request finishes. If the request fails, the file stays.

```tsx
<FilePicker
  url="/api/upload"
  removeFileFn={async ({ pickerItem }) => {
    await deleteFile(pickerItem.id);
  }}
/>
```

In the single-file mode the same call happens when the old file is replaced by a new one.

## Files already on the server

Items without `file` are shown as already uploaded: only the name is on the chip, and no upload starts. Use this to show files of an existing record.

```tsx
const [files, setFiles] = useState<FileItem[]>([
  { id: "srv-1", filename: "report.pdf" },
  { id: "srv-2", filename: "invoice.pdf" },
]);

<FilePicker multiple value={files} onChange={setFiles} removeFileFn={deleteFromServer} />
```

::playground{src=filePicker/FilePickerServerFilesDemo caption="Files that were uploaded earlier"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. It changes the button, the height of the chips and their text.

::playground{src=filePicker/FilePickerSizesDemo caption="Five sizes"}

## Disabled

`disabled` locks both the button and the buttons on the chips, so files can neither be added nor removed.

```tsx
<FilePicker disabled defaultValue={[{ id: "1", filename: "contract.pdf" }]} />
```

::playground{src=filePicker/FilePickerDisabledDemo caption="A locked picker"}

## Inside a form

Inside a `Form.Field` the picker takes `name`, `disabled` and `size` from the form. A prop passed to the `FilePicker` itself wins. The native file input is rendered with that `name`.

```tsx
<Form size="l">
  <Form.Field name="resume">
    <FilePicker autoUpload={false} />
  </Form.Field>
  <Form.Field name="portfolio" disabled>
    <FilePicker autoUpload={false} />
  </Form.Field>
</Form>
```

::playground{src=filePicker/FilePickerFormDemo caption="The size comes from the form; the second picker is locked"}

## Ref and styling

`ref`, `className` and `style` apply to the root `<div>` that holds the chips and the button, and the remaining `div` attributes are passed to it. The picker lays its content out in a row and wraps it when there is no room.

## Props

:::prop[value]{type="FileItem[]"}
The current list of files. Passing it makes the picker controlled.
:::

:::prop[defaultValue]{type="FileItem[]" default="[]"}
The initial list when the picker isn't controlled.
:::

:::prop[onChange]{type="(fileList: FileItem[], event: ChangeEvent<HTMLInputElement> | MouseEvent) => void"}
Called when a file is added or removed, with the whole new list.
:::

:::prop[multiple]{type="boolean" default="false"}
Allows choosing several files; new ones are added to the list. Without it, a new file replaces the previous one.
:::

:::prop[accept]{type="string"}
Accepted file types, passed to the native `<input accept>`.
:::

:::prop[placeholder]{type="string"}
The text of the button. A localized string by default.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
The size of the button and the chips. When unset, it is read from the form context.
:::

:::prop[disabled]{type="boolean"}
Locks the picker. When unset, it is read from the form context.
:::

:::prop[autoUpload]{type="boolean" default="true"}
Sends each chosen file to the server right away.
:::

:::prop[url]{type="string"}
The upload address. Required with `autoUpload` unless `autoUploadFn` is set.
:::

:::prop[method]{type="string" default="'POST'"}
The HTTP method of the upload request.
:::

:::prop[name]{type="string"}
The name of the form field that carries the file. When unset, it is read from the form context.
:::

:::prop[autoUploadFn]{type="(context: FilePickerUploadContext) => Promise<void>"}
Replaces the built-in upload. The context holds `file`, `pickerItem`, `url`, `method`, `name` and the helpers `startUploading`, `setProgress`, `complete` and `fail`.
:::

:::prop[removeFileFn]{type="(context: FilePickerRemoveContext) => Promise<void>"}
Replaces the built-in delete request. The context holds `pickerItem`, `file`, `url` and `name`.
:::

:::prop[uploadIcon]{type="ReactElement"}
The icon of the button. See the Icons tab.
:::

:::prop[errorIcon]{type="ReactElement"}
The icon of a failed file. See the Icons tab.
:::

:::prop[retryIcon]{type="ReactElement"}
The icon of the retry button. See the Icons tab.
:::

:::prop[deleteIcon]{type="ReactElement"}
The icon of the delete button. See the Icons tab.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref of the root `<div>`.
:::

All other `<div>` attributes except `onChange` are passed to the root.

## Related topics

- [Button](/en/components/controls/button) — the choose button and the buttons on the chips are built on it
- [Progress](/en/components/feedback/progress) — draws the upload progress on a chip
- [Form](/en/components/controls/form) — `Form.Field` passes `name`, `disabled` and `size` to the picker
