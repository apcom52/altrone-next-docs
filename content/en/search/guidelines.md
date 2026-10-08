# Search

## Search as you type

People expect results to follow their typing. Don't make them press a button: update the list on every change. If the search is expensive, debounce the request on your side (300–500 ms) and keep the field itself free of a "Find" button.

::::good-bad
:::good
::playground{src=search/SearchGuidelineInstantGoodDemo caption="The results follow the query on their own"}
:::

:::bad
::playground{src=search/SearchGuidelineInstantBadDemo caption="An extra button stands between the query and the results"}
:::
::::

## Write the placeholder as an invitation

The placeholder sits in the middle of the field next to the magnifier, so it should be short and read as a call to action. "Find a component" works better than a sentence that explains how searching works.

::::good-bad
:::good
::playground{src=search/SearchGuidelinePlaceholderGoodDemo caption="Short: it fits and is read at a glance"}
:::

:::bad
::playground{src=search/SearchGuidelinePlaceholderBadDemo caption="Long: it gets cut off and says nothing new"}
:::
::::

## Show the empty state

If nothing was found, say so out loud. A message with the query, and ideally a hint on what to try, is more useful than a blank screen. Draw it in the place where the results would be.

::::good-bad
:::good
::playground{src=search/SearchGuidelineEmptyGoodDemo caption="The user sees that the search worked and found nothing"}
:::

:::bad
::playground{src=search/SearchGuidelineEmptyBadDemo caption="A blank space — is it still loading or is it broken?"}
:::
::::

## Let the clear button restore the full list

When the user clears the query, they want to get back to the whole list, not to an empty screen. Show everything again for an empty value.

## Don't use Search for an ordinary field

`Search` is for looking through a large set of data or jumping to the right record. If the user is typing a name in an edit form, use `TextInput`: a magnifier and a clear button in the wrong place only confuse.

::::good-bad
:::good
::playground{src=search/SearchGuidelineFieldGoodDemo caption="A regular field for a regular value"}
:::

:::bad
::playground{src=search/SearchGuidelineFieldBadDemo caption="A search field where the user is not searching for anything"}
:::
::::

## Accessibility

- Give the field an accessible name. The placeholder is drawn by the component and is not a native `placeholder`, so a screen reader doesn't read it: pass `aria-label`, or put the field in a `Form.Field` with a `label`.
- The clear button has a localized name ("Clear"), so a screen reader announces what it does.
- The field has `type="search"`, so assistive technologies announce it as a search field.
- With suggestions, the arrow keys move through the list, `Enter` picks and `Escape` closes it, so the field can be used without a mouse.
- The magnifier is decoration: don't rely on it to convey the purpose of the field — the name does that.
