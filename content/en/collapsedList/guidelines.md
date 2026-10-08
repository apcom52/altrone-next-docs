# CollapsedList

## Pass items as siblings

`limit` counts the list's direct children. A single wrapper around the items turns the whole list into one child — nothing gets collapsed and the button never appears. Render the items straight into `CollapsedList`, with `map` if needed.

::::good-bad
:::good
::playground{src=collapsedList/CollapsedListGuidelineSiblingsGoodDemo caption="Items are direct children — the list collapses"}
:::

:::bad
::playground{src=collapsedList/CollapsedListGuidelineSiblingsBadDemo caption="Everything is inside one wrapper — there is nothing to collapse"}
:::
::::

## Say what's hidden

"Show 4 more comments" tells the user how much effort is ahead of them; a bare "More" doesn't. When the default label isn't specific enough, pass `expandButtonLabel` and use `hiddenItems`.

::::good-bad
:::good
::playground{src=collapsedList/CollapsedListGuidelineLabelGoodDemo caption="The label says what and how many"}
:::

:::bad
::playground{src=collapsedList/CollapsedListGuidelineLabelBadDemo caption="\"More\" — more of what?"}
:::
::::

## Don't hide what must be seen

Collapse what's secondary: optional settings, long tag lists, older entries. Anything the user has to read or act on — required consents, errors, the primary action — stays visible, otherwise it gets missed.

::::good-bad
:::good
::playground{src=collapsedList/CollapsedListGuidelineImportantGoodDemo caption="The required option is always visible; only the optional ones are collapsed"}
:::

:::bad
::playground{src=collapsedList/CollapsedListGuidelineImportantBadDemo caption="Required consents are hidden behind the toggle"}
:::
::::

## Pick `limit` for the context

Three items in a card preview is right; three in a long settings form is too few. Aim for how much the user needs to make a decision, not for a round number.

## One-way expansion is for data you don't re-hide

If a user who has expanded the list is unlikely to want the short view back, use `hideExpandButtonAfterUsage` — it removes one needless action.

## Not a replacement for virtualization

`CollapsedList` renders every visible item and is meant for dozens of items, not thousands. For hundreds of rows, use a virtualized list or pagination.

## Accessibility

- The toggle is a regular `Button`, reachable and operable from the keyboard.
- Collapsed items aren't rendered, so they don't take part in tab order or screen reader reading until the list is expanded.
- A custom `expandButtonLabel` becomes the button's accessible name — keep it self-explanatory.

The library-wide rules are in [Accessibility](/en/foundations/accessibility).
