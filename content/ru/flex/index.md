# Flex

`Flex` — примитив для расположения элементов в ряд или в колонку. Вместо CSS-классов и инлайновых стилей он принимает типизированные пропы, а отступы берёт из шкалы дизайн-токенов — интерфейс остаётся ритмичным без «магических» чисел.

`Flex` занимает всю доступную ширину, а между дочерними элементами расставляет только `gap`: их собственные внешние отступы он обнуляет (см. `disableInnerMargins`).

## Горизонтальный ряд

По умолчанию элементы выстраиваются в ряд. `gap` задаёт расстояние между ними, `align` — выравнивание по вертикали.

```tsx
<Flex gap="m" align="center">
  <Avatar firstName="Alice" lastName="Morgan" size="l" />
  <Text weight="medium">Alice Morgan</Text>
</Flex>
```

::playground{src=flex/FlexRowDemo caption="Аватар крупнее текста, поэтому align=center ставит их на одну ось"}

## Вертикальный стек

`orientation="vertical"` превращает `Flex` в стек. Это основной сценарий для полей форм, карточек и секций страницы.

```tsx
<Flex orientation="vertical" gap="m">
  <TextInput placeholder="Email" />
  <PasswordInput placeholder="Password" />
  <Button label="Sign in" variant="submit" />
</Flex>
```

::playground{src=flex/FlexStackDemo caption="Дочерние элементы растягиваются на всю ширину стека"}

## Разнесение по краям

`justify="between"` прижимает первую группу к левому краю, а последнюю — к правому. Так строится шапка секции: название слева, действие справа.

```tsx
<Flex justify="between" align="center">
  <Text size={4} weight="bold">Projects</Text>
  <Button label="New project" icon={<Plus />} variant="submit" size="s" />
</Flex>
```

::playground{src=flex/FlexBetweenDemo}

`justify` принимает `start`, `center`, `end` и `between` и управляет главной осью, а `align` — `start`, `center` и `end` и управляет поперечной.

## Перенос строк

Пока `wrap` не включён, элементы остаются в одной строке. С `wrap` те, что не поместились, переносятся на следующую — так работают облака тегов и наборы фильтров.

```tsx
<Flex gap="s" wrap>
  {tags.map((tag) => (
    <Box key={tag} material="translucent" shape="pill" size="s">{tag}</Box>
  ))}
</Flex>
```

::playground{src=flex/FlexWrapDemo caption="Уменьшите окно — теги перенесутся на новую строку"}

## Вложенные Flex

`Flex` свободно вкладывается сам в себя. Типичный пример — список пользователей: внешний стек, в каждой строке ряд с аватаром и подписью, а подпись — снова вертикальный стек из имени и должности.

```tsx
<Flex orientation="vertical" gap="m">
  {users.map((user) => (
    <Flex key={user.id} justify="between" align="center">
      <Flex gap="m" align="center">
        <Avatar firstName={user.firstName} lastName={user.lastName} />
        <Flex orientation="vertical" gap="xxs">
          <Text weight="medium">{user.name}</Text>
          <Text size={3} color="muted">{user.role}</Text>
        </Flex>
      </Flex>
      <Button label="Profile" size="s" variant="text" />
    </Flex>
  ))}
</Flex>
```

::playground{src=flex/FlexNestedDemo}

## Шкала отступов

`gap` принимает значения общей шкалы `Gap` — той же, что использует [Grid](/ru/components/layout/grid). Каждое значение — CSS-переменная дизайн-системы, поэтому отступы согласованы во всём интерфейсе.

| Значение | Переменная   | Пикселей |
| -------- | ------------ | -------- |
| `none`   | —            | 0        |
| `xxs`    | `--narrow-gap` | 2      |
| `xs`     | `--xs-gap`   | 4        |
| `s`      | `--s-gap`    | 6        |
| `m`      | `--gap`      | 8        |
| `l`      | `--l-gap`    | 12       |
| `xl`     | `--xl-gap`   | 24       |
| `xxl`    | `--xxl-gap`  | 36       |

::playground{src=flex/FlexGapDemo caption="Один и тот же ряд при каждом значении gap"}

## Другой HTML-элемент

По умолчанию `Flex` рендерит `<div>`. `asChild` переносит вычисленные `className` и `style` на единственный дочерний элемент, поэтому контейнером может быть `ul`, `nav`, `section` или любой другой элемент — со всей flex-раскладкой.

```tsx
<Flex asChild orientation="vertical" gap="s">
  <ul>
    <li>First item</li>
    <li>Second item</li>
  </ul>
</Flex>

<Flex asChild gap="m" align="center">
  <nav>
    <a href="/">Home</a>
    <a href="/docs">Docs</a>
  </nav>
</Flex>
```

:::note
`asChild` требует ровно одного дочернего элемента. Если `children` — не валидный React-элемент, компонент вернёт `null` и выведет ошибку в консоль.
:::

## Свойства

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Ось расположения элементов: в ряд или в колонку.
:::

:::prop[gap]{type="'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'" default="'none'"}
Расстояние между дочерними элементами из шкалы дизайн-токенов.
:::

:::prop[align]{type="'start' | 'center' | 'end'"}
Выравнивание по поперечной оси (`align-items`). Пока не задано, элементы растягиваются на всю поперечную ось.
:::

:::prop[justify]{type="'start' | 'center' | 'end' | 'between'"}
Выравнивание по главной оси (`justify-content`).
:::

:::prop[wrap]{type="boolean" default="false"}
Разрешает перенос элементов на следующую строку.
:::

:::prop[disableInnerMargins]{type="boolean" default="true"}
Обнуляет внешние отступы у прямых дочерних элементов, чтобы они не складывались с `gap`. Правило сильнее любых стилей элемента, поэтому расстояние между элементами всегда задаётся только `gap`.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит вычисленные `className` и `style` на единственный дочерний элемент вместо рендера `<div>`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на корневой DOM-элемент. Принимается как обычный проп.
:::

Остальные атрибуты `HTMLAttributes<HTMLElement>` (`className`, `style`, `id`, `aria-*` и другие) передаются корневому элементу.

## Похожие темы

- [Grid](/ru/components/layout/grid) — двумерная сетка из 12 колонок, когда нужно выровнять и строки, и столбцы
- [Доступность](/ru/foundations/accessibility) — общие правила, в том числе про семантические элементы
