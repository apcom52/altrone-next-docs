# Button

## Name the action, not the object

A button label should say what happens when it's pressed. "Delete" beats "Yes"; "Save and continue" beats "OK". A well-named button makes a confirmation dialog obvious even without the question above it.

::::good-bad
:::good
::playground{src=button/ButtonGuidelineNameGoodDemo caption="The label says what will happen"}
:::

:::bad
::playground{src=button/ButtonGuidelineNameBadDemo caption="The label says nothing about the action"}
:::
::::

Keep labels short — one to three words — and use the same wording for the same action everywhere in the product.

## One main action per area

Several `variant="submit"` buttons next to each other leave the user without a landmark. Use a single `submit` and one or two `default` or `text` buttons beside it. The hierarchy works across a screen too: the main action of a dialog is emphasized, and the actions of the page behind it don't compete with it.

::::good-bad
:::good
::playground{src=button/ButtonGuidelineMainGoodDemo caption="One emphasized action, the rest are quieter"}
:::

:::bad
::playground{src=button/ButtonGuidelineMainBadDemo caption="Every button competes for attention"}
:::
::::

## Don't disable a button without a reason

`disabled` fits when a form really isn't ready to submit — and the user can see what's missing. If the reason isn't obvious, it's better to let them press the button and show the errors explicitly.

::::good-bad
:::good
::playground{src=button/ButtonGuidelineDisabledGoodDemo caption="Press it to see what's missing"}
:::

:::bad
::playground{src=button/ButtonGuidelineDisabledBadDemo caption="The user can't tell why it's disabled"}
:::
::::

:::note
While `state` is anything other than `idle`, the button is disabled automatically. You don't need to pass `disabled` to prevent a double submit.
:::

## A dangerous action needs confirmation

`danger` alone doesn't protect the user — it only makes the intent visible. Put a confirmation dialog in front of every irreversible action. See [Feedback](/en/foundations/feedback) for the confirmation patterns.

::::good-bad
:::good
::playground{src=button/ButtonGuidelineDangerGoodDemo caption="Asks before deleting"}
:::

:::bad
::playground{src=button/ButtonGuidelineDangerBadDemo caption="Deletes on the first click"}
:::
::::

## Give async actions visible feedback

Any action that takes longer than a moment should use `state`. The spinner tells the user the press registered; the checkmark or cross tells them how it ended. Always return `state` to `idle` afterwards, so the button doesn't stay locked.

::::good-bad
:::good
::playground{src=button/ButtonGuidelineAsyncGoodDemo caption="Shows progress and the outcome"}
:::

:::bad
::playground{src=button/ButtonGuidelineAsyncBadDemo caption="Nothing happens for a moment — the user presses again"}
:::
::::

## Icon-only buttons are a trade-off

Hiding the label buys density and costs clarity. Before you use `showLabel={false}`:

- make sure the icon is unmistakable for your audience — a cross, a gear, a magnifier are; most others aren't;
- keep a meaningful `label` — it becomes the accessible name and the tooltip;
- add `kbd` when the action has a keyboard shortcut.

If in doubt, keep the label.

::::good-bad
:::good
::playground{src=button/ButtonGuidelineIconOnlyGoodDemo caption="Icons everyone recognizes"}
:::

:::bad
::playground{src=button/ButtonGuidelineIconOnlyBadDemo caption="Icons that need guessing"}
:::
::::

## Submitting a form

`type` defaults to `"button"` — deliberately, unlike the browser's `"submit"` — so a button inside a form never submits it by accident. Pass `type="submit"` explicitly on the one button that should.

::playground{src=button/ButtonGuidelineFormDemo caption="Only the submit button submits the form"}

## Sizes and hit area

Pick the size for the density of the surrounding interface, not for importance: `s` and `mini` in tables and toolbars, `m` in forms, `l` and `xl` on touch-first screens.

::::good-bad
:::good
::playground{src=button/ButtonGuidelineSizeGoodDemo caption="A regular size for the main action"}
:::

:::bad
::playground{src=button/ButtonGuidelineSizeBadDemo caption="A tiny button as the only way to save"}
:::
::::

:::warning
`mini` is 16px tall — below the recommended ~24px hit area. Use it only where the button is surrounded by enough space that a mistaken press is harmless, and never as the only way to trigger something important.
:::

## Accessibility

- A button always has an accessible name: `label` is required for exactly that reason, even when it's visually hidden.
- Use a real `Button` for actions and `asChild` with a link for navigation — don't restyle one into the other.
- `selected` sets `aria-pressed` for you; don't fake a toggle with styling only.
- State is never conveyed by color alone: `danger` pairs with a label that names the consequence, and async states use distinct icons.

See [Accessibility](/en/foundations/accessibility) for the library-wide rules.
