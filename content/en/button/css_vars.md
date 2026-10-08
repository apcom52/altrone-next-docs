# Button

The CSS variables a `Button` reads and you can override.

:::spoiler[How to override variables]
All of them are set on the button element itself. The reliable way to change one for a single button is the `style` prop — an inline value beats every class-based value, in every theme. A stylesheet rule works too, but it needs a selector more specific than the size and variant classes (for example `.my-button.my-button`).

```tsx
<Button
  label="Roomy gap"
  icon={<Send />}
  style={{ "--button-gap": "16px" } as React.CSSProperties}
/>
```

::playground{src=button/ButtonCssVarsDemo caption="Overriding variables through the style prop"}

Hover and pressed looks of the `text` and selected variants are built from the `--box-tone-*` variables, so override those to keep the interactive states. Overriding `--box-fill` replaces the fill in every state, including hover, pressed and disabled.

What can't be overridden:

- **Horizontal padding.** The button applies it as an inline style. Pick another `size` for a wider or narrower button.
- **The hairline ring of the `default` variant.** It's a fixed shadow, so `--box-border-*` has no effect there; use `variant="text"` or `submit` if you need a custom border.
- **Badge dimensions.** They belong to the badge and follow the button's `size`.
:::

## Internal variables

Defined by the button itself.

::::css-vars
:::css-var[--button-font-size]{kind="font" type="Font size"}
Label font size. Default: `14px`
:::

:::css-var[--button-icon-size]{kind="size" type="Size"}
Icon size. Default: `16px`
:::

:::css-var[--button-gap]{kind="gap" type="Spacing"}
Gap between icon, label and badge. Default: `var(--gap)`
:::
::::

## Global variables

Not defined by the button: variables of the `Box` primitive it is built on, and global design tokens it reads. Changing a token restyles every button at once.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Button background. Default: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Text and icon color. Default: `var(--text-2)`
:::

:::css-var[--box-tone-translucent]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Hover fill of the `text` variant. Default: `var(--interactive-a1)`
:::

:::css-var[--box-tone-translucent-strong]{kind="fill" type="Fill color" color="var(--interactive-a3)"}
Pressed fill of the `text` variant. Default: `var(--interactive-a3)`
:::

:::css-var[--box-tone-pale]{kind="fill" type="Fill color" color="var(--accent-3)"}
Fill of a selected button. Default: `var(--accent-3)`
:::

:::css-var[--box-tone-pale-strong]{kind="fill" type="Fill color" color="var(--accent-5)"}
Hover and pressed fill of a selected button. Default: `var(--accent-5)`
:::

:::css-var[--box-border-color]{kind="border" type="Border color" color="var(--border-a2)"}
Border color of the `submit` and `text` variants. Default: `transparent`
:::

:::css-var[--box-border-width]{kind="size" type="Border width"}
Border width of the `submit` and `text` variants. Default: `0px`
:::

:::css-var[--box-radius]{kind="radius" type="Corner radius"}
Corner radius. Default: `var(--radius-pill)`
:::

:::css-var[--box-size]{kind="size" type="Size"}
Minimum height. Default: `32px`
:::

:::css-var[--box-blur]{kind="blur" type="Backdrop filter"}
Backdrop blur of the `default` variant. Default: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Shadow"}
Shadow. Default: `var(--elevation-flat-shadow)`
:::

:::css-var[--accent-9]{kind="fill" type="Fill color" color="var(--accent-9)"}
Fill of the `submit` variant. Default: `var(--blue-9)`
:::

:::css-var[--accent-3]{kind="fill" type="Fill color" color="var(--accent-3)"}
Fill of a selected button. Default: `var(--blue-3)`
:::

:::css-var[--accent-5]{kind="fill" type="Fill color" color="var(--accent-5)"}
Hover and pressed fill of a selected button. Default: `var(--blue-5)`
:::

:::css-var[--accent-11]{kind="text" type="Text color" color="var(--accent-11)"}
Text color of a selected button. Default: `var(--blue-11)`
:::

:::css-var[--danger-solid-1]{kind="fill" type="Fill color" color="var(--danger-solid-1)"}
Fill of a `submit` button with `danger`. Default: `var(--red-9)`
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Text color of a `danger` button. Default: `var(--red-11)`
:::

:::css-var[--danger-interactive-1]{kind="fill" type="Fill color" color="var(--danger-interactive-1)"}
Fill of a selected `danger` button. Default: `var(--red-3)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Text color of a neutral button. Default: `var(--gray-12)`
:::

:::css-var[--interactive-a1]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Hover fill of a neutral `text` button. Default: `var(--gray-a3)`
:::

:::css-var[--interactive-a3]{kind="fill" type="Fill color" color="var(--interactive-a3)"}
Pressed fill of a neutral `text` button. Default: `var(--gray-a5)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Fill of the `default` variant. Default: `color(display-p3 1 1 1 / 0.7)` in the light theme
:::

:::css-var[--glass-effects]{kind="blur" type="Backdrop filter"}
Backdrop blur of the `default` variant. Default: `blur(64px) saturate(180%)`
:::

:::css-var[--glass-press-effects]{kind="blur" type="Backdrop filter"}
Backdrop blur of the `default` variant while pressed. Default: `blur(64px) saturate(180%) brightness(1.1)`
:::

:::css-var[--disabled-background]{kind="fill" type="Fill color" color="var(--disabled-background)"}
Fill of a disabled `submit` button. Default: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Border color" color="var(--disabled-border)"}
Border color of a disabled `submit` button. Default: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Text color of a disabled button. Default: `var(--gray-9)`
:::

:::css-var[--focus-color]{kind="border" type="Border color" color="var(--focus-color)"}
Focus outline color. Default: `color(display-p3 0 0 0)` in the light theme
:::

:::css-var[--gap]{kind="gap" type="Spacing"}
Default content gap. Default: `8px`
:::

:::css-var[--l-gap]{kind="gap" type="Spacing"}
Horizontal padding. Default: `12px`
:::

:::css-var[--radius-pill]{kind="radius" type="Corner radius"}
Corner radius of a labelled button. Default: `9999px`
:::

:::css-var[--elevation-flat-shadow]{kind="shadow" type="Shadow"}
Resting shadow. Default: `var(--shadow-none)`
:::
::::
