# File Picker

CSS-переменные, которые читает `FilePicker` и которые можно переопределить.

:::spoiler[Как переопределить переменные]
Цвета объявлены на корне приложения и наследуются, поэтому их можно задать через проп `style` самого `FilePicker` — сразу для всего пикера:

```tsx
<FilePicker
  autoUpload={false}
  style={{
    "--file-picker-item-background-color": "var(--accent-3)",
    "--file-picker-item-text-color": "var(--accent-12)",
  } as React.CSSProperties}
/>
```

Что переопределить нельзя:

- **Размеры чипа.** Высоту, левый отступ и размеры шрифта чип объявляет сам для каждого `size`, поэтому значение, заданное на пикере, до них не доходит. Меняйте `size`.
- **Вид кнопок.** Кнопка выбора и кнопки на чипах — обычные [Button](/ru/components/controls/button/css-vars), и они берут её переменные.
:::

## Внутренние переменные

Определяются самим `FilePicker`.

::::css-vars
:::css-var[--file-picker-item-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Заливка чипа. По умолчанию: `var(--interactive-1)`
:::

:::css-var[--file-picker-item-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет имени файла. По умолчанию: `var(--text-2)`
:::

:::css-var[--file-picker-item-size-text-color]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет размера файла. По умолчанию: `var(--text-1)`
:::

:::css-var[--file-picker-progress-color]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Заливка полосы прогресса за чипом. По умолчанию: `var(--accent-3)`
:::

:::css-var[--file-picker-invalid-item-background-color]{kind="fill" type="Цвет заливки" color="var(--red-3)"}
Заливка чипа с неудавшейся загрузкой. По умолчанию: `var(--red-3)`
:::

:::css-var[--file-picker-invalid-item-text-color]{kind="text" type="Цвет текста" color="var(--red-12)"}
Цвет имени, размера и иконки ошибки у чипа с ошибкой. По умолчанию: `var(--red-12)`
:::

:::css-var[--file-picker-empty-text-color]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет текста «Нет файлов». По умолчанию: `var(--text-1)`
:::
::::

## Глобальные переменные

Не определяются `FilePicker`: глобальные токены дизайна.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Расстояние между чипами и кнопкой. По умолчанию: `8px`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет текста «Нет файлов» у заблокированного пикера. По умолчанию: `var(--disabled-text-color)`
:::
::::
