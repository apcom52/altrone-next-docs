# Notifications

## Say what happened

"Success" tells the person nothing they didn't see from the green color. Name the thing that happened and, when it helps, to whom or where: what was sent, saved or deleted.

::::good-bad
:::good
::playground{src=notifications/NotificationsGuidelineTextGoodDemo caption="The toast says what was sent and where"}
:::

:::bad
::playground{src=notifications/NotificationsGuidelineTextBadDemo caption="“Success” repeats the color and says nothing"}
:::
::::

## Don't hide what needs a decision

A toast disappears in a few seconds and takes its words with it. If a message explains a failure or asks for a next step, keep it until it is closed (`autoClose: false`) and put the step into `actions` of a notification.

::::good-bad
:::good
::playground{src=notifications/NotificationsGuidelineErrorGoodDemo caption="The card stays and offers a next step"}
:::

:::bad
::playground{src=notifications/NotificationsGuidelineErrorBadDemo caption="A long error in a toast vanishes before it can be read"}
:::
::::

## Choose the right surface

A toast confirms a passing action. A notification brings news that is not tied to the current action. A failure inside a form belongs next to the form, in a [Message](/en/components/feedback/message), and a question that needs an immediate answer in a [dialog](/en/components/overlays/dialog). Don't stack several toasts for one action.

## Accessibility

- Toasts and cards are announced as `role="status"`, so the screen reader reads them without taking focus.
- Auto-close pauses on hover; give long messages `autoClose: false` or a longer `duration` so there is time to read.
- Don't rely on color: the text should make the outcome clear.
- The close button is keyboard accessible. An action that is the only way to continue must not live in a toast alone.
