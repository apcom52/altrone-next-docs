# Form

Форма — это договор между интерфейсом и пользователем. Пользователь вводит данные, система объясняет, что пошло не так, и принимает результат. `Form` берёт на себя связующую работу: передаёт размер, состояние отключения и ошибки всем полям сразу — через контекст, без явного прокидывания пропов.

## Базовая форма

Оберните поля в `Form`, а каждое поле — в `Form.Field`. Метка, обязательность и имя поля задаются на уровне `Form.Field`; сам инпут ничего об этом не знает.

```tsx
<Form onSubmit={handleSubmit}>
  <Flex orientation="vertical" gap="m">
    <Form.Field name="email" label="Email" required>
      <TextInput value={email} onChange={setEmail} placeholder="you@example.com" />
    </Form.Field>
    <Form.Field name="password" label="Пароль" required>
      <PasswordInput value={password} onChange={setPassword} />
    </Form.Field>
    <Button label="Войти" variant="submit" type="submit" />
  </Flex>
</Form>
```

::playground{src=FormBasicDemo caption="Стандартная форма входа"}

:::note
`Form` автоматически вызывает `preventDefault()`. Вам не нужно делать это в `onSubmit` вручную.
:::

## Валидация и ошибки

Передайте объект `errorMessages` с ключами, совпадающими с именами полей. `Form.Field` читает свою ошибку из контекста и показывает её под полем. Красный цвет и иконка ошибки применяются к самому инпуту автоматически.

```tsx
const [errors, setErrors] = useState<Record<string, string>>({});

const handleSubmit = () => {
  const next: Record<string, string> = {};
  if (!email.trim()) next.email = "Введите email";
  else if (!email.includes("@")) next.email = "Некорректный формат email";
  if (password.length < 8) next.password = "Пароль слишком короткий";

  setErrors(next);
  if (!Object.keys(next).length) submit();
};

<Form onSubmit={handleSubmit} errorMessages={errors}>
  <Form.Field name="email" label="Email" required>
    <TextInput value={email} onChange={setEmail} />
  </Form.Field>
  <Form.Field name="password" label="Пароль" required>
    <PasswordInput value={password} onChange={setPassword} />
  </Form.Field>
  <Button label="Продолжить" variant="submit" type="submit" />
</Form>
```

::playground{src=FormValidationDemo caption="Нажмите «Продолжить» с пустыми или некорректными полями"}

:::tip
Сбрасывайте ошибку поля при изменении его значения — пользователь исправляет ввод и хочет видеть, что ошибка снята.
:::

## Подсказки и описания

`hintText` добавляет иконку со всплывающей подсказкой рядом с меткой. `description` размещает поясняющий текст под полем. Оба инструмента помогают пользователю заполнить поле правильно с первого раза.

```tsx
<Form.Field
  name="apiKey"
  label="API-ключ"
  required
  hintText="Ключ доступен в разделе «Разработчик» настроек аккаунта."
  description="Используется для всех API-запросов от вашего имени."
>
  <PasswordInput value={apiKey} onChange={setApiKey} placeholder="sk-..." />
</Form.Field>
```

::playground{src=FormHintDemo caption="Наведите на значок ? рядом с меткой"}

## Отключение формы

`disabled` на уровне `Form` отключает все поля сразу. Удобно для форм только для чтения или состояния загрузки.

```tsx
<Form disabled>
  <Form.Field name="name" label="Имя">
    <TextInput value="Алексей Петров" onChange={() => {}} />
  </Form.Field>
</Form>
```

Отдельное поле можно отключить через `disabled` на `Form.Field` — оно переопределит контекст формы.

## Глобальный размер

`size` на уровне `Form` устанавливает единый размер для всех элементов управления внутри. Полезно в компактных интерфейсах или мобильных формах.

```tsx
<Form size="s">
  {/* Все поля внутри будут размера s */}
</Form>
```

## Свойства Form

:::prop[onSubmit]{type="FormEventHandler"}
Обработчик отправки формы. `preventDefault()` вызывается автоматически.
:::

:::prop[errorMessages]{type="Record<string, string | null | undefined>" default="{}"}
Словарь ошибок: имя поля → текст ошибки. `Form.Field` с совпадающим `name` отобразит ошибку автоматически.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Единый размер для всех элементов управления внутри формы.
:::

:::prop[disabled]{type="boolean"}
Отключает все поля через контекст.
:::

## Свойства Form.Field

:::prop[name]{type="string"}
Имя поля. Должно совпадать с ключом в `errorMessages` для автоматического отображения ошибок.
:::

:::prop[label]{type="string"}
Метка поля.
:::

:::prop[required]{type="boolean"}
Показывает звёздочку `*` после метки.
:::

:::prop[hintText]{type="string"}
Текст всплывающей подсказки рядом с меткой.
:::

:::prop[description]{type="string"}
Поясняющий текст под полем.
:::

:::prop[errorMessage]{type="string"}
Сообщение об ошибке, которое переопределяет значение из `errorMessages` формы.
:::

:::prop[disabled]{type="boolean"}
Отключает конкретное поле, переопределяя глобальный `disabled` формы.
:::

## Рекомендации

**Размещайте ошибки рядом с полем, а не в шапке формы.** Пользователь уже смотрит на поле — покажите ошибку там, где он её заметит. Список ошибок наверху заставляет снова искать, что и где пошло не так.

**Валидируйте при отправке, а не при каждом нажатии.** Ошибка, появляющаяся пока пользователь ещё печатает, раздражает. Покажите ошибки после попытки отправить форму, а снимайте их при исправлении поля.

**Используйте `required` для полей, без которых форма не может быть отправлена.** Не помечайте «обязательным» всё подряд — это обесценивает метку. Если все поля обязательны, не помечайте ни одно.

**`hintText` — для неочевидных требований.** Формат API-ключа, правила выбора пароля, адрес для webhook — здесь подсказка полезна. Для очевидных полей вроде «Имя» или «Email» она только загромождает интерфейс.

**Не дублируйте `Form.Field` логику в самом инпуте.** Когда поле обёрнуто в `Form.Field`, оно автоматически получает `name`, `disabled`, `invalid` и `size` через контекст. Не передавайте эти пропы вручную — иначе придётся синхронизировать два источника истины.
