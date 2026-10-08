# Button

A button is the point where a user's intent turns into an action. Pressing it should feel instant and predictable: the user looks at the button and immediately knows what will happen. If that takes an explanation, something went wrong before they even pressed it.

## Variants

Each variant carries a certain weight in the interface. Use them consistently — it helps users read the hierarchy of actions.

:::col-3
::playground{src=button/ButtonDefaultDemo}

**Default**

The baseline variant for neutral actions: "Save draft", "Back", "Close". It doesn't draw extra attention, but stays easy to spot.

```tsx
<Button label="Save draft" />
```

---

::playground{src=button/ButtonSubmitDemo}

**Submit**

For the main action on a screen. Use no more than one per area — otherwise the hierarchy collapses.

```tsx
<Button label="Send" variant="submit" />
```

---

::playground{src=button/ButtonTextDemo}

**Text**

For secondary and auxiliary actions next to the main button. It doesn't compete visually, but stays reachable.

```tsx
<Button label="Cancel" variant="text" />
```

:::

## Sizes

A button's size sets its place in the layout, not its importance.

```tsx
<Button size="mini" label="mini" />
<Button size="s"    label="Small" />
<Button size="m"    label="Medium" />
<Button size="l"    label="Large" />
<Button size="xl"   label="Extra large" />
```

::playground{src=button/ButtonSizesDemo caption="All five sizes side by side"}

`m` is the default and fits most contexts. `s` and `mini` work well in dense interfaces: tables, toolbars, compact cards. `l` and `xl` are for accent areas of a page or touch-first interfaces with large tap targets.

## Dangerous actions

The `danger` modifier applies red to every variant. It signals irreversibility: deleting, losing data, leaving without saving.

```tsx
<Button label="Delete account" danger />
<Button label="Delete account" variant="submit" danger />
<Button label="Delete" variant="text" danger />
```

::playground{src=button/ButtonDangerDemo caption="The danger modifier on all three variants"}

:::warning
Don't use `danger` as a way to grab attention. A red button is a promise: pressing it will cost the user something. Breaking that promise erodes trust.
:::

## Icons

`icon` and `additionalIcon` are typed as a `ReactElement` — there is no icon registry to pick from. Bring the icon library your app already uses.

```tsx
import { Send, ChevronDown } from "lucide-react";

<Button label="Send" icon={<Send />} />
<Button label="More options" additionalIcon={<ChevronDown />} />
<Button label="Export" icon={<Download />} additionalIcon={<ChevronDown />} />
```

::playground{src=button/ButtonIconsDemo caption="icon, additionalIcon and both together"}

An icon on the left clarifies the action. An icon on the right hints at what the button does next — opening a menu, navigating, expanding.

The button sizes its icon slot to match `size`, so with `lucide-react` you don't pass `size` or `color` to the icon yourself.

:::tip
An icon works best when it reinforces the word rather than replaces it. If the button is clear without an icon, the icon is optional.
:::

### Icon-only buttons

`showLabel={false}` hides the label visually and turns the button into a circle. The `label` stays: it becomes the accessible name for screen readers and the tooltip on hover.

```tsx
import { X, Settings } from "lucide-react";

<Button label="Close panel" showLabel={false} icon={<X />} />
<Button label="Settings" showLabel={false} icon={<Settings />} />
```

::playground{src=button/ButtonIconOnlyDemo caption="Hover a button to see its tooltip"}

To show a tooltip with different text, use `tooltip`. A keyboard shortcut is added with `kbd`. Don't wrap the button in a `Tooltip` yourself — you'd get two tooltips opening at once.

```tsx
<Button
  label="Sort alphabetically"
  showLabel={false}
  icon={<AArrowUp />}
  tooltip="Sort A → Z"
/>

<Button label="Save" showLabel={false} icon={<Save />} kbd="⌘S" />
```

A `badge` on an icon-only button floats over its top-right corner instead of sitting inline.

:::warning
An icon-only button requires an icon that's unmistakable to your audience. If in doubt, keep the label.
:::

## Badge

A badge embeds a little context into the button: a notification count, a status, a "New" marker.

```tsx
<Button label="Notifications" badge={5} />
<Button label="Export" badge="NEW" />
<Button label="Pay later" badge="+20%" danger />
```

::playground{src=button/ButtonBadgeDemo caption="A counter, a text marker and a badge with danger"}

## Async states

The `state` prop drives feedback during long operations. While it is anything other than `idle`, the button is disabled automatically and shows an indicator.

