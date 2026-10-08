# Switch

CSS-переменные, которые читает `Switch` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Все они задаются на корневом `<label>`, поэтому надёжный способ изменить переменную у одного переключателя — проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме. Правило в таблице стилей тоже подойдёт, но селектор должен быть специфичнее классов размера (например, `.my-switch.my-switch`).

```tsx
<Switch
  checked={enabled}
  onChange={setEnabled}
  style={{ "--switch-track-height": "36px" } as React.CSSProperties}
>
  Taller track
</Switch>
```

::playground{src=switch/SwitchCssVarsDemo caption="Переопределение переменных через проп style"}

Ширина дорожки, размер ползунка и его отступ выводятся из `--switch-track-height`, поэтому одно это значение масштабирует весь переключатель. Переопределите `--switch-checked-background-color`, `--switch-checked-border-color` и `--switch-checked-icon-color`, чтобы перекрасить включённое состояние и сохранить вид при наведении и в заблокированном состоянии. Прямое переопределение `--switch-background-color` или `--switch-border-color` заменяет значение во всех состояниях, включая включённое и заблокированное.

Что переопределить нельзя:

- **Вид `danger`.** Он только перекрашивает подпись через `--switch-label-text-color`; цвета дорожки остаются прежними.
- **Кольцо фокуса.** Оно берётся из глобальной `--focus-color`.
- **Минимальную высоту строки 24px.** Она защищает область нажатия при `size="mini"`.
:::

## Внутренние переменные

Определены самим переключателем.

::::css-vars
:::css-var[--switch-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Фон дорожки в выключенном состоянии. По умолчанию: `var(--interactive-1)`
:::

:::css-var[--switch-hover-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-2)"}
Фон выключенной дорожки при наведении. По умолчанию: `var(--interactive-2)`
:::

:::css-var[--switch-checked-background-color]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Фон дорожки во включённом состоянии. По умолчанию: `var(--accent-3)`
:::

:::css-var[--switch-border-color]{kind="border" type="Цвет рамки" color="var(--border-a1)"}
Кольцо вокруг выключенной дорожки. По умолчанию: `var(--border-a1)`
:::

:::css-var[--switch-checked-border-color]{kind="border" type="Цвет рамки" color="var(--accent-a5)"}
Кольцо вокруг включённой дорожки. По умолчанию: `var(--accent-a5)`
:::

:::css-var[--switch-icon-color]{kind="fill" type="Цвет заливки" color="var(--solid-a1)"}
Цвет ползунка в выключенном состоянии. По умолчанию: `var(--solid-a1)`
:::

:::css-var[--switch-checked-icon-color]{kind="fill" type="Цвет заливки" color="var(--accent-12)"}
Цвет ползунка во включённом состоянии. По умолчанию: `var(--accent-12)`
:::

:::css-var[--switch-label-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет подписи. По умолчанию: `var(--text-2)`
:::

:::css-var[--switch-track-height]{kind="size" type="Размер"}
Высота дорожки; всё остальное выводится из неё. По умолчанию: `24px`
:::

:::css-var[--switch-track-width]{kind="size" type="Размер"}
Ширина дорожки. По умолчанию: `calc(var(--switch-track-height) * 2)`
:::

:::css-var[--switch-handle-size]{kind="size" type="Размер"}
Размер ползунка в выключенном состоянии. По умолчанию: `calc(var(--switch-track-height) * 2 / 3)`
:::

:::css-var[--switch-handle-checked-size]{kind="size" type="Размер"}
Ширина ползунка во включённом состоянии. По умолчанию: `var(--switch-track-height)`
:::

:::css-var[--switch-handle-inset]{kind="gap" type="Отступ"}
Отступ между ползунком и краем дорожки. По умолчанию: `calc(var(--switch-track-height) / 8)`
:::

:::css-var[--switch-label-size]{kind="font" type="Размер шрифта"}
Размер шрифта подписи. По умолчанию: `var(--text-size-4)`
:::

:::css-var[--switch-label-line-height]{kind="font" type="Размер шрифта"}
Высота строки подписи. По умолчанию: `var(--line-height-4)`
:::
::::

## Глобальные переменные

Не определены самим переключателем: глобальные токены дизайна, которые он читает. Изменение токена перекрашивает сразу все переключатели.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Отступ между дорожкой и подписью. По умолчанию: `8px`
:::

:::css-var[--focus-color]{kind="border" type="Цвет рамки" color="var(--focus-color)"}
Кольцо фокуса с клавиатуры. По умолчанию: чёрный в светлой теме
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет подписи с `danger`. По умолчанию: `var(--red-11)`
:::

:::css-var[--disabled-background]{kind="fill" type="Цвет заливки" color="var(--disabled-background)"}
Фон дорожки в заблокированном состоянии. По умолчанию: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Цвет рамки" color="var(--disabled-border)"}
Кольцо вокруг заблокированной дорожки. По умолчанию: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Подпись и ползунок в заблокированном состоянии. По умолчанию: `var(--gray-9)`
:::

:::css-var[--shadow-1]{kind="shadow" type="Тень"}
Мягкая тень под дорожкой. По умолчанию: `var(--shadow-1)`
:::
::::
