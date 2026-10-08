# Select

Выпадающий список для выбора одного или нескольких значений из известного набора. Триггер — это `TextInput`, поэтому поле выглядит как остальные текстовые контролы, а список открывается в `Dropdown`.

## Базовый пример

`options` — список объектов `{ value, label }`, а `value` — это `value` выбранной опции. `onChange` обязателен: без него контролу негде хранить выбор.

```tsx
const [country, setCountry] = useState<string | undefined>();

<Select
  value={country}
  onChange={(value) => setCountry(value as string | undefined)}
  placeholder="Select a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
  ]}
/>
```

::playground{src=select/SelectBasicDemo caption="Выбор опции закрывает список"}

:::note
`onChange` первым аргументом получает новое значение, а вторым — нативное событие, если изменение вызвано кликом или нажатием клавиши: `(value: string | string[] | undefined, event?: MouseEvent | KeyboardEvent) => void`.
:::

## Сброс выбора

`clearable` добавляет кнопку очистки, пока что-то выбрано. Она вызывает `onChange` с `undefined` (или с пустым массивом в режиме `multiple`), и поле возвращается к плейсхолдеру.

```tsx
<Select value={status} onChange={setStatus} options={options} clearable placeholder="All statuses" />
```

::playground{src=select/SelectClearableDemo caption="Кнопка очистки появляется, только когда есть что очищать"}

## Множественный выбор

С `multiple` значение — массив строк. Список остаётся открытым после каждого выбора, поэтому можно отметить несколько опций подряд; клик по выбранной опции снимает её. Выбранные подписи показываются в поле через запятую.

```tsx
const [tags, setTags] = useState<string[]>([]);

<Select
  multiple
  value={tags}
  onChange={(value) => setTags((value as string[] | undefined) ?? [])}
  options={options}
  placeholder="Select tags"
/>
```

::playground{src=select/SelectMultipleDemo caption="Список остаётся открытым, пока пользователь не кликнет снаружи"}

## Поиск

`searchable` превращает поле в поле ввода, пока оно в фокусе: пользователь печатает, а список фильтруется по подстроке подписи без учёта регистра. Выбранная подпись остаётся в поле как плейсхолдер на время набора. Если ничего не найдено, список сообщает об этом.

```tsx
<Select searchable value={country} onChange={setCountry} options={countries} placeholder="Search countries" />
```

::playground{src=select/SelectSearchableDemo caption="Начните печатать, чтобы отфильтровать список"}

## Недоступные опции

Опция с `disabled: true` остаётся в списке, но выбрать её нельзя. Используйте её для вариантов, которые существуют, но сейчас недоступны.

```tsx
const options = [
  { value: 'sev1', label: 'SEV-1 · Critical' },
  { value: 'sev0', label: 'SEV-0 · Page everyone', disabled: true },
];
```

::playground{src=select/SelectDisabledOptionDemo caption="Последняя опция видна, но недоступна"}

## Прозрачный вариант

`transparent` убирает границу и фон, поэтому в покое поле выглядит как обычный текст. При наведении и фокусе появляется лёгкая подсветка. Он подходит для мест, где выбор — часть макета, например порядок сортировки над списком.

```tsx
<Select transparent value={sort} onChange={setSort} options={sorts} />
```

