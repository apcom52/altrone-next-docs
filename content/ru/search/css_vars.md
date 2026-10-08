# Search

CSS-переменные, которые читает `Search` и которые можно переопределить. Всё, что касается самого поля — заливка, рамка, размер, острова, — унаследовано от [TextInput](/ru/components/controls/textInput/css-vars): его переменные работают и здесь.

:::spoiler[Как переопределить переменные]
Переменные `--search-*` объявлены на корне приложения, а читает их плейсхолдер, нарисованный внутри поля, поэтому задавайте их через проп `style` нужного `Search` — значение дойдёт до плейсхолдера по наследованию:

```tsx
<Search
  value={query}
  onChange={setQuery}
  style={{ '--search-icon-size': '24px' } as React.CSSProperties}
/>
```

::playground{src=search/SearchCssVarsDemo caption="Увеличенная лупа и плейсхолдер акцентного цвета"}

Что переопределить нельзя:

- **Вид заполненного поля.** Когда в поле есть значение, плейсхолдера нет, а лупа — обычный остров-иконка `TextInput`: её размер берётся из `--text-input-icon-size`, а не из `--search-icon-size`.
- **Отключённый вид.** `disabled` лишь вдвое уменьшает непрозрачность плейсхолдера; цвета самого поля задаёт `TextInput`.
:::

## Внутренние переменные

Определены самим `Search` и используются плейсхолдером пустого поля.

::::css-vars
:::css-var[--search-placeholder-color]{kind="text" type="Цвет текста" color="var(--placeholder-text-color)"}
Цвет текста плейсхолдера и лупы в пустом поле. По умолчанию: `var(--placeholder-text-color)`
:::

:::css-var[--search-icon-size]{kind="size" type="Размер"}
Размер лупы в пустом поле. По умолчанию: `18px`
:::
::::

## Глобальные переменные

Не определены в `Search`: глобальные токены дизайна.

::::css-vars
:::css-var[--placeholder-text-color]{kind="text" type="Цвет текста" color="var(--placeholder-text-color)"}
Значение `--search-placeholder-color` по умолчанию; общая для других полей. По умолчанию: `var(--gray-a9)`
:::

:::css-var[--narrow-gap]{kind="gap" type="Отступ"}
Расстояние между лупой и текстом плейсхолдера. По умолчанию: `2px`
:::
::::
