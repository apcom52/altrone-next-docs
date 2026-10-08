# Box

`Box` — примитив поверхности, на котором построен почти каждый стилизованный элемент Altrone: кнопки, чипы, карточки, текстовые поля, плейсхолдеры. Он рисует заливку, обводку, форму углов и тень и реагирует на наведение, нажатие и фокус — всё настраивается пропами, а не CSS. Берите его всякий раз, когда нужен контейнер, выглядящий как часть библиотеки. Для раскладки содержимого используйте [Flex](/ru/components/layout/flex) и [Grid](/ru/components/layout/grid): `Box` лишь задаёт блоку внешний вид.

По умолчанию `Box` — это `<div>`, и он не хранит React-состояния: наведение, нажатие и фокус — чистый CSS, поэтому его безопасно рендерить на сервере.

```tsx
import { Box } from "altrone-ui";

<Box material="translucent" tone="accent" padding={{ x: 16, y: 8 }}>
  3 new messages
</Box>;
```

## Материалы

`material` задаёт, как поверхность выглядит в покое: чем она залита, размывает ли то, что за ней, и есть ли у неё обводка. По умолчанию — `solid`.

```tsx
<Box material="solid" tone="accent">solid</Box>
<Box material="translucent" tone="accent">translucent</Box>
<Box material="outline" tone="accent">outline</Box>
<Box material="dotted" tone="accent">dotted</Box>
```

::playground{src=box/BoxMaterialsDemo caption="Все девять материалов в одном тоне на подкрашенном фоне — чтобы матовым было что размывать"}

| Материал      | В покое                                                                  | С `pressable`                                      |
| ------------- | ------------------------------------------------------------------------ | -------------------------------------------------- |
| `solid`       | Непрозрачная заливка сплошным цветом тона, текст контрастирует сам       | Чуть светлее при наведении, темнее при нажатии     |
| `glass`       | Матовая полупрозрачная заливка с размытием фона, не зависит от `tone`    | Светлеет при наведении, размытие усиливается при нажатии |
| `plate`       | Матовая заливка, тонкая кромка и тень покоя — приподнятый контрол        | Светлеет при наведении, размытие усиливается при нажатии |
| `translucent` | Плоская полупрозрачная подкраска тона                                    | Подкраска усиливается                              |
| `pale`        | Подкраска `translucent`, сделанная непрозрачной — не смешивается с фоном | Подкраска усиливается                              |
| `transparent` | Ничего                                                                   | Появляется полупрозрачная подсветка                |
| `outline`     | Статичная обводка                                                        | Появляется подсветка, обводка усиливается          |
| `ghost`       | Ничего — обводка появляется только при взаимодействии                    | Появляются подсветка и обводка                     |
| `dotted`      | Лёгкая подкраска, тонкая кромка и точечный узор — поверхность-плейсхолдер | Подсветка и обводка усиливаются                   |

`glass` и `plate` игнорируют `tone` и `color` в заливке — им следует только цвет текста. Как этот словарь устроен во всей библиотеке — в статье [Материалы](/ru/foundations/materials).

## Тона

`tone` выбирает цветовую роль, из которой берёт цвета материал. `danger`, `success` и `warning` — фиксированные оттенки; `info` следует акцентному цвету приложения, как и `accent`.

```tsx
<Box material="solid" tone="danger">danger</Box>
<Box material="translucent" tone="success">success</Box>
```

::playground{src=box/BoxTonesDemo caption="Шесть тонов в сплошном и полупрозрачном материале"}

## Свой цвет

`color` выходит за рамки системы тонов и приоритетнее `tone`. Передайте одно из десяти имён категориальных оттенков или любой CSS-цвет — заливка, обводка и текст каждого материала выведутся из него.

```tsx
<Box material="solid" color="teal">Design</Box>
<Box material="translucent" color="indigo">Backend</Box>
<Box material="outline" color="#f0abfc">Custom</Box>
```

::playground{src=box/BoxColorDemo caption="Имена оттенков и произвольный CSS-цвет"}

Имя оттенка превращается в его сплошной шаг, поэтому цвет согласован с [категориальной палитрой](/ru/foundations/color) и следует светлой и тёмной теме. Произвольная строка используется как есть.

## Формы

