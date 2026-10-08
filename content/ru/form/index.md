# Form

Форма — это договор между интерфейсом и пользователем: человек вводит данные, система объясняет, что пошло не так, и принимает результат. `Form` берёт на себя связующую работу — передаёт размер, состояние отключения и сообщения об ошибках всем полям сразу через контекст, без явного прокидывания пропов.

## Базовая форма

Оберните поля в `Form`, а каждый контрол — в `Form.Field`. Метка, обязательность и имя поля задаются на `Form.Field`; сам инпут ничего об этом не знает.

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

::playground{src=form/FormBasicDemo caption="Стандартная форма входа"}

`Form` сама вызывает `preventDefault()` при отправке, поэтому в `onSubmit` это делать не нужно. Исключение — форма с нативным `action` (например, Server Action): её отправку браузер выполняет сам.

## Валидация и ошибки

Передайте объект `errorMessages` с ключами, совпадающими с именами полей. `Form.Field` читает свою ошибку из контекста и показывает её под контролом; сам контрол автоматически переходит в состояние ошибки.

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

::playground{src=form/FormValidationDemo caption="Нажмите Continue с пустыми или некорректными полями"}

Отдельному полю сообщение можно передать напрямую через `errorMessage` — оно приоритетнее значения из `errorMessages`.

## Подсказки и описания

`hintText` добавляет иконку со всплывающей подсказкой рядом с меткой. `description` размещает поясняющий текст под контролом.

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

::playground{src=form/FormHintDemo caption="Наведите на значок ? рядом с меткой"}

## Отключение формы

`disabled` на `Form` отключает все поля сразу — удобно для форм только для чтения и состояния загрузки. Отдельное поле может выйти из-под блокировки через собственный `disabled` на `Form.Field`: он переопределяет значение формы.

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

::playground{src=form/FormDisabledDemo caption="Второе поле игнорирует блокировку"}

## Размер

`size` на `Form` задаёт единый размер для всех контролов внутри. Полезно в плотных интерфейсах и мобильных формах.

```tsx
<Form size="s">
  <Form.Field name="first" label="First name">
    <TextInput value={first} onChange={setFirst} />
  </Form.Field>
</Form>
```

::playground{src=form/FormSizeDemo caption="Все контролы формы имеют размер s"}

## Что доходит до контролов

`Form.Field` передаёт вложенному контролу `name`, `disabled`, `size` и состояние ошибки. `TextInput`, `TextArea`, `NumberInput`, `Select`, `Checkbox`, `Switch`, `Radio`, `Slider`, `ColorPicker`, `DatePicker` и `FilePicker` читают их сами — явный проп на самом контроле по-прежнему приоритетнее. Не дублируйте эти пропы на контроле: так появляется второй источник истины.

## Свойства

### Form

`Form` рендерит `<form>` и принимает его нативные атрибуты.

:::prop[onSubmit]{type="FormEventHandler<HTMLFormElement>"}
Обработчик отправки. `preventDefault()` вызывается автоматически, если у формы нет `action`.
:::

:::prop[errorMessages]{type="Record<string, string | null | undefined>" default="{}"}
Имя поля → текст ошибки. `Form.Field` с совпадающим `name` покажет ошибку сам.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Единый размер для всех контролов внутри формы.
:::

:::prop[disabled]{type="boolean"}
Отключает все поля через контекст.
:::

:::prop[ref]{type="Ref<HTMLFormElement>"}
Ссылка на элемент `<form>`.
:::

### Form.Field

:::prop[name]{type="string"}
Имя поля. Совпадает с ключом в `errorMessages` и передаётся вложенному контролу.
:::

:::prop[label]{type="string"}
Метка поля.
:::

:::prop[required]{type="boolean"}
Показывает отметку обязательности `*` после метки.
:::

:::prop[hintText]{type="string"}
Текст всплывающей подсказки рядом с меткой. Без него иконка подсказки не рисуется.
:::

:::prop[hintIcon]{type="ReactElement" default="icons.help"}
Иконка кнопки подсказки, показывается вместе с `hintText`. См. вкладку [Иконки](/ru/components/controls/form/icons).
:::

:::prop[description]{type="string"}
Поясняющий текст под контролом.
:::

:::prop[errorMessage]{type="string"}
Сообщение об ошибке этого поля. Переопределяет значение из `errorMessages` формы.
:::

:::prop[disabled]{type="boolean"}
Отключает это поле, переопределяя `disabled` формы.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент поля.
:::

## Related topics

- [Ввод данных](/ru/foundations/enteringData) — как выбрать контрол под тип собираемых данных
- [Button](/ru/components/controls/button) — кнопка отправки и её асинхронные состояния
- [Flex](/ru/components/layout/flex) — раскладка полей и действий формы
- [Tooltip](/ru/components/overlays/tooltip) — компонент, на котором построена подсказка рядом с меткой
