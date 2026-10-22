# Avatar

## Pass both first and last name

One letter tells people apart worse than two, especially in lists with similar names. If the last name is known, always pass it.

::::good-bad
:::good
::playground{src=avatar/AvatarGuidelineNamesGoodDemo caption="Two letters — the avatars are distinguishable"}
:::

:::bad
::playground{src=avatar/AvatarGuidelineNamesBadDemo caption="One letter — \"M\" repeats"}
:::
::::

## Limit the stack

Three or four avatars and a hidden-count badge read better than a dozen overlapping circles of which only an edge is visible.

::::good-bad
:::good
::playground{src=avatar/AvatarGuidelineGroupGoodDemo caption="Three avatars and a \"+5\" badge"}
:::

:::bad
::playground{src=avatar/AvatarGuidelineGroupBadDemo caption="Eight overlapping avatars"}
:::
::::

## Don't wrap the photo in your own check

The fallback to the icon or the initials is built in: don't put your own load-error handling on top of `Avatar`.

## Change the color only when it comes from data

The color is already tied to the name by default. Pass `backgroundColor` when the color should come from your model — for example by role or identifier.

## Accessibility

- The root is `role="img"`, and the full name goes into `aria-label`.
- Give an avatar without a name (a bot, a team, a guest) an `aria-label` yourself — otherwise it has no accessible name.
- The initials and the icon inside are hidden from assistive technology (`aria-hidden`), so the name isn't read twice.
- The text color is picked for contrast with the background; when you set `textColor` together with `backgroundColor`, check the contrast yourself.
