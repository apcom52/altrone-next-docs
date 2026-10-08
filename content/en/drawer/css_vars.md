# Drawer

The CSS custom properties `Drawer` reads and that can be overridden.

:::spoiler[How to override variables]
Most `HTMLAttributes` passed to `Drawer` (`className`, `style`, `data-*`, ...) land on the panel's outer fixed-position wrapper, not the visible card itself — but `Drawer`'s own variables (below, under "Internal variables") are read by the header, content and footer, which sit deeper than that wrapper and don't redeclare them themselves, so inheritance reaches them fine. The reliable way to change one is the `style` prop:

```tsx
<Drawer
  title="Custom title color"
  content={<Text>...</Text>}
  style={{ "--drawer-header-text-color": "var(--accent-9)" } as React.CSSProperties}
/>
```

::playground{src=drawer/DrawerCssVarsDemo caption="Overriding --drawer-header-text-color via the style prop"}

What can't be overridden through `style`/`className`:

- **The panel's fill, text color, blur and shadow** (`--box-fill`, `--box-tone-text`, `--box-blur`, `--box-elevation-shadow`). `Drawer` inherits these from the `Box` its visible card is built on — but the material (`glass`), tone (`neutral`) and elevation (`overlay`) are fixed by `Drawer` itself and set by classes directly on that element, so a value inherited from the outer wrapper never reaches it. To change these colors, override the underlying global token instead (`--glass-background-color`, `--text-2`, and so on) — that recolors the panel everywhere it's used.
- **The backdrop color** (`--sheet-backdrop-color`) technically sits in the same subtree as the panel and does inherit from the wrapper, but overriding it for a single instance rarely makes sense — the backdrop is shared across every overlay in the library. Change `--color-overlay-scrim` globally instead.
:::

## Internal variables

Defined by `Drawer` itself.

::::css-vars
:::css-var[--drawer-header-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the panel title. Default: `var(--text-2)`
:::

:::css-var[--drawer-padding]{kind="gap" type="Spacing"}
Outer padding of the panel — around the header, content and footer. Default: `var(--space-content)`
:::

:::css-var[--drawer-content-padding]{kind="gap" type="Spacing"}
Padding between the header/footer and the scrollable content. Default: `var(--space-content)`
:::
::::

## Global variables

Not defined by `Drawer` itself: the variables of the `Box` and `Sheet` primitives the panel is built on, and the global design tokens it reads. Changing a token affects every other component that reads it too, not just `Drawer`.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Panel fill (the `glass` material). Default: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Default text color for the panel's content (the `neutral` tone). Default: `var(--text-2)`
:::

:::css-var[--box-blur]{kind="blur" type="Backdrop filter"}
Blur behind the panel. Default: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Shadow"}
Panel shadow (the `overlay` elevation role). Default: `var(--elevation-overlay-shadow)`
:::

:::css-var[--sheet-backdrop-color]{kind="fill" type="Fill color" color="var(--color-overlay-scrim)"}
Color of the dimmed backdrop behind the panel. Default: `var(--color-overlay-scrim)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="color(display-p3 1 1 1 / 0.7)"}
Fill of the `glass` material `--box-fill` resolves to. Default (light theme): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Backdrop filter"}
Blur of the `glass` material `--box-blur` resolves to. Default: `blur(64px) saturate(180%)`
:::

:::css-var[--elevation-overlay-shadow]{kind="shadow" type="Shadow"}
Shadow of the `overlay` elevation role `--box-elevation-shadow` resolves to. Default: `var(--shadow-1), var(--shadow-4)`
:::

:::css-var[--color-overlay-scrim]{kind="fill" type="Fill color" color="var(--black-a3)"}
Backdrop color shared by every overlay in the library, which `--sheet-backdrop-color` resolves to. Default (light theme): `var(--black-a3)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Base text color `--drawer-header-text-color` and `--box-tone-text` resolve to. Default: `var(--gray-12)`
:::

:::css-var[--text-size-4]{kind="font" type="Font size"}
Font size of the panel title. Default: `14px`
:::

:::css-var[--line-height-4]{kind="font" type="Font size"}
Line height of the panel title. Default: `20px`
:::

:::css-var[--gap]{kind="gap" type="Spacing"}
Gap between the header, content and footer inside the panel. Default: `8px`
:::

:::css-var[--space-content]{kind="gap" type="Spacing"}
Content-container padding token `--drawer-padding` and `--drawer-content-padding` default to. Default: `var(--gap)`
:::
::::
