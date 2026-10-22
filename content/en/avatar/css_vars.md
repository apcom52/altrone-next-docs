# Avatar

The CSS variables `Avatar` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root, so the `style` prop of `Avatar` is a reliable way to change them for one avatar: a value there beats both the defaults and the values set by `size`.

```tsx
<Avatar
  firstName="Alex"
  lastName="Morgan"
  style={{
    "--avatar-size": "64px",
    "--avatar-text-size": "26px",
  } as React.CSSProperties}
/>
```

::playground{src=avatar/AvatarCssVarsDemo caption="A custom size and thinner initials"}

The dimensions (`--avatar-size`, `--avatar-image-size`, `--avatar-text-size`, `--avatar-icon-size`) are set by the `size` prop; for a custom size change them together, and keep `--avatar-image-size` slightly smaller than `--avatar-size`. The background and the text color aren't configurable through variables — use the `backgroundColor` and `textColor` props.
:::

## Internal variables

Defined by the component itself. Size values are shown for `size="m"`; other sizes substitute their own.

::::css-vars
:::css-var[--avatar-size]{kind="size" type="Size"}
Avatar diameter. Default: `32px`
:::

:::css-var[--avatar-image-size]{kind="size" type="Size"}
Diameter of the photo inside the avatar. Default: `28px`
:::

:::css-var[--avatar-text-size]{kind="font" type="Font size"}
Initials size. Default: `16px`
:::

:::css-var[--avatar-text-weight]{kind="font" type="Font weight"}
Initials weight. Default: `var(--text-weight-bold)`
:::

:::css-var[--avatar-icon-size]{kind="size" type="Size"}
Icon size. Default: `18px`
:::

:::css-var[--avatar-sheen-color]{kind="fill" type="Fill color" color="rgba(255, 255, 255, 0.25)"}
The sheen in the top left corner, the same in both themes. Default: `rgba(255, 255, 255, 0.25)`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--category-1]{kind="fill" type="Fill color" color="var(--category-1)"}
The background chosen by name when there is no `backgroundColor`. One of the ten variables `--category-1`…`--category-10` is used.
:::

:::css-var[--text-weight-bold]{kind="font" type="Font weight"}
The default for `--avatar-text-weight`.
:::
::::
