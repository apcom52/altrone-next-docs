# Image

The CSS variables an `Image` reads and you can override.

:::spoiler[How to override variables]
The `--image-*` variables are defined on the application root, so changing one in a stylesheet restyles every `Image` at once, and changing it on any ancestor restyles the pictures inside. For a single image, use the `style` prop — it goes on the `<figure>`, and an inline value beats every class-based one, in every theme.

```tsx
<Image
  src="/missing.jpg"
  alt="Team photo"
  style={{ "--image-broken-media-size": "56px" } as React.CSSProperties}
/>
```

::playground{src=image/ImageCssVarsDemo caption="A shorter frame and a larger red fallback icon"}

What can't be overridden through a variable:

- **Width, height, corner radius, `fit` and `objectPosition`.** The component writes them inline from the props, so use the prop.
- **The edge of the picture.** It reads `--border-a1`, a global token; there is no per-image variable.
- **The loading placeholder.** It is a `Skeleton`, restyled through its own variables.
:::

## Internal variables

Defined by `Image` itself.

::::css-vars
:::css-var[--image-min-height]{kind="size" type="Size"}
Minimum height of the frame. Default: `200px`
:::

:::css-var[--image-broken-media-size]{kind="size" type="Size"}
Diameter of the circle behind the broken-image icon. Default: `40px`
:::

:::css-var[--image-broken-icon-size]{kind="size" type="Size"}
Size of the broken-image icon. Default: `18px`
:::

:::css-var[--image-broken-media-background]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Fill of the circle behind the icon. Default: `var(--interactive-1)`
:::

:::css-var[--image-broken-media-color]{kind="text" type="Text color" color="var(--text-1)"}
Color of the broken-image icon. Default: `var(--text-1)`
:::
::::

## Global variables

Not defined by `Image`: global design tokens it reads. Changing a token restyles every `Image` at once. The caption is a `Text` and the loading placeholder is a `Skeleton`, so their variables apply too.

::::css-vars
:::css-var[--radius-l]{kind="radius" type="Corner radius"}
Corner radius of the frame when `radius` isn't set. Default: `12px`
:::

:::css-var[--border-a1]{kind="border" type="Border color" color="var(--border-a1)"}
Hairline edge of the picture. Default: `var(--gray-a6)`
:::

:::css-var[--space-inline]{kind="gap" type="Spacing"}
Gap between the frame and the caption. Default: `var(--s-gap)`
:::

:::css-var[--background-1]{kind="fill" type="Fill color" color="var(--background-1)"}
Background of the broken-image placeholder. Default: `var(--gray-1)`
:::

:::css-var[--interactive-1]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Default of the circle behind the icon. Default: `var(--gray-3)`
:::

:::css-var[--text-1]{kind="text" type="Text color" color="var(--text-1)"}
Default of the broken-image icon color. Default: `var(--gray-11)`
:::

:::css-var[--text-color-muted]{kind="text" type="Text color" color="var(--text-color-muted)"}
Color of the caption. Default: `var(--text-1)`
:::
::::
