# Tags

## Keep labels short

A tag is a keyword, not a sentence. One or two words let the row stay compact and scannable; long labels wrap, push each other apart and turn the row into a list of headlines.

::::good-bad
:::good
::playground{src=tags/TagsGuidelineLabelsGoodDemo caption="One or two words per tag"}
:::

:::bad
::playground{src=tags/TagsGuidelineLabelsBadDemo caption="Sentences are headlines, not tags"}
:::
::::

## Choose link or button by what happens

If a click goes to another page, use `href` (or `asChild` with a router link). If it filters or changes something on the current page, use `onClick`. Tags with neither are pure description, so don't expect people to click them.

## Accessibility

- A tag with `href` is an `<a>`, with `onClick` it is `role="button"` and has `tabIndex`; both are reachable with `Tab`.
- Hover and keyboard focus look the same: the color shifts and the label is underlined, so focus doesn't depend on color alone.
- Inert tags are not focusable and are read as plain text.
- If a tag acts as a toggle, say so in the surrounding text or with `aria-pressed`, since the tag doesn't track the state itself.
