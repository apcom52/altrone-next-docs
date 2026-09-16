# Flex

Примитив для flex-вёрстки. Вместо CSS-классов или инлайн-стилей `Flex` предоставляет проверяемые типами пропы, а значения отступов берутся из дизайн-токенов — интерфейс остаётся ритмичным без магических чисел.

## Горизонтальный ряд

По умолчанию `Flex` выстраивает элементы горизонтально. `gap` задаёт расстояние между ними, `align` — выравнивание по вертикальной оси.

```tsx
<Flex gap="m" align="center">
  <Avatar firstName="Alice" />
  <Text weight="medium">Alice Morgan</Text>
</Flex>
```

::playground{src=FlexRowDemo}

## Вертикальный стек

`orientation="vertical"` — вертикальный стек. Главный сценарий: поля формы, карточки, секции страницы.

```tsx
<Flex orientation="vertical" gap="m">
  <TextInput placeholder="Электронная почта" />
  <PasswordInput placeholder="Пароль" />
  <Button label="Войти" variant="submit" />
</Flex>
```

::playground{src=FlexStackDemo}

## Разнесение по краям

`justify="between"` — паттерн заголовка: название слева, действие справа.

```tsx
<Flex justify="between" align="center">
  <Text weight="bold">Проекты</Text>
  <Button label="Новый проект" icon={<Plus />} variant="submit" size="s" />
</Flex>
```

::playground{src=FlexBetweenDemo}

## Перенос строк

`wrap` позволяет элементам переноситься на следующую строку. Используйте для облаков тегов, наборов фильтров, галерей.

```tsx
<Flex gap="s" wrap>
  {tags.map((tag) => <Label key={tag}>{tag}</Label>)}
</Flex>
```

::playground{src=FlexWrapDemo}

## Вложенные Flex

`Flex` хорошо вкладывается сам в себя. Типичный паттерн — список карточек пользователей: внешний стек по вертикали, внутри каждой карточки горизонтальный ряд с аватаром и текстом.

```tsx
<Flex orientation="vertical" gap="s">
  {users.map((user) => (
    <Flex key={user.id} justify="between" align="center">
      <Flex gap="m" align="center">
        <Avatar firstName={user.name} />
        <Flex orientation="vertical" gap="xxs">
          <Text weight="medium">{user.name}</Text>
          <Text size={3} color="muted">{user.role}</Text>
        </Flex>
      </Flex>
      <Button label="Профиль" size="s" variant="text" />
    </Flex>
  ))}
</Flex>
```

::playground{src=FlexNestedDemo}

## Семантический тег

По умолчанию `Flex` рендерит `<div>`. Проп `asChild` переносит вычисленные className/style на единственный
дочерний элемент вместо рендера `<div>` — так можно использовать любой HTML-элемент, не теряя flex-поведения.

```tsx
<Flex asChild orientation="vertical" gap="s">
  <ul>
    <li>Первый пункт</li>
    <li>Второй пункт</li>
  </ul>
</Flex>

<Flex asChild gap="m" align="center">
  <nav>
    <a href="/">Главная</a>
    <a href="/docs">Документация</a>
  </nav>
</Flex>
```

## Шкала отступов

| Значение | Описание |
|----------|----------|
| `none` | 0 |
| `xxs` | минимальный |
| `xs` | очень маленький |
| `s` | маленький |
| `m` | стандартный |
| `l` | большой |
| `xl` | очень большой |
| `xxl` | максимальный |

Значения соответствуют CSS-переменным дизайн-системы. Абсолютные пиксельные размеры зависят от темы.

## Свойства

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Ось расположения элементов.
:::

:::prop[gap]{type="Gap" default="'none'"}
Расстояние между дочерними элементами из шкалы дизайн-токенов.
:::

:::prop[align]{type="'start' | 'center' | 'end'"}
Выравнивание по поперечной оси (`align-items`). Для разнесения по краям — `justify`.
:::

:::prop[justify]{type="'start' | 'center' | 'end' | 'between'"}
Выравнивание по главной оси (`justify-content`).
:::

:::prop[wrap]{type="boolean" default="false"}
Разрешает перенос элементов на следующую строку.
:::

:::prop[disableInnerMargins]{type="boolean" default="true"}
Убирает внешние отступы у прямых дочерних элементов, чтобы не конфликтовать с `gap`.
:::

:::prop[asChild]{type="boolean" default="false"}
Перенести вычисленные className/style на единственный дочерний элемент вместо рендера `<div>`.
:::

## Рекомендации

**Используйте токены, а не пиксели.** `gap="m"` привязан к дизайн-системе и будет корректным при любой теме. Инлайн `style={{ gap: '12px' }}` выбивается из ритма.

**`justify="between"` — для двух групп, не для трёх.** Паттерн «слева заголовок, справа кнопка» работает чисто. Если элементов больше, рассмотрите `Grid`.

**Вкладывайте без ограничений, но осознанно.** Три уровня вложенности — норма. Если глубже, возможно, стоит выделить компонент.
