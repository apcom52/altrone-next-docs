# Form

CSS-переменные, которые читают `Form` и `Form.Field` и которые можно переопределить.

:::spoiler[Как переопределить переменные]
Переменные объявлены на элементе `data-altrone-root`, поэтому их можно переопределить для всего приложения или для одной формы. `style` на `Form` попадает на элемент `<form>` — задавайте там отступ между полями. `style` на `Form.Field` попадает на корень самого поля, откуда читаются цвета метки, описания и ошибки:

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

::playground{src=form/FormCssVarsDemo caption="Увеличенный отступ между полями и акцентная отметка обязательности"}

Что переопределить нельзя:

- **Цвет метки отключённого поля.** Он берётся из глобальной `--disabled-text-color`, поэтому её изменение затронет все отключённые контролы.
- **Состояние ошибки метки.** Невалидное поле красит метку в `--form-field-error-message-text-color` — ту же переменную, что и текст ошибки, — разделить их нельзя.
:::

## Внутренние переменные

Определяются самими `Form` и `Form.Field`.

::::css-vars
:::css-var[--form-field-gap]{kind="gap" type="Отступ"}
Расстояние между полями формы. По умолчанию: `var(--l-gap)` (`12px`)
:::

:::css-var[--form-field-label-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет метки. По умолчанию: `var(--text-2)`
:::

:::css-var[--form-field-description-text-color]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет описания. По умолчанию: `var(--text-1)`
:::

:::css-var[--form-field-required-mark-color]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет отметки обязательности. По умолчанию: `var(--danger-text-1)`
:::

:::css-var[--form-field-error-message-text-color]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет текста ошибки, он же — цвет метки невалидного поля. По умолчанию: `var(--danger-text-1)`
:::
::::

## Глобальные переменные

Не определяются `Form`: глобальные дизайн-токены, которые она читает.

::::css-vars
:::css-var[--l-gap]{kind="gap" type="Отступ"}
Значение, в которое разрешается `--form-field-gap`. По умолчанию: `12px`
:::

:::css-var[--xs-gap]{kind="gap" type="Отступ"}
Расстояние между меткой, контролом, ошибкой и описанием. По умолчанию: `4px`
:::

:::css-var[--space-inline]{kind="gap" type="Отступ"}
Расстояние между меткой и иконкой подсказки. По умолчанию: `var(--s-gap)`
:::

:::css-var[--text-1]{kind="text" type="Цвет текста" color="var(--text-1)"}
Вторичный цвет текста, в который разрешается цвет описания. По умолчанию: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Основной цвет текста, в который разрешается цвет метки. По умолчанию: `var(--gray-12)`
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет, в который разрешаются отметка обязательности и ошибка. По умолчанию: `var(--red-11)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет метки отключённого поля. По умолчанию: `var(--gray-9)`
:::

:::css-var[--text-size-4]{kind="font" type="Размер шрифта"}
Размер шрифта метки. По умолчанию: `14px`
:::

:::css-var[--text-size-3]{kind="font" type="Размер шрифта"}
Размер шрифта описания и ошибки. По умолчанию: `12px`
:::
::::
