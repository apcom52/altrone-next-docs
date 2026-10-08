# Form

Единственная иконка, которую `Form` рисует сама, — иконка помощи в `Form.Field`: кнопка со всплывающей подсказкой рядом с меткой, которая появляется при заданном `hintText`. Без `hintText` иконка не рендерится вовсе. Контролы внутри поля рисуют собственные иконки — см. их страницы.

:::spoiler[Как заменить иконку]
Передайте `hintIcon` отдельному полю. Она займёт место иконки помощи внутри той же кнопки подсказки, а кнопка сама приведёт её к размеру `12px`.

```tsx
import { Info } from "lucide-react";

<Form.Field
  name="slug"
  label="Project slug"
  hintText="Lowercase letters, digits and dashes only."
  hintIcon={<Info />}
>
  <TextInput value={slug} onChange={setSlug} />
</Form.Field>
```

::playground{src=form/FormHintIconDemo caption="Иконка info вместо вопросительного знака"}

Чтобы поменять иконку сразу во всех формах, задайте роль `help` через проп `icons` у `Application` — `hintIcon` нужен, когда конкретному полю требуется что-то иное. Подойдут иконки из любой библиотеки — см. [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[hintIcon]{icon="HelpCircle"}
Открывает подсказку с `hintText` рядом с меткой
:::
::::
