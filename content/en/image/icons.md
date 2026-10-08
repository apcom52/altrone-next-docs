# Image

The only icon an `Image` draws itself is the one in the placeholder that replaces a picture that failed to load. The loading state is not an icon but a `Skeleton`; replace it with the `preloader` prop, described in the [overview](/en/components/content/image#loading). The pictures you pass yourself (`src`, `children`) are covered there too.

:::spoiler[How to replace the icon]
Pass `brokenIcon` when the default `ImageOff` doesn't fit the picture. The replacement takes its place inside the same gray circle, and its own SVG is sized to it automatically, whatever icon library it comes from.

```tsx
import { Camera } from "lucide-react";

<Image src="/missing.jpg" alt="Team photo" brokenIcon={<Camera />} />
```

::playground{src=image/ImageBrokenIconDemo caption="The default icon and a replacement"}

The icon is `18px` inside a `40px` circle. Change them with `--image-broken-icon-size` and `--image-broken-media-size`, and its colors with `--image-broken-media-color` and `--image-broken-media-background` — see the CSS variables tab.

The placeholder is shown only in `src` mode. With `children` you render the picture, so you also render its error state.
:::

## Icons

::::icon-cards
:::icon-card[brokenIcon]{icon="ImageOff"}
Signals that the picture failed to load, in place of the picture
:::
::::
