# Form

The CSS custom properties `Form` and `Form.Field` read and that can be overridden.

:::spoiler[How to override variables]
The variables are declared on the `data-altrone-root` element, so they can be overridden for the whole app or for a single form. `style` on `Form` reaches the `<form>` element — set the gap there. `style` on `Form.Field` reaches the field's own root, which is where the label, description and error colors are read from:

```tsx
<Form style={{ "--form-field-gap": "28px" } as React.CSSProperties}>
  <Form.Field
    name="email"
    label="Email"
    required
    style={{ "--form-field-required-mark-color": "var(--accent-9)" } as React.CSSProperties}
  >
    <TextInput value={email} onChange={setEmail} />
  </Form.Field>
</Form>
```

::playground{src=form/FormCssVarsDemo caption="A wider gap between fields and an accent-colored required mark"}

What can't be overridden:

- **The color of a disabled label.** It comes from the global `--disabled-text-color`, so changing it affects every disabled control.
- **The error state of the label.** An invalid field paints its label with `--form-field-error-message-text-color`, the same variable as the error message — they can't be split.
:::

## Internal variables

Defined by `Form` and `Form.Field` themselves.

::::css-vars
:::css-var[--form-field-gap]{kind="gap" type="Spacing"}
Space between the fields of a form. Default: `var(--l-gap)` (`12px`)
:::

:::css-var[--form-field-label-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Label color. Default: `var(--text-2)`
:::

:::css-var[--form-field-description-text-color]{kind="text" type="Text color" color="var(--text-1)"}
Description color. Default: `var(--text-1)`
:::

:::css-var[--form-field-required-mark-color]{kind="text" type="Text color" color="var(--danger-text-1)"}
Color of the required mark. Default: `var(--danger-text-1)`
:::

:::css-var[--form-field-error-message-text-color]{kind="text" type="Text color" color="var(--danger-text-1)"}
Error message color, also used for the label of an invalid field. Default: `var(--danger-text-1)`
:::
::::

## Global variables

Not defined by `Form`: the global design tokens it reads.

::::css-vars
:::css-var[--l-gap]{kind="gap" type="Spacing"}
The value `--form-field-gap` resolves to. Default: `12px`
:::

:::css-var[--xs-gap]{kind="gap" type="Spacing"}
Space between the label, the control, the error and the description. Default: `4px`
:::

:::css-var[--space-inline]{kind="gap" type="Spacing"}
Space between the label and the hint icon. Default: `var(--s-gap)`
:::

:::css-var[--text-1]{kind="text" type="Text color" color="var(--text-1)"}
Secondary text color the description resolves to. Default: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Base text color the label resolves to. Default: `var(--gray-12)`
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Color the required mark and the error resolve to. Default: `var(--red-11)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Label color of a disabled field. Default: `var(--gray-9)`
:::

:::css-var[--text-size-4]{kind="font" type="Font size"}
Label font size. Default: `14px`
:::

:::css-var[--text-size-3]{kind="font" type="Font size"}
Font size of the description and the error. Default: `12px`
:::
::::
