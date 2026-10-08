# Modal

A dialog appears over the page, dims the background, and takes the user's full attention: clicks outside it don't go through and focus is trapped inside. `Modal` is for deliberate decisions — confirming an irreversible action, entering a small piece of data, a warning that can't be skipped.

## Basic usage

Unlike `Popover`/`Dropdown`/`Tooltip`, `Modal` isn't attached to a trigger element — open it explicitly via `open`, close it via `onClose`. The content is passed through `content`, the heading through `title`.

```tsx
const [open, setOpen] = useState(false);

<Button label="About this version" icon={<Info />} onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="About this version"
  content={<Text block>Altrone UI 4.0 is a beta release.</Text>}
/>
```

::playground{src=modal/ModalBasicDemo caption="Close it with the ✕ button, “Cancel”, the Escape key, or a click on the backdrop"}

The footer has a built-in cancel button by default and the header has a ✕ close button; turn them off with `showCancelButton` and `showCloseButton`. The footer isn't rendered at all when there's nothing to put in it: `showCancelButton={false}` and neither `actions` nor `additionalActions`.

If `open` isn't passed, `Modal` is uncontrolled and keeps its own state, starting from `defaultOpen`. This is handy when the dialog is mounted only for the time it's shown.

## Actions

Action buttons are passed through `actions` and rendered on the right of the footer, after the built-in cancel button. They accept a single element, an array, or a function that receives `hide` — closes the dialog without touching your own state.

```tsx
<Button label="Delete project" icon={<Trash />} danger onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Delete project?"
  size="s"
  content={<Text block>“Design system” and all its data will be deleted permanently.</Text>}
  actions={({ hide }) => (
    <Button
      label="Delete project"
      variant="submit"
      danger
      onClick={() => {
        handleDelete();
        hide();
      }}
    />
  )}
/>
```

::playground{src=modal/ModalConfirmDemo caption="The built-in “Cancel” sits next to the action — no need to draw your own"}

`hide` is available in `content` too: pass a function instead of an element to close the dialog from inside its content — for example, after a form has been submitted successfully.

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Upload file"
  content={({ hide }) => <FileUploadForm onSuccess={hide} />}
/>
```

## Additional actions

`additionalActions` are rendered in the footer on the opposite side from `actions` — the left. It's a good place for a secondary or destructive action, so it doesn't sit next to the primary one.

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Edit record"
  content={<EditForm />}
  additionalActions={({ hide }) => (
    <Button label="Delete" variant="text" danger onClick={hide} />
  )}
  actions={({ hide }) => (
    <Button label="Save changes" variant="submit" onClick={hide} />
  )}
/>
```

::playground{src=modal/ModalAdditionalActionsDemo caption="“Delete” on the left, “Save changes” on the right"}

## Form inside a dialog

`content` can hold a small form. The form's state lives outside `Modal`, so reset it in `onClose`: the dialog closes through the ✕, the backdrop, and Escape alike, and the next opening should start from a clean slate.

```tsx
<Modal
  open={open}
  onClose={() => {
    setOpen(false);
    setName("");
    setErrors({});
  }}
  title="New folder"
  content={
    <Form errorMessages={errors}>
      <Form.Field name="name" label="Name" required>
        <TextInput value={name} onChange={setName} placeholder="Projects 2026" />
      </Form.Field>
    </Form>
  }
  actions={({ hide }) => (
    <Button label="Create" variant="submit" onClick={() => handleCreate(hide)} />
  )}
/>
```

::playground{src=modal/ModalFormDemo caption="Press “Create” with an empty field — the dialog stays open"}

## Sizes

`size` sets the dialog's width: `s` — 280px, `m` (default) — 400px, `l` — 640px. Any other `Size` value behaves like `m`.

```tsx
<Modal open={open} onClose={close} title="Discard changes?" size="s" content={<Text>…</Text>} />
<Modal open={open} onClose={close} title="Edit profile" size="m" content={<ProfileForm />} />
<Modal open={open} onClose={close} title="Preview" size="l" content={<PreviewPanel />} />
```

::playground{src=modal/ModalSizesDemo caption="Dialog width — s, m, and l"}

If the dialog is taller than the screen, the whole panel scrolls, header and footer included; the mouse wheel works from anywhere over the backdrop.

## Props

:::prop[content*]{type="ReactElement | ((ctx: { hide: () => void }) => ReactElement)"}
The main content. Can be a function — then it receives `hide`.
:::

:::prop[open]{type="boolean"}
Controlled open state. Without it, `Modal` is uncontrolled — see `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Initial open state for an uncontrolled `Modal`. Ignored when `open` is passed.
:::

:::prop[title]{type="string"}
The dialog heading, shown in the header and used as the dialog's accessible name for screen readers.
:::

:::prop[size]{type="'s' | 'm' | 'l'" default="'m'"}
Dialog width: 280, 400, or 640 pixels.
:::

:::prop[actions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Action buttons on the right of the footer, after the built-in cancel button. Can be a function with `hide`.
:::

:::prop[additionalActions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Additional buttons in the footer on the opposite side from `actions` — the left.
:::

:::prop[showCloseButton]{type="boolean" default="true"}
The ✕ button in the header. Pass `false` to remove it — for example, when the dialog can only be closed with the footer buttons.
:::

:::prop[showCancelButton]{type="boolean" default="true"}
The built-in “Cancel” button before `actions` in the footer. Pass `false` to remove it.
:::

:::prop[enabled]{type="boolean" default="true"}
When `false`, the dialog is never rendered, even if `open` or `defaultOpen` ask to show it.
:::

:::prop[onClose]{type="(event?: MouseEvent | KeyboardEvent) => void"}
Called when the dialog closes: via the ✕ or “Cancel” button, a click on the backdrop, Escape, or a `hide()` call; for `hide()`, `event` isn't passed. For a controlled `Modal`, this is the only place to set `open` back to `false` — the component doesn't close itself.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root DOM element — the dialog's backdrop.
:::

## Related topics

- [Drawer](/en/components/overlays/drawer) — a side panel for bigger forms and lists that don't deserve a page of their own
- [Popover](/en/components/overlays/popover) — a floating panel attached to a trigger element, when the user's attention doesn't need to be taken over
- [Form](/en/components/controls/form) — a component for the fields `Modal` content is usually built from
