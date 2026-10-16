# Message

CSS-переменные, которые читает `Message` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Переменные задаются на самом элементе сообщения, поэтому проп `style` — надёжный способ изменить их у одного сообщения: инлайновое значение перебивает значение по умолчанию.

```tsx
<Message
  icon={<Info />}
  title="Roomier message"
  style={{ "--message-icon-size": "32px", "--message-rounding": "12px" } as React.CSSProperties}
/>
```

::playground{src=message/MessageCssVarsDemo caption="Крупнее иконка, меньше скругление, насыщеннее текст"}

Заливка и цвет заголовка и иконки идут от `Box` и зависят от `severity`: чтобы поменять их, выберите другой `severity`, а не переопределяйте `--box-*`.
:::

## Внутренние переменные

Определены самим сообщением.

::::css-vars
:::css-var[--message-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет пояснения. По умолчанию: `var(--text-2)`
:::

:::css-var[--message-icon-size]{kind="size" type="Размер"}
Размер иконки. По умолчанию: `24px`
:::

:::css-var[--message-rounding]{kind="radius" type="Скругление углов"}
Скругление углов сообщения. По умолчанию: `24px`
:::
::::

## Глобальные переменные

Не определены самим сообщением, но задают его вид.

::::css-vars
:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет заголовка и иконки; зависит от `severity`.
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Значение `--message-text-color` по умолчанию.
:::

:::css-var[--space-content]{kind="gap" type="Размер отступа"}
Внутренний отступ сообщения.
:::
::::
