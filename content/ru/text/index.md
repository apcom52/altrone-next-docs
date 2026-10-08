# Text

Хорошая типографика незаметна: пользователь не думает о шрифте — он читает содержимое. `Text` — единственный компонент для текста в Altrone. Он рендерит нужный HTML-элемент в зависимости от переданных пропов и берёт каждый размер, начертание и цвет из общей типографической шкалы, поэтому текст выглядит одинаково во всём интерфейсе.

Берите `Text` для любого текста вместо ручных `font-size` и `font-weight`. Раскладку он не определяет — для неё используйте `Flex` и `Grid`.

```tsx
import { Text } from "altrone-ui";

<Text block size={6} weight="bold">Billing</Text>;
```

## Элементы

Какой элемент отрендерит `Text`, определяет один проп — пропа `as` нет. Два таких пропа одновременно — ошибка типов.

| Проп      | Рендерит                        |
| --------- | ------------------------------- |
| _нет_     | `<span>`                        |
| `block`   | `<p>`                           |
| `list`    | `<ol>` или `<ul>`               |
| `item`    | `<li>`                          |
| `href`    | `<a>`                           |
| `asChild` | Дочерний элемент, который вы передали |

```tsx
<Text>Inline text</Text>
<Text block>A paragraph</Text>
<Text href="/docs">A link</Text>
```

::playground{src=text/TextElementsDemo caption="Строчный фрагмент, два параграфа и ссылка"}

Обычный `Text` строчный, поэтому его можно вставлять внутрь параграфа, не ломая поток. `block` делает его самостоятельным параграфом с межстрочным интервалом для чтения (`1.6`) — если не задан `size`, у которого свой интервал.

## Размеры

Девять ступеней, от `1` до `9`. Каждая объединяет размер шрифта и собственный межстрочный интервал; точные значения — в статье [Типографика](/ru/foundations/typography).

```tsx
<Text size={2} color="muted">Captions, metadata</Text>
<Text size={4}>Interface body text</Text>
<Text size={6} weight="bold">Section title</Text>
<Text size={7} weight="bold">Page title</Text>
```

::playground{src=text/TextSizeDemo caption="Ступени 2–8 в типичных ролях"}

Без `size` `Text` наследует размер и межстрочный интервал окружения, поэтому вписывается в любой текстовый блок, не нарушая его ритм. `Application` задаёт корневой размер `4`, он и служит базовым для основного текста.

## Начертание

```tsx
<Text weight="light">Light</Text>
<Text weight="regular">Regular</Text>
<Text weight="medium">Medium</Text>
<Text weight="bold">Bold</Text>
```

::playground{src=text/TextWeightDemo caption="Четыре начертания"}

`regular` — по умолчанию. `light` хорошо работает на крупных размерах (7–9), где `regular` выглядел бы тяжело. `medium` — спокойный акцент, а `bold` — для заголовков и цифр, которые должны бросаться в глаза первыми.

## Цвет

Без `color` текст использует нейтральный цвет текста темы. Доступны четыре семантических цвета, и каждый следует светлой и тёмной теме.

```tsx
<Text color="muted">Secondary information</Text>
<Text color="success">Saved successfully</Text>
<Text color="warning">Approaching the limit</Text>
<Text color="danger">Authorization failed</Text>
```

::playground{src=text/TextColorDemo caption="Цвет по умолчанию и четыре семантических цвета"}

:::note
`Text` задаёт свой цвет, а не наследует его от родителя. Внутри цветного `Box` укажите `color` у самого `Text` или задайте `--text-color` (см. вкладку CSS-переменных), чтобы цвета совпали.
:::

## Инлайн-декорации

Декорации применяются к фрагментам внутри строки.

```tsx
<Text italic>Italic</Text>
<Text underline>Underline</Text>
<Text deleted>Deleted</Text>
<Text highlighted>Highlighted</Text>
<Text code>npm install altrone-ui</Text>
<Text kbd>Ctrl + S</Text>
```

::playground{src=text/TextDecorationsDemo caption="Все шесть декораций"}

`code` и `kbd` оба используют моноширинный шрифт, но означают разное: `code` — для фрагментов кода и команд, `kbd` — для клавиш и сочетаний. `deleted` ещё и приглушает текст, чтобы удалённое читалось как удалённое.

## Переполнение

Когда контейнер не вмещает текст, выбирайте стратегию явно.

```tsx
<Text truncate style={{ maxWidth: 240 }}>
  quarterly-report-final-v2-reviewed-by-legal.pdf
</Text>

<Text block lineClamp={3}>
  A longer description that is cut after its third line…
</Text>

<Text nowrap>[Regression]</Text>
```

::playground{src=text/TextOverflowDemo caption="Усечение, ограничение двумя строками и запрет переноса"}

`truncate` оставляет одну строку и завершает её многоточием. `lineClamp` ограничивает число видимых строк. `nowrap` лишь запрещает перенос, и текст может выйти за границы.

:::note
`truncate` требует ограниченной ширины — на самом элементе или на его родителе, иначе резать нечего. `lineClamp` лучше работает на `block`-тексте.
:::

## Выравнивание

```tsx
<Text block align="start">Start (default)</Text>
<Text block align="center">Center</Text>
<Text block align="end">End</Text>
<Text block align="justify">Justify</Text>
```

::playground{src=text/TextAlignDemo caption="Четыре варианта выравнивания"}

