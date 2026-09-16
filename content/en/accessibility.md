# Accessibility

Accessibility is not a feature you bolt on at the end — it's a property of how a component is built in the first place. Altrone's components ship accessible by default: correct semantics, keyboard support, focus management, and contrast that meets WCAG AA. This article explains the rules those components follow, so that when you build your own components on top of Altrone — a custom card, a composite filter widget, a domain-specific form control — you can follow the same rules instead of reinventing them.

The guiding principle is simple: **prefer native HTML semantics, and reach for ARIA only when there's no native equivalent.** A `<button>` already has focus, keyboard activation, and a role built in for free. An `aria-role="button"` on a `<div>` gives you none of that — you have to implement all of it yourself, and it's easy to get subtly wrong.

## Keyboard navigation

Every interactive element must be operable from the keyboard alone. For a single control (a button, an input) this comes for free from the native element. For a **composite widget** — a set of related controls that act as one unit, like a toolbar, a tab list, or a custom menu — you need roving `tabindex`.

The idea: only one item in the group is part of the Tab sequence (`tabindex="0"`), all the others are `tabindex="-1"`. Arrow keys move focus *within* the group; Tab moves focus *out* of it.

```tsx filename="CustomToolbar.tsx"
function CustomToolbar({ actions }: { actions: Action[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setActiveIndex((i) => (i + 1) % actions.length);
    } else if (event.key === 'ArrowLeft') {
      setActiveIndex((i) => (i - 1 + actions.length) % actions.length);
    } else if (event.key === 'Home') {
      setActiveIndex(0);
    } else if (event.key === 'End') {
      setActiveIndex(actions.length - 1);
    }
  };

  return (
    <div role="toolbar" onKeyDown={handleKeyDown}>
      {actions.map((action, index) => (
        <button key={action.id} tabIndex={index === activeIndex ? 0 : -1}>
          {action.label}
        </button>
      ))}
    </div>
  );
}
```

A few conventions worth keeping consistent with the rest of Altrone:

- **Arrow keys** move within a composite widget.
- **Home / End** jump to the first / last item.
- **Escape** closes any overlay (menu, popover, dropdown) and returns focus to whatever opened it — never leave focus stranded on an element that just disappeared.

:::tip
If you're composing existing Altrone components (e.g. a row of `Button`s), you likely don't need to build roving `tabindex` yourself — only reach for it when you're building a genuinely new composite widget from raw elements.
:::

## Focus: visible, trapped where needed, returned on close

Three separate concerns, all equally important:

**Focus visibility.** Style focus with `:focus-visible`, not `:focus`. `:focus` also matches a mouse click, which produces a focus ring nobody asked for; `:focus-visible` shows it only when the browser thinks keyboard/assistive-tech navigation is in play.

```scss
/* Wrong — shows a ring on every mouse click too */
.customControl:focus {
  outline: 2px solid var(--accent-9);
}

/* Correct */
.customControl:focus-visible {
  outline: 2px solid var(--accent-9);
}
```

