# Tags

`Tags` is a wrapping row of short labels: article topics, keywords, categories. It is the container, and every label is a `Tags.Item`. Tags help a person see at a glance what something is about and, if the labels are interactive, jump to related content.

```tsx
import { Tags } from 'altrone-ui';
```

## Basic usage

Put `Tags.Item` elements inside `Tags`. The text goes in `label`. Without `href` and `onClick` a tag is inert: a plain label with no hover and no focus.

```tsx
<Tags>
  <Tags.Item label="React" />
  <Tags.Item label="TypeScript" />
  <Tags.Item label="Design systems" />
</Tags>
```

::playground{src=tags/TagsBasicDemo caption="Inert tags only describe the content"}

## Clickable tags

With `onClick` a tag becomes a button: it gets a pointer cursor, a hover underline and keyboard control with `Enter` and `Space`. Use it for filters and other actions on the current page.

```tsx
<Tags>
  {topics.map((topic) => (
    <Tags.Item key={topic} label={topic} onClick={() => setTopic(topic)} />
  ))}
</Tags>
```

::playground{src=tags/TagsInteractiveDemo caption="Clicking a tag picks the topic"}

## Links

With `href` a tag renders as a regular `<a>`, so it opens in a new tab, can be copied and is indexed by search engines.

```tsx
<Tags>
  <Tags.Item label="#javascript" href="/tags/javascript" />
  <Tags.Item label="#typescript" href="/tags/typescript" />
</Tags>
```

::playground{src=tags/TagsLinksDemo caption="Tags with href are real links"}

### Router links

To use the link component of your router, pass `asChild` and put the link inside. The tag styling and the `ref` are merged onto it, and the tag counts as interactive.

```tsx
<Tags>
  {article.tags.map((tag) => (
    <Tags.Item key={tag} label={tag} asChild>
      <Link to={`/tags/${tag}`} />
    </Tags.Item>
  ))}
</Tags>
```

## Sizes

`size` scales the text of every tag inside: `mini`, `s`, `m` (default), `l` and `xl`. Set it on `Tags`, not on single items.

```tsx
<Tags size="l">
  <Tags.Item label="Design" />
</Tags>
```

::playground{src=tags/TagsSizesDemo caption="Five sizes; mini and s look the same"}

## Props

### Tags

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Text size of every tag inside.
:::

:::prop[children]{type="ReactNode"}
`Tags.Item` elements.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root element.
:::

### Tags.Item

:::prop[label*]{type="string"}
The tag text.
:::

:::prop[href]{type="string"}
Renders the tag as a link.
:::

:::prop[onClick]{type="(event: MouseEvent) => void"}
Without `href` turns the tag into a keyboard-operable button.
:::

:::prop[asChild]{type="boolean" default="false"}
Merges the tag styling onto the single child element, for example a router link.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the rendered element: `<a>` or `<span>`.
:::

## Related topics

- [Flex](/en/components/layout/flex) — the container `Tags` is built on
- [Text](/en/components/content/text) — plain text next to the tags
