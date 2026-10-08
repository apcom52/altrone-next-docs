# Modal

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Modal" name="Modal" open="true"}
**4.0**

- New design.
- Moved onto the `Sheet` foundation shared with `Drawer` — one common entrance animation.
- Opening is controlled only by the `open` prop: the `children` trigger was removed, so the source button no longer has to be wrapped inside `Modal`.
- Added the `showCloseButton` prop.
- `leftActions` renamed to `additionalActions`.
- Long content also scrolls with the mouse wheel over the backdrop.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/modal-3.png" name="Modal"}
**3.1**

- Fixed the backdrop dimming color in Safari.
- Accessibility improvements.
- Fixed the localization of the “Cancel” button.

**3.0**

- New design.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/modal-2.png" name="Modal"}
**2.1**

- Fixed the layout on mobile devices.

**2.0**

- Added the `surface` prop.
- `ModalAction` gained the `disabled` prop.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/modal-1.png" name="Modal"}
**1.3**

- Fixed the “Cancel” button disappearing when `showClose`/`showCancel`/`closeOnOverlay` were set to `false`.
- Fixed the `ModalAction.onClick` type.
- Fixed the dialog closing when one of its props changed.

**1.2**

- Added the public `ModalAction` interface.
- Fixed an untranslated string in Russian.

**1.0**

- Added to the library — a dialog for confirmations and data entry over the page.
:::
