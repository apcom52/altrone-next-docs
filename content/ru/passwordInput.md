# PasswordInput

Специализированный компонент для ввода паролей. Строится поверх `TextInput` и добавляет одну важную деталь: кнопку-переключатель видимости. Пользователь может проверить, что ввёл правильно, — это снижает число ошибок при авторизации и регистрации.

## Базовый пример

```tsx
const [password, setPassword] = useState('');

<PasswordInput
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Введите пароль"
/>
```

::playground{src=PasswordInputBasicDemo caption="Нажмите на иконку глаза, чтобы переключить видимость"}

:::note
В отличие от `TextInput`, обработчик `onChange` получает стандартный `ChangeEvent<HTMLInputElement>`, а не строку напрямую. Используйте `e.target.value` для получения значения.
:::

## Форма входа

```tsx
<Flex direction="vertical" gap="m">
  <TextInput
    value={email}
    onChange={setEmail}
    placeholder="Электронная почта"
  >
    <TextInput.IconIsland icon={<Mail size={16} />} placement="left" />
  </TextInput>
  <PasswordInput
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Пароль"
  />
  <Button label="Войти" variant="submit" />
</Flex>
```

::playground{src=PasswordInputLoginDemo}

## Без кнопки переключения

Когда показ пароля нежелателен по требованиям безопасности, `showControls={false}` скрывает кнопку-переключатель. Поле ведёт себя как обычный `<input type="password">`.

```tsx
<PasswordInput
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  showControls={false}
/>
```

## Внутри формы

Пропы `name`, `disabled`, `invalid` и `size` передаются автоматически через контекст `Form.Field`.

```tsx
<Form errorMessages={{ password: ['Пароль должен содержать минимум 8 символов'] }}>
  <Form.Field name="password" label="Пароль">
    <PasswordInput
      value={form.password}
      onChange={(e) => setForm({ ...form, password: e.target.value })}
    />
  </Form.Field>
</Form>
```

## Свойства

:::prop[value]{type="string"}
Контролируемое значение поля.
:::

:::prop[onChange]{type="(e: ChangeEvent<HTMLInputElement>) => void"}
Обработчик изменения. Получает стандартный DOM-ивент, не строку.
:::

:::prop[showControls]{type="boolean" default="true"}
Показывать ли кнопку переключения видимости пароля.
:::

:::prop[invalid]{type="boolean" default="false"}
Состояние ошибки. Также читается из `FormFieldContext`.
:::

:::prop[disabled]{type="boolean" default="false"}
Отключает поле. Также читается из `FormFieldContext`.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля. Также читается из `FormFieldContext`.
:::

:::prop[placeholder]{type="string"}
Текст-подсказка в пустом поле.
:::

## Рекомендации

**Всегда оставляйте `showControls` включённым.** Пользователи делают ошибки при вводе — возможность увидеть введённое значение сокращает их. Отключайте только при жёстких требованиях политики безопасности.

**Не используйте `PasswordInput` для PIN-кодов.** Короткие числовые коды удобнее вводить через `NumberInput` или обычный `TextInput` с `type="password"` и `inputMode="numeric"`.

**Подтверждение пароля — отдельное поле.** При регистрации используйте два независимых `PasswordInput`. Не пытайтесь реализовать проверку совпадения внутри одного компонента — это задача формы.
