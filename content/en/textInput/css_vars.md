# TextInput

The CSS custom properties `TextInput` reads and that can be overridden.

:::spoiler[How to override variables]
The `--text-input-*` variables are declared on the field's root element, so set them through the `style` prop of that `TextInput`. Inline styles beat the per-size classes, which means an override replaces the value for every `size`:

```tsx
<TextInput
  value={value}
  onChange={setValue}
  style={{ '--text-input-font-size': '18px' } as React.CSSProperties}
/>
```

::playground{src=textInput/TextInputCssVarsDemo caption="A larger font, a larger icon and a wider inset for the islands"}

What can't be overridden:

- **The coarse-pointer font floor.** On touch devices the `m` size raises `--text-input-font-size` to `16px` through a media query to stop the iOS zoom; an inline override replaces it.
- **The disabled look.** `disabled` forces `--box-fill` and `--box-tone-text` to the disabled tokens.
:::

## Internal variables

Defined by `TextInput` itself.

::::css-vars
:::css-var[--text-input-font-size]{kind="font" type="Font size"}
Font size of the value and of the text islands. Default: `14px`
:::

:::css-var[--text-input-icon-size]{kind="size" type="Size"}
Size of the icon in `IconIsland`. Default: `16px`
:::

:::css-var[--text-input-island-outer-inset]{kind="gap" type="Spacing"}
Space between the field's border and the first or last island. Default: `var(--space-inset-compact)` (`4px`)
:::
::::

## Global variables

Not defined by `TextInput`: variables of the `Box` primitive it is built on and global design tokens.

::::css-vars
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
Color of icons, text islands and the counter. Default: `var(--gray-11)`
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Counter color past the limit. Default: `var(--red-11)`
:::

:::css-var[--disabled-background]{kind="fill" type="Fill color" color="var(--disabled-background)"}
Fill of a disabled field. Default: `var(--gray-3)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Text color of a disabled field. Default: `var(--gray-9)`
:::

:::css-var[--space-inline]{kind="gap" type="Spacing"}
Space between the input and the islands. Default: `var(--s-gap)` (`6px`)
:::

:::css-var[--space-inset-compact]{kind="gap" type="Spacing"}
Space between islands on one side. Default: `var(--xs-gap)` (`4px`)
:::
::::
