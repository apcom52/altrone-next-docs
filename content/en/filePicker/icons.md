# File Picker

`FilePicker` draws its own icons: the one on the choose button, the error icon on a failed file, and the icons of the retry and delete buttons on a chip. Each can be replaced. The progress bar of an upload is not an icon and can't be replaced.

:::spoiler[How to replace the icons]
Pass `uploadIcon`, `errorIcon`, `retryIcon` and `deleteIcon` to change one `FilePicker`. The replacement takes the place of the default icon in the same slot and, like any `lucide-react` icon, sizes itself.

```tsx
import { CircleAlert, FolderUp, RefreshCw, X } from "lucide-react";

<FilePicker
  uploadIcon={<FolderUp />}
  errorIcon={<CircleAlert />}
  retryIcon={<RefreshCw />}
  deleteIcon={<X />}
/>
```

::playground{src=filePicker/FilePickerIconsDemo caption="Different icons for the button and for a failed file"}

To change the error icon for every picker in the app, set the shared `error` icon on `Application` through the `icons` prop — the prop on `FilePicker` still wins. The other three icons can't be changed through the shared setting.

All props accept any `ReactElement`. Automatic sizing is tied to the `lucide` class, so an icon from another library needs an explicit size of about `16px` — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[uploadIcon]{icon="Upload"}
Shows that the button opens the file dialog
:::

:::icon-card[errorIcon]{icon="CircleAlert"}
Signals a failed upload and opens the error message
:::

:::icon-card[retryIcon]{icon="RotateCw"}
Starts the upload of a failed file again
:::

:::icon-card[deleteIcon]{icon="Trash2"}
Removes the file from the list
:::
::::
