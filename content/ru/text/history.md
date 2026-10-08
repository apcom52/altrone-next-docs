# Text

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Text" name="Text" open="true"}
**4.0**

- `Text` получил новый дизайн.
- Убраны все сабкомпоненты (`Text.Heading`, `Text.Paragraph`, `Text.Inline`, `Text.Link` и другие). Вместо них нужный текст выбирается большим набором пропов.
- Расширена шкала размеров.
- Добавлена обрезка текста.
- Новые возможности для ссылок.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/text-3.png" name="Text"}
**3.1**

- Проп `role` у `Text.Heading` помечен устаревшим из-за конфликта с ARIA. Для визуального стиля используйте `variant`, для явной роли — `ariaRole`.

**3.0**

- `Text` заменил `Heading`, `Paragraph` и `Blockquote` и получил новый дизайн.
- Добавлены сабкомпоненты под разные задачи: `Text.Heading`, `Text.Paragraph`, `Text.Inline`, `Text.Link`, `Text.ScreenName` и другие.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/text-2.png" name="Heading, Paragraph, Blockquote"}
**2.0**

- Исправлено переопределение `className` и отсутствие пропа `id` у `Heading`.
- Исправлен `padding-right` у `Blockquote`.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/text-1.png" name="Heading, Paragraph, Blockquote"}
**1.3**

- Исправлен обязательный проп `className` у `Blockquote`.

**1.0**

- Типографика добавлена в библиотеку как набор отдельных компонентов: `Heading`, `Paragraph` и `Blockquote`.
:::
