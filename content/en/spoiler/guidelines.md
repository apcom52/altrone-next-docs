# Spoiler

## Don't hide what's essential

A spoiler is for secondary material: an FAQ, optional fields, advanced settings. If the user can't finish the task without the content, show it right away — a collapsed section makes it easy to miss.

::::good-bad
:::good
::playground{src=spoiler/SpoilerGuidelineImportantGoodDemo caption="Only the optional field is collapsed"}
:::

:::bad
::playground{src=spoiler/SpoilerGuidelineImportantBadDemo caption="A required field is hidden behind the heading"}
:::
::::

## Name the content in the heading

The heading is all the user sees before opening the section, so it should say what is inside. Avoid headings that only describe the action — the icon already does that.

::::good-bad
:::good
::playground{src=spoiler/SpoilerGuidelineTitleGoodDemo caption="The heading names the content"}
:::

:::bad
::playground{src=spoiler/SpoilerGuidelineTitleBadDemo caption="The heading says nothing about what's inside"}
:::
::::

## Keep it flat

Put spoilers side by side, not inside each other. Nested sections hide content several clicks deep and make the structure hard to scan. If a topic needs that much depth, give it its own page or a different component.

::::good-bad
:::good
::playground{src=spoiler/SpoilerGuidelineNestingGoodDemo caption="Independent sections, one level"}
:::

:::bad
::playground{src=spoiler/SpoilerGuidelineNestingBadDemo caption="Three levels of nesting"}
:::
::::

## Accessibility

- The heading is a native `<button>` with `aria-expanded` and `aria-controls` pointing at the content — assistive technologies announce the state without extra markup.
- It is reachable with `Tab` and toggles with `Enter` / `Space`; focus stays on the heading after toggling.
- The expand/collapse icon is decorative (`aria-hidden`): the state is conveyed by `aria-expanded`, not by the icon alone.
- Don't apply your own transitions to the content — they conflict with the built-in animation. The animation respects `prefers-reduced-motion`.
