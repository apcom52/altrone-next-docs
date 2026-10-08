# Box

`Box` is the surface primitive that almost every styled element in Altrone is built on: buttons, chips, cards, text fields, placeholder tiles. It draws a fill, a border, a corner shape and a shadow, and reacts to hover, press and focus — you configure it with props instead of writing CSS. Reach for it whenever you need a container that looks like part of the library. To lay content out, use `Flex` and `Grid`; `Box` only gives a block its look.

`Box` is a `<div>` by default and keeps no React state: hover, press and focus are pure CSS, so it is safe to render on the server.

```tsx
import { Box } from "altrone-ui";

<Box material="translucent" tone="accent" padding={{ x: 16, y: 8 }}>
  3 new messages
</Box>;
```

## Materials

`material` sets what the surface looks like at rest: how it is filled, whether it blurs what is behind it, and whether it has a border. The default is `solid`.

```tsx
<Box material="solid" tone="accent">solid</Box>
<Box material="translucent" tone="accent">translucent</Box>
<Box material="outline" tone="accent">outline</Box>
<Box material="dotted" tone="accent">dotted</Box>
```

::playground{src=box/BoxMaterialsDemo caption="All nine materials on the same tone, over a tinted backdrop so the frosted ones have something to blur"}

| Material      | At rest                                                                 | When `pressable`                                  |
| ------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| `solid`       | Opaque fill of the tone's solid color, text contrasts automatically     | Slightly lighter on hover, darker on press        |
| `glass`       | Frosted translucent fill with backdrop blur, independent of `tone`      | Brightens on hover, blur deepens on press         |
| `plate`       | Frosted fill, a hairline edge and a resting shadow — a raised control   | Brightens on hover, blur deepens on press         |
| `translucent` | Flat translucent tint of the tone                                       | The tint gets stronger                            |
| `pale`        | The `translucent` tint made opaque, so it doesn't blend with what's behind | The tint gets stronger                         |
| `transparent` | Nothing                                                                 | A translucent wash appears                        |
| `outline`     | A static border                                                         | A wash appears and the border strengthens         |
| `ghost`       | Nothing — a border appears only on interaction                          | A wash and a border appear                        |
| `dotted`      | A faint tint, a hairline edge and a dot pattern — a placeholder surface | The wash gets stronger, the border strengthens    |

`glass` and `plate` ignore `tone` and `color` for their fill — only their text follows them. See [Materials](/en/foundations/materials) for how the vocabulary is shared across the library.

## Tones

`tone` picks the color role a material draws from. `danger`, `success` and `warning` are fixed hues; `info` follows the accent color of your app, like `accent`.

```tsx
<Box material="solid" tone="danger">danger</Box>
<Box material="translucent" tone="success">success</Box>
```

::playground{src=box/BoxTonesDemo caption="Six tones, in a solid and a translucent material"}

## Custom color

`color` steps outside the tone system and wins over `tone`. Pass one of the ten categorical hue names or any CSS color, and every material derives its fill, border and text from it.

```tsx
<Box material="solid" color="teal">Design</Box>
<Box material="translucent" color="indigo">Backend</Box>
<Box material="outline" color="#f0abfc">Custom</Box>
```

::playground{src=box/BoxColorDemo caption="Hue names and a raw CSS color"}

A hue name resolves to that hue's solid step, so it stays consistent with the [categorical palette](/en/foundations/color) and follows the light and dark themes. A raw color string is used as is.

## Shapes

