# Actions

"Something happens when you activate this" shows up in a handful of different homes — an inline `Button`, a `Toolbar.Action` inside a toolbar, a `Dropdown.Action` inside a menu. Each home has its own chrome, but a handful of semantic concepts — primary emphasis, danger, icon-only naming, selected/toggle state — travel across all of them. This article is about keeping those concepts consistent no matter where the action lives.

## Inline: `Button`

The default home for an action. `variant` carries the weight: `submit` for the one main action in an area, `default` for everything next to it, `text` for the least emphasis. `danger` recolors any of the three for a destructive action — it's a signal, not a safeguard on its own (more on that below).

## Inside a toolbar: `Toolbar.Action`

`Toolbar.Action` is literally `Button`'s props minus `variant` — the same `danger`, `selected`, `icon`, `badge` all apply, just rendered as a toolbar-chrome button instead of a standalone one. Group related actions in a `Toolbar.Group` (a raised glass pill in `grouped`/`solid` toolbars); use `Toolbar.Separator` with `variant="space"` to push a group to the far edge, or `variant="line"` for a plain hairline between groups.

```tsx
<Toolbar variant="solid">
  <Toolbar.Group>
    <Toolbar.Action label="Bold" icon={<Bold />} selected={isBold} onClick={toggleBold} />
    <Toolbar.Action label="Italic" icon={<Italic />} selected={isItalic} onClick={toggleItalic} />
  </Toolbar.Group>
  <Toolbar.Separator variant="space" />
  <Toolbar.Action label="Delete" icon={<Trash2 />} danger onClick={handleDelete} />
</Toolbar>
```

## When actions overflow: `CollapsedList`

A row of actions (or tags, or anything else) that might not fit its container doesn't need a bespoke overflow menu — wrap it in `CollapsedList` and set `limit`; the extras collapse behind a "+N" toggle instead of wrapping or clipping. It doesn't reinvent what's inside, only how many of them show at once.

## Inside a menu: `Dropdown.Action` and its siblings

A menu item is its own shape, not a `Button` — `Dropdown.Action` carries `label`/`icon`/`danger`/`badge`/`hintText`, the same handful of concepts translated to a list row instead of a standalone control. Its siblings cover the other selection shapes a menu needs:

- **`Dropdown.CheckboxItem`** — a toggleable option (`checked`/`onChange`), for a menu item that's on or off.
- **`Dropdown.RadioList`** / **`Dropdown.RadioList.Item`** — one choice out of a set, inside the menu.
- **`Dropdown.ChildMenu`** — opens a nested submenu, for an action that's really a category of further actions.

## The same rules, wherever the action lives

1. **Name the action, not a generic response.** "Delete" beats "Yes" whether it's a `Button` label, a `Dropdown.Action` label, or a `Toolbar.Action` label — the same rule, regardless of which of these renders it.
2. **One emphasized action per area.** A `variant="submit"` `Button` and a `Toolbar.Group` both lose their point if more than one thing in the same area competes for primary weight.
3. **`danger` is a signal, not a safeguard.** Whether it's set on a `Button`, a `Toolbar.Action`, or a `Dropdown.Action`, pair it with a real confirmation (`showConfirm`, see [Feedback](feedback)) before anything actually irreversible happens.
4. **Icon-only needs a real name, in every one of these homes.** `Button`'s `showLabel={false}` and a `Toolbar.Action` both still need an accessible name, not just a recognizable icon (see [Accessibility](accessibility)).
5. **Reach for `selected`/`checked` instead of styling a toggle by hand.** `Button`'s `selected` and `Dropdown.CheckboxItem`'s `checked` already wire the correct ARIA state — don't reimplement a pressed look without the semantics behind it.

## Related topics

- [Accessibility](accessibility) — the full accessible-name requirement behind rule 4
- [Feedback](feedback) — `showConfirm`, the confirmation flow rule 3 points to
- [Materials](materials) — the `Box` chrome (`pressable`, `material`, `tone`) `Button` and `Toolbar.Action` are actually built from
- [Keyboard](keyboard) — `Button`'s `kbd` hint, and why it doesn't wire up a shortcut by itself
