# Message

## Say what happened and what to do

"Error" is a label, not a message: the user sees red but doesn't know what broke and whether it can be fixed. Name the event in the title, put the cause and the way out in the text, and move the next step into `actions`.

::::good-bad
:::good
::playground{src=message/MessageGuidelineTitleGoodDemo caption="The title names the event, the text explains the cause, the button leads to a fix"}
:::

:::bad
::playground{src=message/MessageGuidelineTitleBadDemo caption="A red “Error” says neither what happened nor what to do"}
:::
::::

## Match severity to meaning

`danger` is read by screen readers as urgent and catches the eye, so keep it for failures and losses. A warning about nearly full storage is `warning`, and a tip is a neutral or `primary` message. If everything is red, red stops working.

::::good-bad
:::good
::playground{src=message/MessageGuidelineSeverityGoodDemo caption="Nearly full storage is a warning, not an error"}
:::

:::bad
::playground{src=message/MessageGuidelineSeverityBadDemo caption="A red tip about shortcuts drowns out real errors"}
:::
::::

## Don't use a message in place of a toast

`Message` sits in the page flow and stays until the cause is gone. For confirming a passing action like "Saved" a toast is better, and for a question that needs an immediate answer, a dialog.

## Accessibility

- `danger` is announced at once and interrupts the screen reader, the others politely; don't use `danger` for non-urgent things.
- Meaning must not depend on color: add an `icon` and a clear `title`.
- The icon is decorative and hidden from screen readers.
- The close button is keyboard accessible; if the message carries an important decision, don't make closing the only way to react.
