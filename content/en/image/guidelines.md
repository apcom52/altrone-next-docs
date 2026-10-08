# Image

## Describe the picture in its alt

`alt` is what people who can't see the picture get instead of it. Describe what the picture shows and why it is there, in a sentence. `alt` defaults to an empty string, which tells assistive technology that the picture is decorative — so leaving it out on a content picture hides that picture from those users.

::::good-bad
:::good
```tsx
<Image
  src="/chart.png"
  alt="Revenue grew from 2 to 5 million between 2023 and 2026"
/>
```
:::

:::bad
```tsx
<Image src="/chart.png" alt="chart.png" />
```
:::
::::

Don't repeat the caption in `alt`: the caption is read too, so the same words would be announced twice. If the picture is purely decorative, keep `alt=""` on purpose.

## Choose the fit by what the picture is

`cover` suits photos: the frame is filled, and a slightly different crop doesn't change the meaning. A diagram, a logo, a screenshot or a chart is different — every edge carries information, so use `contain` and accept the empty space.

::::good-bad
:::good
::playground{src=image/ImageGuidelineFitGoodDemo caption="A diagram shown whole"}
:::

:::bad
::playground{src=image/ImageGuidelineFitBadDemo caption="cover crops the blocks on both sides"}
:::
::::

## Keep the subject in view

`cover` crops around the center by default, which can cut off exactly what the picture is about. When a frame's shape differs from the picture's, set `objectPosition` to keep the subject inside.

::::good-bad
:::good
::playground{src=image/ImageGuidelinePositionGoodDemo caption="objectPosition keeps the sun in the frame"}
:::

:::bad
::playground{src=image/ImageGuidelinePositionBadDemo caption="The center crop cuts the sun off"}
:::
::::

## Reserve the space

A picture without a known height makes the page jump when it loads: the frame first holds a `200px` placeholder and then takes the picture's own height. If you know the proportions, set a `height` so the layout stays still.

::::good-bad
:::good
```tsx
<Image src={photo} alt="…" width="100%" height={320} />
```
:::

:::bad
```tsx
<Image src={photo} alt="…" />
```
:::
::::

## Use the caption for context

The caption is for what a sighted reader needs next to the picture: a source, a date, a credit. It appears in the flow of the page and is read by everyone, so it doesn't replace `alt` and `alt` doesn't replace it.

## Accessibility

- Every content picture needs a meaningful `alt`. An empty `alt` marks a picture as decorative.
- If loading fails, the placeholder is exposed as an image named by your `alt`, or by a localized "Image failed to load" when there is none.
- The loading `Skeleton` is labeled "Loading image" in the language set on `Application`.
- With `children`, put the text alternative on your own element: `alt` on an `<img>`, `role="img"` and `aria-label` on an `<svg>`.
- The caption is a paragraph inside the `<figure>`. Don't put information only in the picture — repeat what matters in the text.
- Don't rely on color in a picture alone: a chart that is read by hue should also be described in `alt` or in the surrounding text.

See [Accessibility](/en/foundations/accessibility) for the library-wide rules.
