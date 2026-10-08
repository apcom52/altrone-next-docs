# Image

`Image` frames a picture that is part of your content: a photo, an illustration, a diagram, with an optional caption below it. It draws the frame for you — rounded corners, a hairline edge — shows a placeholder while the picture loads, and shows a neutral fallback instead of the browser's broken-image glyph if it fails. The picture itself is either a plain URL or any element you pass in, such as a framework's image component or an inline SVG.

`Image` renders a `<figure>` and is always centered in its container. It is for content pictures; for a person's picture use `Avatar`.

```tsx
import { Image } from "altrone-ui";

<Image src="/fjord.jpg" alt="A fjord at sunset" caption="Fjord at sunset" />;
```

## Basic usage

Give the picture a `src` and always an `alt` that describes it. `width` defaults to the full width of the container and `height` to the height of the picture, so set a `height` when you want the frame to keep its size.

```tsx
<Image
  src="/mountains.jpg"
  alt="Mountains under a pink evening sky"
  caption="Evening in the mountains"
  width="100%"
  height={240}
/>
```

::playground{src=image/ImageBasicDemo caption="A picture with a caption in a fixed-height frame"}

In this mode the picture itself, not the frame, gets the hairline edge. The loading placeholder and the broken-image fallback don't get it, since there is no picture to outline yet.

## Size and corners

`width` and `height` take a number (pixels) or any CSS length. `radius` sets the corner radius the same way and defaults to `12px`.

```tsx
<Image src={photo} alt="Mountains" width={150} height={200} />
<Image src={photo} alt="Mountains" width={150} height={200} radius={0} />
<Image src={photo} alt="Mountains" width={150} height={200} radius={32} />
```

::playground{src=image/ImageRadiusDemo caption="No rounding, the default and a large radius"}

:::note
The frame is never shorter than `200px`, so a smaller `height` is raised to it. To allow a shorter frame, lower `--image-min-height` (see the CSS variables tab).
:::

## Fitting the picture

`fit` decides how the picture sits in a frame of a different shape. It works like CSS `object-fit` and defaults to `cover`.

```tsx
<Image src={photo} alt="Mountains" fit="cover" width={150} height={200} />
<Image src={photo} alt="Mountains" fit="contain" width={150} height={200} />
```

::playground{src=image/ImageFitDemo caption="All five values in the same portrait frame"}

| Value        | What happens                                                              |
| ------------ | ------------------------------------------------------------------------- |
| `cover`      | Fills the frame and crops what doesn't fit                                |
| `contain`    | Shows the whole picture, with empty space around it                       |
| `fill`       | Stretches to the frame, ignoring the proportions                          |
| `scale-down` | The smaller of `contain` and the picture's natural size                   |
| `none`       | The natural size, cropped by the frame                                    |

With `contain`, `scale-down` and `none`, the picture can be smaller than the frame. Its edge then follows the picture itself, not the empty space around it.

## Choosing the visible part

When `cover` crops the picture, `objectPosition` decides which part stays. It takes any CSS `object-position` value.

```tsx
<Image src={photo} alt="Mountains" objectPosition="left" width={150} height={200} />
<Image src={photo} alt="Mountains" objectPosition="80% center" width={150} height={200} />
```

::playground{src=image/ImagePositionDemo caption="The left, the center and the right of the same picture"}

## Custom picture

Pass any element as `children` instead of `src` when something else should render the picture: `next/image`, an inline `<svg>`, a `<picture>` with several sources, a chart. `Image` then only supplies the frame, the `fit` and the caption.

```tsx
<Image fit="cover" width="100%" height={200} caption="Aurora over Reykjavik">
  <NextImage src={photo} alt="Aurora over Reykjavik" fill />
</Image>
```

::playground{src=image/ImageChildrenDemo caption="An inline SVG inside the frame"}

In this mode the child always fills the frame, whatever the `fit`, and there is no edge — an arbitrary picture is yours to style. Give an element with no size of its own, such as a bare `<svg>`, `width="100%" height="100%"`. `alt` is on your element, not on `Image`.

## Loading

With `src`, `Image` tracks loading by itself: a `Skeleton` covers the frame until the picture arrives, then disappears. Changing `src` starts over. `onLoad` and `onError` tell you when it ends.

A custom `children` picture has no single event to listen to, so you say when it is loading with `isLoading`. `preloader` replaces the default `Skeleton` with any element.

```tsx
<Image isLoading={!ready} preloader={<Loading size={32} />}>
  <NextImage src={photo} alt="Misty forest path" />
</Image>
```

::playground{src=image/ImagePreloaderDemo caption="Toggle the loading state"}

`isLoading` does nothing with `src`.

## Broken image

If the `src` fails to load, the picture is replaced by a neutral placeholder: an icon in a gray circle, on the frame's own background. Its `alt` stays available to screen readers.

```tsx
<Image src="/missing.jpg" alt="A photo that failed to load" />
```

::playground{src=image/ImageBrokenDemo caption="A URL that doesn't exist"}

The icon can be replaced — see the [Icons tab](/en/components/content/image/icons).

## Caption

`caption` shows a centered line of muted text under the frame. It takes any node, not just a string.

```tsx
<Image
  src={photo}
  alt="Mountains"
  caption={<>Illustration by <Text href="/authors/altrone">Altrone docs</Text></>}
/>
```

::playground{src=image/ImageCaptionDemo caption="A caption with a link"}

## Props

:::prop[src]{type="string"}
The picture's URL. Ignored when `children` is passed.
:::

:::prop[alt]{type="string" default="''"}
The picture's text alternative. Also the accessible name of the broken-image placeholder.
:::

:::prop[children]{type="ReactNode"}
A custom picture element, rendered instead of `src`.
:::

:::prop[fit]{type="'cover' | 'contain' | 'fill' | 'none' | 'scale-down'" default="'cover'"}
How the picture sits in the frame, like CSS `object-fit`.
:::

:::prop[objectPosition]{type="string"}
Which part of the picture stays visible, like CSS `object-position`.
:::

:::prop[width]{type="number | string" default="'100%'"}
The frame's width. A number is pixels.
:::

:::prop[height]{type="number | string" default="'auto'"}
The frame's height. A number is pixels. The frame is at least `200px` tall.
:::

:::prop[radius]{type="number | string" default="'var(--radius-l)'"}
The frame's corner radius. A number is pixels.
:::

:::prop[caption]{type="ReactNode"}
A caption centered below the frame.
:::

:::prop[isLoading]{type="boolean"}
Shows the preloader over a custom `children` picture. Ignored with `src`.
:::

:::prop[preloader]{type="ReactElement" default="Skeleton"}
Replaces the default preloader.
:::

:::prop[brokenIcon]{type="ReactElement"}
Replaces the icon of the broken-image placeholder.
:::

:::prop[onLoad]{type="(event: SyntheticEvent<HTMLImageElement>) => void"}
Called when the `src` picture has loaded. Only with `src`.
:::

:::prop[onError]{type="(event: SyntheticEvent<HTMLImageElement>) => void"}
Called when the `src` picture has failed to load. Only with `src`.
:::

`Image` also accepts `className`, `style` and every standard HTML attribute, all applied to the `<figure>`, and forwards `ref` to it.

## Related topics

- [Text](/en/components/content/text) — the component that draws the caption
- [Box](/en/components/layout/box) — the surface primitive for framed content that isn't a picture
- [Accessibility](/en/foundations/accessibility) — text alternatives and the rules behind `alt`
- [Loading](/en/foundations/loading) — how the picture placeholder fits with the other loading patterns
- [Icons](/en/foundations/icons) — the library-wide icon contract that `brokenIcon` follows
