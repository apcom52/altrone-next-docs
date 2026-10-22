# Close Button

`CloseButton` draws one icon itself — the `X` cross. The button has an accessible name, so the icon is decorative. The cross comes from the shared `dismiss` icon role, so it can be replaced on one button or everywhere at once.

:::spoiler[How to replace the icon]
To replace the cross on one button, pass the `icon` prop.

```tsx
import { CircleX } from "lucide-react";

<CloseButton icon={<CircleX />} />
```

::playground{src=closeButton/CloseButtonIconDemo caption="The default cross, CircleX and PanelRightClose"}

The prop accepts any `ReactElement`; a `lucide-react` icon adapts to the button's `size` automatically. If the new icon changes the meaning — for example, it collapses a side panel rather than closes it — change `label` too. To replace the cross everywhere at once, set the `dismiss` role in the `icons` prop of [Application](/en/components/layout/application). Every `CloseButton` without its own `icon` picks it up, including the ones built into `Modal`, `Drawer`, `Popover`, `Message`, toasts and notifications. `icon` on a particular button still wins.

```tsx
import { CircleX } from "lucide-react";

<Application icons={{ dismiss: <CircleX /> }}>
  <App />
</Application>
```

For an icon from another library, set the size explicitly — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[icon]{icon="X"}
Signals that the button closes or hides its container. For every close button at once — the `dismiss` role in `Application`
:::
::::
