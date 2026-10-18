# Radio

CSS-переменные, которые читает `Radio` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Цвета объявлены на корне приложения и наследуются, поэтому их можно задать через проп `style` у `Radio` — для всей группы — или у отдельного `Radio.Item`. Переменные размера (`--radio-size`, `--radio-dot-size`, `--radio-label-size`, `--radio-label-line-height`) каждый вариант объявляет сам по классу размера, поэтому задавайте их только через `style` у `Radio.Item`: инлайновое значение перебивает класс.

```tsx
<Radio.Item
  value="b"
  style={{ "--radio-size": "32px", "--radio-dot-size": "16px" } as React.CSSProperties}
>
  Larger dot
</Radio.Item>
```

::playground{src=radio/RadioCssVarsDemo caption="Крупная точка у одного варианта и свой цвет выбранного состояния у группы"}

Чтобы перекрасить выбранное состояние и сохранить поведение при наведении, переопределите `--radio-checked-background-color` и `--radio-checked-icon-color`. Значения для обычного и наведённого состояния работают так же: `--radio-background-color` и `--radio-hover-background-color`.

Что переопределить нельзя:

- **Вид заблокированного варианта.** Он берёт глобальные токены `--disabled-*` и перекрывает переменные выше. Заблокированный вариант можно перекрасить только инлайновыми значениями на самом `Radio.Item`.
- **Кольцо фокуса.** Оно берётся из глобальной `--focus-color`.
- **Минимальную высоту строки 24px.** Она защищает область нажатия при `size="mini"`.
:::

## Внутренние переменные

Определены самим компонентом.

::::css-vars
:::css-var[--radio-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Фон кружка в обычном состоянии. По умолчанию: `var(--interactive-1)`
:::

:::css-var[--radio-hover-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-2)"}
Фон кружка при наведении. По умолчанию: `var(--interactive-2)`
:::

:::css-var[--radio-checked-background-color]{kind="fill" type="Цвет заливки" color="var(--accent-5)"}
Фон кружка у выбранного варианта. По умолчанию: `var(--accent-5)`
:::

:::css-var[--radio-border-color]{kind="border" type="Цвет рамки" color="var(--border-1)"}
Кольцо вокруг кружка в обычном состоянии. По умолчанию: `var(--border-1)`
:::

:::css-var[--radio-checked-border-color]{kind="border" type="Цвет рамки" color="var(--border-1)"}
Кольцо вокруг кружка у выбранного варианта. По умолчанию: `var(--border-1)`
:::

:::css-var[--radio-icon-color]{kind="fill" type="Цвет заливки" color="var(--text-2)"}
Цвет точки в обычном состоянии. По умолчанию: `var(--text-2)`
:::

:::css-var[--radio-checked-icon-color]{kind="fill" type="Цвет заливки" color="var(--accent-12)"}
Цвет точки у выбранного варианта. По умолчанию: `var(--accent-12)`
:::

:::css-var[--radio-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет подписи. По умолчанию: `var(--text-2)`
:::

:::css-var[--radio-size]{kind="size" type="Размер"}
Диаметр кружка. По умолчанию: `24px`
:::

:::css-var[--radio-dot-size]{kind="size" type="Размер"}
Диаметр точки внутри кружка. По умолчанию: `12px`
:::

:::css-var[--radio-label-size]{kind="font" type="Размер шрифта"}
Размер шрифта подписи. По умолчанию: `var(--text-size-4)`
:::

:::css-var[--radio-label-line-height]{kind="font" type="Размер шрифта"}
Высота строки подписи. По умолчанию: `var(--line-height-4)`
:::
::::

## Глобальные переменные

Не определены компонентом: глобальные токены дизайна, которые она читает. Изменение токена влияет сразу на все компоненты.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Отступ между вариантами и между кружком и подписью. По умолчанию: `8px`
:::

:::css-var[--focus-color]{kind="border" type="Цвет рамки" color="var(--focus-color)"}
Кольцо фокуса с клавиатуры. По умолчанию: чёрный в светлой теме
:::

:::css-var[--disabled-background]{kind="fill" type="Цвет заливки" color="var(--disabled-background)"}
Фон кружка заблокированного варианта. По умолчанию: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Цвет рамки" color="var(--disabled-border)"}
Кольцо вокруг заблокированного кружка. По умолчанию: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Подпись и точка заблокированного варианта. По умолчанию: `var(--gray-9)`
:::

:::css-var[--shadow-1]{kind="shadow" type="Тень"}
Мягкая тень под кружком. По умолчанию: `var(--shadow-1)`
:::
::::
