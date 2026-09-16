# Loading

Altrone has three different ways to say "something is happening," and they aren't interchangeable — which one fits depends on whether you already know the shape of what's coming, and whether the wait belongs to a whole view or a single control.

## `Skeleton` — when you already know the shape

A static placeholder block, shaped like the content that will eventually replace it (a row, a card, an avatar) — reserves the right amount of space up front so nothing jumps around once the real content arrives:

```tsx
{isLoading ? <Skeleton width="100%" height={20} /> : <Text>{title}</Text>}
```

Its shimmer is purely decorative — it's stopped entirely under `prefers-reduced-motion` (see [Motion](motion)), since it communicates nothing a static gray block doesn't.

## `Loading` — when you don't know the shape, or it's a discrete action

A spinner, for a wait whose eventual content has no fixed layout to pre-shape, or for a single action rather than a whole view loading in:

```tsx
<Loading size={24} strokeWidth={2} />
```

Unlike `Skeleton`'s shimmer, the spinner keeps spinning under reduced motion — it's a functional status indicator, the only signal a background operation is still running, not decoration (see [Motion](motion) for the full reasoning).

## Wired into the control itself

Several components fold a loading state directly into their own API, instead of you layering a spinner on top by hand:

- **`Button`**'s `state` prop includes `'loading'` (alongside `'idle'`/`'succeeded'`/`'failed'`) — set it and the button blocks itself and shows the spinner, no separate `disabled` flag needed.
- **`TextInput.LoadingIsland`** docks a spinner inside a field. `AutocompleteInput` shows it automatically while a search is in flight.
- **`FilePicker`** tracks a per-file status (`'selected'` → `'loading'` → `'loaded'`/`'failed'`), and your `autoUploadFn` reports real progress via `startUploading()`/`setProgress(bytes)`/`complete()`/`fail()` — a determinate progress bar per file, not just a spinning indicator.

## Choosing between the two

Reach for `Skeleton` when you know the eventual layout (a list of rows, a grid of cards) — it prevents layout shift by claiming the right space up front. Reach for `Loading` when the shape is unknown, or the wait belongs to a small, discrete thing (a button press, a field's inline search) where blocking out skeleton-shaped space wouldn't make sense.

## Building your own components

1. **Know-the-shape gets a `Skeleton`, don't-know-the-shape gets a `Loading` spinner.** Picking between them is about whether you can pre-shape the eventual content, not about how long the wait is.
2. **If your control already has a `state`-like prop, add a loading value to it** the way `Button` does, instead of a separate boolean layered on top.
3. **Report real progress when you can**, the way `FilePicker`'s upload context does — a determinate bar beats an indeterminate spinner whenever you actually know how far along something is.
4. **Respect the shimmer-vs-spinner split from [Motion](motion)**: a decorative loading animation stops under reduced motion, a functional one doesn't — don't apply the same rule to both by default.

## Related topics

- [Motion](motion) — the decorative-vs-functional distinction behind `Skeleton`'s shimmer and `Loading`'s spinner
- [Feedback](feedback) — `Progress`, for a determinate percentage across an operation, rather than "is anything happening at all"
- [Entering data](enteringData) — `TextInput.LoadingIsland` and `FilePicker`'s per-file status, in their full context
