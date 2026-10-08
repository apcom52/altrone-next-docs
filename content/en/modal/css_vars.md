# Modal

CSS variables that `Modal` reads and that can be overridden.

:::spoiler[How to override variables]
`className`, `style`, and the other `HTMLAttributes` passed to `Modal` land on the dialog's outer positioned wrapper, not on the visible card itself. `Modal`'s own variables (below, under "Internal variables") are read by the title, content, and footer, which sit deeper and don't override them on their own, so inheritance reaches them. The reliable way to change one is the `style` prop:

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Custom title color"
  content={<Text>...</Text>}
  style={{ "--modal-header-text-color": "var(--accent-9)" } as React.CSSProperties}
/>
```

::playground{src=modal/ModalCssVarsDemo caption="Overriding --modal-header-text-color through the style prop"}

What you **can't** override through `style`/`className`:

- **The dialog's fill, text color, blur, and shadow** (`--box-fill`, `--box-tone-text`, `--box-blur`, `--box-elevation-shadow`). `Modal` inherits these variables from the `Box` the visible card is built on, but the material (`glass`), tone (`neutral`), and level (`modal`) are fixed by `Modal` itself through classes set right on that element, so a value from the outer wrapper never reaches it. To change these colors, override the global token itself (`--glass-background-color`, `--text-2`, and so on): that recolors the dialog everywhere it's used.
- **The backdrop color** (`--sheet-backdrop-color`) is inherited from the wrapper, but changing it for a single instance makes no sense: the backdrop is the same for all of the library's overlays, so change `--color-overlay-scrim` globally.
:::

## Internal variables

Defined by `Modal` itself.

::::css-vars
:::css-var[--modal-header-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Dialog title color. Default: `var(--text-2)`
:::

:::css-var[--modal-padding]{kind="gap" type="Spacing"}
Padding around the header, content, and footer; the close button's position is measured from it too. Default: `var(--space-content)`
:::
::::

## Global variables

Not defined by `Modal` itself: the variables of the `Box` and `Sheet` primitives the dialog is built on, and the global design tokens it reads. Changing a token affects not only `Modal` but every other component that uses it.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Dialog fill (the `glass` material). Default: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Default text color of the dialog content (the `neutral` tone). Default: `var(--text-2)`
:::

:::css-var[--box-blur]{kind="blur" type="Backdrop filter"}
Blur of the background behind the dialog. Default: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Shadow"}
Dialog shadow (the `modal` level). Default: `var(--elevation-modal-shadow)`
:::

:::css-var[--sheet-backdrop-color]{kind="fill" type="Fill color" color="var(--color-overlay-scrim)"}
Color of the dimmed backdrop behind the dialog. Default: `var(--color-overlay-scrim)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="color(display-p3 1 1 1 / 0.7)"}
Fill of the `glass` material that `--box-fill` is based on. Default (light theme): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Backdrop filter"}
Blur of the `glass` material that `--box-blur` is based on. Default: `blur(64px) saturate(180%)`
:::

:::css-var[--elevation-modal-shadow]{kind="shadow" type="Shadow"}
Shadow of the `modal` level that `--box-elevation-shadow` is based on. Default: `var(--shadow-1), var(--shadow-5)`
:::

:::css-var[--color-overlay-scrim]{kind="fill" type="Fill color" color="var(--black-a3)"}
Backdrop color shared by all of the library's overlays, which `--sheet-backdrop-color` is based on. Default (light theme): `var(--black-a3)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Base text color that `--modal-header-text-color` and `--box-tone-text` are based on. Default: `var(--gray-12)`
:::

:::css-var[--text-size-5]{kind="font" type="Font size"}
Dialog title font size. Default: `16px`
:::

:::css-var[--line-height-8]{kind="font" type="Font size"}
Dialog title line height. Default: `30px`
:::

:::css-var[--text-size-4]{kind="font" type="Font size"}
Dialog content font size. Default: `14px`
:::

:::css-var[--line-height-4]{kind="font" type="Font size"}
Dialog content line height. Default: `20px`
:::

:::css-var[--l-gap]{kind="gap" type="Spacing"}
Space between the title, content, and footer. Default: `12px`
:::

:::css-var[--gap]{kind="gap" type="Spacing"}
Space between the footer buttons. Default: `8px`
:::

:::css-var[--space-content]{kind="gap" type="Spacing"}
Padding token for content containers that `--modal-padding` is based on by default. Default: `var(--gap)`
:::
::::
