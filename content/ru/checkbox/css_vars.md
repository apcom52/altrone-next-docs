# Checkbox

CSS-переменные, которые читает `Checkbox` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Все они задаются на корневом `<label>`, поэтому надёжный способ изменить переменную у одного чекбокса — проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме. Правило в таблице стилей тоже подойдёт, но селектор должен быть специфичнее классов размера (например, `.my-checkbox.my-checkbox`).

```tsx
<Checkbox
  checked={checked}
  onChange={setChecked}
  style={{ "--checkbox-size": "32px", "--checkbox-check-icon-size": "18px" } as React.CSSProperties}
>
  Bigger box
</Checkbox>
```

::playground{src=checkbox/CheckboxCssVarsDemo caption="Переопределение переменных через проп style"}

Переопределите `--checkbox-checked-background-color` и `--checkbox-checked-border-color`, чтобы перекрасить выбранное состояние и сохранить вид при наведении и в заблокированном состоянии. Прямое переопределение `--checkbox-background-color` или `--checkbox-border-color` заменяет значение во всех состояниях, включая выбранное и заблокированное.

Что переопределить нельзя:

- **Вид `danger`.** Он только перекрашивает подпись через `--checkbox-text-color`; цвета бокса остаются прежними.
- **Радиус в процентах.** `--checkbox-rounding` попадает в зарегистрированное свойство типа `<length>`, поэтому задавайте длину, например `12px` (половина бокса по умолчанию даёт круг), а не `50%`.
- **Кольцо фокуса.** Оно берётся из глобальной `--focus-color`.
- **Минимальную высоту строки 24px.** Она защищает область нажатия при `size="mini"`.
:::

## Внутренние переменные

Определены самим чекбоксом.

::::css-vars
:::css-var[--checkbox-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Фон бокса в покое. По умолчанию: `var(--interactive-1)`
:::

:::css-var[--checkbox-hover-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-2)"}
Фон бокса при наведении. По умолчанию: `var(--interactive-2)`
:::

:::css-var[--checkbox-checked-background-color]{kind="fill" type="Цвет заливки" color="var(--accent-5)"}
Фон выбранного или промежуточного бокса. По умолчанию: `var(--accent-5)`
:::

:::css-var[--checkbox-border-color]{kind="border" type="Цвет рамки" color="var(--border-1)"}
Кольцо вокруг бокса. По умолчанию: `var(--border-1)`
:::

:::css-var[--checkbox-checked-border-color]{kind="border" type="Цвет рамки" color="var(--accent-6)"}
Кольцо вокруг выбранного бокса. По умолчанию: `var(--accent-6)`
:::

:::css-var[--checkbox-icon-color]{kind="text" type="Цвет значка" color="var(--accent-12)"}
Галочка и чёрточка. По умолчанию: `var(--accent-12)`
:::

:::css-var[--checkbox-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет подписи. По умолчанию: `var(--text-2)`
:::

:::css-var[--checkbox-rounding]{kind="radius" type="Радиус скругления"}
Радиус скругления бокса. По умолчанию: `var(--radius-m)`
:::

:::css-var[--checkbox-size]{kind="size" type="Размер"}
Ширина и высота бокса. По умолчанию: `24px`
:::

:::css-var[--checkbox-row-height]{kind="size" type="Размер"}
Минимальная высота кликабельной строки. По умолчанию: `32px`
:::

:::css-var[--checkbox-check-icon-size]{kind="size" type="Размер"}
Размер галочки. По умолчанию: `12px`
:::

:::css-var[--checkbox-indetermination-size]{kind="size" type="Размер"}
Размер квадрата-чёрточки. По умолчанию: `10px`
:::

:::css-var[--checkbox-label-size]{kind="font" type="Размер шрифта"}
Размер шрифта подписи. По умолчанию: `var(--text-size-4)`
:::

:::css-var[--checkbox-label-line-height]{kind="font" type="Размер шрифта"}
Высота строки подписи. По умолчанию: `var(--line-height-4)`
:::
::::

## Глобальные переменные

Не определены самим чекбоксом: глобальные токены дизайна, которые он читает. Изменение токена перекрашивает сразу все чекбоксы.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Отступ между боксом и подписью. По умолчанию: `8px`
:::

:::css-var[--focus-color]{kind="border" type="Цвет рамки" color="var(--focus-color)"}
Кольцо фокуса с клавиатуры. По умолчанию: чёрный в светлой теме
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет подписи с `danger`. По умолчанию: `var(--red-11)`
:::

:::css-var[--background-a2]{kind="fill" type="Цвет заливки" color="var(--background-a2)"}
Фон бокса в заблокированном состоянии. По умолчанию: `var(--gray-a2)`
:::

:::css-var[--disabled-border]{kind="border" type="Цвет рамки" color="var(--disabled-border)"}
Кольцо вокруг заблокированного бокса. По умолчанию: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Подпись и галочка в заблокированном состоянии. По умолчанию: `var(--gray-9)`
:::

:::css-var[--radius-s]{kind="radius" type="Радиус скругления"}
Скругление чёрточки и бокса `mini`. По умолчанию: `4px`
:::

:::css-var[--shadow-1]{kind="shadow" type="Тень"}
Мягкая тень под боксом. По умолчанию: `var(--shadow-1)`
:::
::::
