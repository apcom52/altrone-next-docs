# Modal

## Ask the question in the title

The title is the first thing the user reads, and often the only one. “Delete project?” says right away what's being asked. A title like “Confirmation” says nothing, and “Are you sure?” in the body leaves them guessing what it's about.

::::good-bad
:::good
::playground{src=modal/ModalGuidelineTitleGoodDemo caption="The question is in the title, the consequences in the text"}
:::

:::bad
::playground{src=modal/ModalGuidelineTitleBadDemo caption="The title says nothing, and “Are you sure?” doesn't explain what it's about"}
:::
::::

## Name buttons after actions

A button should explain what will happen — without reading the dialog's text. “Discard changes” instead of “Yes”, “Save and exit” instead of “OK”. The built-in “Cancel” already closes the dialog with no consequences, so don't replace it with a “Yes”/“No” pair.

::::good-bad
:::good
::playground{src=modal/ModalGuidelineActionsGoodDemo caption="The action is named with a verb, “Cancel” is built in"}
:::

:::bad
::playground{src=modal/ModalGuidelineActionsBadDemo caption="“Yes” and “No” have to be matched against the question"}
:::
::::

## Don't show what needs no decision in a dialog

`Modal` interrupts the user, so spend that interrupting power only on a choice. A “Draft saved” message asks for nothing — a toast or an inline message is enough. A dialog with a lone “OK” button forces an extra click for information that could simply have been shown.

::::good-bad
:::good
::playground{src=modal/ModalGuidelineInfoGoodDemo caption="A toast confirms the save and doesn't get in the way"}
:::

:::bad
::playground{src=modal/ModalGuidelineInfoBadDemo caption="A dialog with “OK” blocks the page for a simple message"}
:::
::::

## Don't open a dialog on top of a dialog

Nested modals are disorienting: it's unclear which one closes on Escape and where focus returns. If an action needs one more confirmation, rethink the flow — for example, merge the steps into a single dialog.

## Short goes in `Modal`, long goes in `Drawer`

A dialog whose content doesn't fit on the screen loses its point: the user can see neither the start nor the end. Small forms stay in `Modal`, bigger ones go in a [Drawer](/en/components/overlays/drawer) or on a page of their own.

## Accessibility

- Focus is trapped inside the open dialog; on opening it lands on the close button, and on closing it returns to the element that opened the dialog.
- `Escape` closes the dialog.
- A click on the backdrop closes the dialog, but a click inside a menu opened from the content (such as a `Select` or a `Popover`) doesn't.
- The dialog is a `role="dialog"` with `aria-modal="true"`; when `title` is set, it also gets `aria-labelledby` pointing to it. A dialog without `title` has no accessible name, so always set one.
- The close button has its own accessible name and is reachable from the keyboard.
- The entrance animation is turned off under `prefers-reduced-motion: reduce`.

For the library's general rules, see the [Accessibility](/en/foundations/accessibility) article.
