# TextInput

Поле ввода — первое место, где пользователь говорит приложению что-то о себе. `TextInput` строится вокруг системы «островков»: иконки, кнопки, префиксы и индикаторы размещаются прямо внутри поля как дочерние компоненты. Поле автоматически адаптирует отступы через `ResizeObserver` — текст никогда не перекрывает элементы внутри.

## Базовый пример

```tsx
const [value, setValue] = useState('');

<TextInput
  value={value}
  onChange={(v) => setValue(v)}
  placeholder="Введите имя"
/>
```

::playground{src=TextInputBasicDemo}

:::note
`onChange` получает строковое значение напрямую — не `event`. Это сознательное решение: `event` нужен редко, а строка — всегда.
:::

## Иконки

`TextInput.IconIsland` добавляет неинтерактивную иконку слева или справа. Используйте её, чтобы сообщить пользователю тип поля до того, как он начнёт вводить текст.

```tsx
import { Mail, Lock } from 'lucide-react';

<TextInput value={email} onChange={setEmail} placeholder="Электронная почта">
  <TextInput.IconIsland icon={<Mail size={16} />} placement="left" />
</TextInput>
```

::playground{src=TextInputIconDemo caption="Иконка помогает пользователю сразу понять назначение поля"}

## Кнопка очистки

`TextInput.ActionIsland` — кликабельная кнопка внутри поля. Самый частый сценарий — кнопка сброса в поле поиска. Показывайте её только когда есть что сбрасывать.

```tsx
import { Search, X } from 'lucide-react';

<TextInput value={search} onChange={setSearch} placeholder="Поиск">
  <TextInput.IconIsland icon={<Search size={16} />} placement="left" />
  {search && (
    <TextInput.ActionIsland
      label="Очистить"
      icon={<X size={16} />}
      showLabel={false}
      placement="right"
      onClick={() => setSearch('')}
    />
  )}
</TextInput>
```

::playground{src=TextInputClearDemo caption="Кнопка появляется только когда поле не пустое"}

:::tip
`label` в `ActionIsland` обязателен — он становится `title` для тултипа и именем для скринридера, даже если визуально скрыт через `showLabel={false}`.
:::

## Текстовые префиксы и суффиксы

`TextInput.TextIsland` добавляет статический текст внутри поля. Подходит для единиц измерения, символов валют, протоколов URL и других неизменяемых аффиксов, которые являются частью формата вводимых данных.

```tsx
{/* Валюта */}
<TextInput value={amount} onChange={setAmount} placeholder="0.00">
  <TextInput.TextIsland label="$" placement="left" />
</TextInput>

{/* URL */}
<TextInput value={domain} onChange={setDomain} placeholder="mysite">
  <TextInput.TextIsland label="https://" placement="left" />
  <TextInput.TextIsland label=".com" placement="right" />
</TextInput>
```

::playground{src=TextInputTextIslandDemo caption="Префикс и суффикс уточняют формат, не занимая место снаружи поля"}

## Индикатор загрузки

`TextInput.LoadingIsland` показывает спиннер во время асинхронных операций — поиска, проверки доступности, автодополнения.

```tsx
<TextInput value={query} onChange={setQuery}>
  <TextInput.IconIsland icon={<Search size={16} />} placement="left" />
  {isLoading && <TextInput.LoadingIsland placement="right" />}
</TextInput>
```

::playground{src=TextInputLoadingDemo caption="Начните вводить текст — появится индикатор загрузки"}

## Счётчик символов

`TextInput.CharCounterIsland` показывает текущую длину ввода. При наличии `maxLength` отображает формат `текущее/максимум` и выделяет счётчик красным при превышении.

```tsx
<TextInput
  value={bio}
  onChange={setBio}
  maxLength={160}
  placeholder="Расскажите о себе..."
>
  <TextInput.CharCounterIsland placement="right" />
</TextInput>
```

::playground{src=TextInputCharCounterDemo caption="Введите текст — счётчик покажет остаток символов"}

## Состояния

```tsx
<TextInput value="Обычный ввод" onChange={() => {}} />
<TextInput value="Ошибка в поле" onChange={() => {}} invalid />
<TextInput value="Только чтение" onChange={() => {}} readOnly />
<TextInput value="Отключено" onChange={() => {}} disabled />
```

::playground{src=TextInputStatesDemo}

`invalid` подсвечивает поле красной рамкой. Используйте его вместе с текстом ошибки рядом — визуальный сигнал без объяснения не помогает пользователю исправить ввод. Когда `TextInput` находится внутри `Form.Field`, состояние `invalid` передаётся автоматически через контекст.

## Прозрачный вариант

`variant="transparent"` убирает рамку и фон. Используйте его там, где поле является органичной частью макета — редактирование заголовка карточки, встроенный поиск в тулбаре.

