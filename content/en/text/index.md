# Text

Good typography goes unnoticed: people don't think about the font, they read the content. `Text` is the one component for text in Altrone. It renders the right HTML element for the props you pass and draws every size, weight and color from the shared type scale, so text looks the same across the whole interface.

Reach for `Text` for anything textual instead of setting `font-size` or `font-weight` yourself. It has no opinion about layout; combine it with `Flex` and `Grid` for that.

```tsx
import { Text } from "altrone-ui";

<Text block size={6} weight="bold">Billing</Text>;
```

## Elements

The element `Text` renders is picked by one prop — there is no `as`. Passing two of these props at once is a type error.

| Prop      | Renders                          |
| --------- | -------------------------------- |
| _none_    | `<span>`                         |
| `block`   | `<p>`                            |
| `list`    | `<ol>` or `<ul>`                 |
| `item`    | `<li>`                           |
| `href`    | `<a>`                            |
| `asChild` | The child element you pass in    |

```tsx
<Text>Inline text</Text>
<Text block>A paragraph</Text>
<Text href="/docs">A link</Text>
```

::playground{src=text/TextElementsDemo caption="An inline fragment, two paragraphs and a link"}

A plain `Text` is inline, so it can sit inside a paragraph without breaking the flow. `block` makes it a standalone paragraph with prose line spacing (`1.6`) — unless you set a `size`, which brings its own line height.

## Sizes

Nine tiers, from `1` to `9`. Each pairs a font size with its own line height; the exact values are in [Typography](/en/foundations/typography).

```tsx
<Text size={2} color="muted">Captions, metadata</Text>
<Text size={4}>Interface body text</Text>
<Text size={6} weight="bold">Section title</Text>
<Text size={7} weight="bold">Page title</Text>
```

::playground{src=text/TextSizeDemo caption="Tiers 2 to 8 in their typical roles"}

Without `size`, `Text` inherits the size and line height of its surroundings, so it drops into any text block without disturbing its rhythm. `Application` sets the root size to `4`, which makes it the body baseline.

## Weight

```tsx
<Text weight="light">Light</Text>
<Text weight="regular">Regular</Text>
<Text weight="medium">Medium</Text>
<Text weight="bold">Bold</Text>
```

::playground{src=text/TextWeightDemo caption="The four weights"}

`regular` is the default. `light` suits large sizes (7–9), where `regular` would look heavy. `medium` is a calm emphasis, and `bold` is for titles and figures that should catch the eye first.

## Color

Without `color`, text uses the theme's neutral text color. Four semantic colors are available, and each one follows the light and dark themes.

```tsx
<Text color="muted">Secondary information</Text>
<Text color="success">Saved successfully</Text>
<Text color="warning">Approaching the limit</Text>
<Text color="danger">Authorization failed</Text>
```

::playground{src=text/TextColorDemo caption="The default color and the four semantic colors"}

:::note
A `Text` sets its own color rather than inheriting one from a parent. Inside a colored `Box`, use `color` on the `Text` or set `--text-color` (see the CSS variables tab) to make it match.
:::

## Inline decorations

Decorations apply to fragments inside a line of text.

```tsx
<Text italic>Italic</Text>
<Text underline>Underline</Text>
<Text deleted>Deleted</Text>
<Text highlighted>Highlighted</Text>
<Text code>npm install altrone-ui</Text>
<Text kbd>Ctrl + S</Text>
```

::playground{src=text/TextDecorationsDemo caption="All six decorations"}

`code` and `kbd` both use the monospace font but mean different things: `code` for code fragments and commands, `kbd` for keys and shortcuts. `deleted` also dims the text, so removed content reads as removed.

## Overflow

When a container can't fit the text, pick a strategy explicitly.

```tsx
<Text truncate style={{ maxWidth: 240 }}>
  quarterly-report-final-v2-reviewed-by-legal.pdf
</Text>

<Text block lineClamp={3}>
  A longer description that is cut after its third line…
</Text>

<Text nowrap>[Regression]</Text>
```

::playground{src=text/TextOverflowDemo caption="Truncation, a two-line clamp and no wrapping"}

`truncate` keeps a single line and ends it with an ellipsis. `lineClamp` limits the number of visible lines. `nowrap` only forbids wrapping and lets the text overflow.

:::note
`truncate` needs a constrained width — on the element or on its parent — otherwise there is nothing to cut. `lineClamp` works best on a `block` text.
:::

## Alignment

```tsx
<Text block align="start">Start (default)</Text>
<Text block align="center">Center</Text>
<Text block align="end">End</Text>
<Text block align="justify">Justify</Text>
```

::playground{src=text/TextAlignDemo caption="The four alignments"}

Alignment only matters for a `block` text or one with an explicit width; on an inline `<span>` it has no visible effect.

