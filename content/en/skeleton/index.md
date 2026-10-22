# Skeleton

`Skeleton` is a placeholder block that stands in for content while it loads. It takes the shape of the real thing — a line of text, an avatar, an image — and reserves its space, so nothing jumps when the data arrives. The block slowly pulses between two shades; under `prefers-reduced-motion` the pulse stops and the block stays still. `Skeleton` has `aria-hidden`, so assistive technology doesn't see it.

```tsx
import { Skeleton } from 'altrone-ui';
```

## Basic usage

A skeleton is a `<div>` with a background and nothing inside. Set its size with `width` and `height` and its rounding with `radius`. A few lines of different length read as a paragraph of text.

```tsx
<Skeleton width="100%" height="14px" radius="4px" />
<Skeleton width="100%" height="14px" radius="4px" />
<Skeleton width="70%" height="14px" radius="4px" />
```

::playground{src=skeleton/SkeletonBasicDemo caption="Three lines of a paragraph"}

All size props are strings with a CSS unit (`"14px"`, `"70%"`, `"var(--radius-m)"`). Without `width` or `height` the skeleton takes `100%` of its parent on that axis — so always give it a `height`: inside a container whose height depends on its content, `100%` resolves to zero and the block disappears.

## Shapes

`radius` goes straight to `border-radius`: `50%` makes a circle for an avatar, a few pixels give the softened corners of a button or a text line. Without `radius` the corners are square.

```tsx
<Skeleton width="48px" height="48px" radius="50%" />
<Skeleton width="120px" height="32px" radius="8px" />
<Skeleton width="120px" height="14px" radius="4px" />
<Skeleton width="64px" height="64px" />
```

::playground{src=skeleton/SkeletonShapesDemo caption="An avatar, a button, a text line and a block without rounding"}

## Flexible size

`width` and `height` fix the size: `minWidth` and `maxWidth` default to `width`, and `minHeight` and `maxHeight` to `height`. To let a block stretch within limits, pass the limits explicitly. Pass the minimum as well as the maximum — the minimum defaults to `width`, and in CSS `min-width` beats `max-width`.

```tsx
<Skeleton width="100%" minWidth="120px" maxWidth="320px" height="14px" radius="4px" />
```

::playground{src=skeleton/SkeletonFlexibleSizeDemo caption="The top line stops at 320px, the bottom one takes the whole width"}

## Composing a placeholder

There are no ready-made presets — a placeholder for a card, a list row or a profile is put together from several skeletons in `Flex`, repeating the layout of the real content.

```tsx
<Box material="pale" shape="rounded" radius={12} padding={12}>
  <Flex orientation="vertical" gap="m">
    <Skeleton width="100%" height="160px" radius="8px" />
    <Flex gap="m" align="center">
      <Skeleton width="40px" height="40px" radius="50%" />
      <Flex orientation="vertical" gap="xs" style={{ flex: 1 }}>
        <Skeleton width="60%" height="14px" radius="4px" />
        <Skeleton width="40%" height="12px" radius="4px" />
      </Flex>
    </Flex>
    <Skeleton width="90%" height="12px" radius="4px" />
    <Skeleton width="50%" height="12px" radius="4px" />
  </Flex>
</Box>
```

::playground{src=skeleton/SkeletonCardDemo caption="A card: a cover, an author and two lines of a description"}

## Replacing it with content

Render the skeleton while the data is loading and the content once it's there. Since every skeleton is hidden from assistive technology, announce the loading state on the wrapper: `aria-busy` while loading, and `aria-live` so the content is read out when it appears.

```tsx
<Flex gap="m" align="center" aria-busy={loading} aria-live="polite">
  {loading ? (
    <>
      <Skeleton width="40px" height="40px" radius="50%" />
      <Skeleton width="50%" height="14px" radius="4px" />
    </>
  ) : (
    <>
      <Avatar firstName="Alex" lastName="Morgan" size="l" />
      <Text weight="bold">Alex Morgan</Text>
    </>
  )}
</Flex>
```

::playground{src=skeleton/SkeletonLoadingStateDemo caption="The profile row loads in two seconds"}

## Animated resizing

`animateLayout` makes a skeleton animate changes of its size and position with `motion` — useful when a placeholder changes shape while the data is partially loaded. It is off by default: a static placeholder doesn't need the measuring on every render.

```tsx
<Skeleton width={wide ? '90%' : '40%'} height="14px" radius="4px" animateLayout />
```

::playground{src=skeleton/SkeletonAnimateLayoutDemo caption="The top line has animateLayout, the bottom one doesn't"}

## Props

:::prop[width]{type="string" default="'100%'"}
Width. Also the default for `minWidth` and `maxWidth`.
:::

:::prop[minWidth]{type="string"}
Minimum width. Defaults to `width`.
:::

:::prop[maxWidth]{type="string"}
Maximum width. Defaults to `width`.
:::

:::prop[height]{type="string" default="'100%'"}
Height. Also the default for `minHeight` and `maxHeight`.
:::

:::prop[minHeight]{type="string"}
Minimum height. Defaults to `height`.
:::

:::prop[maxHeight]{type="string"}
Maximum height. Defaults to `height`.
:::

:::prop[radius]{type="string"}
Corner rounding, passed to `border-radius`. Without it the corners are square.
:::

:::prop[animateLayout]{type="boolean" default="false"}
Animate changes of size and position.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root element.
:::

Other `<div>` attributes (except `children`) are passed to the root element; `style` is merged with the computed size, and the size props win over the same properties in it.

## Related topics

- [Loading](/en/foundations/loading) — the foundation article: when a skeleton fits and when a spinner does
- [Loading](/en/components/feedback/loading) — the spinner component, for a wait without a known shape
- [Progress](/en/components/feedback/progress) — progress of a long operation
- [Motion](/en/foundations/motion) — why the pulse stops under reduced motion
- [Flex](/en/components/layout/flex) — the container a placeholder is put together in
