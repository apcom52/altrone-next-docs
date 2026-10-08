# Popover

The CSS custom properties `Popover` reads and that can be overridden.

:::spoiler[How to override variables]
Unlike `Drawer`/`Modal`, the `className` and `style` passed to `Popover` land directly on the floating panel itself — it's the very `Box` that sets the material, tone and elevation. That means `style` can override both `Popover`'s own variables and the `Box` variables the panel is built on:

```tsx
<Popover
  content={<Text>...</Text>}
  style={{ "--popover-radius": "4px", "--box-fill": "var(--teal-3)" } as React.CSSProperties}
>
  <Button label="Open popover" />
</Popover>
```

::playground{src=popover/PopoverCssVarsDemo caption="Overriding --popover-radius and --box-fill via the style prop"}

What can't be overridden:

- **The `plate` material's hairline and layered shadow.** It's a fixed `box-shadow` recipe (a border ring plus a contact and ambient shadow), not a single variable — `--box-elevation-shadow` is only its last term. To fully replace the panel's shadow, override `box-shadow` itself via `className`.
- **The panel's position** (`left`/`top`/`transform-origin`) — Floating UI computes it on every render and overrides it automatically.
:::

## Internal variables

Defined by `Popover` itself.

::::css-vars
:::css-var[--popover-radius]{kind="radius" type="Corner radius"}
Panel corner radius, passed to `Box` as `radius`. Default: `24px`
:::
::::

## Global variables

Not defined by `Popover` itself: the variables of the `Box` the panel is built on (the `plate` material, `neutral` tone, `overlay` elevation), and the global design tokens it reads directly.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Panel fill (the `plate` material). Default: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Default text color for the content (the `neutral` tone). Default: `var(--text-2)`
:::

:::css-var[--box-blur]{kind="blur" type="Backdrop filter"}
Blur behind the panel. Default: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Shadow"}
The outer shadow layer of the panel (the `overlay` elevation) — stacks on top of the `plate` material's fixed hairline. Default: `var(--elevation-overlay-shadow)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="color(display-p3 1 1 1 / 0.7)"}
Fill of the `plate` material `--box-fill` resolves to. Default (light theme): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Backdrop filter"}
Blur of the `plate` material `--box-blur` resolves to. Default: `blur(64px) saturate(180%)`
:::

:::css-var[--elevation-overlay-shadow]{kind="shadow" type="Shadow"}
Shadow of the `overlay` elevation role `--box-elevation-shadow` resolves to. Default: `var(--shadow-1), var(--shadow-4)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Base text color `--box-tone-text` and the panel title resolve to. Default: `var(--gray-12)`
:::

:::css-var[--text-size-4]{kind="font" type="Font size"}
Font size of the panel's content and title. Default: `14px`
:::

:::css-var[--line-height-4]{kind="font" type="Font size"}
Line height of the panel's content and title. Default: `20px`
:::

:::css-var[--space-stack]{kind="gap" type="Spacing"}
Gap between the header and the panel's content. Default: `var(--gap)`
:::

:::css-var[--level-toast]{kind="size" type="Z-index"}
The z-index the panel switches to automatically when its trigger sits inside `Notifications` — otherwise the panel would end up beneath the toast. Default: `1090`
:::
::::
