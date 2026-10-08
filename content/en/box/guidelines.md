# Box

## Tone for status, color for identity

`tone` says what a surface means: an error, a success, something that needs attention. It stays correct in both themes and with any accent color. `color` says who or what something is — a category, a person, a brand — and has no status meaning. Don't reach for a raw red or green to express status, and don't borrow `danger` to make a tag look lively.

::::good-bad
:::good
::playground{src=box/BoxGuidelineToneGoodDemo caption="Status comes from tone"}
:::

:::bad
::playground{src=box/BoxGuidelineToneBadDemo caption="Hand-picked reds and greens ignore the theme"}
:::
::::

The opposite mistake is just as common: a category tag should be colored by `color`, so it never reads as a warning.

::::good-bad
:::good
::playground{src=box/BoxGuidelineIdentityGoodDemo caption="Categories use hues"}
:::

:::bad
::playground{src=box/BoxGuidelineIdentityBadDemo caption="Design looks like an error, Backend like a success"}
:::
::::

## Make interactive boxes real controls

`pressable` only changes how a box looks. It doesn't make a `<div>` focusable, doesn't add a role and doesn't react to Enter or Space. If something is clickable, render a real element with `asChild` and add `focusable` so keyboard users can see where they are.

::::good-bad
:::good
::playground{src=box/BoxGuidelineControlGoodDemo caption="A real button: focusable, announced, Enter and Space work"}
:::

:::bad
::playground{src=box/BoxGuidelineControlBadDemo caption="Looks clickable, but a keyboard can't reach it"}
:::
::::

Use `pressable` only on things that are actually interactive — a surface that reacts to a press and does nothing promises something it can't keep.

## Use width and height for a rectangle

An arbitrary `size` always makes a square. To get any other proportion, set `width` and `height` — they win over `size` and leave the padding alone.

::::good-bad
:::good
::playground{src=box/BoxGuidelineSizeGoodDemo caption="A rectangle from width and height"}
:::

:::bad
::playground{src=box/BoxGuidelineSizeBadDemo caption="size makes a 160px square"}
:::
::::

Use the named tiers (`s`, `m`, `l`) for controls — they carry a matching height and padding — and an arbitrary size only for swatches, avatars and other true squares.

## Keep nested corners concentric

A box inside a rounded box looks right when its radius is the parent's radius minus the gap between them. Seed `radius` on the outer box and give the inner one a smaller value; the same radius on both makes the inner corners look too round.

::::good-bad
:::good
::playground{src=box/BoxGuidelineRadiusGoodDemo caption="Radius 24 outside, 12 inside a 12px gap"}
:::

:::bad
::playground{src=box/BoxGuidelineRadiusBadDemo caption="The same 24 on both — the gap looks uneven at the corners"}
:::
::::

## Choose the material by role

Pick a material for what the surface is, not for how it looks in one theme. `plate` is a raised control, `glass` is a frosted overlay, `translucent` and `pale` are quiet tinted surfaces, `outline` is a field or a container that needs an edge, `ghost` and `transparent` are actions that shouldn't add weight, and `dotted` is a "content goes here" placeholder.

`glass` only reads as glass when there is something behind it to blur, and it looks different in the dark theme.

::::good-bad
:::good
::playground{src=box/BoxGuidelineMaterialGoodDemo caption="Glass over content it can blur"}
:::

:::bad
::playground{src=box/BoxGuidelineMaterialBadDemo caption="Glass over a plain background is just a faint gray box"}
:::
::::

## Accessibility

- `Box` adds no semantics. Use `asChild` with the element that matches the meaning — `button`, `a`, `input` — and let that element carry the role and the name.
- `focusable` draws the same focus ring on every material. Add it to everything a keyboard user can reach.
- `editable` belongs on a box around a real text field, with a visible label for the field itself.
- `mini` is 16px tall, below the recommended ~24px hit area. Don't use it for the only way to trigger something important.
- With `color`, only `solid` picks its text color automatically. For the other materials, check the contrast of the text against the tint yourself: 4.5:1 for text, 3:1 for large text and borders.
- State is never conveyed by color alone — pair a `danger` or `success` tone with text or an icon that says the same thing.

See [Accessibility](/en/foundations/accessibility) for the library-wide rules.
