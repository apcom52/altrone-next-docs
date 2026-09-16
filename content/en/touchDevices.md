# Touch devices

Touch isn't just "no mouse." A handful of specific things change: hover stops meaning anything reliable, a drag has to actively claim the gesture instead of fighting the browser's own scroll/zoom, and the hardware itself has notches and home indicators that eat into the screen. This article covers what Altrone already does about each, and what to watch for when you build something that drags or floats on the edge of the screen yourself.

## Pointer events, not separate mouse/touch handlers

`Slider` and `Splitter` both drive their dragging off `PointerEvent`/`onPointerDown` — one code path that covers mouse, touch, and pen alike, rather than juggling `mousedown` and `touchstart` as two separate implementations. Build your own drag-based control the same way:

```tsx
const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
  // same handler regardless of what kind of pointer this is
};
```

## Claiming the drag: `touch-action` and pointer capture

A touch-drag on an element with no special handling can get interpreted as the page trying to scroll or zoom instead. `Splitter`'s divider avoids that with two things together: `touch-action: none` (tells the browser not to reach for its own scroll/zoom gesture there) and `setPointerCapture` (keeps the divider receiving move events even if the pointer strays off it mid-drag).

:::note
`Slider`'s track currently sets neither of these — a useful reminder that dragging support doesn't automatically include gesture-claiming. If you're building something continuously dragged, add both yourself rather than assuming pointer events alone are enough.
:::

## Hover is a mouse-only signal, and CSS doesn't know that by default

`Box`'s `pressable` hover styles aren't scoped to `@media (hover: hover)` today — worth keeping in mind if you're styling a touch-heavy surface: a tap can register `:hover`, which then lingers visually until focus moves elsewhere, since touch has no real "hovering" state the way a mouse does. If a lingering hover look would actually bother users on something you're building, scope your own hover rules with `@media (hover: hover) and (pointer: fine)` rather than assuming `:hover` only ever fires for a mouse.

## Safe areas: notches and home indicators

`Screen.BottomNavigation` pads itself with `env(safe-area-inset-bottom, 0px)` on top of its own gutter, so the bar — and whatever's inside it — never collides with the iOS home indicator. Reach for the same environment variable on anything else you pin to a screen edge yourself.

## Building your own components

1. **Use pointer events, not mouse and touch handlers side by side**, for anything draggable — one code path, the way `Slider` and `Splitter` do.
2. **Claim the gesture explicitly** — `touch-action: none` plus pointer capture on anything continuously dragged, the full treatment `Splitter`'s divider gives itself.
3. **Scope `:hover` to `@media (hover: hover)`** if a lingering hover look would genuinely bother users on your surface — don't assume `:hover` is mouse-only by default.
4. **Pad against `env(safe-area-inset-*)`** for anything pinned to a screen edge, the way `Screen.BottomNavigation` already does.
5. **The ~24px hit-area minimum still applies** — see [Accessibility](accessibility) for the full rule; nothing extra needed here beyond following it.

## Related topics

- [Accessibility](accessibility) — the ~24px hit-area minimum and why it matters beyond touch specifically
- [Layout & responsiveness](layout) — `Screen.BottomNavigation` as the touch-first navigation idiom, in its full context
