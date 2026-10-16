# Tags

CSS custom properties that `Tags` reads and that can be overridden.

:::spoiler[How to override variables]
The size variables are set on the `Tags` element, and the color ones on the application root. The `style` prop of `Tags` beats both, so it is a reliable way to change them for one row.

```tsx
<Tags
  style={{
    "--tags-item-text-color": "var(--text-1)",
    "--tags-hovered-item-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  <Tags.Item label="Stronger text" onClick={() => {}} />
</Tags>
```

::playground{src=tags/TagsCssVarsDemo caption="Stronger text and a red hover"}

The hover underline and the font weight have no variables.
:::

## Internal variables

Defined by the tags themselves.

::::css-vars
:::css-var[--tags-item-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Tag text color. Default: `var(--text-2)`
:::

:::css-var[--tags-hovered-item-color]{kind="text" type="Text color" color="var(--accent-11)"}
Color of an interactive tag on hover and focus. Default: `var(--accent-11)`
:::

:::css-var[--tags-item-font-size]{kind="font" type="Font size"}
Tag font size; depends on `size`. Default: `var(--text-size-4)`
:::

:::css-var[--tags-item-line-height]{kind="font" type="Font size"}
Tag line height; depends on `size`. Default: `var(--line-height-4)`
:::
::::

## Global variables

Not defined by the tags themselves, but they shape their look.

::::css-vars
:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
The default of `--tags-item-text-color`.
:::

:::css-var[--accent-11]{kind="text" type="Text color" color="var(--accent-11)"}
The default of `--tags-hovered-item-color`.
:::

:::css-var[--text-weight-medium]{kind="font" type="Font weight"}
Tag font weight.
:::
::::
