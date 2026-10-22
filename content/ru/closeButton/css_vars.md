# Close Button

CSS-переменные, которые читает `CloseButton` и которые можно переопределить. Собственных переменных у него нет: всё приходит из `Button` и `Box`, на которых он построен, и из глобальных дизайн-токенов.

:::spoiler[Как переопределять переменные]
Переменные кнопки и `Box` задаются на самом элементе кнопки, поэтому надёжный способ изменить переменную у одной кнопки закрытия — проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме.

```tsx
<CloseButton
  style={{
    "--box-fill": "var(--danger-interactive-1)",
    "--box-tone-text": "var(--danger-text-1)",
  } as React.CSSProperties}
/>
```

::playground{src=closeButton/CloseButtonCssVarsDemo caption="По умолчанию, тонированная заливка, скруглённый квадрат, кнопка крупнее с иконкой мельче"}

`--box-size` задаёт и ширину, и высоту — кнопка остаётся квадратной. Наведение и нажатие продолжают работать после переопределения `--box-fill`: они осветляют заливку, а не подменяют её. Переопределение `--box-tone-text` заменяет цвет иконки и в заблокированном состоянии.

Что переопределить нельзя:

- **Тонкое кольцо.** Это фиксированная тень, поэтому `--box-border-*` на нём не действует.
- **Внутренние отступы.** Кнопка круглая и без отступов; иконка центрируется по своему размеру.
:::

## Глобальные переменные

Не определены самой кнопкой закрытия: переменные `Button` и примитива `Box` и глобальные дизайн-токены, которые они читают. Изменение токена перекрашивает сразу все кнопки закрытия.

::::css-vars
:::css-var[--button-icon-size]{kind="size" type="Размер"}
Размер иконки. По умолчанию: `18px`
:::

:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Фон кнопки. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет иконки. По умолчанию: `var(--text-2)`
:::

:::css-var[--box-radius]{kind="radius" type="Радиус скругления"}
Радиус скругления. По умолчанию: `50%`
:::

:::css-var[--box-size]{kind="size" type="Размер"}
Ширина и высота. По умолчанию: `var(--base-control-size)`
:::

:::css-var[--box-blur]{kind="blur" type="Фильтр фона"}
Размытие фона. По умолчанию: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Тень"}
Тень. По умолчанию: `var(--elevation-flat-shadow)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Фон кнопки. По умолчанию: `color(display-p3 1 1 1 / 0.7)` в светлой теме
:::

:::css-var[--glass-effects]{kind="blur" type="Фильтр фона"}
Размытие фона. По умолчанию: `blur(64px) saturate(180%)` в светлой теме
:::

:::css-var[--glass-press-effects]{kind="blur" type="Фильтр фона"}
Размытие фона при нажатии. По умолчанию: `blur(64px) saturate(180%) brightness(1.1)` в светлой теме
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет иконки. По умолчанию: `var(--gray-12)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет иконки заблокированной кнопки. По умолчанию: `var(--gray-9)`
:::

:::css-var[--focus-color]{kind="border" type="Цвет обводки" color="var(--focus-color)"}
Цвет обводки фокуса. По умолчанию: `color(display-p3 0 0 0)` в светлой теме
:::

:::css-var[--base-control-size]{kind="size" type="Размер"}
Размер кнопки при `size="m"`. По умолчанию: `32px`
:::

:::css-var[--elevation-flat-shadow]{kind="shadow" type="Тень"}
Тень в покое. По умолчанию: `var(--shadow-none)`
:::
::::
