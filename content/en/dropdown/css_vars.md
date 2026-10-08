# Dropdown

The CSS custom properties `Dropdown` reads and that can be overridden.

:::spoiler[How to override variables]
The internal variables below are set on each `Dropdown.Action`/`Dropdown.Checkbox`/`Dropdown.RadioItem` element, so `style` is the reliable way to change one for a single item:

```tsx
<Dropdown.Action
  label="Highlighted item"
  icon={<Star />}
  style={{ "--dropdown-background-color": "var(--accent-3)", "--dropdown-text-color": "var(--accent-11)" } as React.CSSProperties}
/>
```

::playground{src=dropdown/DropdownCssVarsDemo caption="Overriding a single item's colors through the style prop"}

What can't be overridden:

- **The floating panel's fill, blur, shadow and corner radius.** The panel is a `Popover` under the hood — see the [Popover](/en/components/overlays/popover) CSS variables page for those.
- **The menu's corner radius.** It derives automatically from the ambient `--radius-outer` via the concentric radius formula — see [Box](/en/components/layout/box)'s "Radius scope" — there's no single `--dropdown-radius` to set directly.
- **`Dropdown.ChildMenu`'s chevron and the checkmark of `Dropdown.Checkbox`/`Dropdown.RadioItem`.** These are fixed icons, not exposed through a prop or a variable.
:::

## Internal variables

Defined by `Dropdown` itself.

::::css-vars
:::css-var[--dropdown-background-color]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Menu item background, idle and hover. Default: `var(--interactive-a1)`
:::

:::css-var[--dropdown-press-background-color]{kind="fill" type="Fill color" color="var(--interactive-a2)"}
Menu item background while pressed. Default: `var(--interactive-a2)`
:::

:::css-var[--dropdown-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Menu item label color. Default: `var(--text-2)`
:::

:::css-var[--dropdown-hint-text-color]{kind="text" type="Text color" color="var(--solid-1)"}
`hintText` color. Default: `var(--solid-1)`
:::

:::css-var[--dropdown-opened-background-color]{kind="fill" type="Fill color" color="var(--interactive-a3)"}
Background of a `Dropdown.ChildMenu` item while its submenu is open. Default: `var(--interactive-a3)`
:::

:::css-var[--dropdown-action-height]{kind="size" type="Size"}
Height of a menu item row. Default: `32px`
:::

:::css-var[--dropdown-action-padding-x]{kind="gap" type="Spacing"}
Horizontal padding of a menu item row. Default: `var(--space-content)`
:::

:::css-var[--dropdown-action-font-size]{kind="font" type="Font size"}
Menu item label font size. Default: `var(--text-size-4)`
:::

:::css-var[--dropdown-action-icon-size]{kind="size" type="Size"}
Menu item icon size. Default: `18px`
:::

:::css-var[--dropdown-menu-max-height]{kind="size" type="Size"}
Caps `Dropdown.Menu`'s height before it scrolls. Default: `320px`
:::
::::

## Global variables

Not defined by `Dropdown` itself: the global design tokens its menu content reads directly. Changing one restyles every dropdown menu at once.

::::css-vars
:::css-var[--space-inline]{kind="gap" type="Spacing"}
Gap between an item's icon, label and hint/badge. Default: `var(--s-gap)`
:::

:::css-var[--danger-interactive-a1]{kind="fill" type="Fill color" color="var(--danger-interactive-a1)"}
Background of a `danger` item, idle and hover. Default: the danger scale's 3rd alpha step (light theme).
:::

:::css-var[--danger-interactive-a2]{kind="fill" type="Fill color" color="var(--danger-interactive-a2)"}
Background of a `danger` item while pressed. Default: the danger scale's 4th alpha step (light theme).
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Text color of a `danger` item. Default: `var(--red-11)`
:::

:::css-var[--accent-12]{kind="text" type="Text color" color="var(--accent-12)"}
`Dropdown.RadioList`'s label text color. Default: `var(--blue-12)`
:::

:::css-var[--text-size-3]{kind="font" type="Font size"}
Font size of `hintText` and of a `Dropdown.RadioList` label. Default: `12px`
:::

:::css-var[--line-height-3]{kind="font" type="Font size"}
Line height of `hintText`. Default: `16px`
:::

:::css-var[--text-weight-medium]{kind="font" type="Font weight"}
Font weight of a menu item's label. Default: `500`
:::

:::css-var[--text-weight-bold]{kind="font" type="Font weight"}
Font weight of a `Dropdown.RadioList` label. Default: `600`
:::

:::css-var[--font-family-code]{kind="font" type="Font family"}
Font family of `hintText`. Default: `'JetBrains Mono Variable', monospace`
:::
::::