```tsx
<TextInput value={title} onChange={setTitle} variant="transparent" />
```

::playground{src=TextInputTransparentDemo}

:::warning
Прозрачный вариант не сигнализирует пользователю о том, что текст редактируемый. Убедитесь, что контекст делает это очевидным — через плейсхолдер, иконку редактирования или фокусное состояние.
:::

## Размеры

```tsx
<TextInput size="mini" />
<TextInput size="s" />
<TextInput size="m" />
<TextInput size="l" />
<TextInput size="xl" />
```

::playground{src=TextInputSizesDemo}

Размер по умолчанию — `m`. Внутри `Form.Field` размер наследуется из контекста формы и задавать его вручную не нужно.

## Использование внутри формы

Когда `TextInput` находится внутри `Form.Field`, пропы `name`, `disabled`, `invalid` и `size` передаются автоматически через контекст. Дублировать их вручную не нужно.

```tsx
<Form errorMessages={{ email: ['Такой email уже зарегистрирован'] }}>
  <Form.Field name="email" label="Электронная почта">
    <TextInput
      value={form.email}
      onChange={(v) => setForm({ ...form, email: v })}
      placeholder="user@example.com"
    >
      <TextInput.IconIsland icon={<Mail size={16} />} placement="left" />
    </TextInput>
  </Form.Field>
</Form>
```

## Острова

Острова — это дочерние компоненты, которые размещаются внутри поля. Они не конкурируют за место с текстом: поле автоматически корректирует внутренние отступы под каждый остров через `ResizeObserver`.

:::col-2

### Доступные острова

| Компонент | Назначение |
|-----------|-----------|
| `TextInput.IconIsland` | Иконка (не интерактивна) |
| `TextInput.ActionIsland` | Кнопка действия |
| `TextInput.TextIsland` | Статический текст: префикс или суффикс |
| `TextInput.LoadingIsland` | Спиннер при загрузке |
| `TextInput.CharCounterIsland` | Счётчик символов |
| `TextInput.CustomIsland` | Произвольный контент |

---

### Позиция

Каждый остров принимает проп `placement`:

- `"left"` — слева от текста (по умолчанию)
- `"right"` — справа от текста

Несколько островков с одной стороны выстраиваются в порядке объявления. Конфликтов нет — поле само пересчитывает отступы.

:::

## Свойства

:::prop[value]{type="string"}
Контролируемое значение поля.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Обработчик изменения. Первым аргументом приходит строка, а не событие.
:::

:::prop[variant]{type="'default' | 'transparent'" default="'default'"}
Визуальный стиль. `transparent` убирает рамку и фон — для встроенного редактирования.
:::

:::prop[invalid]{type="boolean" default="false"}
Состояние ошибки. Подсвечивает поле красной рамкой. Также читается из `FormFieldContext`.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля. Также читается из `FormFieldContext`.
:::

:::prop[disabled]{type="boolean" default="false"}
Отключает поле. Также читается из `FormFieldContext`.
:::

:::prop[readOnly]{type="boolean"}
Запрещает редактирование без визуального отключения.
:::

:::prop[readonlyStyles]{type="boolean" default="true"}
Применять ли визуальный стиль для `readOnly`. Отключите, если хотите, чтобы поле выглядело обычным при запрете редактирования.
:::

:::prop[wrapperClassName]{type="string"}
Дополнительный CSS-класс для внешней обёртки `<div>`.
:::

:::prop[wrapperStyle]{type="CSSProperties"}
Инлайн-стили для внешней обёртки. Используйте для задания ширины — стили на самом `<input>` растягивают только внутренний элемент.
:::

:::prop[asChild]{type="boolean" default="false"}
Заменяет `<input>` кастомным элементом. Первый дочерний элемент, не являющийся островом, становится полем ввода.
:::

## Рекомендации

**Острова решают задачи внутри поля, а не снаружи.** Если вам нужна кнопка, которая что-то делает с содержимым поля — `ActionIsland`. Если кнопка запускает независимое действие — она должна быть снаружи.

**Не перегружайте поле островами.** Два-три — максимум. Иконка слева, кнопка очистки справа — достаточно для большинства случаев. Когда островов становится много, пользователь не понимает, что из них интерактивно.

**`invalid` без текста ошибки — это шум.** Красная рамка привлекает внимание, но ничего не объясняет. Всегда показывайте текст рядом с полем — что именно не так и как это исправить.

**Плейсхолдер — не подпись.** Он исчезает при вводе. Для ярлыка поля используйте `Form.Field` с пропом `label`, а плейсхолдер оставьте для примера формата: `user@example.com`, `+7 (___) ___-__-__`.
