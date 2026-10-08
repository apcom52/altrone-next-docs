# Toolbar

## Icon-only actions for familiar actions

Hide the label only when the icon is universally understood — bold, italic, undo. An action like "Run analysis" needs a text label: an icon alone doesn't say what will happen. When in doubt, keep `showLabel` on.

::::good-bad
:::good
::playground{src=toolbar/ToolbarGuidelineLabelsGoodDemo caption="Familiar icons are bare, the unusual action keeps its label"}
:::

:::bad
::playground{src=toolbar/ToolbarGuidelineLabelsBadDemo caption="Nobody can tell what the last icon does"}
:::
::::

## Group by meaning

Put actions that belong together in one `Toolbar.Group`: undo and redo, share and publish. A group is a promise that its actions are related — don't use it to fill the space. The group is also the unit of [collapse](/en/components/layout/toolbar#collapsing-into-the-overflow-menu), so related actions leave the row together.

::::good-bad
:::good
::playground{src=toolbar/ToolbarGuidelineGroupingGoodDemo caption="History actions and publishing actions are separate groups"}
:::

:::bad
::playground{src=toolbar/ToolbarGuidelineGroupingBadDemo caption="The groups mix unrelated actions"}
:::
::::

## Show shortcuts that work

`kbd` is a promise: someone who presses `⌘S` expects the document to be saved. Don't show shortcuts you haven't registered.

## Keep the main action visible

Give `priority="high"` to the action the screen exists for, and `priority="low"` to the occasional ones — when the row runs out of room, those fold into the menu first. Don't mark everything `high`: such a row stops collapsing and spills out of its container.

## A toolbar is not navigation

`Toolbar.Action` performs an action. To move between pages, use a navigation component — mixing navigation and actions in one panel is ambiguous.

## Accessibility

- The root has `role="toolbar"` and `aria-orientation` that follows `edge`; override `role` if the bar is just a layout row.
- An icon-only `Toolbar.Action` needs a `label`: it becomes the accessible name and the tooltip text. `label` is required.
- `Toolbar.SidebarToggleAction` has a localized `aria-label` that follows the sidebar state.
- A `clickable` title only changes how it looks; the behavior comes from the component it is wrapped in, such as `Dropdown`.
