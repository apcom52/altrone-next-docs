# File Picker

## Say which files are accepted

Opening the system dialog to find out that the file doesn't fit is a wasted attempt. Set `accept` to the types you really handle, and the dialog shows only the right files.

::::good-bad
:::good
::playground{src=filePicker/FilePickerGuidelineAcceptGoodDemo caption="The dialog offers only PDF and DOCX files"}
:::

:::bad
::playground{src=filePicker/FilePickerGuidelineAcceptBadDemo caption="Any file can be chosen, and the mistake is only found after the upload"}
:::
::::

`accept` doesn't protect the server. Check the type and the size there as well.

## Name the button after what is being chosen

The button text is the only hint of what to attach. "Attach a screenshot" says more than "Browse": the user knows the purpose before the dialog opens. Change the text with `placeholder`.

::::good-bad
:::good
::playground{src=filePicker/FilePickerGuidelineLabelGoodDemo caption="The label says what to attach"}
:::

:::bad
::playground{src=filePicker/FilePickerGuidelineLabelBadDemo caption="The label says nothing about the purpose"}
:::
::::

## Choose between uploading right away and with the form

Upload files right away (`autoUpload`) when the file is useful by itself and a large one would slow down submitting the form. Otherwise turn it off with `autoUpload={false}` and send the files together with the form data, so a cancelled form leaves nothing on the server.

## Let people fix a failed upload

A failed file keeps its chip with a retry button. Give the error a human message through `fail(message)` — "The file is too large" helps, "Error" doesn't.

## Accessibility

- The picker needs an accessible name: a visible label next to it or in a `Form.Field`. The button text alone isn't enough when there are several pickers on the page.
- The button is a regular button, so it can be reached with the keyboard and opened with `Enter` and `Space`; the native file input is hidden and not in the tab order.
- The retry and delete buttons on a chip have text labels for screen readers, even though they are drawn as icons.
- The error message is shown in a popover on click or hover, and the same text is the accessible name of the error icon.
- State isn't conveyed by color alone: a failed file also gets the error icon and the retry button.
