# Dialogs

`showAlert`, `showConfirm` and `showPrompt` are ready-made modal windows for the three most common conversations with a user: inform, ask again and request a value. They are plain functions: call them from a click handler, a store or any module, with no hooks and no open state. Each returns a `Promise` that settles when the user has answered, so the code reads top to bottom with `await`.

```tsx
import { showAlert, showConfirm, showPrompt } from 'altrone-ui';
```

A `DialogProvider` is required — it is already part of `Application`, so there is nothing to set up. If the window is more complex than the three ready layouts, use [Modal](/en/components/overlays/modal).

## Message

`showAlert` shows a message with a single button. The promise settles when the window is closed — by the button, the cross, the backdrop or Escape — and returns nothing.

```tsx
await showAlert({
  title: 'Connection restored',
  message: 'You are back online. Pending changes will sync now.',
  okText: 'Got it',
});
```

::playground{src=dialog/DialogAlertDemo caption="The code after await runs when the window is closed"}

## Confirmation

`showConfirm` asks a question and returns `true` if the user confirmed and `false` if they declined or closed the window. For irreversible actions add `danger` — the confirm button turns red. Button labels are set with `confirmText` and `cancelText`.

```tsx
async function handleDelete(id: string) {
  const confirmed = await showConfirm({
    title: 'Delete project?',
    message: '“Design system” and all its data will be deleted permanently.',
    confirmText: 'Delete project',
    cancelText: 'Keep it',
    danger: true,
  });

  if (confirmed) await deleteProject(id);
}
```

::playground{src=dialog/DialogConfirmDemo caption="Closing the window with the cross or Escape counts as declining"}

## Entering a value

`showPrompt` asks for a value and returns it, or `null` if the user cancelled or closed the window. So check the result against `null`, not an empty string: an empty value is an answer too.

```tsx
const name = await showPrompt({
  title: 'Rename file',
  message: 'Enter a new name for this file.',
  placeholder: 'File name',
  confirmText: 'Rename',
});

if (name !== null) await renameFile(String(name));
```

::playground{src=dialog/DialogPromptDemo caption="Cancelling returns null and the name stays the same"}

`inputType` picks the input: `string` (the default) is single-line, `text` is multi-line, `password` is hidden input, and `number` is numeric, in which case the result is a number.

::playground{src=dialog/DialogPromptTypesDemo caption="Four input types"}

## How it works

- Only one window is shown at a time. Calling a second one before the first is closed replaces it, and the first promise never settles — always `await` before the next call.
- The default title and button labels come from the application locale. `title` can be omitted — a standard title for that kind of window is used.
- If `DialogProvider` is not mounted, the function logs a warning and settles at once with the "declined" value: `undefined`, `false` or `null`.
- With nested providers, the most recently mounted one shows new windows.

## Functions

:::prop[showAlert]{type="(options: AlertOptions) => Promise<void>"}
A message with an "OK" button. Options: `title`, `message`, `okText`.
:::

:::prop[showConfirm]{type="(options: ConfirmOptions) => Promise<boolean>"}
A question with confirm and decline. Options: `title`, `message`, `confirmText`, `cancelText`, `danger`.
:::

:::prop[showPrompt]{type="(options: PromptOptions) => Promise<string | number | null>"}
A value request. Options: `title`, `message`, `inputType`, `placeholder`, `confirmText`, `cancelText`.
:::

## Options

:::prop[title*]{type="string"}
The window title.
:::

:::prop[message*]{type="string"}
The text under the title.
:::

:::prop[okText]{type="string"}
The button label in `showAlert`. Defaults to the localized "OK".
:::

:::prop[confirmText]{type="string"}
The confirm button label in `showConfirm` and `showPrompt`.
:::

:::prop[cancelText]{type="string"}
The decline button label in `showConfirm` and `showPrompt`.
:::

:::prop[danger]{type="boolean"}
`showConfirm` only: a red confirm button for irreversible actions.
:::

:::prop[inputType]{type="'string' | 'text' | 'password' | 'number'" default="'string'"}
`showPrompt` only: the input type.
:::

:::prop[placeholder]{type="string"}
`showPrompt` only: the field hint. Defaults to a localized text.
:::

## Related topics

- [Modal](/en/components/overlays/modal) — a window with arbitrary content and actions when three layouts are not enough
- [Drawer](/en/components/overlays/drawer) — a side panel for larger forms and lists
- [Form](/en/components/controls/form) — the fields complex window content is usually made of
