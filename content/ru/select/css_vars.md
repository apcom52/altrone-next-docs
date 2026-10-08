# Select

CSS-переменные, которые читает `Select` и которые можно переопределить.

:::spoiler[Как переопределить переменные]
Поле — это `TextInput`, поэтому переменные `--text-input-*` задаются через проп `style` у `Select`. Инлайн-стили сильнее классов размеров, так что переопределение заменяет значение для любого `size`:

```tsx
<Select
  value={value}
  onChange={setValue}
  options={options}
  style={{ '--text-input-font-size': '18px' } as React.CSSProperties}
/>
```

::playground{src=select/SelectCssVarsDemo caption="Крупнее шрифт, крупнее иконка и шире отступ у иконок"}

Список открывается в портале, вне поля, поэтому переменная, заданная через `style`, до него не доходит. Высоту списка задавайте пропом `menuHeight`, а чтобы изменить её сразу у всех селектов, задайте `--select-menu-height` на корне `Application`.

Что переопределить нельзя:

- **Нижнюю границу шрифта на сенсорных устройствах.** На touch-устройствах размер `m` поднимает `--text-input-font-size` до `16px` через media query, чтобы iOS не увеличивал страницу; инлайн-переопределение заменит это значение.
- **Вид отключённого поля.** `disabled` принудительно задаёт `--box-fill` и `--box-tone-text` токенами отключённого состояния.
:::

## Внутренние переменные

Определены самим `Select`.

::::css-vars
:::css-var[--select-menu-height]{kind="size" type="Размер"}
Максимальная высота списка опций. По умолчанию: `250px`
:::
::::

## Глобальные переменные

Не определены `Select`: переменные `TextInput` и `Box`, на которых построено поле, и глобальные дизайн-токены.

::::css-vars
:::css-var[--text-input-font-size]{kind="font" type="Размер шрифта"}
Размер шрифта значения. По умолчанию: `14px`
:::

:::css-var[--text-input-icon-size]{kind="size" type="Размер"}
Размер шеврона и иконки очистки. По умолчанию: `16px`
:::

:::css-var[--text-input-island-outer-inset]{kind="gap" type="Отступ"}
Расстояние между границей поля и иконками. По умолчанию: `var(--space-inset-compact)` (`4px`)
:::

:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка поля. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет значения. По умолчанию: `var(--text-2)`
:::

:::css-var[--box-tone-translucent]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка при наведении и фокусе у варианта `transparent`. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--box-padding-x]{kind="gap" type="Отступ"}
Горизонтальный отступ поля. По умолчанию: `var(--space-control-x-m)` (`8px`)
:::

:::css-var[--box-size]{kind="size" type="Размер"}
Высота поля. По умолчанию: `32px`
:::

:::css-var[--box-radius]{kind="radius" type="Радиус скругления"}
Радиус скругления поля. По умолчанию: `var(--radius-pill)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Тень"}
Тень под полем. По умолчанию: `var(--elevation-flat-shadow)`
:::

:::css-var[--placeholder-text-color]{kind="text" type="Цвет текста" color="var(--placeholder-text-color)"}
Цвет плейсхолдера. По умолчанию: `var(--gray-a9)`
:::

:::css-var[--text-1]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет иконок. По умолчанию: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет сообщения «Ничего не найдено» в списке. По умолчанию: `var(--gray-12)`
:::

:::css-var[--disabled-background]{kind="fill" type="Цвет заливки" color="var(--disabled-background)"}
Заливка отключённого поля. По умолчанию: `var(--gray-3)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет текста отключённого поля. По умолчанию: `var(--gray-9)`
:::

:::css-var[--space-content]{kind="gap" type="Отступ"}
Внутренний отступ сообщения «Ничего не найдено». По умолчанию: `var(--gap)` (`8px`)
:::
::::