## Lists

A list is a `list` and a set of `item`s. Every `item` accepts the same props as any other `Text`.

```tsx
<Text list="numeric">
  <Text item>Install the package</Text>
  <Text item>Wrap the app in Application</Text>
</Text>

<Text list="marked">
  <Text item>TypeScript</Text>
  <Text item>React 19</Text>
</Text>
```

::playground{src=text/TextListDemo caption="A numbered and a bulleted list"}

## Links

`href` turns `Text` into an `<a>`. `external` opens it in a new tab and adds `rel="noopener noreferrer"` for you.

```tsx
<Text href="/docs/getting-started">Getting started</Text>

<Text href="https://github.com" external>
  View on GitHub
</Text>
```

::playground{src=text/TextLinkDemo caption="An internal link, an external link and a link inside a paragraph"}

A link is drawn in the accent color with medium weight and gets an underline on hover and keyboard focus.

## Inline composition

The strongest use of `Text` is combining inline variants inside one block: each fragment gets its own style without extra wrappers.

```tsx
<Text block>
  Press <Text kbd>Ctrl + S</Text> to save, or run <Text code>git commit</Text>{" "}
  in the terminal. A <Text highlighted>review</Text> comes first.
</Text>
```

::playground{src=text/TextInlineCompositionDemo caption="Keys, code, deleted, highlighted and a link in one paragraph"}

## Rendering as another element (asChild)

`asChild` puts the typography onto a child element of your choice. It's the way to get a heading, a button or a `<code>` element that looks like `Text`, since `Text` itself never renders an `<h1>`–`<h6>`.

```tsx
<Text asChild size={7} weight="bold">
  <h3>A real heading element</h3>
</Text>

<Text asChild code>
  <code>npm install altrone-ui</code>
</Text>
```

::playground{src=text/TextAsChildDemo caption="A heading and a code element that use Text's typography"}

:::note
`asChild` requires exactly one child element. If `children` isn't a valid React element, the component returns `null` and logs a warning in development.
:::

## Props

:::prop[size]{type="1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9"}
The size tier, from smallest to largest. Without it, the size is inherited.
:::

:::prop[weight]{type="'light' | 'regular' | 'medium' | 'bold'" default="'regular'"}
Font weight.
:::

:::prop[color]{type="'success' | 'danger' | 'warning' | 'muted'"}
A semantic color. Without it, the neutral text color is used.
:::

:::prop[align]{type="'start' | 'center' | 'end' | 'justify'"}
Text alignment. Visible on a block or a text with an explicit width.
:::

:::prop[italic]{type="boolean" default="false"}
Italic style.
:::

:::prop[underline]{type="boolean" default="false"}
Underline.
:::

:::prop[deleted]{type="boolean" default="false"}
Strikethrough and a dimmed color, for removed or outdated content.
:::

:::prop[highlighted]{type="boolean" default="false"}
A colored background highlight.
:::

:::prop[code]{type="boolean" default="false"}
A monospace style with a frame, for code fragments and commands.
:::

:::prop[kbd]{type="boolean" default="false"}
A monospace, dimmed style for keys and shortcuts.
:::

:::prop[truncate]{type="boolean" default="false"}
Keeps a single line and ends it with an ellipsis. Needs a constrained width.
:::

:::prop[lineClamp]{type="number"}
Limits the number of visible lines and ends the last one with an ellipsis.
:::

:::prop[nowrap]{type="boolean" default="false"}
Forbids wrapping (`white-space: nowrap`).
:::

:::prop[block]{type="boolean"}
Renders a `<p>`. Can't be combined with `list`, `item`, `href` or `asChild`.
:::

:::prop[list]{type="'numeric' | 'marked'"}
Renders an `<ol>` or a `<ul>`. Its children are `Text` with `item`.
:::

:::prop[item]{type="boolean"}
Renders an `<li>`. Use it inside a `Text` with `list`.
:::

:::prop[href]{type="string"}
The link address. Renders an `<a>`.
:::

:::prop[external]{type="boolean" default="false"}
Adds `target="_blank"` and `rel="noopener noreferrer"`. Only with `href`.
:::

:::prop[asChild]{type="boolean"}
Merges the typography onto the child element through the Slot pattern.
:::

`Text` also accepts every standard attribute of the element it renders.

## Related topics

- [Typography](/en/foundations/typography) — the size, weight and font tokens behind `size`, `weight` and `code`
- [Color](/en/foundations/color) — the role tokens behind `color`
- [Accessibility](/en/foundations/accessibility) — contrast and text-size rules that apply to every `Text`
- [Box](/en/components/layout/box) — the surface that `Text` most often sits on
- [Button](/en/components/controls/button) — pass a label, not a `Text`, to a button