```tsx
const [state, setState] = useState<"idle" | "loading" | "succeeded" | "failed">(
  "idle",
);

async function handleSave() {
  setState("loading");
  try {
    await save();
    setState("succeeded");
  } catch {
    setState("failed");
  } finally {
    setTimeout(() => setState("idle"), 2000);
  }
}

<Button label="Save" state={state} onClick={handleSave} />;
```

::playground{src=button/ButtonStateDemo caption="Press either button to see loading, then the result"}

| State       | What it shows                |
| ----------- | ---------------------------- |
| `idle`      | A regular button             |
| `loading`   | A spinner, button is disabled |
| `succeeded` | A checkmark                  |
| `failed`    | A cross                      |

:::tip
After `succeeded` or `failed`, return `state` to `idle` — otherwise the button stays disabled. This is usually done with `setTimeout`.
:::

## Toggle button

`selected` turns the button into a toggle. The `aria-pressed` attribute is set automatically.

```tsx
const [active, setActive] = useState(false);

<Button
  label="Wi-Fi"
  icon={<Wifi />}
  selected={active}
  onClick={() => setActive((v) => !v)}
/>;
```

::playground{src=button/ButtonSelectedDemo caption="Press to toggle the state"}

It works well for view modes, filters and any on/off state.

## Rendering as another element (asChild)

`asChild` merges the button's styling and behavior onto its child element. It's useful when you need the look of a button but the semantics of a link or a custom component.

```tsx
import { Link } from "react-router-dom";

<Button label="Go to profile" icon={<User />} asChild>
  <Link to="/profile" />
</Button>;
```

:::note
`asChild` requires exactly one child element. If `children` isn't a valid React element, the component returns `null` and logs an error to the console.
:::

## Props

:::prop[label*]{type="string"}
The button text. Required. Used as the visible label, the accessible name for screen readers, and the tooltip text when `showLabel={false}`.
:::

:::prop[variant]{type="'default' | 'submit' | 'text'" default="'default'"}
Visual style. `submit` is filled with the primary color — the main action. `text` has no background or border — a secondary action.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Button size. Sets height, padding and font size.
:::

:::prop[danger]{type="boolean" default="false"}
Applies red styling. Use only for irreversible actions.
:::

:::prop[icon]{type="ReactElement"}
Icon before the label.
:::

:::prop[additionalIcon]{type="ReactElement"}
Icon after the label. Suits a menu or navigation hint.
:::

:::prop[showLabel]{type="boolean" default="true"}
When `false`, hides the text visually. The button is automatically wrapped in a `Tooltip` with the text from `tooltip` or `label`.
:::

:::prop[tooltip]{type="string | ReactElement"}
Tooltip content. Only used when `showLabel={false}`; overrides `label`.
:::

:::prop[kbd]{type="string"}
A keyboard-shortcut badge in the automatic tooltip (for example `"⌘S"`). Only used when `showLabel={false}`.
:::

:::prop[badge]{type="number | string | ReactElement"}
A small badge inside the button: a counter, a marker or a status.
:::

:::prop[state]{type="'idle' | 'loading' | 'succeeded' | 'failed'" default="'idle'"}
Async operation state. Any value other than `idle` disables the button and replaces its content with the matching indicator.
:::

:::prop[successIcon]{type="ReactElement"}
Icon for `state="succeeded"`. A checkmark by default.
:::

:::prop[failedIcon]{type="ReactElement"}
Icon for `state="failed"`. A cross by default.
:::

:::prop[selected]{type="boolean" default="false"}
Toggle state. Sets `aria-pressed` and applies the selected visual style.
:::

:::prop[disabled]{type="boolean" default="false"}
Disables the button. Also applied automatically when `state !== 'idle'`.
:::

:::prop[type]{type="'button' | 'submit' | 'reset'" default="'button'"}
The HTML button type. Defaults to `"button"` — not `"submit"` as in the browser.
:::

:::prop[asChild]{type="boolean" default="false"}
Merges the button's styling and behavior onto the child element through the Slot pattern.
:::

## Related topics

- [Actions](/en/foundations/actions) — how `Button`'s concepts (emphasis, danger, selected) stay consistent in toolbars and menus
- [Accessibility](/en/foundations/accessibility) — the accessible-name rule behind icon-only buttons
- [Icons](/en/foundations/icons) — the library-wide icon contract that `icon` and `additionalIcon` follow
- [Loading](/en/foundations/loading) — how `state="loading"` fits with the other loading patterns
