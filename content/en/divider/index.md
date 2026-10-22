# Divider

`Divider` is a thin line that separates groups of content: sections of a page, groups of buttons in a row, groups of items in a menu. It renders a native `<hr>`, which already carries the `separator` role, so assistive technology announces the boundary without extra attributes.

```tsx
import { Divider } from 'altrone-ui';
```

## Separating sections

By default the line is horizontal: it takes the width of the container, slightly inset from its edges, and keeps a small vertical margin.

```tsx
<Flex orientation="vertical" gap="m">
  <Text block>Profile</Text>
  <Divider />
  <Text block>Security</Text>
</Flex>
```

::playground{src=divider/DividerBasicDemo caption="Three sections separated by horizontal lines"}

:::note
`Flex` resets the margins of its children by default, so inside it the spacing around the line comes from the `gap` of `Flex`, not from `Divider` itself.
:::

## Vertical divider

`orientation="vertical"` stands the line up to separate items in a row. It stretches to the height of the row, so it needs a parent with a flex layout, and gets `aria-orientation="vertical"`.

```tsx
<Flex gap="m" align="center">
  <Button label="Cut" />
  <Button label="Copy" />
  <Divider orientation="vertical" />
  <Button label="Paste" />
</Flex>
```

::playground{src=divider/DividerVerticalDemo caption="Groups of buttons in a row"}

## In a menu

Inside `Dropdown.Menu`, a `Divider` splits the items into groups — for example, to set a destructive action apart from the rest.

```tsx
<Dropdown.Menu>
  <Dropdown.Action label="Rename" />
  <Dropdown.Action label="Duplicate" />
  <Divider />
  <Dropdown.Action label="Archive" />
  <Dropdown.Action label="Delete" danger />
</Dropdown.Menu>
```

::playground{src=divider/DividerMenuDemo caption="Two groups of actions in a menu"}

## Props

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Direction of the line. `vertical` stretches it to the height of the flex row and sets `aria-orientation="vertical"`.
:::

:::prop[ref]{type="Ref<HTMLHRElement>"}
Reference to the `<hr>` element.
:::

Other `<hr>` attributes, including `className`, `style` and `aria-*`, are passed to the element. `Divider` takes no children.

## Related topics

- [Flex](/en/components/layout/flex) — the layout a divider usually sits in
- [Dropdown](/en/components/overlays/dropdown) — menus split into groups with a divider
- [Toolbar](/en/components/layout/toolbar) — has its own `Toolbar.Separator variant="line"` for groups of actions
- [Layout](/en/foundations/layout) — spacing and structure of a page
