# Close Button

## Put it at the trailing edge of the header

People look for a close button in the top-right corner of a card, panel or dialog. Put it in the header row, next to the title, not under the content.

::::good-bad
:::good
::playground{src=closeButton/CloseButtonGuidelinePlacementGoodDemo caption="The cross is where people expect it"}
:::

:::bad
::playground{src=closeButton/CloseButtonGuidelinePlacementBadDemo caption="The cross is lost under the text"}
:::
::::

## Keep it smaller than the title

The close button is a secondary control: it shouldn't outweigh the header it belongs to. In compact cards and panels `s` is usually enough; keep `m` for dialogs and large panels.

::::good-bad
:::good
::playground{src=closeButton/CloseButtonGuidelineSizeGoodDemo caption="The button doesn't compete with the title"}
:::

:::bad
::playground{src=closeButton/CloseButtonGuidelineSizeBadDemo caption="The button is louder than the title"}
:::
::::

## A cross closes, it doesn't delete

A cross promises that the thing disappears from view and nothing is lost. If pressing it destroys data — deletes a file, a record or a comment — use a `Button` with a matching icon and `danger` instead.

::::good-bad
:::good
::playground{src=closeButton/CloseButtonGuidelineDeleteGoodDemo caption="Deletion looks like deletion"}
:::

:::bad
::playground{src=closeButton/CloseButtonGuidelineDeleteBadDemo caption="The cross hides an irreversible action"}
:::
::::

## Use CloseButton instead of a hand-made one

A `Button` with an `X` icon looks the same, but it has to be named by hand every time, and it shows a tooltip on hover. `CloseButton` already carries the localized name and stays quiet. Don't wrap it in a `Tooltip` either: the missing tooltip is deliberate.

## Name it precisely when there are several

The default name "Close" is right in most cases. When several close buttons are on one screen — a row of panels, a stack of cards — set `label` so each says what it closes: "Close Filters", "Close Activity".

## Accessibility

- The button always has an accessible name: the localized "Close" or your `label`.
- It is a native `<button type="button">`: it is focusable, works with Enter and Space and never submits a form.
- Focus is shown with the library-wide focus ring.
- `mini` is 16px — below the recommended ~24px hit area. Use it only where a mistaken press is harmless.

See [Accessibility](/en/foundations/accessibility) for the library-wide rules.
