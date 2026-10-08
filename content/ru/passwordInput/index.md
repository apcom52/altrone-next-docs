# PasswordInput

Поле для ввода пароля. Оно прячет символы по мере набора и добавляет кнопку-глаз, которая по просьбе пользователя их показывает. Пароли набирают с ошибками очень часто, а возможность посмотреть, что получилось, — самый простой способ не промахнуться при входе.

`PasswordInput` — это `TextInput` с одной добавленной кнопкой, поэтому всё, что вы знаете про [TextInput](/ru/components/controls/textInput), работает и здесь: острова, размеры, состояния, `inputRef`.

## Базовый пример

```tsx
const [password, setPassword] = useState('');

<PasswordInput value={password} onChange={setPassword} placeholder="Enter your password" />
```

::playground{src=passwordInput/PasswordInputBasicDemo caption="Нажмите на глаз, чтобы показать или скрыть пароль"}

:::note
`onChange` работает так же, как в `TextInput`: первым аргументом приходит строка, вторым — нативное событие, `(value: string, event: ChangeEvent) => void`.
:::

## Форма входа

Типичное место для поля: под почтой и над кнопкой отправки.

```tsx
<Flex orientation="vertical" gap="m">
  <TextInput value={email} onChange={setEmail} placeholder="Email">
    <TextInput.IconIsland icon={<Mail />} />
  </TextInput>
  <PasswordInput value={password} onChange={setPassword} placeholder="Password" />
  <Button label="Sign in" variant="submit" />
</Flex>
```

::playground{src=passwordInput/PasswordInputLoginDemo caption="Почта и пароль в одной форме"}

## Без переключателя

Если правила безопасности запрещают показывать пароль на экране, задайте `showControls={false}`. Кнопка исчезнет, а поле будет вести себя как обычный `<input type="password">`.

```tsx
<PasswordInput value={password} onChange={setPassword} showControls={false} />
```

::playground{src=passwordInput/PasswordInputNoToggleDemo caption="Кнопки-глаза нет — символы всегда скрыты"}

Кнопка пропадает и у `readOnly`-поля: проверять в значении, которое нельзя редактировать, нечего.

## Дополнительные кнопки и иконки

Поле — это `TextInput`, поэтому внутрь можно положить острова. Они встанут рядом с кнопкой-глазом. Удобно для кнопки «Сгенерировать пароль» или иконки ключа в начале.

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

::playground{src=passwordInput/PasswordInputIslandsDemo caption="Иконка ключа слева, кнопка генерации рядом с глазом"}

## Внутри формы

Внутри `Form.Field` поле берёт `name`, `disabled`, `invalid` и `size` из формы, так что повторять их не нужно. Ошибка из `errorMessages` сама окрашивает поле.

```tsx
<Form errorMessages={{ password: 'The password must be at least 8 characters' }}>
  <Form.Field name="password" label="Password">
    <PasswordInput value={password} onChange={setPassword} />
  </Form.Field>
</Form>
```

::playground{src=passwordInput/PasswordInputFormDemo caption="Ошибка из формы подсвечивает поле"}

## Свойства

`PasswordInput` принимает все пропы [TextInput](/ru/components/controls/textInput), кроме `type` — его поле переключает само. Ниже только те, что есть именно у него.

:::prop[value]{type="string"}
Контролируемое значение.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Вызывается при каждом изменении. Первый аргумент — строка, второй — нативное событие.
:::

:::prop[showControls]{type="boolean" default="true"}
Показывать ли кнопку, которая раскрывает пароль. У `readOnly`-поля её нет никогда.
:::

:::prop[showIcon]{type="ReactElement" default="<Eye />"}
Иконка на кнопке, пока пароль скрыт: она предлагает его показать. См. вкладку [Иконки](/ru/components/controls/passwordInput/icons).
:::

:::prop[hideIcon]{type="ReactElement" default="<EyeOff />"}
Иконка на кнопке, пока пароль виден. См. вкладку [Иконки](/ru/components/controls/passwordInput/icons).
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ref всего поля.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
Ref самого `<input>`.
:::

## Похожие темы

- [TextInput](/ru/components/controls/textInput) — поле, на котором построен `PasswordInput`: острова, размеры, состояния
- [Form](/ru/components/controls/form) — подписи, подсказки и сообщения об ошибках вокруг поля
- [Button](/ru/components/controls/button) — компонент, на котором сделана кнопка-глаз
