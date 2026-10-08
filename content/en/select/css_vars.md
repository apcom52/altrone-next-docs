# Select

The CSS custom properties `Select` reads and that can be overridden.

:::spoiler[How to override variables]
The field is a `TextInput`, so the `--text-input-*` variables are set through the `style` prop of the `Select`. Inline styles beat the per-size classes, which means an override replaces the value for every `size`:

```tsx
<Select
  value={value}
  onChange={setValue}
  options={options}
  style={{ '--text-input-font-size': '18px' } as React.CSSProperties}
/>
```

::playground{src=select/SelectCssVarsDemo caption="A larger font, a larger icon and a wider inset for the icons"}

The list opens in a portal, outside the field, so a variable set through `style` doesn't reach it. Set its height with the `menuHeight` prop, or set `--select-menu-height` on the `Application` root to change it for every select at once.

What can't be overridden:

- **The coarse-pointer font floor.** On touch devices the `m` size raises `--text-input-font-size` to `16px` through a media query to stop the iOS zoom; an inline override replaces it.
- **The disabled look.** `disabled` forces `--box-fill` and `--box-tone-text` to the disabled tokens.
:::

## Internal variables

Defined by `Select` itself.

::::css-vars
:::css-var[--select-menu-height]{kind="size" type="Size"}
Maximum height of the list of options. Default: `250px`
:::
::::

## Global variables

Not defined by `Select`: variables of the `TextInput` and `Box` the field is built on and global design tokens.

::::css-vars
:::css-var[--text-input-font-size]{kind="font" type="Font size"}
Font size of the value. Default: `14px`
:::

:::css-var[--text-input-icon-size]{kind="size" type="Size"}
Size of the chevron and the clear icon. Default: `16px`
:::

:::css-var[--text-input-island-outer-inset]{kind="gap" type="Spacing"}
Space between the field's border and the icons. Default: `var(--space-inset-compact)` (`4px`)
:::

:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Fill of the field. Default: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Color of the value. Default: `var(--text-2)`
:::

:::css-var[--box-tone-translucent]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Hover and focus fill of the `transparent` variant. Default: `var(--interactive-a1)`
:::

:::css-var[--box-padding-x]{kind="gap" type="Spacing"}
Horizontal padding of the field. Default: `var(--space-control-x-m)` (`8px`)
:::

:::css-var[--box-size]{kind="size" type="Size"}
Height of the field. Default: `32px`
:::

:::css-var[--box-radius]{kind="radius" type="Corner radius"}
Corner radius of the field. Default: `var(--radius-pill)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Shadow"}
Shadow under the field. Default: `var(--elevation-flat-shadow)`
:::

:::css-var[--placeholder-text-color]{kind="text" type="Text color" color="var(--placeholder-text-color)"}
Placeholder color. Default: `var(--gray-a9)`
:::

:::css-var[--text-1]{kind="text" type="Text color" color="var(--text-1)"}
Color of the icons. Default: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Color of the “Nothing found” message in the list. Default: `var(--gray-12)`
:::

:::css-var[--disabled-background]{kind="fill" type="Fill color" color="var(--disabled-background)"}
Fill of a disabled field. Default: `var(--gray-3)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Text color of a disabled field. Default: `var(--gray-9)`
:::

:::css-var[--space-content]{kind="gap" type="Spacing"}
Padding of the “Nothing found” message. Default: `var(--gap)` (`8px`)
:::
::::
