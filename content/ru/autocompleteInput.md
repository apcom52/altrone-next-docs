# AutocompleteInput

Поле ввода с выпадающим списком подсказок. Расширяет `TextInput` — все его пропы и острова работают так же. Подсказки запрашиваются через колбэк после того, как пользователь останавливается в наборе на 300 мс. Поддерживает асинхронные источники, кэширование, клавиатурную навигацию и кастомный рендеринг элементов.

## Базовый пример

```tsx
const [value, setValue] = useState('');

const getSuggestions = async ({ value }: { value: string }) => {
  const res = await fetch(`/api/search?q=${value}`);
  return res.json() as Promise<string[]>;
};

<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  placeholder="Начните вводить..."
/>
```

::playground{src=AutocompleteInputBasicDemo caption="Введите название города"}

Клавиши `↑` и `↓` перемещаются по списку, `Enter` выбирает, `Escape` закрывает.

## Минимальное количество символов

По умолчанию `getSuggestions` вызывается начиная с первого символа. Используйте `minChars`, чтобы подождать более осмысленного ввода — это снижает нагрузку на сервер и избавляет пользователя от лишнего шума при коротком вводе.

```tsx
<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  minChars={2}
  placeholder="Введите минимум 2 символа..."
/>
```

::playground{src=AutocompleteInputMinCharsDemo caption="Список появляется только начиная со второго символа"}

## Кэширование результатов

`cacheResults` сохраняет результаты для каждого значения ввода на время жизни компонента. При возврате к уже запрошенному префиксу повторного запроса не будет.

```tsx
<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  cacheResults
/>
```

::playground{src=AutocompleteInputCacheDemo caption="Счётчик показывает, сколько раз был вызван getSuggestions — при кэше повторов нет"}

:::tip
Включайте `cacheResults`, когда источник данных стабилен в рамках сессии: список стран, городов, тегов. Для данных, которые могут измениться в реальном времени, кэш лучше не использовать.
:::

## Объектные подсказки

По умолчанию `T = string`. Если `getSuggestions` возвращает объекты, передайте `getSuggestionValue`, чтобы компонент знал, какое строковое значение записать в поле после выбора.

```tsx
type Language = { name: string; year: number };

const getSuggestions = async ({ value }: { value: string }): Promise<Language[]> => {
  return LANGUAGES.filter(l =>
    l.name.toLowerCase().startsWith(value.toLowerCase())
  );
};

<AutocompleteInput<Language>
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  getSuggestionValue={(lang) => lang.name}
  onSelect={(lang) => console.log('Выбран:', lang)}
/>
```

::playground{src=AutocompleteInputObjectDemo caption="Выберите язык — ниже появится информация об объекте"}

## Кастомный рендеринг подсказок

`renderSuggestion` управляет **содержимым** строки подсказки. Саму интерактивную строку — цель клика, навигацию с клавиатуры и скользящую подложку выделения — создаёт компонент, поэтому рендерер возвращает только внутренние элементы. Контекст содержит текущее значение ввода и объект подсказки.

```tsx
<AutocompleteInput<Language>
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  getSuggestionValue={(lang) => lang.name}
  renderSuggestion={({ suggestion, inputValue }) => (
    <>
      <strong>{suggestion.name.slice(0, inputValue.length)}</strong>
      {suggestion.name.slice(inputValue.length)}
      <span style={{ color: 'var(--altrone-text-muted)' }}>{suggestion.year}</span>
    </>
  )}
/>
```

Выбор обрабатывает обёртка строки: клик или `Enter` на выделенной строке записывает `getSuggestionValue(suggestion)` в поле и вызывает `onSelect`.

## Обработка ошибок

Если `getSuggestions` выбрасывает исключение, компонент вызывает `onError` и показывает иконку предупреждения внутри поля.

```tsx
<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  onError={(err) => {
    console.error('Ошибка автодополнения:', err);
    showToast('Не удалось загрузить подсказки');
  }}
/>
```

## С островами TextInput

`AutocompleteInput` принимает те же острова, что и `TextInput`. Они размещаются внутри поля и не конфликтуют с дропдауном.

```tsx
import { TextInput } from 'altrone-ui';
import { Globe } from 'lucide-react';

<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
>
  <TextInput.IconIsland icon={<Globe size={16} />} placement="start" />
</AutocompleteInput>
```

## Свойства

:::prop[getSuggestions*]{type="(ctx: { value: string }) => T[] | Promise<T[]>"}
Функция получения подсказок. Вызывается с текущим значением ввода после дебаунса 300 мс. Может быть синхронной или асинхронной.
:::

:::prop[getSuggestionValue]{type="(suggestion: T) => string"}
Извлекает строку для записи в поле при выборе подсказки. Обязателен, когда `T` не является `string`.
:::

:::prop[renderSuggestion]{type="(ctx: AutocompleteRenderSuggestionContext<T>) => ReactNode"}
Рендерер содержимого строки подсказки. Интерактивную обёртку (клик, навигация, подложка выделения) создаёт компонент. По умолчанию показывается строка из `getSuggestionValue`.
:::

:::prop[onSelect]{type="(suggestion: T, inputValue: string, event) => void"}
Вызывается при выборе подсказки кликом или клавишей `Enter`.
:::

:::prop[onError]{type="(error: unknown) => void"}
Вызывается, если `getSuggestions` выбросил исключение.
:::

:::prop[minChars]{type="number" default="1"}
Минимальное количество символов для вызова `getSuggestions`.
:::

:::prop[cacheResults]{type="boolean" default="false"}
Кэшировать результаты по значению ввода на время жизни компонента.
:::

## Рекомендации

**Дебаунс встроен — не добавляйте свой.** `AutocompleteInput` ждёт 300 мс после последнего нажатия. Если обернуть `getSuggestions` ещё в один дебаунс, пользователь будет видеть задержку в 600+ мс.

**`cacheResults` — не замена серверному кэшу.** Кэш живёт только пока компонент в DOM. При размонтировании он очищается. Для долгоживущего кэша используйте решение на уровне приложения — `SWR`, `React Query` или собственный `Map` за пределами компонента.

**`minChars` снижает шум, но не отменяет `getSuggestions`.** Запрос всё равно произойдёт — просто позже. Если важно ограничить нагрузку, используйте также пагинацию или ограничение на стороне сервера.

**Всегда обрабатывайте `onError`.** Потеря сети, таймаут, ошибка сервера — всё это приводит к вызову `onError`. Без обработчика пользователь увидит иконку предупреждения, но не поймёт, что произошло. Даже простой тост лучше, чем тишина.
