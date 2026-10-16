# Result

`Result` is a centered block that tells the user the outcome or state of something: nothing found, an operation succeeded, access is denied, loading failed. An icon in a tinted chip, a heading, a short explanation and a row of buttons — all in the middle of the area they refer to. Use it where a whole block of the page has nothing to show or has finished a task.

```tsx
import { Result } from 'altrone-ui';
```

## Basic usage

Without props `Result` shows an empty state with the localized text "No data".

```tsx
<Result />
```

::playground{src=result/ResultBasicDemo caption="The default is the empty state"}

## Status

`status` sets the default icon and the tint of the chip: `empty` (default), `info`, `success`, `warning` and `error`. Only the chip is colored, the text stays neutral. The icons of `info`, `success`, `warning` and `error` come from the application `icons`, so they change together with the rest of the library; `empty` always uses the search icon.

```tsx
<Result status="success" title="Invoice sent" />
<Result status="warning" title="Plan limit reached" />
<Result status="error" title="Upload failed" />
```

::playground{src=result/ResultStatusDemo caption="Five statuses"}

## Heading and explanation

The heading goes in `title`, the explanation is the content. If there is no `title`, a single line of content becomes the heading, which is handy for tables and menus.

```tsx
<Result size="s">No results for "kubernetes"</Result>
```

::playground{src=result/ResultOneLineDemo caption="One line without a title"}

With `title` and content you get both a heading and a muted explanation under it. For `status="empty"` with no text at all, the localized "No data" is shown; the other statuses show just the icon.

## Actions

`actions` puts buttons under the text: one element, several elements or a function that returns them. Use `icon` to replace the chip glyph with one that fits the situation.

```tsx
<Result
  icon={<FolderPlus />}
  title="No projects yet"
  actions={
    <>
      <Button label="New project" icon={<Plus />} variant="submit" />
      <Button label="Import" icon={<Upload />} />
    </>
  }
>
  Projects group your work, deploys and members. Create the first one to get going.
</Result>
```

::playground{src=result/ResultActionsDemo caption="An empty state with a custom icon and two actions"}

## Errors

The `error` status renders `role="alert"`, so a screen reader announces it at once. The other statuses are a polite `role="status"`. A retry button is the usual action.

```tsx
<Result
  status="error"
  title="Couldn't load activity"
  actions={<Button label="Retry" icon={<RefreshCw />} />}
>
  Something went wrong on our side. This usually clears up on its own.
</Result>
```

::playground{src=result/ResultErrorDemo caption="An error with a retry button"}

## Sizes

`size` scales the chip, the text and the padding: `mini`, `s`, `m` (default), `l` and `xl`. Small sizes suit a table, a menu or a panel, large ones a whole page.

```tsx
<Result size="s" title="No results" />
```

::playground{src=result/ResultSizesDemo caption="Five sizes"}

## Props

:::prop[status]{type="'empty' | 'info' | 'success' | 'warning' | 'error'" default="'empty'"}
The kind of feedback. Sets the default icon and the tint of the chip.
:::

:::prop[title]{type="ReactNode"}
The heading. Without it, the content becomes the heading, and for `empty` the localized "No data" is used.
:::

:::prop[children]{type="ReactNode"}
The muted explanation under the heading. Without `title` it is shown as the heading.
:::

:::prop[icon]{type="ReactNode"}
Replaces the glyph in the chip.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | (() => ReactElement | ReactElement[])"}
Elements, usually `Button`, in a row under the text.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Size of the chip, text and padding.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root element.
:::

## Related topics

- [Message](/en/components/feedback/message) — a message in the page flow, not a whole block
- [Notifications](/en/components/feedback/notifications) — a brief message that doesn't take up space on the page
- [Button](/en/components/controls/button) — buttons for `actions`
