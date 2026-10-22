# Skeleton

The CSS variables `Skeleton` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root, so they can be changed for one skeleton through its `style` prop, or for a whole placeholder through the `style` of a wrapper — the skeletons inside inherit the value.

```tsx
<Flex
  orientation="vertical"
  gap="xs"
  style={{
    "--skeleton-background-color": "var(--accent-a3)",
    "--skeleton-animate-background-color": "var(--accent-a5)",
  } as React.CSSProperties}
>
  <Skeleton width="100%" height="14px" radius="4px" />
  <Skeleton width="70%" height="14px" radius="4px" />
</Flex>
```

::playground{src=skeleton/SkeletonCssVarsDemo caption="A placeholder in the accent color"}

The block pulses between `--skeleton-background-color` and `--skeleton-animate-background-color`; set them to the same value to get a still block. Keep both semi-transparent, so the skeleton fits any surface it lies on. The size and the rounding aren't configurable through variables — use the `width`, `height` and `radius` props.
:::

## Internal variables

Defined by the component itself.

::::css-vars
:::css-var[--skeleton-background-color]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Block color at rest and at the edges of the pulse. Default: `var(--interactive-a1)`
:::

:::css-var[--skeleton-animate-background-color]{kind="fill" type="Fill color" color="var(--interactive-a2)"}
Block color at the peak of the pulse. Default: `var(--interactive-a2)`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--interactive-a1]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
The default for `--skeleton-background-color`. Default: `var(--gray-a3)`
:::

:::css-var[--interactive-a2]{kind="fill" type="Fill color" color="var(--interactive-a2)"}
The default for `--skeleton-animate-background-color`. Default: `var(--gray-a4)`
:::
::::
