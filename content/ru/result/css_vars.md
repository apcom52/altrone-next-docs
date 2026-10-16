# Result

CSS-переменные, которые читает `Result` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения и в классах размера и статуса блока, поэтому проп `style` — надёжный способ изменить их для одного блока: значение в нём сильнее всех остальных.

```tsx
<Result
  status="success"
  title="Invoice sent"
  style={{
    "--result-media-size": "72px",
    "--result-icon-size": "34px",
  } as React.CSSProperties}
/>
```

::playground{src=result/ResultCssVarsDemo caption="Более крупный кружок"}

Цвета кружка зависят от `status`. Переопределение `--result-media-background` и `--result-media-color` заменяет оттенок для любого статуса.
:::

## Внутренние переменные

Определены самим блоком.

::::css-vars
:::css-var[--result-padding]{kind="gap" type="Отступ"}
Отступ вокруг блока; зависит от `size`. По умолчанию: `var(--xl-gap)`
:::

:::css-var[--result-gap]{kind="gap" type="Отступ"}
Расстояние между кружком, текстом и кнопками; зависит от `size`. По умолчанию: `var(--l-gap)`
:::

:::css-var[--result-media-size]{kind="size" type="Размер"}
Диаметр кружка; зависит от `size`. По умолчанию: `48px`
:::

:::css-var[--result-icon-size]{kind="size" type="Размер"}
Размер иконки в кружке; зависит от `size`. По умолчанию: `22px`
:::

:::css-var[--result-media-background]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Заливка кружка; зависит от `status`. По умолчанию: `var(--interactive-1)`
:::

:::css-var[--result-media-color]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет иконки; зависит от `status`. По умолчанию: `var(--text-1)`
:::

:::css-var[--result-description-max-width]{kind="size" type="Размер"}
Максимальная ширина пояснения; зависит от `size`. По умолчанию: `34ch`
:::
::::

## Глобальные переменные

Не определены самим блоком, но окрашивают кружок для каждого статуса.

::::css-vars
:::css-var[--info-interactive-1]{kind="fill" type="Цвет заливки" color="var(--info-interactive-1)"}
Заливка кружка для `info`.
:::

:::css-var[--info-text-1]{kind="text" type="Цвет текста" color="var(--info-text-1)"}
Цвет иконки для `info`.
:::

:::css-var[--success-interactive-1]{kind="fill" type="Цвет заливки" color="var(--success-interactive-1)"}
Заливка кружка для `success`.
:::

:::css-var[--success-text-1]{kind="text" type="Цвет текста" color="var(--success-text-1)"}
Цвет иконки для `success`.
:::

:::css-var[--warning-interactive-1]{kind="fill" type="Цвет заливки" color="var(--warning-interactive-1)"}
Заливка кружка для `warning`.
:::

:::css-var[--warning-text-1]{kind="text" type="Цвет текста" color="var(--warning-text-1)"}
Цвет иконки для `warning`.
:::

:::css-var[--danger-interactive-1]{kind="fill" type="Цвет заливки" color="var(--danger-interactive-1)"}
Заливка кружка для `error`.
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет иконки для `error`.
:::
::::
