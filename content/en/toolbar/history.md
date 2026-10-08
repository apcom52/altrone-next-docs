# Toolbar

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Toolbar" name="Toolbar" open="true"}
**4.0**

- New design.
- A full building block for the application header: variants, placement on any of the four screen edges, several sizes, title and grouping subcomponents. `Action` became a full button with all its capabilities.
- Actions that don't fit fold into an overflow menu with a managed `priority`.
- Renamed: `placement` → `edge`, `Title.label` → `title`, `Group.align` → `justify`.
- :removed[`BackAction`, `BackForwardAction` and `SearchAction` were removed.]
- Stronger blur of the `solid` variant; fixed the Leading/Trailing balance and a flexible `Separator` that broke the overflow calculation.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/toolbar-3.png" name="Toolbar"}
**3.4**

- Added `badge` to `Toolbar.Action`; new colors for `Action` and new CSS variables.

**3.2**

- Added spacing between actions in a group.

**3.0**

- New design.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/toolbar-2.png" name="Toolbar"}
**2.2**

- More control over how actions look: hiding the label, arbitrary children, the `fluid` layout.
- Fixed the popover width being limited by the parent button for popups created through `content`.

**2.0**

- Added `surface` and `elevation`; `label` became optional.
- Fixed the `width` and `offset` props.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/toolbar-1.png" name="Toolbar"}
**1.3**

- Added context menu and popup modes for `ToolbarAction`; `onClick` became optional; `ToolbarGroup` no longer collapses its content for such actions.
- Fixed the `ToolbarGroup` alignment and a missing `ToolbarAction` import.

**1.0**

- Added to the library — a panel that gathers actions in one place.
:::
