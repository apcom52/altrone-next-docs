# Form

## Show errors next to the field

The person is already looking at the field — show the error where they will notice it. A summary at the top of the form makes them hunt for what went wrong and where.

::::good-bad
:::good
::playground{src=form/FormGuidelineErrorGoodDemo caption="The error sits right under the field it belongs to"}
:::

:::bad
::playground{src=form/FormGuidelineErrorBadDemo caption="A vague banner that doesn't say which field is wrong"}
:::
::::

## Validate on submit, not on every keystroke

An error that appears while the person is still typing is irritating. Show errors after a submit attempt, and clear a field's error as soon as its value changes — that confirms the fix worked.

## Mark required fields only when it means something

Use `required` for the fields the form can't be submitted without. If every field is required, mark none — a mark on everything stops carrying information. When most of the form is required, label the optional fields instead.

::::good-bad
:::good
::playground{src=form/FormGuidelineRequiredGoodDemo caption="Only the field that matters is marked; the other says it's optional"}
:::

:::bad
::playground{src=form/FormGuidelineRequiredBadDemo caption="Everything is marked, so the mark tells nothing"}
:::
::::

## Keep hints for non-obvious requirements

The format of an API key, the rules for a password, the address for a webhook — that's where a hint helps. For obvious fields like "Name" or "Email" it only clutters the interface.

::::good-bad
:::good
::playground{src=form/FormGuidelineHintGoodDemo caption="The hint states a requirement the label can't"}
:::

:::bad
::playground{src=form/FormGuidelineHintBadDemo caption="The hint repeats the label"}
:::
::::

## Accessibility

- Every control gets a visible label through `Form.Field` — don't replace it with a placeholder.
- The hint button carries the hint text as its `aria-label`, so screen readers announce it.
- Don't rely on color alone for errors: the message text under the field is always shown.
