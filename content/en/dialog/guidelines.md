# Dialogs

## Name buttons after the action and put the question in the title

Users read the title and the buttons, and the text last. "Delete project?" and a "Delete project" button are clear without reading. A "Yes"/"No" pair under "Are you sure?" makes people match the answer to the question, and for an irreversible action it doesn't highlight the danger — add `danger`.

::::good-bad
:::good
::playground{src=dialog/DialogGuidelineButtonsGoodDemo caption="The question is in the title, buttons are named after actions, confirm is red"}
:::

:::bad
::playground{src=dialog/DialogGuidelineButtonsBadDemo caption="“Yes” and “No” must be matched to the question, and the danger isn't highlighted"}
:::
::::

## Ask only about what can't be undone

Every window is an extra click. `showConfirm` is justified before deleting, sending or losing data. Saving a draft breaks nothing, and a toast can report it: it doesn't interrupt the work and disappears on its own.

::::good-bad
:::good
::playground{src=dialog/DialogGuidelineAskGoodDemo caption="Saving is confirmed with a toast, no window needed"}
:::

:::bad
::playground{src=dialog/DialogGuidelineAskBadDemo caption="The user pressed “Save” and is asked again whether to save"}
:::
::::

## Accessibility

- The window keeps focus inside and closes on Escape — which always counts as declining, so the safe answer should match declining.
- One dialog at a time: `await` the result before opening the next one.
- Write `message` so that it is clear without the title: a screen reader reads them in sequence.
