# Tags

CSS-переменные, которые читает `Tags` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные размера заданы на элементе `Tags`, цветовые — на корне приложения. Проп `style` у `Tags` сильнее обоих, поэтому это надёжный способ изменить их для одного ряда.

```tsx
<Tags
  style={{
    "--tags-item-text-color": "var(--text-1)",
    "--tags-hovered-item-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  <Tags.Item label="Stronger text" onClick={() => {}} />
</Tags>
```

::playground{src=tags/TagsCssVarsDemo caption="Более сильный текст и красный цвет при наведении"}

У подчёркивания при наведении и толщины шрифта переменных нет.
:::

## Внутренние переменные

Определены самими тегами.

::::css-vars
:::css-var[--tags-item-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста тега. По умолчанию: `var(--text-2)`
:::

:::css-var[--tags-hovered-item-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет интерактивного тега при наведении и фокусе. По умолчанию: `var(--accent-11)`
:::

:::css-var[--tags-item-font-size]{kind="font" type="Размер шрифта"}
Размер шрифта тега; зависит от `size`. По умолчанию: `var(--text-size-4)`
:::

:::css-var[--tags-item-line-height]{kind="font" type="Размер шрифта"}
Высота строки тега; зависит от `size`. По умолчанию: `var(--line-height-4)`
:::
::::

## Глобальные переменные

Не определены самими тегами, но влияют на их вид.

::::css-vars
:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Значение по умолчанию для `--tags-item-text-color`.
:::

:::css-var[--accent-11]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Значение по умолчанию для `--tags-hovered-item-color`.
:::

:::css-var[--text-weight-medium]{kind="font" type="Толщина шрифта"}
Толщина шрифта тега.
:::
::::
