# Scrollable

CSS variables that `Scrollable`'s scrollbar reads and that can be overridden.

:::spoiler[How to override variables]
The bar is drawn by the OverlayScrollbars library, and the `--os-*` variables are declared right on the `.os-scrollbar` element inside the wrapper. So the `style` prop on `Scrollable` won't override them: a value inherited from the wrapper loses to the declaration on the element itself. Override them with a CSS rule that targets `.os-scrollbar` inside the wrapper you need:

```css
.thick-scrollbar .os-scrollbar {
  --os-size: 12px;
  --os-handle-bg: var(--accent-9);
}
```

```tsx
<Scrollable className="thick-scrollbar">...</Scrollable>
```

::playground{src=scrollable/ScrollableCssVarsDemo caption="A thick bar with an accent-colored handle"}

What you **shouldn't** override: the area's size and the scroll mode itself — those are set by props (`maxHeight`, `overflowX`, `overflowY`), not variables.
:::

## Internal variables

Defined by `Scrollable` itself (the scrollbar theme file). Names prefixed with `--os-` belong to OverlayScrollbars.

::::css-vars
:::css-var[--os-size]{kind="gap" type="Size"}
Bar thickness. Default: `6px`
:::

:::css-var[--os-handle-bg]{kind="fill" type="Fill color" color="var(--solid-2)"}
Handle color at rest. Default: `var(--solid-2)`
:::

:::css-var[--os-handle-bg-hover]{kind="fill" type="Fill color" color="var(--text-1)"}
Handle color on hover. Default: `var(--text-1)`
:::

:::css-var[--os-handle-bg-active]{kind="fill" type="Fill color" color="var(--text-2)"}
Handle color while dragging. Default: `var(--text-2)`
:::

:::css-var[--os-track-bg-hover]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Track fill on hover. Default: `var(--interactive-a1)`
:::

:::css-var[--os-track-bg-active]{kind="fill" type="Fill color" color="var(--interactive-a2)"}
Track fill while the handle is dragged. Default: `var(--interactive-a2)`
:::

:::css-var[--os-handle-border-radius]{kind="radius" type="Corner radius"}
Handle corner radius. Default: `4px`
:::

:::css-var[--os-track-border-radius]{kind="radius" type="Corner radius"}
Track corner radius. Default: `3px`
:::

:::css-var[--os-handle-min-size]{kind="size" type="Size"}
Minimum handle length. Default: `32px`
:::
::::

## Global variables

Not defined by `Scrollable` itself: the design tokens the bar's colors are based on. Changing a token affects not only `Scrollable` but every other component that uses it.

::::css-vars
:::css-var[--solid-2]{kind="fill" type="Fill color" color="var(--solid-2)"}
Token that `--os-handle-bg` is based on. Default: `var(--gray-10)`
:::

:::css-var[--text-1]{kind="text" type="Text color" color="var(--text-1)"}
Token that `--os-handle-bg-hover` is based on. Default: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Token that `--os-handle-bg-active` is based on. Default: `var(--gray-12)`
:::

:::css-var[--interactive-a1]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Token that `--os-track-bg-hover` is based on. Default: `var(--gray-a3)`
:::

:::css-var[--interactive-a2]{kind="fill" type="Fill color" color="var(--interactive-a2)"}
Token that `--os-track-bg-active` is based on. Default: `var(--gray-a4)`
:::
::::
