# Divider

## Separate groups, not every item

A divider marks the boundary between groups. When it sits between every item, the boundaries stop meaning anything and the list turns into stripes — spacing alone separates neighboring items well enough.

::::good-bad
:::good
::playground{src=divider/DividerGuidelineGroupsGoodDemo caption="One line between contact details and security"}
:::

:::bad
::playground{src=divider/DividerGuidelineGroupsBadDemo caption="A line after every item hides the grouping"}
:::
::::

## Keep it between content

A divider separates two things. A line before the first item or after the last one separates nothing and only adds noise at the edges of the container.

::::good-bad
:::good
::playground{src=divider/DividerGuidelineEdgesGoodDemo caption="The line stands only between the sections"}
:::

:::bad
::playground{src=divider/DividerGuidelineEdgesBadDemo caption="Extra lines at the top and the bottom"}
:::
::::

## Use the separator of the container when it has one

`Toolbar` has its own `Toolbar.Separator variant="line"` that fits its height and spacing. Use `Divider` where the container offers nothing of its own: in a `Flex` row, in a `Dropdown.Menu`, between page sections.

## Accessibility

- `Divider` renders `<hr>`, so screen readers announce it as a separator; don't add `role="separator"` yourself.
- A vertical divider gets `aria-orientation="vertical"` automatically.
- A divider doesn't replace a heading: if a group needs a name, give it one in text.
