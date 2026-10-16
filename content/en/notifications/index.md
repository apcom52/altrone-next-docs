# Notifications

`showToast` and `showNotification` show a short-lived message over the page: a toast confirms an action in a line, a notification is a card with a title, an icon, an image and buttons. They are plain functions, so you can call them from a click handler, a store or any module, with no hooks and no state. Neither blocks the interface, and both close on their own.

```tsx
import { showToast, showNotification, dismissNotification } from 'altrone-ui';
```

The stack is mounted by `Application`, so there is nothing to set up. Without a mounted `Notifications` the functions only warn in the console.

## Toasts

`showToast` takes the text and returns the `id` of the toast. A toast is a pill with an icon and a close button. It disappears after 4 seconds, and while the pointer is over it the timer is paused.

```tsx
<Button
  label="Save changes"
  onClick={() => showToast('Changes saved successfully.', { variant: 'success' })}
/>
```

::playground{src=notifications/NotificationsToastDemo caption="A toast appears at the bottom of the screen"}

### Variants

`variant` sets the color and the default icon: `default`, `success`, `warning` and `danger`. The icons come from the application `icons`. To replace an icon pass `icon`, and `icon: null` hides it.

```tsx
showToast('New version available.');
showToast('Item created.', { variant: 'success' });
showToast('Low storage space.', { variant: 'warning' });
showToast('Upload failed.', { variant: 'danger' });
```

::playground{src=notifications/NotificationsVariantsDemo caption="Four variants"}

### Action

`action` adds a button to the toast, typically to undo what just happened. The toast does not close by itself when the button is pressed, so call `dismissNotification` in the handler.

```tsx
const id = showToast('File deleted.', {
  action: {
    label: 'Undo',
    onClick: () => {
      restoreFile();
      dismissNotification(id);
    },
  },
});
```

::playground{src=notifications/NotificationsUndoDemo caption="Undo closes the toast"}

## Notifications

`showNotification` shows a card. Only `content` is required; add `title`, `icon`, `image` and `actions` as needed. Pressing any action runs its handler and closes the card. The default time is 6 seconds.

```tsx
showNotification({
  title: 'Your export is ready',
  content: 'The file is available for 7 days.',
  icon: <Download />,
  actions: [
    { label: 'Download', onClick: download },
    { label: 'Later', onClick: () => {} },
  ],
});
```

::playground{src=notifications/NotificationsCardDemo caption="A card with an icon and two actions"}

`image` is the URL of a picture shown across the top of the card, and `danger: true` on an action makes its button red.

```tsx
showNotification({
  title: 'Release 2.0 is out',
  content: 'New components and performance improvements.',
  image: '/images/release-banner.png',
  actions: [{ label: 'Read changelog', onClick: openChangelog }],
});
```

## Closing

`autoClose: false` keeps a toast or a card until it is closed with the cross or with `dismissNotification(id)`. `duration` sets the time in milliseconds. A persistent toast suits a background process that you close yourself when it finishes.

```tsx
const id = showToast('Syncing in background…', { autoClose: false });
await sync();
dismissNotification(id);
showToast('Sync complete.', { variant: 'success' });
```

::playground{src=notifications/NotificationsPersistentDemo caption="A toast lives while the work is going"}

## Placement

Placement is common for the whole application and is set once on `Application`; there is no per-call position. `toastPlacement` is the edge of the toast stack (`top` or `bottom`, always centered), `notificationPlacement` is the corner of the card stack.

```tsx
<Application toastPlacement="top" notificationPlacement="top-start">
  <App />
</Application>
```

`notificationPlacement` takes `top-start`, `top-end`, `bottom-start` and `bottom-end`, the same form as `placement` in `Popover`. The side is physical, while `start` and `end` follow the writing direction.

## Calling from outside React

Because these are ordinary functions, you can show a message from anywhere, including a store action.

```tsx
export async function uploadFile(file: File) {
  try {
    await api.upload(file);
    showToast('Upload complete.', { variant: 'success' });
  } catch {
    showToast('Upload failed.', { variant: 'danger' });
  }
}
```

If several `Notifications` providers are mounted, new calls go to the one mounted last, and when it unmounts, to the previous one.

## API

### showToast(message, options?)

Shows a toast and returns its `id`.

:::prop[variant]{type="'default' | 'success' | 'warning' | 'danger'" default="'default'"}
Color and default icon.
:::

:::prop[icon]{type="ReactNode"}
Replaces the icon. `null` hides it.
:::

:::prop[action]{type="{ label: string; onClick: (event: MouseEvent<HTMLButtonElement>) => void }"}
A button inside the toast.
:::

:::prop[duration]{type="number" default="4000"}
Time before closing, in milliseconds.
:::

:::prop[autoClose]{type="boolean" default="true"}
Whether to close the toast on its own.
:::

### showNotification(options)

Shows a card and returns its `id`.

:::prop[content*]{type="ReactNode"}
The body of the card.
:::

:::prop[title]{type="string"}
The title.
:::

:::prop[icon]{type="ReactNode"}
An icon next to the title.
:::

:::prop[image]{type="string"}
URL of an image across the top of the card.
:::

:::prop[actions]{type="{ label: string; onClick: (event: MouseEvent<HTMLButtonElement>) => void; danger?: boolean }[]"}
Buttons at the bottom. Pressing one also closes the card.
:::

:::prop[duration]{type="number" default="6000"}
Time before closing, in milliseconds.
:::

:::prop[autoClose]{type="boolean" default="true"}
Whether to close the card on its own.
:::

### dismissNotification(id)

Closes a toast or a card by the `id` that the show function returned.

### Application

:::prop[toastPlacement]{type="'top' | 'bottom'" default="'bottom'"}
The edge of the toast stack.
:::

:::prop[notificationPlacement]{type="'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'" default="'bottom-end'"}
The corner of the card stack.
:::

## Related topics

- [Feedback](/en/feedback) — how to choose between a toast, a message and a dialog
- [Dialogs](/en/components/overlays/dialog) — a modal question when an answer is needed immediately
- [Message](/en/components/feedback/message) — a message that stays on the page
- [Result](/en/components/feedback/result) — the outcome of an operation in a whole block
