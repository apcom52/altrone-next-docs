# TextInput

CSS-переменные, которые читает `TextInput` и которые можно переопределить.

:::spoiler[Как переопределить переменные]
Переменные `--text-input-*` объявлены на корневом элементе поля, поэтому задавайте их через проп `style` нужного `TextInput`. Инлайн-стили сильнее классов размеров, так что переопределение заменяет значение для любого `size`:

```tsx
<TextInput
  value={value}
  onChange={setValue}
  style={{ '--text-input-font-size': '18px' } as React.CSSProperties}
/>
```

::playground{src=textInput/TextInputCssVarsDemo caption="Крупнее шрифт, крупнее иконка и шире отступ у островов"}

Что переопределить нельзя:

- **Нижнюю границу шрифта на сенсорных устройствах.** На touch-устройствах размер `m` поднимает `--text-input-font-size` до `16px` через media query, чтобы iOS не увеличивал страницу; инлайн-переопределение заменит это значение.
- **Вид отключённого поля.** `disabled` принудительно задаёт `--box-fill` и `--box-tone-text` токенами отключённого состояния.
:::

## Внутренние переменные

Определены самим `TextInput`.

::::css-vars
:::css-var[--text-input-font-size]{kind="font" type="Размер шрифта"}
Размер шрифта значения и текстовых островов. По умолчанию: `14px`
:::

:::css-var[--text-input-icon-size]{kind="size" type="Размер"}
Размер иконки в `IconIsland`. По умолчанию: `16px`
:::

:::css-var[--text-input-island-outer-inset]{kind="gap" type="Отступ"}
Расстояние от границы поля до первого или последнего острова. По умолчанию: `var(--space-inset-compact)` (`4px`)
:::
::::

## Глобальные переменные

Не определены `TextInput`: переменные примитива `Box`, на котором он построен, и глобальные токены дизайна.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка поля. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет значения. По умолчанию: `var(--text-2)`
:::

:::css-var[--box-tone-translucent]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка `transparent`-варианта при наведении и фокусе. По умолчанию: `var(--interactive-a1)`
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
Цвет иконок, текстовых островов и счётчика. По умолчанию: `var(--gray-11)`
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет счётчика при превышении лимита. По умолчанию: `var(--red-11)`
:::

:::css-var[--disabled-background]{kind="fill" type="Цвет заливки" color="var(--disabled-background)"}
Заливка отключённого поля. По умолчанию: `var(--gray-3)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет текста отключённого поля. По умолчанию: `var(--gray-9)`
:::

:::css-var[--space-inline]{kind="gap" type="Отступ"}
Расстояние между полем ввода и островами. По умолчанию: `var(--s-gap)` (`6px`)
:::

:::css-var[--space-inset-compact]{kind="gap" type="Отступ"}
Расстояние между островами с одной стороны. По умолчанию: `var(--xs-gap)` (`4px`)
:::
::::
