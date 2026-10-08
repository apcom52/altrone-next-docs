# Flex

`Flex` is a primitive for laying out elements in a row or a column. Instead of CSS classes and inline styles it takes typed props and draws its spacing from the design-token scale, so the interface keeps its rhythm without magic numbers.

`Flex` takes the full available width, and the only spacing it places between children is `gap`: it zeroes their own outer margins (see `disableInnerMargins`).

## Horizontal row

By default elements are laid out in a row. `gap` sets the distance between them, `align` sets the vertical alignment.

```tsx
<Flex gap="m" align="center">
  <Avatar firstName="Alice" lastName="Morgan" size="l" />
  <Text weight="medium">Alice Morgan</Text>
</Flex>
```

::playground{src=flex/FlexRowDemo caption="The avatar is taller than the text, so align=center puts them on one axis"}

## Vertical stack

`orientation="vertical"` turns `Flex` into a stack. It is the main scenario for form fields, cards and page sections.

```tsx
<Flex orientation="vertical" gap="m">
  <TextInput placeholder="Email" />
  <PasswordInput placeholder="Password" />
  <Button label="Sign in" variant="submit" />
</Flex>
```

::playground{src=flex/FlexStackDemo caption="Children stretch to the full width of the stack"}

## Spreading to the edges

`justify="between"` pushes the first group to the left edge and the last one to the right. It builds a section header: a title on the left, an action on the right.

```tsx
<Flex justify="between" align="center">
  <Text size={4} weight="bold">Projects</Text>
  <Button label="New project" icon={<Plus />} variant="submit" size="s" />
</Flex>
```

::playground{src=flex/FlexBetweenDemo}

`justify` accepts `start`, `center`, `end` and `between` and controls the main axis; `align` accepts `start`, `center` and `end` and controls the cross axis.

## Wrapping

Without `wrap`, elements stay on a single line. With `wrap`, the ones that don't fit move to the next line — this is how tag clouds and filter sets work.

```tsx
<Flex gap="s" wrap>
  {tags.map((tag) => (
    <Box key={tag} material="translucent" shape="pill" size="s">{tag}</Box>
  ))}
</Flex>
```

::playground{src=flex/FlexWrapDemo caption="Make the window narrower — the tags wrap to a new line"}

## Nested Flex

`Flex` nests freely inside itself. A typical case is a list of users: an outer stack, a row with an avatar and a caption in each item, and the caption is a vertical stack again — a name over a role.

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

## Gap scale

`gap` takes the values of the shared `Gap` scale — the same one [Grid](/en/components/layout/grid) uses. Every value is a design-system CSS variable, so spacing stays consistent across the interface.

| Value  | Variable       | Pixels |
| ------ | -------------- | ------ |
| `none` | —              | 0      |
| `xxs`  | `--narrow-gap` | 2      |
| `xs`   | `--xs-gap`     | 4      |
| `s`    | `--s-gap`      | 6      |
| `m`    | `--gap`        | 8      |
| `l`    | `--l-gap`      | 12     |
| `xl`   | `--xl-gap`     | 24     |
| `xxl`  | `--xxl-gap`    | 36     |

::playground{src=flex/FlexGapDemo caption="The same row at every gap value"}

## Another HTML element

By default `Flex` renders a `<div>`. `asChild` moves the computed `className` and `style` onto its single child, so the container can be a `ul`, `nav`, `section` or any other element — with the full flex layout.

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
`asChild` requires exactly one child element. If `children` is not a valid React element, the component returns `null` and logs an error to the console.
:::

## Props

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
The axis elements are laid out along: in a row or in a column.
:::

:::prop[gap]{type="'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'" default="'none'"}
The distance between children, from the design-token scale.
:::

:::prop[align]{type="'start' | 'center' | 'end'"}
Alignment along the cross axis (`align-items`). While it is not set, elements stretch across the whole cross axis.
:::

:::prop[justify]{type="'start' | 'center' | 'end' | 'between'"}
Alignment along the main axis (`justify-content`).
:::

:::prop[wrap]{type="boolean" default="false"}
Lets elements wrap onto the next line.
:::

:::prop[disableInnerMargins]{type="boolean" default="true"}
Zeroes the outer margins of direct children so they don't add up with `gap`. The rule wins over any style of the element, so the distance between elements is always set by `gap` alone.
:::

:::prop[asChild]{type="boolean" default="false"}
Moves the computed `className` and `style` onto the single child element instead of rendering a `<div>`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
A reference to the root DOM element. Accepted as a regular prop.
:::

The other `HTMLAttributes<HTMLElement>` attributes (`className`, `style`, `id`, `aria-*` and so on) are passed to the root element.

## Related topics

- [Grid](/en/components/layout/grid) — a two-dimensional 12-column grid, for when both rows and columns must line up
- [Accessibility](/en/foundations/accessibility) — the library-wide rules, including semantic elements
