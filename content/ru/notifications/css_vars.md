# Notifications

CSS-переменные, которые читают тосты и карточки уведомлений и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, потому что стек рисуется в портале и у него нет собственного элемента, чтобы повесить `style`. Переопределяйте их в своей таблице стилей селектором не слабее `[data-altrone-root='true']`.

```css
[data-altrone-root='true'] {
  --toast-max-width: 520px;
  --notification-width: 400px;
  --toast-success-icon-color: var(--accent-9);
}
```

Тост и карточка построены на `Box`, поэтому заливка и размытие берутся из `--box-*`; для заливки используйте `--toast-surface`.
:::

## Внутренние переменные

Определены самими уведомлениями.

::::css-vars
:::css-var[--toast-max-width]{kind="size" type="Размер"}
Максимальная ширина тоста. По умолчанию: `420px`
:::

:::css-var[--toast-surface]{kind="fill" type="Цвет заливки" color="var(--gray-1)"}
Непрозрачная заливка тостов и карточек. По умолчанию: `var(--gray-1)`
:::

:::css-var[--toast-default-icon-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет иконки тоста `default`. По умолчанию: `var(--text-2)`
:::

:::css-var[--toast-success-icon-color]{kind="text" type="Цвет текста" color="var(--teal-9)"}
Цвет иконки тоста `success`. По умолчанию: `var(--teal-9)`
:::

:::css-var[--toast-warning-icon-color]{kind="text" type="Цвет текста" color="var(--amber-9)"}
Цвет иконки тоста `warning`. По умолчанию: `var(--amber-9)`
:::

:::css-var[--toast-danger-icon-color]{kind="text" type="Цвет текста" color="var(--red-9)"}
Цвет иконки тоста `danger`. По умолчанию: `var(--red-9)`
:::

:::css-var[--notification-width]{kind="size" type="Размер"}
Ширина карточки. По умолчанию: `320px`
:::

:::css-var[--notification-image-height]{kind="size" type="Размер"}
Высота картинки карточки. По умолчанию: `140px`
:::
::::

## Глобальные переменные

Не определены самими уведомлениями, но влияют на их вид.

::::css-vars
:::css-var[--elevation-toast-z-index]{kind="size" type="Слой"}
Слой стека над страницей.
:::

:::css-var[--space-content]{kind="gap" type="Отступ"}
Внутренний отступ карточки и расстояние от края экрана.
:::

:::css-var[--space-stack]{kind="gap" type="Отступ"}
Расстояние между сообщениями в стеке.
:::

:::css-var[--space-inline]{kind="gap" type="Отступ"}
Расстояние между иконкой карточки, заголовком и кнопками.
:::

:::css-var[--interactive-a1]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка круга под иконкой.
:::
::::
