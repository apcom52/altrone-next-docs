# Entering data

Altrone ships a lot of individual input components — `TextInput`, `NumberInput`, `PasswordInput`, `AutocompleteInput`, `Search`, `TextArea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider`, `ColorPicker`, `DatePicker`, `FilePicker` — but they aren't fourteen independent designs. Most of them share one event signature, and several share one visual chassis even though they collect very different kinds of value. This article is about that shared foundation, grouped by the shape of value each control actually produces.

## One event signature, everywhere

Every `onChange`-like callback takes the semantic value first and the native DOM event last — never the other way around, and never event-only:

```ts
// TextInput
onChange?: (value: string, event: ChangeEvent) => void;
// Checkbox
onChange?: (state: boolean, event: ChangeEvent<HTMLInputElement>) => void;
// Radio
onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
```

The practical effect: you almost never need `event.target.value` — the value you actually want is already the first argument, typed correctly for that control.

## Free text: `TextInput` and the controls built on it

`NumberInput`, `PasswordInput`, `AutocompleteInput`, `Search`, and `TextArea` don't each build their own field chrome — they render a `TextInput` internally and layer their own behavior on top:

```tsx
const [value, setValue] = useState("");

<TextInput value={value} onChange={setValue} placeholder="Your name" />;
```

`TextInput` itself is a `Box` with a slot system called **islands** — small pieces that dock to the `start` or `end` of the field as children:

| Island | Purpose |
| --- | --- |
| `TextInput.TextIsland` | Static text — a currency symbol, a URL prefix, a unit |
| `TextInput.IconIsland` | A non-interactive icon signaling the field's purpose |
| `TextInput.ActionIsland` | A full `Button` docked in the field (a clear button, a reveal-password toggle) |
| `TextInput.LoadingIsland` | An in-field loading indicator |
| `TextInput.CustomIsland` | Anything else that needs to dock to an edge |
| `TextInput.CharCounterIsland` | A live character count |

```tsx
import { Search, X } from "lucide-react";

<TextInput value={search} onChange={setSearch} placeholder="Search">
  <TextInput.IconIsland icon={<Search size={16} />} placement="start" />
  {search && (
    <TextInput.ActionIsland
      label="Clear"
      icon={<X size={16} />}
      showLabel={false}
      placement="end"
      onClick={() => setSearch("")}
    />
  )}
</TextInput>
```

`PasswordInput`'s reveal toggle and `Search`'s clear button are both just an `ActionIsland` — the same mechanism you'd reach for in your own composition, not a special case.

## Structured values that still look like a text field: `ColorPicker` and `DatePicker`

A color and a date aren't strings, but picking one still benefits from the same "click a field, see a formatted value, open something to change it" shape — so both `ColorPicker` and `DatePicker` render a `TextInput` as their default trigger internally, the same component `NumberInput`/`Search` build on:

```tsx
// ColorPicker: value is a color string; the popover is a palette/swatch picker
<ColorPicker value={color} onChange={setColor} colorPresets={presets} />

// DatePicker: value is a Dayjs object; the popover is a calendar
<DatePicker value={date} onChange={setDate} format="DD.MM.YYYY" />
```

Both accept `asChild` to replace that default `TextInput` trigger with something else entirely — a button, a custom chip — while keeping the same popover behavior.

## Booleans and single choices: `Checkbox`, `Switch`, `Radio`

These collect a smaller value shape than free text — a boolean (`Checkbox`, `Switch`) or one string/number out of a fixed set (`Radio`) — and are standalone controls rather than `TextInput`-based:

```tsx
<Checkbox checked={agreed} onChange={setAgreed}>I agree</Checkbox>
<Switch checked={enabled} onChange={setEnabled}>Enabled</Switch>
```

## Continuous values: `Slider`

`Slider`'s value is a plain number, but it exposes **two** change callbacks rather than one:

```ts
onChange: (value: number, event) => void; // fires continuously while dragging
onChangeEnd?: (value: number, event) => void; // fires once, when the drag ends
```

Reach for `onChangeEnd` for anything expensive — a network request, a heavy recompute — so it runs once per interaction instead of once per pixel of drag. `onChange` stays for cheap, purely visual updates (like a live label showing the current value).

## Collections of files: `FilePicker`

`FilePicker`'s value is always a **list** of `FileItem`s — `value`/`defaultValue` is `FileItem[]`, never a single `File`, even when `multiple` is off. That means consuming code never has to special-case "one file" vs. "many files":

```tsx
<FilePicker
  value={files}
  onChange={setFiles}
  multiple
  accept="image/*"
/>
```

It can also handle uploading for you — pass `url`/`method` (and optionally `autoUpload`) and it drives the request itself, reporting progress back through `autoUploadFn`; or skip all of that and just read `onChange`'s file list to upload however you want.

## Building your own components

1. **Follow the `(value, event)` signature** for any callback shaped like `onChange` — value first, native event last, never event-only.
2. **If your control is text-shaped, build it on `TextInput`** (compose it, don't wrap a raw `<input>`) so you inherit the island system and `Box` chrome for free.
3. **If your control needs a "click a field, open something to pick a value" pattern** (the way `ColorPicker`/`DatePicker` work), consider building its trigger on `TextInput` too, with `asChild` as the escape hatch for a fully custom trigger.
4. **Continuous dragging** — split a live `onChange` from a settled `onChangeEnd` the way `Slider` does, rather than running expensive work on every drag frame.
5. **Model a file-collecting value as a list, even when only one file is allowed** — it keeps calling code from special-casing cardinality.

## Related topics

- [Materials](materials) — the `Box` chrome every text-shaped input (and `ColorPicker`/`DatePicker`'s trigger) is actually built from
- [Accessibility](accessibility) — the keyboard and focus expectations shared across every one of these controls
- [Loading](loading) — `TextInput.LoadingIsland` and `FilePicker`'s per-file status, covered in full
- [Keyboard](keyboard) — `Slider`'s arrow-key stepping, in the context of its value model
