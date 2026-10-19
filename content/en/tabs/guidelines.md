# Tabs

## Keep labels short

A tab is the name of a view, not a description. One or two words are read at a glance, and the strip stays compact and fits a narrow screen.

::::good-bad
:::good
::playground{src=tabs/TabsGuidelineLabelsGoodDemo caption="One word per tab"}
:::

:::bad
::playground{src=tabs/TabsGuidelineLabelsBadDemo caption="Long labels bloat the strip"}
:::
::::

## Don't mix tabs with and without icons

Either every tab has an icon or none does. An icon on only some tabs looks unfinished and breaks the rhythm of the strip.

::::good-bad
:::good
::playground{src=tabs/TabsGuidelineIconsGoodDemo caption="An icon on every tab"}
:::

:::bad
::playground{src=tabs/TabsGuidelineIconsBadDemo caption="An icon on only one tab"}
:::
::::

## Use for equal views

Tabs switch between views of the same content, and all of them should be available at once. They are not for the steps of a process or for moving between sections of an application — use `NavigationList` or `BottomNavigation` for that. The strip doesn't scroll, so many tabs won't fit on a narrow screen — group the views differently.

## Disable only what is temporarily unavailable

`disabled` keeps a tab visible but inactive — an honest signal that the view exists but isn't available yet. If a tab will never be available, don't show it.

## Accessibility

- The strip gets `role="tablist"`, each tab gets `role="tab"` and `aria-selected`.
- Only the selected tab stays in the tab order; arrow keys and `Home`/`End` move focus between the rest.
- An icon-only tab needs a `label` — it becomes its `aria-label`.
- `Tabs` draws only the strip. To tie a tab to its panel, give the panel `role="tabpanel"` and the tab an `id` and `aria-controls`.
- A tab's state is not conveyed by color alone: the selected tab gets a backdrop.
