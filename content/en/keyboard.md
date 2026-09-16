# Keyboard

Every interactive thing in Altrone works from the keyboard alone, but "keyboard support" isn't one behavior — it's a handful of different patterns depending on what the control actually is: a composite widget, a value you drag, an overlay, or a control that merely hints at a shortcut it doesn't itself implement. This article is about telling those apart.

## Composite widgets: roving tabindex

A set of related controls that act as one unit gets exactly one stop in the page's Tab order; arrow keys move focus between its items. `Tabs` is a real, shipped example of this pattern — its own tab list handles focus itself:

```ts
// Tabs.tsx — the actual keys it handles
'ArrowRight', 'ArrowLeft', 'ArrowDown' /* + 'Home', 'End' */
```

Only the active tab is in the page's Tab sequence; arrow keys (and `Home`/`End`) move focus across the rest without ever landing there via Tab. Build a composite widget of your own the same way — see [Accessibility](accessibility) for the full roving-`tabindex` mechanics.

## Values you can nudge: arrow keys as direct manipulation

Two real controls let arrow keys change a value directly, not just move focus:

- **`Slider`** steps its value with `ArrowLeft`/`ArrowDown` (decrease) and `ArrowRight`/`ArrowUp` (increase).
- **`Splitter`**'s divider resizes the adjacent panels the same way — arrow keys nudge the split by a step, once the divider has focus.

Both treat the keyboard as an alternative to dragging, not a fallback bolted on afterward — the same `onChange` (or resize) path a pointer drag would trigger.

## Overlays: `Escape` and where focus goes

`Modal`, `Drawer`, `Popover`, and `Dropdown` all close on `Escape` and return focus to whatever opened them — the full mechanics (and why focus return matters) are covered in [Accessibility](accessibility). Nothing extra to reach for here beyond building your own overlay the same way.

## Shortcut hints aren't shortcuts

`Button`'s `kbd` prop renders a small badge (e.g. `⌘S`) in the tooltip that appears when `showLabel={false}` — but it's a label, not a binding. Setting `kbd="⌘S"` doesn't make `⌘S` do anything; you still register the actual `keydown` listener yourself, wherever that shortcut needs to live:

```tsx
<Button label="Save" showLabel={false} icon={<Save />} kbd="⌘S" />
```

```tsx
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.metaKey && e.key === "s") {
      e.preventDefault();
      save();
    }
  };
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, []);
```

## Building your own components

1. **A composite widget gets roving `tabindex`**, not a `tabindex="0"` on every item — one stop in the page's Tab order, arrow keys inside it, the way `Tabs` already works.
2. **A draggable value should accept arrow keys too**, stepping the same value a pointer drag would — `Slider` and `Splitter` both treat this as one code path, not two.
3. **An overlay closes on `Escape` and returns focus to its trigger** — see [Accessibility](accessibility) for the exact mechanics.
4. **A `kbd` hint doesn't wire itself up.** Showing `⌘S` next to a button is a promise to the user — back it with a real `keydown` listener, or don't show it.

## Related topics

- [Accessibility](accessibility) — the full roving-`tabindex` and focus-return mechanics this article builds on
- [Actions](actions) — `Button`'s `kbd` badge, in the context of the rest of its API
- [Entering data](enteringData) — `Slider`'s value model, which its arrow-key stepping plugs into