`shape` выбирает алгоритм скругления углов. Величина скругления по-прежнему берётся из окружающего радиуса (см. [Область радиуса](#область-радиуса)); `shape` решает, как это значение применить.

```tsx
<Box shape="rect">rect</Box>
<Box shape="squircle" radius={16}>squircle</Box>
<Box shape="pill">pill</Box>
```

::playground{src=box/BoxShapesDemo caption="Все пять форм при одном номинальном радиусе"}

| Форма      | Углы                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `rect`     | Всегда прямые, окружающий радиус игнорируется                                                      |
| `rounded`  | По умолчанию. Следует окружающему радиусу, но не меньше `2px`                                      |
| `squircle` | Плавный суперэллиптический угол; в браузерах без `corner-shape` — уменьшенный обычный радиус       |
| `circle`   | Круг с квадратным соотношением сторон; padding сбрасывается в `0`                                  |
| `pill`     | Полностью скруглённые края-«капсула» при любых размере и ширине                                    |

## Размеры

Именованный `size` задаёт минимальную высоту и внутренние отступы вместе.

```tsx
<Box size="mini">mini</Box>
<Box size="s">s</Box>
<Box size="m">m</Box>
<Box size="l">l</Box>
<Box size="xl">xl</Box>
```

::playground{src=box/BoxSizesDemo caption="Пять размеров: высота 16, 24, 32, 40 и 48px"}

### Произвольный размер

Число (пиксели) или CSS-строка в `size` превращают блок в **квадрат** такого размера и не трогают отступы. Для прямоугольника используйте `width` и `height` — любой из них приоритетнее `size`.

```tsx
<Box size={44} />
<Box size="4em" />
<Box width={120} height={40} />
```

::playground{src=box/BoxCustomSizeDemo caption="Квадрат в пикселях, квадрат в em, явные ширина и высота"}

## Отступы

`padding` заменяет отступы, которые задал бы размер. Число — пиксели, строка используется как есть (подойдёт токен), объект задаёт каждую ось отдельно.

```tsx
<Box padding={4} />
<Box padding={{ x: 24, y: 6 }} />
<Box padding="var(--space-content)" />
```

::playground{src=box/BoxPaddingDemo caption="Число, объект и токен"}

## Возвышение

`elevation` задаёт порядок наложения и тень вместе, как одну роль: `flat` (по умолчанию), `raised`, `sticky`, `overlay`, `modal` и `toast`.

```tsx
<Box elevation="raised" material="pale" />
<Box elevation="overlay" material="pale" />
```

::playground{src=box/BoxElevationDemo caption="От flat до toast"}

## Взаимодействие

Три пропа включают интерактивный вид. Все они — обычные CSS-псевдоклассы, поэтому у `Box` нет собственного состояния.

- **`pressable`** — заливка реагирует на наведение и нажатие. Что именно меняется, зависит от материала (см. таблицу выше).
- **`focusable`** — рисует кольцо фокуса при фокусе с клавиатуры, одинаковое для всех материалов.
- **`editable`** — для `Box`, который оборачивает или сам отрисовывает текстовое поле: вид «в работе» и кольцо фокуса появляются по `:focus-within`, а не при нажатии.

```tsx
<Box asChild material="translucent" tone="accent" pressable focusable>
  <button type="button">Save</button>
</Box>
```

::playground{src=box/BoxPressableDemo caption="Наведите, нажмите и пройдите Tab по кнопкам"}

```tsx
<Box asChild material="outline" editable>
  <input placeholder="Type something…" />
</Box>
```

::playground{src=box/BoxEditableDemo caption="Кликните в поле — рамка реагирует на фокус, а не на нажатие"}

## Область радиуса

`radius` задаёт окружающий радиус скругления на этом элементе. Его читают `rounded` и `squircle`, а также всё вложенное — поэтому дочерний блок может взять меньший радиус и остаться концентричным с родителем. Без `radius` блок берёт то, что задал предок, но не меньше `2px`. `rect`, `circle` и `pill` его игнорируют.

```tsx
<Box radius={24} padding={12}>
  <Box radius={12}>Inner</Box>
</Box>
```

::playground{src=box/BoxRadiusScopeDemo caption="Значение по умолчанию, явный радиус, squircle и rect, который радиус игнорирует"}

Для squircle `radius` — это значение там, где браузер поддерживает `corner-shape`. В остальных браузерах обычный `border-radius` автоматически уменьшается, чтобы угол не выглядел заметно круглее.

## Использование как другой элемент (asChild)

`Box` — это `<div>`. `asChild` переносит его вид и поведение на единственный дочерний элемент — `<button>`, `<a>`, `<input>`, `Link` роутера. Это единственный способ сменить отрисовываемый элемент; пропа `as` нет.

```tsx
<Box asChild shape="circle" material="solid" tone="accent" size="l" pressable focusable>
  <button type="button" aria-label="Notifications">
    <Bell size={16} />
  </button>
</Box>
```

::playground{src=box/BoxAsChildDemo caption="Круглая кнопка с иконкой и ссылка, обе собраны из Box"}

:::note
`asChild` требует ровно один дочерний элемент. `ref` передаётся на этот элемент.
:::

## Свойства

:::prop[material]{type="'solid' | 'glass' | 'plate' | 'translucent' | 'pale' | 'transparent' | 'outline' | 'ghost' | 'dotted'" default="'solid'"}
Как поверхность выглядит в покое: заливка, размытие и обводка.
:::

:::prop[tone]{type="'neutral' | 'accent' | 'danger' | 'success' | 'warning' | 'info'" default="'neutral'"}
Цветовая роль, из которой материал берёт цвета. `info` следует акцентному цвету приложения.
:::

:::prop[color]{type="'red' | 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink' | 'brown' | string"}
Свой цвет, приоритетнее `tone`. Имя оттенка превращается в его сплошной шаг; любая другая строка используется как CSS-цвет.
:::

:::prop[shape]{type="'rect' | 'rounded' | 'squircle' | 'circle' | 'pill'" default="'rounded'"}
Алгоритм скругления углов. `rect` всегда прямоугольный, `circle` всегда круглый, у `pill` всегда края-«капсула»; `rounded` и `squircle` следуют области радиуса.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl' | number | string" default="'m'"}
Именованный размер задаёт минимальную высоту и отступы. Число (px) или CSS-строка делают блок квадратом такого размера.
:::

:::prop[width]{type="number | string"}
Явная ширина; число — пиксели. Приоритетнее `size`.
:::

:::prop[height]{type="number | string"}
Явная высота; число — пиксели. Приоритетнее `size`.
:::

:::prop[radius]{type="number | string"}
Задаёт окружающий радиус скругления для этого блока и всего вложенного. Число — пиксели, строка используется как есть. Игнорируется `rect`, `circle` и `pill`.
:::

:::prop[padding]{type="number | string | { x?: number | string; y?: number | string }"}
Заменяет отступы именованного размера. Объект задаёт каждую ось отдельно.
:::

:::prop[elevation]{type="'flat' | 'raised' | 'sticky' | 'overlay' | 'modal' | 'toast'" default="'flat'"}
Порядок наложения и тень как одна роль.
:::

:::prop[pressable]{type="boolean" default="false"}
Добавляет заливке отклик на наведение и нажатие.
:::

:::prop[focusable]{type="boolean" default="false"}
Добавляет кольцо фокуса при фокусе с клавиатуры.
:::

:::prop[editable]{type="boolean" default="false"}
Для блока вокруг текстового поля: вид «в работе» и кольцо фокуса появляются, пока фокус внутри блока.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит вид и поведение блока на дочерний элемент через паттерн Slot.
:::

`Box` также принимает `className`, `style` и любые стандартные HTML-атрибуты.

## Похожие темы

- [Материалы](/ru/foundations/materials) — общий словарь материалов, тонов и взаимодействия, который реализует `Box`
- [Цвет](/ru/foundations/color) — ролевые токены за `tone` и категориальная палитра за `color`
- [Тёмная тема](/ru/foundations/darkTheme) — почему `glass` и `plate` потребовали отдельных значений для тёмной темы
- [Макеты и адаптивность](/ru/foundations/layout) — `Box` рядом с `Flex`, `Grid` и `Screen`
- [Button](/ru/components/controls/button) — самый частый компонент, построенный на `Box`
- [Доступность](/ru/foundations/accessibility) — правила фокуса и зоны касания за `focusable` и `size`
