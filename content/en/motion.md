# Motion

Motion in Altrone respects `prefers-reduced-motion` by default, without every component having to check for it itself. That's split across three layers depending on how the motion is actually implemented — a plain CSS transition, a JS-driven animation, or a manually-timed `setTimeout` — plus one nuance that matters more than the mechanics: reduced motion doesn't mean *no* motion.

## Layer 1: plain CSS transitions

Durations and easing are CSS custom properties, defined once and zeroed under `prefers-reduced-motion: reduce` at the root:

```scss
:global([data-altrone-root='true']) {
  --motion-duration-fast: 0.1s;
  --motion-duration-base: 0.2s;
  --motion-easing-standard: ease;
}

@media (prefers-reduced-motion: reduce) {
  :global([data-altrone-root='true']) {
    --motion-duration-fast: 0s;
    --motion-duration-base: 0s;
  }
}
```

Any component whose CSS reaches for `var(--motion-duration-base)` instead of hardcoding `0.2s` gets reduced motion automatically — no media query of its own required. This only covers plain `transition`s, though: a `@keyframes` loop with its own hardcoded duration doesn't stop just because these variables hit `0s` (a duration of `0s` on an *infinite* animation still loops, instantly, which isn't the same as stopping) — that case needs its own explicit rule, covered below.

## Layer 2: JS-driven animation

Components animated with the `motion` library (`Modal`, `Popover`, `Tooltip`, `Notifications`, `Spoiler`, and others) aren't covered by the CSS layer at all. `Application` wraps its whole tree in `<MotionConfig reducedMotion="user">` once:

```tsx
<MotionConfig reducedMotion="user">{children}</MotionConfig>
```

Because `MotionConfig` propagates through React context, this covers every `motion.div` (and similar) anywhere under `<Application>` — including ones in your own components — without each one needing to read `prefers-reduced-motion` itself.

## Layer 3: manual JS timing

For something like a `setTimeout` before unmounting an element after its exit animation, reuse the same SSR-safe hook the rest of the codebase uses for reduced-motion checks, rather than hardcoding a duration:

```tsx
import { useMediaMatch } from "altrone-ui";

function useAutoDismissDelay() {
  const reducedMotion = useMediaMatch("(prefers-reduced-motion: reduce)");
  return reducedMotion ? 0 : 300;
}
```

No component in the library currently needs this layer — unmount timing today goes through `motion`'s own `AnimatePresence`, which Layer 2 already covers. Reach for this pattern only when you have a genuinely manual, non-`motion`-driven timeout to guard.

## Reduced motion ≠ no motion

This is the part worth understanding before writing any override: [WCAG 2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions) doesn't ask you to remove all movement, only **decorative, autoplaying, or looping** motion that carries no information. Motion that's direct feedback to something the user just did — a `Splitter.Divider` following the cursor while dragging, a `Spoiler` expanding when clicked — is not what this is about, and stripping it out can make an interface feel unresponsive rather than more accessible.

Two real examples from the library that landed on opposite answers, deliberately:

- **`Skeleton`'s shimmer** is purely decorative — a looping background-color animation that communicates nothing a static placeholder block doesn't. It's stopped outright under reduced motion:

  ```scss
  .Skeleton {
    animation: skeleton-animate 3s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
  ```

- **`Loading`'s spinner** is a functional status indicator — the only signal that a background operation is still running. It's deliberately left spinning under reduced motion, flagged with a comment so a future reader doesn't mistake the omission for a bug:

  ```scss
  /** Deliberately not reduced under prefers-reduced-motion: a functional
      loading state, not decorative motion. */
  .Spinner {
    animation: rotate 2s linear infinite;
  }
  ```

## Building your own components

1. **Don't assume "stop it" is always the correct reduced-motion answer.** Ask what the motion is actually communicating first. The `Skeleton`/`Loading` pair above reached opposite conclusions for a specific reason — one is decorative, the other is the only feedback that something is happening — not because one is "more important."
2. **Reach for `--motion-duration-fast`/`--motion-duration-base` in plain CSS transitions** instead of a hardcoded duration, so Layer 1 covers you automatically.
3. **A looping `@keyframes` animation needs its own explicit reduced-motion rule.** The shared duration tokens don't stop an infinite loop with its own hardcoded timing — write the `@media (prefers-reduced-motion: reduce) { animation: none }` yourself, once you've decided (per point 1) that this particular loop should actually stop.
4. **Building with the `motion` library needs no extra work.** Anything rendered under `<Application>` already inherits `<MotionConfig reducedMotion="user">` — you don't need to read the media query yourself just because you reached for `motion.div`.
5. **Manual timeouts** — a `setTimeout` tied to an animation's duration should use `useMediaMatch` (see Layer 3 above) rather than a hardcoded number.

## Related topics

- [Accessibility](accessibility) — the broader set of rules `prefers-reduced-motion` support is one part of
- [Materials](materials) — `Box`'s `pressable`/`focusable`/`editable` interaction states, the other place a transition duration gets chosen
- [Loading](loading) — the decorative-vs-functional split applied to `Skeleton` and `Loading`
