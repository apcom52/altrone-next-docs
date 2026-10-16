# Tags

`Tags` — перенос по строкам коротких меток: темы статьи, ключевые слова, категории. Это контейнер, а каждая метка — `Tags.Item`. Теги помогают с первого взгляда понять, о чём материал, а если метки интерактивны — перейти к похожему содержимому.

```tsx
import { Tags } from 'altrone-ui';
```

## Базовое использование

Положите элементы `Tags.Item` внутрь `Tags`. Текст передаётся в `label`. Без `href` и `onClick` тег неинтерактивен: простая метка без наведения и фокуса.

```tsx
<Tags>
  <Tags.Item label="React" />
  <Tags.Item label="TypeScript" />
  <Tags.Item label="Design systems" />
</Tags>
```

::playground{src=tags/TagsBasicDemo caption="Неинтерактивные теги только описывают содержимое"}

## Кликабельные теги

С `onClick` тег становится кнопкой: у него появляются курсор-указатель, подчёркивание при наведении и управление с клавиатуры по `Enter` и `Space`. Используйте для фильтров и других действий на текущей странице.

```tsx
<Tags>
  {topics.map((topic) => (
    <Tags.Item key={topic} label={topic} onClick={() => setTopic(topic)} />
  ))}
</Tags>
```

::playground{src=tags/TagsInteractiveDemo caption="Клик по тегу выбирает тему"}

## Ссылки

С `href` тег отображается обычной ссылкой `<a>`: её можно открыть в новой вкладке, скопировать, и она индексируется поисковиками.

```tsx
<Tags>
  <Tags.Item label="#javascript" href="/tags/javascript" />
  <Tags.Item label="#typescript" href="/tags/typescript" />
</Tags>
```

::playground{src=tags/TagsLinksDemo caption="Теги с href — настоящие ссылки"}

### Ссылки роутера

Чтобы использовать компонент ссылки вашего роутера, передайте `asChild` и положите ссылку внутрь. На неё переносятся стили тега и `ref`, а тег считается интерактивным.

```tsx
<Tags>
  {article.tags.map((tag) => (
    <Tags.Item key={tag} label={tag} asChild>
      <Link to={`/tags/${tag}`} />
    </Tags.Item>
  ))}
</Tags>
```

## Размеры

`size` масштабирует текст всех тегов внутри: `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Задавайте его на `Tags`, а не на отдельных элементах.

```tsx
<Tags size="l">
  <Tags.Item label="Design" />
</Tags>
```

::playground{src=tags/TagsSizesDemo caption="Пять размеров; mini и s выглядят одинаково"}

## Свойства

### Tags

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер текста всех тегов внутри.
:::

:::prop[children]{type="ReactNode"}
Элементы `Tags.Item`.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент.
:::

### Tags.Item

:::prop[label*]{type="string"}
Текст тега.
:::

:::prop[href]{type="string"}
Отображает тег ссылкой.
:::

:::prop[onClick]{type="(event: MouseEvent) => void"}
Без `href` превращает тег в кнопку, доступную с клавиатуры.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит стили тега на единственный дочерний элемент, например ссылку роутера.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на отрисованный элемент: `<a>` или `<span>`.
:::

## Связанные темы

- [Flex](/ru/components/layout/flex) — контейнер, на котором построен `Tags`
- [Text](/ru/components/content/text) — обычный текст рядом с тегами
