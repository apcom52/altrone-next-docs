# CollapsedList

Information takes up space, and not all of it is equally important. `CollapsedList` shows the first few items and hides the rest behind a "Show hidden" button. The user sees just enough to get oriented and decides for themselves whether they need more.

## Basic usage

By default the list shows the first 5 items. Set `limit` to change that number.

```tsx
<CollapsedList limit={3} gap="xs">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListBasicDemo caption="Press the toggle to expand the list"}

If there are no more items than `limit`, the button isn't rendered at all. The expanded state is kept inside the component — there is nothing to wire up.

`limit` slices the **direct** children. Pass the items as siblings (or as one array via `map`); if you wrap them in a single element, the list sees one child and has nothing to cut.

## Custom button label

The button uses a localized label by default. For more specific text, pass a string or a function to `expandButtonLabel`. The function receives a context with the number of hidden items and the current state.

```tsx
<CollapsedList
  limit={3}
  expandButtonLabel={({ hiddenItems, expanded }) =>
    expanded ? "Hide reviews" : `Show ${hiddenItems} more reviews`
  }
>
  {reviews.map(/* ... */)}
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListCustomLabelDemo caption="The label changes with the state"}

## One-way expansion

`hideExpandButtonAfterUsage` removes the button once the list is expanded. Use it when collapsing the list back isn't needed — in change histories or logs, for example.

```tsx
<CollapsedList limit={3} hideExpandButtonAfterUsage>
  {changelog.map(/* ... */)}
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListOneWayDemo caption="Once expanded, the button disappears"}

## Props

:::prop[limit]{type="number" default="5"}
How many items are visible while the list is collapsed.
:::

:::prop[gap]{type="Gap"}
Space between items — not between the list and the button. Uses the design system's spacing scale: `xs`, `s`, `m`, `l`, `xl`.
:::

:::prop[hideExpandButtonAfterUsage]{type="boolean" default="false"}
When `true`, the button disappears after the first expansion. When `false`, a collapse button appears instead.
:::

:::prop[expandButtonLabel]{type="string | (ctx: CollapsedListContext) => string"}
A custom label for the toggle button. The function receives `hiddenItems`, `totalItems` and `expanded`.
:::

:::prop[openIcon]{type="ReactElement"}
The button's icon while the list is collapsed. Defaults to the shared `icons.open` role (see `Application`).
:::

:::prop[closeIcon]{type="ReactElement"}
The button's icon while the list is expanded. Defaults to the shared `icons.close` role (see `Application`).
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
A reference to the root element that wraps the items and the button. Other `HTMLAttributes<HTMLDivElement>` are passed through to it.
:::

## Related topics

- [Spoiler](/en/components/layout/spoiler) — collapses one block of content behind a heading instead of cutting a list by count
- [Actions](/en/foundations/actions) — how to deal with a row of actions that doesn't fit its container
- [Application](/en/components/layout/application) — shared `icons` roles, including the open/close chevrons this component uses
