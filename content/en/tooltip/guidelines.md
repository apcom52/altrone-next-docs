# Tooltip

## A tooltip explains, it doesn't gate

If the interface is unclear without it, that's a problem with the interface, not a gap in explanations. A tooltip should help an attentive user go a little faster — the icon and label it's attached to still need to stand on their own.

::::good-bad
:::good
::playground{src=tooltip/TooltipGuidelineIconGoodDemo caption="A recognizable icon — the tooltip reinforces it"}
:::

:::bad
::playground{src=tooltip/TooltipGuidelineIconBadDemo caption="An unrelated icon — the tooltip is the only way to know what it does"}
:::
::::

See [Button](/en/components/controls/button)'s guideline on icon-only buttons for the same trade-off from the trigger's side.

## Use `kbd` for keyboard shortcuts

Showing a shortcut right inside the tooltip is the best place to teach it — the user sees it exactly when they're thinking about the action. Put it in `kbd`, not in `content`: `kbd` renders as its own badge, so it stays legible instead of running into the sentence.

::::good-bad
:::good
::playground{src=tooltip/TooltipGuidelineKbdGoodDemo caption="The shortcut is its own badge"}
:::

:::bad
::playground{src=tooltip/TooltipGuidelineKbdBadDemo caption="The shortcut is buried in a sentence"}
:::
::::

## Don't hide required information in a tooltip

A tooltip only appears on hover or focus — on a touch device, or for a screen-reader user tabbing past a disabled control, it may never appear at all. Anything the user *must* know to proceed belongs in visible text, not behind a hover.

::::good-bad
:::good
::playground{src=tooltip/TooltipGuidelineRequiredGoodDemo caption="The reason is always visible"}
:::

:::bad
::playground{src=tooltip/TooltipGuidelineRequiredBadDemo caption="The reason only exists on hover"}
:::
::::

## Accessibility

- `Tooltip` sets `aria-describedby` on the trigger automatically — it supplements the trigger's accessible name, it doesn't replace it. An icon-only trigger still needs its own `aria-label` (or a `label` prop that becomes one, as on `Button`).
- A disabled native element fires no mouse or focus events, so a `Tooltip` wrapped directly around it never opens — mark the trigger with `aria-disabled="true"` and keep it focusable instead.
- `Escape` and moving focus or the pointer away both close the tooltip; there's nothing extra to wire up.

See [Accessibility](/en/foundations/accessibility) for the library-wide rules.
