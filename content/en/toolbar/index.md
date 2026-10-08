# Toolbar

A row of actions — a header for your app, a window or a panel, or a set of tools floating over a canvas. Related actions go into a `Toolbar.Group`, which wraps them in a soft translucent capsule. It is always the same component: the `variant` prop only decides how much background the toolbar has. The toolbar sits wherever you put it in the layout and never positions itself.

## Basic usage

`Toolbar.Action` is a text `Button` that accepts the same props, plus `kbd` for a shortcut hint and `priority` for [overflow](#collapsing-into-the-overflow-menu). `size` is inherited from the `Toolbar`, so one prop scales the whole row. Wrap related actions in a `Toolbar.Group`.

```tsx
<Toolbar>
  <Toolbar.Group>
    <Toolbar.Action label="Bold" icon={<Bold />} showLabel={false} kbd="⌘B" />
    <Toolbar.Action label="Italic" icon={<Italic />} showLabel={false} kbd="⌘I" />
  </Toolbar.Group>
</Toolbar>
```

::playground{src=toolbar/ToolbarBasicDemo caption="Hover an icon to see its tooltip with the shortcut; `selected` marks the active tool"}

## Variants

`variant` sets how much chrome the toolbar carries, from least to most:

- **`plain`** — no toolbar fill and no group material: flat text buttons in a bare row. For a toolbar placed on a surface that already has its own background.
- **`grouped`** — no toolbar fill, but every `Toolbar.Group` is a translucent capsule with a blur and a soft shadow. The strip itself is transparent, so the capsules look like islands on whatever is behind them. `showBackdrop` adds a blurred gradient scrim under them. Positioning over a canvas is up to your code.
- **`solid`** (default) — a blurred background tinted with the accent color and a thin line on the edge facing the content, with the same capsules for groups. A header that looks complete on its own.

```tsx
<Toolbar variant="grouped" showBackdrop>
  ...
</Toolbar>
```

::playground{src=toolbar/ToolbarVariantsDemo caption="The same content in plain, grouped and solid variants"}

## Sections

For a header with a title, search and actions, use `Toolbar.Leading`, `Toolbar.Center` and `Toolbar.Trailing`. With them the toolbar lays out as a three-track grid, so the center stays optically centered no matter how wide the sides get. Without sections the content is a plain left-to-right row.

```tsx
<Toolbar sticky>
  <Toolbar.Leading>
    <Toolbar.Title title="Northwind" />
  </Toolbar.Leading>
  <Toolbar.Center>
    <TextInput value={query} onChange={setQuery} placeholder="Search everything" />
  </Toolbar.Center>
  <Toolbar.Trailing>
    <Toolbar.Group>
      <Toolbar.Action label="New" icon={<Plus />} />
    </Toolbar.Group>
  </Toolbar.Trailing>
</Toolbar>
```

::playground{src=toolbar/ToolbarSectionsDemo caption="An application header: workspace switcher, search and actions"}

`sticky` pins the toolbar to its `edge` of the nearest scroll container.

## Groups and separators

`Toolbar.Group` collects related actions into a capsule; its look follows the toolbar's `variant` (a pill in `grouped` and `solid`, a bare row in `plain`), and the group's own `variant` overrides it for that group only. `weight={1}` makes a group take the remaining space, and `justify` aligns its content.

`Toolbar.Separator` separates content: `variant="space"` (default) is a flexible gap that pushes what follows to the far edge, `variant="line"` is a hairline between neighboring groups.

```tsx
<Toolbar>
  <Toolbar.Group>...</Toolbar.Group>
  <Toolbar.Separator />
  <Toolbar.Group>...</Toolbar.Group>
  <Toolbar.Separator variant="line" />
  <Toolbar.Group>...</Toolbar.Group>
</Toolbar>
```

::playground{src=toolbar/ToolbarGroupsDemo caption="A flexible gap pushes the sharing group to the right, a line sets off the dangerous action"}

## Vertical toolbar

`edge="left"` or `edge="right"` makes the toolbar vertical (`aria-orientation="vertical"`) and stacks the sections top to bottom. It suits tool palettes in editors and graphics apps. A vertical toolbar fills the height of its container.

```tsx
<Toolbar edge="left" variant="grouped">
  <Toolbar.Leading>
    <Toolbar.Group>...</Toolbar.Group>
  </Toolbar.Leading>
</Toolbar>
```

::playground{src=toolbar/ToolbarVerticalDemo caption="A tool palette on the left edge"}

## Collapsing into the overflow menu

Each section (`Toolbar.Leading`, `Toolbar.Center`, `Toolbar.Trailing`, or a flat `Toolbar` without sections) watches its own width — height in a vertical toolbar — and when its direct children no longer fit, folds some of them into an overflow `Dropdown`. `priority` on `Toolbar.Action` or `Toolbar.Group` decides what goes first:

- **`'low'`** collapses first.
- **`'medium'`** (default) collapses only once every `'low'` item in the same row is already hidden.
- **`'high'`** never collapses; if there is still no room, the row overflows visually.
- Within one priority, items collapse in reading order — the leftmost first (the topmost in a vertical toolbar).

A `Toolbar.Group` collapses as one block, and its actions become a flat list in the menu. `Toolbar.Title`, `Toolbar.Logo`, `Toolbar.Separator` and arbitrary nodes have no `priority` and never collapse. Because a group is the unit of collapse, a bare action outside a group leaves the row on its own instead of together with its neighbors.

The trigger sits at the side of the section closest to the toolbar's center, and its chevrons point further inward.

```tsx
<Toolbar.Trailing>
  <Toolbar.Action label="Star" icon={<Star />} showLabel={false} priority="high" />
  <Toolbar.Group priority="medium">...</Toolbar.Group>
  <Toolbar.Action label="Print" icon={<Printer />} showLabel={false} priority="low" />
</Toolbar.Trailing>
```

::playground{src=toolbar/ToolbarOverflowDemo caption="In a narrow container the low-priority actions fold into the menu first"}

## Title

`Toolbar.Title` renders the heading; its font size follows the toolbar `size`. A title too long for the row is truncated with an ellipsis instead of pushing the other groups off the edge.

With `clickable` the title becomes a trigger: a chevron appears next to it, along with a pointer cursor. Wrap it in a `Dropdown` to open a menu — for example, a workspace or project switcher. A static title is just text.

```tsx
<Dropdown content={<Dropdown.Menu>...</Dropdown.Menu>}>
  <Toolbar.Title title="Northwind" clickable />
</Dropdown>
```

::playground{src=toolbar/ToolbarTitleDemo caption="A static title and a title that opens a menu"}

## Logo

`Toolbar.Logo` is a slot for the product mark: put an `<svg>` or `<img>` inside. It is sized to a square that follows the toolbar `size` — from 24px at `mini` to 40px at `xl`. Navigation to the home page is up to you: wrap the logo in a link or give it an `onClick`.

```tsx
<Toolbar.Leading>
  <Toolbar.Logo>
    <BrandMark />
  </Toolbar.Logo>
  <Toolbar.Title title="Northwind" />
</Toolbar.Leading>
```

::playground{src=toolbar/ToolbarLogoDemo caption="A header with a logo, a title and actions with a badge"}

## Sidebar toggle

`Toolbar.SidebarToggleAction` is the one ready-made header action: icon-only by default, with a localized `aria-label`. Its icon and label change with the sidebar state.

Uncontrolled, inside a `Screen` whose `Screen.Sidebar` is also uncontrolled, it reads and toggles the sidebar through the `Screen` context — no state of your own:

```tsx
<Toolbar.SidebarToggleAction />
```

Controlled, pass `collapsed` and wire `onClick` to the same state as `Screen.Sidebar`:

```tsx
<Toolbar.SidebarToggleAction
  collapsed={collapsed}
  onClick={() => setCollapsed((value) => !value)}
/>
```

::playground{src=toolbar/ToolbarSidebarToggleDemo caption="A controlled toggle: the icon follows `collapsed`"}

## Props

### Toolbar

:::prop[variant]{type="'plain' | 'grouped' | 'solid'" default="'solid'"}
How much surface the toolbar carries. See [Variants](#variants).
:::

:::prop[edge]{type="'top' | 'bottom' | 'left' | 'right'" default="'top'"}
The edge the toolbar sits on. `left` and `right` make it vertical.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Height and inner padding of the toolbar. Scales `Toolbar.Title` and `Toolbar.Logo`, and cascades as the default `size` of every `Toolbar.Action` inside.
:::

:::prop[sticky]{type="boolean" default="false"}
Pins the toolbar to its `edge` of the nearest scroll container.
:::

:::prop[showBackdrop]{type="boolean" default="false"}
A blurred gradient scrim behind the toolbar — lifts `grouped` pills off busy content.
:::

:::prop[icons]{type="Partial<ToolbarIconSet>"}
Replaces the icons the toolbar draws itself. See the [Icons](/en/components/layout/toolbar/icons) tab.
:::

:::prop[fixed]{type="boolean" deprecated="true"}
Use `sticky` instead.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
A reference to the root element.
:::

Standard `div` attributes are accepted too, including `role` — override it to get a bar without the toolbar semantics.

### Toolbar.Action

All `Button` props except `variant`.

:::prop[label*]{type="string"}
The button text. With `showLabel={false}` it becomes the accessible name and the tooltip text.
:::

:::prop[icon]{type="ReactElement"}
The icon.
:::

:::prop[showLabel]{type="boolean" default="true"}
`false` shows only the icon; the label moves into a tooltip.
:::

:::prop[kbd]{type="string"}
A shortcut shown in the tooltip next to the label.
:::

:::prop[selected]{type="boolean" default="false"}
The pressed state, for example the current tool.
:::

:::prop[badge]{type="number | string | ReactElement"}
A badge in the corner of the button.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Overrides the size inherited from the toolbar.
:::

:::prop[priority]{type="'high' | 'medium' | 'low'" default="'medium'"}
Collapse priority when the row runs out of room. See [Collapsing into the overflow menu](#collapsing-into-the-overflow-menu).
:::

### Toolbar.Group

:::prop[justify]{type="'start' | 'center' | 'end' | 'between'" default="'start'"}
How the content of the group is distributed along the main axis.
:::

:::prop[weight]{type="number"}
The `flex` value — a group with `weight={1}` takes the remaining space.
:::

:::prop[variant]{type="'plain' | 'grouped' | 'solid'"}
Overrides the toolbar's `variant` for this group: `plain` removes the capsule, `grouped` and `solid` turn it on. Inherited by default.
:::

:::prop[priority]{type="'high' | 'medium' | 'low'" default="'medium'"}
Collapse priority of the whole group as one unit.
:::

### Toolbar.Separator

:::prop[variant]{type="'space' | 'line'" default="'space'"}
`space` is a flexible gap that pushes what follows to the far edge; `line` is a hairline between groups.
:::

### Toolbar.Title

:::prop[title*]{type="string"}
The heading text. Truncated with an ellipsis when the row runs out of room.
:::

:::prop[clickable]{type="boolean" default="false"}
Marks the title as a menu trigger: a chevron next to the text and a pointer cursor.
:::

### Toolbar.Logo

:::prop[children]{type="ReactNode"}
The mark — an `<svg>` or an `<img>`. Sized to a square that follows the toolbar `size`.
:::

### Toolbar.SidebarToggleAction

Takes the `Toolbar.Action` props except `label` and `icon`.

:::prop[collapsed]{type="boolean"}
The sidebar state. Without it the action toggles `Screen.Sidebar` itself through the `Screen` context; with it the action keeps no state and `onClick` is yours.
:::

:::prop[onClick]{type="(event: MouseEvent<HTMLButtonElement>) => void"}
Needed only when `collapsed` is controlled.
:::

:::prop[showLabel]{type="boolean" default="false"}
Shows the text label next to the icon.
:::

### Toolbar.Leading, Toolbar.Center, Toolbar.Trailing

Layout regions without props of their own beyond `div` attributes and `ref`. See [Sections](#sections).

## Related topics

- [Screen](/en/components/layout/screen) — `Screen.Header` is a transparent zone that a `solid` toolbar paints
- [Dropdown](/en/components/overlays/dropdown) — the menu behind a clickable title and the overflow trigger
- [Button](/en/components/controls/button) — the component `Toolbar.Action` is built on
- [Tooltip](/en/components/overlays/tooltip) — the hint shown by icon-only actions
