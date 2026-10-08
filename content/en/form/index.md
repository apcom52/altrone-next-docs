# Form

A form is a contract between the interface and the person using it: they enter data, the system explains what went wrong and accepts the result. `Form` handles the plumbing — it hands the size, the disabled state and the error messages to every field at once through context, with no props passed down by hand.

## Basic form

Wrap the fields in `Form` and each control in `Form.Field`. The label, the required mark and the field name live on `Form.Field`; the input itself knows nothing about them.

```tsx
<Form onSubmit={handleSubmit}>
  <Flex orientation="vertical" gap="m">
    <Form.Field name="email" label="Email" required>
      <TextInput value={email} onChange={setEmail} placeholder="you@example.com" />
    </Form.Field>
    <Form.Field name="password" label="Password" required>
      <PasswordInput value={password} onChange={setPassword} />
    </Form.Field>
    <Button label="Sign in" variant="submit" type="submit" />
  </Flex>
</Form>
```

::playground{src=form/FormBasicDemo caption="A standard sign-in form"}

`Form` calls `preventDefault()` on submit itself, so `onSubmit` doesn't have to. The exception is a form with a native `action` (for example a Server Action): it is left alone and the browser handles the submission.

## Validation and errors

Pass an `errorMessages` object whose keys match the field names. `Form.Field` reads its own error from the context and shows it under the control; the control itself switches to the invalid state automatically.

```tsx
const [errors, setErrors] = useState<Record<string, string>>({});

const handleSubmit = () => {
  const next: Record<string, string> = {};
  if (!email.trim()) next.email = "Enter your email";
  else if (!email.includes("@")) next.email = "That doesn't look like an email";
  if (password.length < 8) next.password = "The password is too short";

  setErrors(next);
  if (!Object.keys(next).length) submit();
};

<Form onSubmit={handleSubmit} errorMessages={errors}>
  <Form.Field name="email" label="Email" required>
    <TextInput value={email} onChange={setEmail} />
  </Form.Field>
  <Form.Field name="password" label="Password" required>
    <PasswordInput value={password} onChange={setPassword} />
  </Form.Field>
  <Button label="Continue" variant="submit" type="submit" />
</Form>
```

::playground{src=form/FormValidationDemo caption="Press Continue with empty or invalid fields"}

A single field can take its message directly through `errorMessage` — it wins over the one from `errorMessages`.

## Hints and descriptions

`hintText` adds an icon with a tooltip next to the label. `description` puts explanatory text under the control.

```tsx
<Form.Field
  name="apiKey"
  label="API key"
  required
  hintText="The key is available in the Developer section of your account settings."
  description="Used for every API request made on your behalf."
>
  <PasswordInput value={apiKey} onChange={setApiKey} placeholder="sk-..." />
</Form.Field>
```

::playground{src=form/FormHintDemo caption="Hover the ? icon next to the label"}

## Disabling the form

`disabled` on `Form` disables every field at once — handy for read-only forms and for the loading state. A field can opt out with its own `disabled` on `Form.Field`, which overrides the form.

```tsx
<Form disabled>
  <Form.Field name="name" label="Full name">
    <TextInput value="Alex Morgan" onChange={() => {}} />
  </Form.Field>
  <Form.Field name="role" label="Role" disabled={false}>
    <TextInput value="Designer" onChange={() => {}} />
  </Form.Field>
</Form>
```

::playground{src=form/FormDisabledDemo caption="The second field ignores the lock"}

## Size

`size` on `Form` sets one size for every control inside it. Useful for dense layouts and mobile forms.

```tsx
<Form size="s">
  <Form.Field name="first" label="First name">
    <TextInput value={first} onChange={setFirst} />
  </Form.Field>
</Form>
```

::playground{src=form/FormSizeDemo caption="Every control in the form is size s"}

## What reaches the controls

`Form.Field` passes `name`, `disabled`, `size` and the invalid state down to the control inside it. `TextInput`, `TextArea`, `NumberInput`, `Select`, `Checkbox`, `Switch`, `Radio`, `Slider`, `ColorPicker`, `DatePicker` and `FilePicker` read them on their own — an explicit prop on the control still wins. Don't repeat these props on the control: that creates a second source of truth.

## Props

### Form

`Form` renders a `<form>` and accepts its native attributes too.

:::prop[onSubmit]{type="FormEventHandler<HTMLFormElement>"}
Submit handler. `preventDefault()` is called automatically unless the form has an `action`.
:::

:::prop[errorMessages]{type="Record<string, string | null | undefined>" default="{}"}
Field name → error text. A `Form.Field` with a matching `name` shows its error on its own.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
One size for every control inside the form.
:::

:::prop[disabled]{type="boolean"}
Disables every field through context.
:::

:::prop[ref]{type="Ref<HTMLFormElement>"}
Reference to the `<form>` element.
:::

### Form.Field

:::prop[name]{type="string"}
Field name. Matches a key in `errorMessages` and is passed on to the control inside.
:::

:::prop[label]{type="string"}
Field label.
:::

:::prop[required]{type="boolean"}
Shows a required mark `*` after the label.
:::

:::prop[hintText]{type="string"}
Text of the tooltip next to the label. Without it, no hint icon is drawn.
:::

:::prop[hintIcon]{type="ReactElement" default="icons.help"}
Icon of the hint button, shown together with `hintText`. See the [Icons](/en/components/controls/form/icons) tab.
:::

:::prop[description]{type="string"}
Explanatory text under the control.
:::

:::prop[errorMessage]{type="string"}
Error message for this field. Overrides the value from the form's `errorMessages`.
:::

:::prop[disabled]{type="boolean"}
Disables this field, overriding the form's `disabled`.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the field's root element.
:::

## Related topics

- [Entering data](/en/foundations/enteringData) — how to choose a control for the kind of data you're collecting
- [Button](/en/components/controls/button) — the submit button and its async states
- [Flex](/en/components/layout/flex) — stacking fields and form actions
- [Tooltip](/en/components/overlays/tooltip) — the component behind the hint next to the label