::playground{src=select/SelectTransparentDemo caption="В покое выглядит как обычный текст"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Один проп одновременно меняет высоту, отступы, шрифт и иконки.

```tsx
<Select size="s" />
<Select size="xl" />
```

::playground{src=select/SelectSizesDemo caption="Пять размеров"}

## Свой триггер

С `asChild` единственный дочерний элемент становится триггером вместо текстового поля. Список работает так же, а `useSelectContext()` отдаёт дочернему элементу состояние селекта: `expanded`, `value`, `selectedOptions`, `disabled`, `multiple` и функцию `clear`. Хук работает только внутри `Select`. Дочерний элемент должен принимать `ref`.

```tsx
const CountryTrigger = ({ ref }: { ref?: Ref<HTMLButtonElement> }) => {
  const { expanded, selectedOptions } = useSelectContext();

  return (
    <Button
      ref={ref}
      label={selectedOptions?.label ?? 'Select country'}
      additionalIcon={expanded ? <ChevronUp /> : <ChevronDown />}
    />
  );
};

<Select asChild value={country} onChange={setCountry} options={options}>
  <CountryTrigger />
</Select>
```

::playground{src=select/SelectCustomTriggerDemo caption="Кнопка показывает выбор и состояние списка"}

## Внутри формы

Внутри `Form.Field` селект берёт `name`, `disabled` и `size` из формы, так что повторять их не нужно. Если передать любое из них в `Select` напрямую, оно имеет приоритет.

```tsx
<Form errorMessages={{ role: 'Choose a role to continue' }}>
  <Form.Field name="role" label="Role">
    <Select value={role} onChange={setRole} options={roles} placeholder="Choose a role" />
  </Form.Field>
</Form>
```

::playground{src=select/SelectFormDemo caption="Селект берёт имя из поля"}

При обычной отправке формы значение уходит в скрытых полях: одно поле `name` в одиночном режиме и по одному полю `name[]` на каждое выбранное значение в режиме `multiple`. Если `name` не задан, генерируется автоматический.

## Ref и стили

`ref` указывает на обёртку вокруг поля, которая занимает весь контрол. `className` и `style` попадают на само поле и его рамку. Высота списка задаётся через `menuHeight` в пикселях; по умолчанию список подстраивается под содержимое и прокручивается только после 250px.

```tsx
<Select value={value} onChange={setValue} options={options} menuHeight={160} style={{ maxWidth: 320 }} />
```

По умолчанию список такой же ширины, как и поле; передайте `parentWidth={false}`, чтобы он занимал ширину своего содержимого.

## Пропсы

:::prop[value]{type="string | string[]"}
Контролируемое значение: строка для одиночного выбора, массив строк с `multiple`.
:::

:::prop[onChange*]{type="(value: string | string[] | undefined, event?: MouseEvent | KeyboardEvent) => void"}
Вызывается при изменении выбора. `undefined` (или `[]` с `multiple`) означает, что выбор сброшен.
:::

:::prop[options*]{type="{ value: string; label: string; disabled?: boolean }[]"}
Опции списка. `disabled` оставляет опцию видимой, но не выбираемой.
:::

:::prop[multiple]{type="boolean" default="false"}
Разрешает выбрать несколько опций. `value` должен быть массивом.
:::

:::prop[clearable]{type="boolean" default="false"}
Показывает кнопку очистки, пока что-то выбрано.
:::

:::prop[searchable]{type="boolean" default="false"}
Позволяет фильтровать список, печатая в поле.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля. Если не задан, берётся из контекста формы.
:::

:::prop[transparent]{type="boolean" default="false"}
Убирает границу и фон поля в покое.
:::

:::prop[placeholder]{type="string"}
Текст, пока ничего не выбрано.
:::

:::prop[disabled]{type="boolean" default="false"}
Отключает селект. Если не задан, берётся из контекста формы.
:::

:::prop[name]{type="string"}
Имя скрытого поля, которое используется при отправке формы. Если не задано, берётся из контекста формы, иначе генерируется.
:::

:::prop[menuHeight]{type="number" default="250"}
Максимальная высота списка в пикселях. Переопределяет `--select-menu-height`.
:::

:::prop[parentWidth]{type="boolean" default="true"}
Делает список такой же ширины, как поле.
:::

:::prop[openIcon]{type="ReactElement"}
Шеврон, пока список закрыт. См. [Иконки](/ru/components/controls/select/icons).
:::

:::prop[closeIcon]{type="ReactElement"}
Шеврон, пока список открыт.
:::

:::prop[searchIcon]{type="ReactElement"}
Иконка, пока пользователь ищет.
:::

:::prop[clearIcon]{type="ReactElement"}
Иконка кнопки очистки.
:::

:::prop[asChild]{type="boolean" default="false"}
Использует единственный дочерний элемент как триггер вместо текстового поля.
:::

:::prop[className]{type="string"}
Класс поля.
:::

:::prop[style]{type="CSSProperties"}
Стили поля.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref на обёртку вокруг поля.
:::

## Похожие темы

- [TextInput](/ru/components/controls/textInput) — поле, из которого сделан триггер
- [Form](/ru/components/controls/form) — поля, подписи и сообщения об ошибках, которые `Select` читает из контекста
- [Dropdown](/ru/components/overlays/dropdown) — список, в котором показываются опции
