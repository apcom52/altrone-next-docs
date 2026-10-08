# Switch

A switch turns something on or off, and the change takes effect immediately — no Save button. Use it for settings the user expects to apply at once: turn on the dark theme, allow notifications, activate a feature.

## Basic usage

```tsx
const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onChange={setEnabled}>
  Dark theme
</Switch>
```

::playground{src=switch/SwitchBasicDemo caption="A controlled switch with a label"}

`Switch` has the same contract as [Checkbox](/en/components/controls/checkbox): it keeps no state of its own, so pass `checked` and `onChange` together. The only difference is the look and the role — assistive technologies announce it as a switch, not as a checkbox, and it has no `indeterminate` state.

:::note
`onChange` receives the **next** value first and the native event second: `(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void`. Pass a `useState` setter straight in.
:::

## Without a label

When there is no text next to the switch, give it a name with `aria-label` or `aria-labelledby`. They land on the `<input>` itself, not on the wrapper.

```tsx
<Switch aria-label="Wi-Fi" checked={enabled} onChange={setEnabled} />
```

::playground{src=switch/SwitchNoLabelDemo caption="Only the switch, named for screen readers"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. It scales the track, the handle and the label together. The clickable row never gets lower than 24px, even at `mini`.

```tsx
<Switch size="s" checked={on} onChange={setOn}>Compact</Switch>
<Switch size="l" checked={on} onChange={setOn}>Large</Switch>
```

::playground{src=switch/SwitchSizesDemo caption="Five sizes"}

## Risky settings

`danger` colors the label in the danger tone. Use it when turning the setting on carries a risk, such as opening public access.

```tsx
<Switch checked={enabled} onChange={setEnabled} danger>
  Public access to the data
</Switch>
```

::playground{src=switch/SwitchDangerDemo caption="A danger label"}

:::warning
A switch with `danger` still changes at once. If the action needs a confirmation, ask for it in `onChange` before you update `checked`, not after.
:::

## Disabled

`disabled` is set on the native `<input>`: the switch ignores clicks and keyboard, and its track and label turn gray.

```tsx
<Switch disabled onChange={() => {}}>Notifications (unavailable)</Switch>
<Switch checked disabled onChange={() => {}}>Autosave (unavailable, on)</Switch>
```

::playground{src=switch/SwitchDisabledDemo caption="Disabled, off and on"}

## Inside a form

Inside `Form.Field` the switch picks up `name`, `disabled` and `size` from the form. A prop passed to `Switch` directly wins. `name` is also what makes the value part of a native form submit.

```tsx
<Form size="l">
  <Form.Field name="email">
    <Switch checked={email} onChange={setEmail}>Email notifications</Switch>
  </Form.Field>
  <Form.Field name="sms" disabled>
    <Switch checked={sms} onChange={setSms}>SMS notifications</Switch>
  </Form.Field>
</Form>
```

::playground{src=switch/SwitchFormDemo caption="Size from the form; the second field is locked"}

## Keyboard

Focus lands on the real `<input role="switch">`, so the switch is reachable with `Tab`. `Space` toggles it; `Enter` doesn't, just like a native checkbox. The focus ring appears only for keyboard focus.

## Refs and styling

`ref` points to the root `<label>`. `className` and `style` apply to it as well, and every other `<label>` attribute is passed to it. To restyle the switch, override its [CSS variables](/en/components/controls/switch/css-vars).

## Props

`Switch` takes all the props of `Checkbox` except `indeterminate`.

:::prop[checked]{type="boolean" default="false"}
The controlled state.
:::

:::prop[onChange*]{type="(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void"}
Called when the user toggles the switch. The first argument is the next value, the second is the native event.
:::

:::prop[danger]{type="boolean" default="false"}
Colors the label in the danger tone.
:::

:::prop[disabled]{type="boolean"}
Disables the switch. Read from the form context when not set.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Size of the track, the handle and the label. Read from the form context when not set.
:::

:::prop[name]{type="string"}
The `name` of the `<input>`. Read from the form context when not set.
:::

:::prop[children]{type="ReactNode"}
The label next to the switch. Accepts text or any React node.
:::

:::prop[aria-label]{type="string"}
The accessible name when there is no `children`. Applied to the `<input>`; `aria-labelledby` and `aria-describedby` work the same way.
:::

:::prop[ref]{type="Ref<HTMLLabelElement>"}
Ref of the root `<label>`.
:::

Every other attribute of `<label>`, `className` and `style` included, is passed to the root element.

## Related topics

- [Checkbox](/en/components/controls/checkbox) — for choices that are saved later, and for partial selection
- [Form](/en/components/controls/form) — `Form.Field` hands `name`, `disabled` and `size` down to the switch
