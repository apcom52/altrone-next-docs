# PasswordInput

A field for entering a password. It hides the characters as the user types and adds an eye button that shows them on request. People mistype passwords a lot, and being able to look at what you typed is the easiest way to avoid a failed sign-in.

`PasswordInput` is a `TextInput` with that one button added, so everything you know about [TextInput](/en/components/controls/textInput) works here too: islands, sizes, states, `inputRef`.

## Basic usage

```tsx
const [password, setPassword] = useState('');

<PasswordInput value={password} onChange={setPassword} placeholder="Enter your password" />
```

::playground{src=passwordInput/PasswordInputBasicDemo caption="Click the eye to show or hide the password"}

:::note
`onChange` works the same as in `TextInput`: it receives the string first and the native event second — `(value: string, event: ChangeEvent) => void`.
:::

## Sign-in form

A typical place for the field: under the email, above the submit button.

```tsx
<Flex orientation="vertical" gap="m">
  <TextInput value={email} onChange={setEmail} placeholder="Email">
    <TextInput.IconIsland icon={<Mail />} />
  </TextInput>
  <PasswordInput value={password} onChange={setPassword} placeholder="Password" />
  <Button label="Sign in" variant="submit" />
</Flex>
```

::playground{src=passwordInput/PasswordInputLoginDemo caption="Email and password in one form"}

## Without the toggle

If your security rules forbid showing a password on screen, set `showControls={false}`. The button disappears and the field behaves like a regular `<input type="password">`.

```tsx
<PasswordInput value={password} onChange={setPassword} showControls={false} />
```

::playground{src=passwordInput/PasswordInputNoToggleDemo caption="No eye button — the characters always stay hidden"}

The button is also hidden when the field is `readOnly`: there is nothing to check in a value the user cannot edit.

## Extra buttons and icons

Since the field is a `TextInput`, you can put islands inside it. They go next to the eye button. This is handy for a "generate a password" button or a key icon at the start.

```tsx
<PasswordInput value={value} onChange={setValue}>
  <TextInput.IconIsland icon={<KeyRound />} />
  <TextInput.ActionIsland
    placement="end"
    label="Generate a password"
    icon={<RefreshCw />}
    showLabel={false}
    onClick={() => setValue(generatePassword())}
  />
</PasswordInput>
```

::playground{src=passwordInput/PasswordInputIslandsDemo caption="A key icon on the left, a generate button next to the eye"}

## Inside a form

Within `Form.Field` the field takes `name`, `disabled`, `invalid` and `size` from the form, so you don't repeat them. An error from `errorMessages` turns the field red on its own.

```tsx
<Form errorMessages={{ password: 'The password must be at least 8 characters' }}>
  <Form.Field name="password" label="Password">
    <PasswordInput value={password} onChange={setPassword} />
  </Form.Field>
</Form>
```

::playground{src=passwordInput/PasswordInputFormDemo caption="The error from the form highlights the field"}

## Props

`PasswordInput` accepts every [TextInput](/en/components/controls/textInput) prop except `type` — the field switches it itself. Here are only the props that are specific to it.

:::prop[value]{type="string"}
The controlled value.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Called on every change. The first argument is the string, the second is the native event.
:::

:::prop[showControls]{type="boolean" default="true"}
Whether to show the button that reveals the password. A `readOnly` field never shows it.
:::

:::prop[showIcon]{type="ReactElement" default="<Eye />"}
The icon on the button while the password is hidden — it invites the user to show it. See the [Icons](/en/components/controls/passwordInput/icons) tab.
:::

:::prop[hideIcon]{type="ReactElement" default="<EyeOff />"}
The icon on the button while the password is visible. See the [Icons](/en/components/controls/passwordInput/icons) tab.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
A reference to the whole field.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
A reference to the `<input>` itself.
:::

## Related topics

- [TextInput](/en/components/controls/textInput) — the field `PasswordInput` is built on: islands, sizes, states
- [Form](/en/components/controls/form) — labels, hints and error messages around the field
- [Button](/en/components/controls/button) — the component behind the eye button