`shape` chooses the corner algorithm. The amount of rounding still comes from the ambient radius scope (see [Radius scope](#radius-scope)); `shape` decides how that value is used.

```tsx
<Box shape="rect">rect</Box>
<Box shape="squircle" radius={16}>squircle</Box>
<Box shape="pill">pill</Box>
```

::playground{src=box/BoxShapesDemo caption="All five shapes at the same nominal radius"}

| Shape      | Corners                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------- |
| `rect`     | Always square, ignoring any ambient radius                                                    |
| `rounded`  | The default. Follows the ambient radius, never below `2px`                                    |
| `squircle` | A smooth superellipse corner; browsers without `corner-shape` get a scaled-down plain radius  |
| `circle`   | A circle with a square aspect ratio; padding is reset to `0`                                  |
| `pill`     | Fully round capsule ends at any size or width                                                 |

## Sizes

A named `size` sets the minimum height and the internal padding together.

```tsx
<Box size="mini">mini</Box>
<Box size="s">s</Box>
<Box size="m">m</Box>
<Box size="l">l</Box>
<Box size="xl">xl</Box>
```

::playground{src=box/BoxSizesDemo caption="The five tiers: 16, 24, 32, 40 and 48px tall"}

### Arbitrary size

A number (pixels) or a CSS string as `size` turns the box into a **square** of that size and leaves the padding alone. For a rectangle, use `width` and `height`; either one wins over `size`.

```tsx
<Box size={44} />
<Box size="4em" />
<Box width={120} height={40} />
```

::playground{src=box/BoxCustomSizeDemo caption="A pixel square, an em square, and explicit width and height"}

## Padding

`padding` replaces the padding the `size` tier would set. A number is pixels, a string is used as is (a token works), and an object sets each axis separately.

```tsx
<Box padding={4} />
<Box padding={{ x: 24, y: 6 }} />
<Box padding="var(--space-content)" />
```

::playground{src=box/BoxPaddingDemo caption="A number, an object and a token"}

## Elevation

`elevation` sets the stacking order and the shadow together, as one role: `flat` (default), `raised`, `sticky`, `overlay`, `modal` and `toast`.

```tsx
<Box elevation="raised" material="pale" />
<Box elevation="overlay" material="pale" />
```

::playground{src=box/BoxElevationDemo caption="From flat to toast"}

## Interaction

Three props switch on the interactive look. All of them are plain CSS pseudo-classes, so a `Box` never holds state of its own.

- **`pressable`** — the fill responds to hover and press. What changes depends on the material (see the table above).
- **`focusable`** — draws a focus ring on keyboard focus, the same for every material.
- **`editable`** — for a `Box` that wraps or renders a text field: the "engaged" look and the focus ring appear on `:focus-within` instead of on press.

```tsx
<Box asChild material="translucent" tone="accent" pressable focusable>
  <button type="button">Save</button>
</Box>
```

::playground{src=box/BoxPressableDemo caption="Hover, press and Tab through the buttons"}

```tsx
<Box asChild material="outline" editable>
  <input placeholder="Type something…" />
</Box>
```

::playground{src=box/BoxEditableDemo caption="Click into the field — the frame reacts to focus, not to press"}

## Radius scope

`radius` seeds the ambient corner radius on this element. `rounded` and `squircle` boxes read it, and so does everything nested inside — so a child can pick a smaller radius and stay concentric with its parent. Without `radius`, a box takes whatever an ancestor supplied, and never goes below `2px`. `rect`, `circle` and `pill` ignore it.

```tsx
<Box radius={24} padding={12}>
  <Box radius={12}>Inner</Box>
</Box>
```

::playground{src=box/BoxRadiusScopeDemo caption="The default, an explicit radius, a squircle, and a rect that ignores it"}

For a squircle, `radius` is the value used where the browser supports `corner-shape`. Elsewhere the plain `border-radius` fallback is scaled down automatically, so the corner doesn't look noticeably rounder.

## Rendering as another element (asChild)

`Box` is a `<div>`. `asChild` merges its look and behavior onto a single child element instead — a `<button>`, an `<a>`, an `<input>`, a router `Link`. This is the only way to change the rendered element; there is no `as` prop.

```tsx
<Box asChild shape="circle" material="solid" tone="accent" size="l" pressable focusable>
  <button type="button" aria-label="Notifications">
    <Bell size={16} />
  </button>
</Box>
```

::playground{src=box/BoxAsChildDemo caption="A round icon button and a link, both built from Box"}

:::note
`asChild` requires exactly one child element. The `ref` is merged onto that element.
:::

## Props

:::prop[material]{type="'solid' | 'glass' | 'plate' | 'translucent' | 'pale' | 'transparent' | 'outline' | 'ghost' | 'dotted'" default="'solid'"}
What the surface looks like at rest: fill, blur and border.
:::

:::prop[tone]{type="'neutral' | 'accent' | 'danger' | 'success' | 'warning' | 'info'" default="'neutral'"}
The color role a material draws from. `info` follows the app's accent color.
:::

:::prop[color]{type="'red' | 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink' | 'brown' | string"}
A custom color that wins over `tone`. A hue name resolves to that hue's solid step; any other string is used as a CSS color.
:::

:::prop[shape]{type="'rect' | 'rounded' | 'squircle' | 'circle' | 'pill'" default="'rounded'"}
The corner algorithm. `rect` is always square, `circle` is always round, `pill` always has capsule ends; `rounded` and `squircle` follow the radius scope.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl' | number | string" default="'m'"}
A tier sets the minimum height and padding. A number (px) or a CSS string makes the box a square of that size.
:::

:::prop[width]{type="number | string"}
Explicit width; a number is pixels. Wins over `size`.
:::

:::prop[height]{type="number | string"}
Explicit height; a number is pixels. Wins over `size`.
:::

:::prop[radius]{type="number | string"}
Seeds the ambient corner radius for this box and everything inside it. A number is pixels, a string is used as is. Ignored by `rect`, `circle` and `pill`.
:::

:::prop[padding]{type="number | string | { x?: number | string; y?: number | string }"}
Replaces the padding of the `size` tier. An object sets each axis separately.
:::

:::prop[elevation]{type="'flat' | 'raised' | 'sticky' | 'overlay' | 'modal' | 'toast'" default="'flat'"}
Stacking order and shadow, as one role.
:::

:::prop[pressable]{type="boolean" default="false"}
Adds a hover preview and a press response to the fill.
:::

:::prop[focusable]{type="boolean" default="false"}
Adds a focus ring on keyboard focus.
:::

:::prop[editable]{type="boolean" default="false"}
For a box around a text field: the engaged look and the focus ring appear while the box contains focus.
:::

:::prop[asChild]{type="boolean" default="false"}
Merges the box's look and behavior onto the child element through the Slot pattern.
:::

`Box` also accepts `className`, `style` and every standard HTML attribute.

## Related topics

- [Materials](/en/foundations/materials) — the shared vocabulary of materials, tones and interaction that `Box` implements
- [Color](/en/foundations/color) — the role tokens behind `tone`, and the categorical palette behind `color`
- [Dark theme](/en/foundations/darkTheme) — why `glass` and `plate` needed deliberate dark-theme values
- [Layout & responsiveness](/en/foundations/layout) — `Box` alongside `Flex`, `Grid` and `Screen`
- [Button](/en/components/controls/button) — the most common component built on `Box`
- [Accessibility](/en/foundations/accessibility) — the focus and hit-area rules behind `focusable` and `size`
