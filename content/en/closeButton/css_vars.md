# Close Button

The CSS variables a `CloseButton` reads and you can override. It has no variables of its own: everything comes from the `Button` and `Box` it is built on and from global design tokens.

:::spoiler[How to override variables]
The button and box variables are set on the button element itself, so the reliable way to change one for a single close button is the `style` prop — an inline value beats every class-based value, in every theme.

```tsx
<CloseButton
  style={{
    "--box-fill": "var(--danger-interactive-1)",
    "--box-tone-text": "var(--danger-text-1)",
  } as React.CSSProperties}
/>
```

::playground{src=closeButton/CloseButtonCssVarsDemo caption="Default, a tinted fill, a rounded square, a bigger button with a smaller icon"}

`--box-size` sets both the width and the height — the button stays square. Hover and press keep working after `--box-fill` is overridden: they brighten the fill instead of swapping it. Overriding `--box-tone-text` replaces the icon color in the disabled state too.

What can't be overridden:

- **The hairline ring.** It's a fixed shadow, so `--box-border-*` has no effect.
- **Padding.** The button is a circle with no padding; the icon is centered by its size.
:::

## Global variables

Not defined by the close button: variables of `Button` and the `Box` primitive, and global design tokens they read. Changing a token restyles every close button at once.

::::css-vars
:::css-var[--button-icon-size]{kind="size" type="Size"}
Icon size. Default: `18px`
:::

:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Button background. Default: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Icon color. Default: `var(--text-2)`
:::

:::css-var[--box-radius]{kind="radius" type="Corner radius"}
Corner radius. Default: `50%`
:::

:::css-var[--box-size]{kind="size" type="Size"}
Width and height. Default: `var(--base-control-size)`
:::

:::css-var[--box-blur]{kind="blur" type="Backdrop filter"}
Backdrop blur. Default: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Shadow"}
Shadow. Default: `var(--elevation-flat-shadow)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Button background. Default: `color(display-p3 1 1 1 / 0.7)` in the light theme
:::

:::css-var[--glass-effects]{kind="blur" type="Backdrop filter"}
Backdrop blur. Default: `blur(64px) saturate(180%)` in the light theme
:::

:::css-var[--glass-press-effects]{kind="blur" type="Backdrop filter"}
Backdrop blur while pressed. Default: `blur(64px) saturate(180%) brightness(1.1)` in the light theme
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Icon color. Default: `var(--gray-12)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Icon color of a disabled button. Default: `var(--gray-9)`
:::

:::css-var[--focus-color]{kind="border" type="Border color" color="var(--focus-color)"}
Focus outline color. Default: `color(display-p3 0 0 0)` in the light theme
:::

:::css-var[--base-control-size]{kind="size" type="Size"}
Button size at `size="m"`. Default: `32px`
:::

:::css-var[--elevation-flat-shadow]{kind="shadow" type="Shadow"}
Resting shadow. Default: `var(--shadow-none)`
:::
::::
