# Loading

The CSS variables `Loading` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root, so the `style` prop of `Loading` is a reliable way to change them for one spinner: a value there beats the defaults.

```tsx
<Loading
  size={40}
  strokeWidth={3}
  style={{
    "--loading-color": "var(--accent-11)",
    "--loading-track-opacity": "0.32",
  } as React.CSSProperties}
/>
```

::playground{src=loading/LoadingCssVarsDemo caption="An accent color and a more visible track"}

The `color` prop beats `--loading-color`: when it's set, the variable is ignored. The track has no color of its own — it is the stroke color with `--loading-track-opacity` applied. Size, stroke thickness and animation speed aren't configurable through variables: use the `size` and `strokeWidth` props.
:::

## Internal variables

Defined by the component itself.

::::css-vars
:::css-var[--loading-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the arc and the track. Default: `var(--text-2)`
:::

:::css-var[--loading-track-opacity]{kind="opacity" type="Opacity"}
Opacity of the full-circle track behind the arc. Default: `0.16`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
The default for `--loading-color`.
:::
::::