Выравнивание имеет смысл для `block`-текста или текста с явной шириной; у строчного `<span>` видимого эффекта нет.

## Списки

Список — это `list` и набор `item`. Каждый `item` принимает те же пропы, что и любой другой `Text`.

```tsx
<Text list="numeric">
  <Text item>Install the package</Text>
  <Text item>Wrap the app in Application</Text>
</Text>

<Text list="marked">
  <Text item>TypeScript</Text>
  <Text item>React 19</Text>
</Text>
```

::playground{src=text/TextListDemo caption="Нумерованный и маркированный списки"}

## Ссылки

`href` превращает `Text` в `<a>`. `external` открывает ссылку в новой вкладке и сам добавляет `rel="noopener noreferrer"`.

```tsx
<Text href="/docs/getting-started">Getting started</Text>

<Text href="https://github.com" external>
  View on GitHub
</Text>
```

::playground{src=text/TextLinkDemo caption="Внутренняя ссылка, внешняя ссылка и ссылка внутри параграфа"}

Ссылка рисуется акцентным цветом со средним начертанием и подчёркивается при наведении и фокусе с клавиатуры.

## Инлайн-композиция

Сильнейшее применение `Text` — комбинировать строчные варианты внутри одного блока: каждый фрагмент получает свой стиль без лишних обёрток.

```tsx
<Text block>
  Press <Text kbd>Ctrl + S</Text> to save, or run <Text code>git commit</Text>{" "}
  in the terminal. A <Text highlighted>review</Text> comes first.
</Text>
```

::playground{src=text/TextInlineCompositionDemo caption="Клавиши, код, зачёркнутое, выделенное и ссылка в одном параграфе"}

## Использование как другой элемент (asChild)

`asChild` переносит типографику на выбранный вами дочерний элемент. Так получают заголовок, кнопку или `<code>`, выглядящие как `Text`, — сам `Text` никогда не рендерит `<h1>`–`<h6>`.

```tsx
<Text asChild size={7} weight="bold">
  <h3>A real heading element</h3>
</Text>

<Text asChild code>
  <code>npm install altrone-ui</code>
</Text>
```

::playground{src=text/TextAsChildDemo caption="Заголовок и элемент code с типографикой Text"}

:::note
`asChild` требует ровно один дочерний элемент. Если `children` не является валидным React-элементом, компонент вернёт `null` и выведет предупреждение в режиме разработки.
:::

## Свойства

:::prop[size]{type="1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9"}
Ступень размера, от наименьшей к наибольшей. Без него размер наследуется.
:::

:::prop[weight]{type="'light' | 'regular' | 'medium' | 'bold'" default="'regular'"}
Насыщенность шрифта.
:::

:::prop[color]{type="'success' | 'danger' | 'warning' | 'muted'"}
Семантический цвет. Без него используется нейтральный цвет текста.
:::

:::prop[align]{type="'start' | 'center' | 'end' | 'justify'"}
Выравнивание текста. Заметно у блока или текста с явной шириной.
:::

:::prop[italic]{type="boolean" default="false"}
Курсивное начертание.
:::

:::prop[underline]{type="boolean" default="false"}
Подчёркивание.
:::

:::prop[deleted]{type="boolean" default="false"}
Зачёркивание и приглушённый цвет — для удалённого или устаревшего контента.
:::

:::prop[highlighted]{type="boolean" default="false"}
Выделение фоновым цветом.
:::

:::prop[code]{type="boolean" default="false"}
Моноширинный стиль с рамкой для фрагментов кода и команд.
:::

:::prop[kbd]{type="boolean" default="false"}
Моноширинный приглушённый стиль для клавиш и сочетаний.
:::

:::prop[truncate]{type="boolean" default="false"}
Оставляет одну строку и завершает её многоточием. Нужна ограниченная ширина.
:::

:::prop[lineClamp]{type="number"}
Ограничивает число видимых строк и завершает последнюю многоточием.
:::

:::prop[nowrap]{type="boolean" default="false"}
Запрещает перенос строки (`white-space: nowrap`).
:::

:::prop[block]{type="boolean"}
Рендерит `<p>`. Нельзя сочетать с `list`, `item`, `href` и `asChild`.
:::

:::prop[list]{type="'numeric' | 'marked'"}
Рендерит `<ol>` или `<ul>`. Внутри — `Text` с `item`.
:::

:::prop[item]{type="boolean"}
Рендерит `<li>`. Используется внутри `Text` с `list`.
:::

:::prop[href]{type="string"}
Адрес ссылки. Рендерит `<a>`.
:::

:::prop[external]{type="boolean" default="false"}
Добавляет `target="_blank"` и `rel="noopener noreferrer"`. Только вместе с `href`.
:::

:::prop[asChild]{type="boolean"}
Объединяет типографику с дочерним элементом через паттерн Slot.
:::

`Text` также принимает все стандартные атрибуты того элемента, который рендерит.

## Похожие темы

- [Типографика](/ru/foundations/typography) — токены размеров, начертаний и шрифтов за `size`, `weight` и `code`
- [Цвет](/ru/foundations/color) — ролевые токены за `color`
- [Доступность](/ru/foundations/accessibility) — правила контраста и размера текста, действующие для любого `Text`
- [Box](/ru/components/layout/box) — поверхность, на которой чаще всего лежит `Text`
- [Button](/ru/components/controls/button) — в кнопку передают подпись, а не `Text`
