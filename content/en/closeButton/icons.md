# Close Button

`CloseButton` draws one icon itself — the `X` cross. The button has an accessible name, so the icon is decorative. The cross is not part of the shared icon set in `Application`, so it is replaced only on a particular button.

:::spoiler[How to replace the icon]
Pass the `icon` prop.

```tsx
import { CircleX } from "lucide-react";

<CloseButton icon={<CircleX />} />
```

::playground{src=closeButton/CloseButtonIconDemo caption="The default cross, CircleX and PanelRightClose"}

The prop accepts any `ReactElement`; a `lucide-react` icon adapts to the button's `size` automatically. If the new icon changes the meaning — for example, it collapses a side panel rather than closes it — change `label` too. For an icon from another library, set the size explicitly — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[icon]{icon="X"}
Signals that the button closes or hides its container
:::
::::
