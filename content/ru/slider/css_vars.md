# Slider

CSS-переменные, которые читает `Slider` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Все они задаются на корневом элементе, поэтому надёжный способ изменить переменную у одного ползунка — проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме. Правило в таблице стилей тоже подойдёт, но селектор должен быть специфичнее классов размера (например, `.my-slider.my-slider`).

```tsx
<Slider
  value={value}
  onChange={setValue}
  style={{ "--slider-track-thickness": "10px", "--slider-thumb-size": "22px" } as React.CSSProperties}
/>
```

::playground{src=slider/SliderCssVarsDemo caption="Переопределение переменных через проп style"}

Толщина дорожки и размер ручки заданы классами размера, поэтому переопределение через `style` заменяет значение выбранного `size`.

Что переопределить нельзя:

- **Кольцо фокуса.** Оно берётся из глобальной `--focus-color`.
- **Минимальную область нажатия 24px.** Она защищает ползунок при `size="mini"`.
- **Вид в заблокированном состоянии.** Его цвета собираются из токенов `--disabled-*`, поэтому перекрасить заблокированный ползунок можно только переопределением самих токенов.
:::

## Внутренние переменные

Определены самим ползунком.

::::css-vars
:::css-var[--slider-track-color]{kind="fill" type="Цвет заливки" color="var(--interactive-3)"}
Фон дорожки. По умолчанию: `var(--interactive-3)`
:::

:::css-var[--slider-fill-color]{kind="fill" type="Цвет заливки" color="var(--accent-9)"}
Цвет заполненной части. По умолчанию: `var(--accent-9)`
:::

:::css-var[--slider-fill-hover-color]{kind="fill" type="Цвет заливки" color="var(--accent-10)"}
Цвет заполненной части при наведении. По умолчанию: `var(--accent-10)`
:::

:::css-var[--slider-value-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет иконки и текста; он же служит фоном подсказки значения. По умолчанию: `var(--text-2)`
:::

:::css-var[--slider-value-background-color]{kind="fill" type="Цвет заливки" color="var(--background-1)"}
Цвет текста внутри подсказки значения. По умолчанию: `var(--background-1)`
:::

:::css-var[--slider-fill-surface-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Фон плиты у `fill`. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--slider-thumb-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка ручки; в тёмной теме ручка белая. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--slider-thumb-shadow]{kind="shadow" type="Тень"}
Рамка и контактная тень ручки. По умолчанию: многослойная тень «пластины»
:::

:::css-var[--slider-size]{kind="size" type="Размер"}
Высота плиты у `fill`. По умолчанию: `32px`
:::

:::css-var[--slider-track-thickness]{kind="size" type="Размер"}
Толщина дорожки. По умолчанию: `4px`
:::

:::css-var[--slider-thumb-size]{kind="size" type="Размер"}
Диаметр ручки. По умолчанию: `16px`
:::

:::css-var[--slider-thumb-grow]{kind="size" type="Размер"}
Насколько ручка растягивается при перетаскивании. По умолчанию: `calc(var(--slider-thumb-size) / 2.5)`
:::

:::css-var[--slider-value-font-size]{kind="font" type="Размер шрифта"}
Размер шрифта подсказки значения. По умолчанию: `var(--text-size-3)`
:::
::::

## Глобальные переменные

Не определены самим ползунком: глобальные токены дизайна, которые он читает. Изменение токена влияет сразу на все ползунки.

::::css-vars
:::css-var[--focus-color]{kind="border" type="Цвет рамки" color="var(--focus-color)"}
Кольцо фокуса с клавиатуры. По умолчанию: чёрный в светлой теме
:::

:::css-var[--radius-pill]{kind="radius" type="Скругление"}
Скругление дорожки и плиты. По умолчанию: `9999px`
:::

:::css-var[--radius-s]{kind="radius" type="Скругление"}
Скругление подсказки значения у `default`. По умолчанию: `4px`
:::

:::css-var[--glass-effects]{kind="blur" type="Размытие"}
Размытие фона под ручкой и плитой. По умолчанию: `blur(64px) saturate(180%)` в светлой теме
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Тень"}
Тень плиты у `fill`. По умолчанию: `var(--elevation-raised-shadow)`
:::

:::css-var[--disabled-background]{kind="fill" type="Цвет заливки" color="var(--disabled-background)"}
Заливка и ручка в заблокированном состоянии. По умолчанию: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Цвет рамки" color="var(--disabled-border)"}
Рамка ручки в заблокированном состоянии. По умолчанию: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Текст и иконка в заблокированном состоянии. По умолчанию: `var(--gray-9)`
:::
::::