**Focus trapping.** Any overlay that takes over the screen — a modal, a dialog, a drawer — must trap focus inside it while open: Tab cycles through the overlay's own controls and never escapes to the page behind it. Altrone's `Modal`, `Dialog`, and `Drawer` already do this; if you build your own full-screen overlay, you need the same trap (a library like `focus-trap-react`, or the native `<dialog>` element's built-in modal behavior, are both reasonable ways to get it without rolling it by hand).

**Focus return.** When an overlay closes, focus must go back to whatever triggered it — the button that opened the dialog, the row that opened the menu. Losing this is one of the most common accessibility regressions: the user presses Escape, the dialog disappears, and focus silently resets to `<body>`, breaking their mental model of where they are on the page.

```tsx filename="useFocusReturn.ts"
function useFocusReturn(isOpen: boolean) {
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);
}
```

## Icon-only controls need a name

A control with only an icon and no visible text has no accessible name unless you give it one explicitly. Screen reader users hear nothing — or, worse, the icon's raw SVG file name. This is **mandatory**, not a nice-to-have, for every icon-only control you build.

Altrone's own `Button` already enforces this shape: `label` is a required prop even when `showLabel={false}` hides it visually — it still becomes the accessible name and the tooltip text.

```tsx
import { Button } from 'altrone-ui';
import { Settings } from 'lucide-react';

<Button label="Open settings" showLabel={false} icon={<Settings />} />;
```

If you're building a bare icon control from scratch rather than composing `Button`, do the equivalent by hand:

```tsx
/* Wrong — no accessible name at all */
<button onClick={onDelete}>
  <TrashIcon />
</button>

/* Correct */
<button onClick={onDelete} aria-label="Delete item">
  <TrashIcon />
</button>
```

:::warning
`title` is not a substitute for `aria-label` — its screen reader support is inconsistent, and it's not reliably exposed on touch devices at all.
:::

## Announcing changes: `aria-live`

Some UI changes happen without any element gaining focus — a toast appears, a background save finishes, a filter changes the result count. A screen reader user has no way to know this happened unless you announce it through a **live region**.

Altrone's `Notifications` component wires this up for you. If you're building your own async-feedback UI outside of it, the same pattern applies:

```tsx
function SaveStatus({ status }: { status: 'idle' | 'saving' | 'saved' }) {
  return (
    <div aria-live="polite" role="status">
      {status === 'saving' && 'Saving…'}
      {status === 'saved' && 'Saved'}
    </div>
  );
}
```

Use `aria-live="polite"` for routine status updates (a save finished, a count updated) — it waits for the user's current screen reader output to finish. Reserve `aria-live="assertive"` for things that genuinely need immediate interruption, like a session timing out; using it for routine updates is more disruptive than helpful.

## Contrast and never relying on color alone

Text and meaningful UI elements must meet **WCAG AA**: 4.5:1 contrast for normal text, 3:1 for large text (≥18pt / 24px, or ≥14pt bold) and for UI element boundaries (an input's border, a focus ring).

Always build color combinations from Altrone's semantic role tokens (`--danger-text-1`, `--success-solid-1`, `--text-*`, …, see the [Color](color) foundation) rather than picking a raw hex value — the tokens are already tuned to AA, a hand-picked color may not be.

The second half of this rule matters just as much: **state must never be communicated by color alone.** A red input border with no other signal is invisible to a colorblind user (and to anyone glancing quickly). Pair color with an icon, text, or both.

:::col-2
**Color only — fails**

```tsx
<TextInput
  label="Email"
  style={{ borderColor: 'var(--danger-border-1)' }}
/>
```

---

**Color + text + icon — passes**

```tsx
<Form.Field
  label="Email"
  name="email"
  errorMessage="Enter a valid email address"
>
  <TextInput />
</Form.Field>
```
:::

## Reduced motion: stop decoration, keep feedback

Respect `prefers-reduced-motion`, but don't over-apply it. The WCAG intent (2.3.3) is narrower than "turn off all animation": it targets motion that's **decorative, autoplaying, or looping with no informational content.** Motion that's direct feedback to something the user just did is not what this is about, and removing it can make the UI feel unresponsive instead of more accessible.

Two real examples from Altrone's own components, which landed differently on purpose:

- A skeleton's shimmer is purely decorative — it communicates nothing a static gray block doesn't. It's disabled entirely under reduced motion.
- A loading spinner is a functional status indicator — the only signal that a background operation is still running. It keeps spinning under reduced motion, since removing it would remove the only feedback that anything is happening at all.

If you're adding manual JS-driven timing (not a CSS transition, which `prefers-reduced-motion` handles for you via plain media queries) use the same SSR-safe hook the rest of Altrone uses, rather than hardcoding a duration:

```tsx
import { useMediaMatch } from 'altrone-ui';

function useAutoDismiss(onDismiss: () => void) {
  const reducedMotion = useMediaMatch('(prefers-reduced-motion: reduce)');
  const delay = reducedMotion ? 0 : 300;

  useEffect(() => {
    const timer = setTimeout(onDismiss, delay);
    return () => clearTimeout(timer);
  }, [onDismiss, delay]);
}
```

:::note
When you're unsure whether a specific animation should stop under reduced motion or keep playing, don't guess — the two examples above landed on opposite answers for a reason specific to what the motion was communicating. Ask, rather than defaulting to "disable everything."
:::

## Hit area: at least ~24px, even at the smallest size

A control's visible size and its clickable/tappable area are not the same thing. Even at Altrone's smallest `size="mini"`, the actual hit target stays at least ~24px — typically via invisible padding extending past the rendered border — so the control stays usable for anyone with limited fine motor control, and on touch devices generally.

If you design your own compact control, don't let "small" collapse the hit area along with the visual size:

```scss
/* A 16px visible icon button still needs a real hit area */
.miniIconButton {
  width: 16px;
  height: 16px;
  padding: 4px; /* pushes the effective hit area to 24px */
}
```

## Form validation: `aria-invalid` + `aria-describedby`

A red border communicates invalid state visually, but a screen reader user needs two more things wired up explicitly: the field must be marked invalid (`aria-invalid="true"`), and the error message must be programmatically linked to the field (`aria-describedby`) so it's read out as part of focusing or inspecting that field — not just sitting nearby in the DOM with no connection to it.

Altrone's `Form.Field` sets `aria-invalid` on its child input automatically once you pass it an `errorMessage` — but it doesn't yet link the message to the field via `aria-describedby`, so if you're building a fully custom field from raw elements, wire that part yourself:

```tsx
function CustomField({ error }: { error?: string }) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id}>Promo code</label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
```

## Checklist for your own components

When you're extending Altrone with a component of your own, run it against this list before calling it done:

:::col-2
**Likely missing**

- Icon-only control with no `aria-label`
- Custom overlay that doesn't return focus on close
- `:focus` used instead of `:focus-visible`
- A status change with nothing announced via `aria-live`
- An invalid field with a red border and nothing else

---

**What to check instead**

- Every icon-only control has an accessible name
- Closing any overlay restores focus to its trigger
- Focus rings only appear for keyboard/AT navigation
- Async status changes are wrapped in a live region
- Invalid state pairs color with text/icon, plus `aria-invalid` + `aria-describedby`
:::

:::tip
Start from native HTML elements and semantics whenever the component allows it — a `<button>`, a `<label htmlFor>`, a native `<dialog>`. You get keyboard support, roles, and focus behavior for free, and you only need to add ARIA for the parts native HTML genuinely doesn't cover.
:::

## Related topics

- [Color](color) — the semantic role tokens behind every AA-compliant color pairing
- [Typography](typography) — the size/weight scale contrast requirements apply to
- [Motion](motion) — how `prefers-reduced-motion` is implemented across the three animation layers
- [Entering data](enteringData) — the different value shapes Altrone's input controls collect, from free text to files
- [Feedback](feedback) — the `aria-live` politeness split applied to toasts, messages, and dialogs
- [Actions](actions) — why icon-only buttons need a real name in every one of their homes, not just as `Button`
- [Keyboard](keyboard) — the roving-`tabindex` and arrow-key patterns this article's keyboard section only introduces
- [Touch devices](touchDevices) — pointer events, gesture-claiming, and other touch-specific conventions
