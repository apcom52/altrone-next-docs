# Feedback

Altrone splits "telling the user something happened" across a handful of components, along two real axes: **transient vs. persistent**, and **imperative vs. plain JSX**. Which quadrant a piece of feedback belongs in decides which component you reach for — this article is about making that decision, not any one component's full API.

## Transient, imperative: toasts and notifications

`useNotifications()` gives you two functions that don't require rendering anything yourself — call them, and the stack (mounted once by `<Application>`) handles the rest:

```tsx
const { toast, notification, dismiss } = useNotifications();

// A brief, pill-shaped message — auto-dismisses after 4s by default
const id = toast("Changes saved", { variant: "success" });

// A richer card — title, optional image, action buttons — auto-dismisses after 6s
notification({
  title: "Export ready",
  content: "Your file has finished processing.",
  actions: [{ label: "Download", onClick: handleDownload }],
});

dismiss(id); // close early, if needed
```

Both take a `variant`/severity of `'default' | 'success' | 'warning' | 'danger'`. Neither blocks the user or the rest of the UI — that's the point of this quadrant.

## Transient, imperative, and blocking: dialogs

`showAlert`, `showConfirm`, and `showPrompt` are plain functions, not components — no dialog JSX to render or state to manage. Each returns a `Promise` you `await`:

```tsx
const confirmed = await showConfirm({
  title: "Delete account",
  message: "This can't be undone.",
  confirmText: "Delete account",
  danger: true,
});

if (confirmed) {
  await deleteAccount();
  await showAlert({ title: "Done", message: "Your account has been deleted." });
}
```

`showConfirm` resolves to a `boolean`, `showPrompt` resolves to the entered `string | number`, or `null` if cancelled — a confirm-then-act flow is a single `await` chain, not a callback tree. `danger: true` on `showConfirm` is the same "this is destructive" signal `Button`'s own `danger` prop carries elsewhere.

## Persistent, plain JSX: `Message` and `Result`

`Message` is an inline banner living in your own layout — not a stack, not auto-dismissing. Its `severity` (`'default' | 'primary' | 'success' | 'warning' | 'danger'`) picks the accessible announcement role for you: `danger` gets `role="alert"` (assertive — interrupts to announce), everything else gets `role="status"` (polite):

```tsx
<Message severity="danger" header="Upload failed">
  The file exceeds the 10MB limit.
</Message>
```

`Result` is the full-page/full-section counterpart — an outcome state (`'empty' | 'info' | 'success' | 'warning' | 'error'`) with a title, description, and an actions row, for "there's nothing here yet" or "here's how this operation turned out" states rather than a passing message.

## Ongoing, not an outcome: `Progress`

`Progress` communicates that something is still happening and how far along it is — `min`/`max`/`value`, with a default `"{percentage}%"` label. It's neither transient nor an outcome state; it's what a `Result` or a toast typically follows once the operation actually finishes.

## Picking the right one

| | Transient | Persistent |
| --- | --- | --- |
| **Non-blocking** | `toast` / `notification` | `Message`, `Progress` |
| **Blocking** | `showAlert` / `showConfirm` / `showPrompt` | `Result` (a full-page state the user must act from) |

## Building your own components

1. **Decide transient-vs-persistent and blocking-vs-non-blocking first.** That decision alone usually points at an existing component — it's rarely a reason to build a new one.
2. **Reach for `showConfirm`/`showPrompt` instead of a bespoke modal** whenever you need a yes/no or short text answer before continuing — you get the `Promise`-based flow for free.
3. **Pair severity with an icon or text, never color alone** — see [Accessibility](accessibility) for why.
4. **Match the announcement urgency to the severity**, the way `Message` picks `alert` (assertive) only for `danger` and `status` (polite) for everything else — see [Accessibility](accessibility) for the full `aria-live` guidance this mirrors.

## Related topics

- [Accessibility](accessibility) — the `aria-live` politeness levels this article's danger/non-danger split is built on
- [Color](color) — the status role tokens (`danger`/`success`/`warning`/`info`) behind every severity value here
- [Loading](loading) — `Progress`'s neighbors for "something is happening," when there's no outcome to report yet
- [Actions](actions) — `showConfirm`'s role in the "danger is a signal, not a safeguard" rule
