# Text

## Choose the size by role, not by importance

A large size doesn't make text important — important text says something that matters. Pick the size for the role in the hierarchy: a caption, body text, a title. Two or three sizes and two or three weights per screen are enough; every deviation from the base style should mean something.

::::good-bad
:::good
::playground{src=text/TextGuidelineSizeGoodDemo caption="A title above quiet body text"}
:::

:::bad
::playground{src=text/TextGuidelineSizeBadDemo caption="The title is smaller than the sentence under it"}
:::
::::

## Use semantic colors for their meaning

`danger` is for errors, `success` for confirmations, `warning` for things that need care. People learn what the colors mean, so a red word that isn't a problem teaches them to ignore the real ones. For something that is merely secondary, use `muted`.

::::good-bad
:::good
::playground{src=text/TextGuidelineColorGoodDemo caption="Colors that match what the text says"}
:::

:::bad
::playground{src=text/TextGuidelineColorBadDemo caption="Red and green used as decoration"}
:::
::::

Never rely on color alone: pair `danger` and `success` with words that say the same thing, as above.

## Use block for a paragraph

The inline `<span>` is the default on purpose: it lets `Text` live inside a sentence. When the text is a paragraph of its own, switch to `block` so it gets its own line, prose line spacing and the right element.

::::good-bad
:::good
::playground{src=text/TextGuidelineBlockGoodDemo caption="Each paragraph is a block"}
:::

:::bad
::playground{src=text/TextGuidelineBlockBadDemo caption="Two paragraphs, glued into one line"}
:::
::::

## Truncate only what you can't predict

`truncate` is for text whose length you don't control: file names, user input, data from an API. If a label is cut off every time, fix the layout instead of hiding the problem behind an ellipsis. And keep the full text reachable — a `title`, a tooltip or a details view.

::::good-bad
:::good
::playground{src=text/TextGuidelineTruncateGoodDemo caption="A long file name, with the full name in title"}
:::

:::bad
::playground{src=text/TextGuidelineTruncateBadDemo caption="The important part of the message is cut off"}
:::
::::

## Make links real links

Navigation is an `<a>`: use `href`. A `Text` with an `onClick` looks like a link but can't be focused, doesn't open in a new tab and isn't announced as a link. For an action that only looks like text, use `asChild` with a real `<button>`.

::::good-bad
:::good
::playground{src=text/TextGuidelineLinkGoodDemo caption="A real link, reachable from the keyboard"}
:::

:::bad
::playground{src=text/TextGuidelineLinkBadDemo caption="A colored span with a click handler"}
:::
::::

## Keep decorations meaningful

Combine decorations sparingly: the more styles in one line, the harder it is to tell what matters. Use `code` for code, `kbd` for keys, `highlighted` as a marker, and don't stack them.

::::good-bad
:::good
::playground{src=text/TextGuidelineDecorationGoodDemo caption="Each style has a purpose"}
:::

:::bad
::playground{src=text/TextGuidelineDecorationBadDemo caption="Everything is emphasized, so nothing is"}
:::
::::

## Accessibility

- `Text` never renders a heading. Use `asChild` with `<h1>`–`<h6>` so screen readers get the document outline.
- `code`, `kbd` and `deleted` are visual styles on a `<span>`. When the meaning matters to assistive technology, render the real element: `<Text asChild code><code>…</code></Text>`, `<kbd>`, `<del>`.
- Sizes `1` and `2` (8px and 10px) are for decorative or supplementary text only. Keep content at `3` (12px) or larger.
- Contrast follows WCAG AA — 4.5:1 for text. The semantic colors are tuned for it in both themes; check any color you set yourself through `--text-color`.
- Links are told apart from the text around them by color and weight. In a long paragraph, add `underline` so they don't depend on color alone.
- Truncated text hides content: keep the full text available through `title`, a tooltip or another view.

See [Accessibility](/en/foundations/accessibility) for the library-wide rules.
