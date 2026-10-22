# Avatar

`Avatar` is a round mark of a person or an entity: a photo, an icon or initials. It works as an anchor for the eye in lists, headers and comments. If there is a photo (`imageSrc`), the avatar shows it. If there is no photo, or it fails to load, it shows the icon (`icon`) when you passed one, and the initials when you didn't. The root gets `role="img"` and the full name in `aria-label`.

```tsx
import { Avatar } from 'altrone-ui';
```

## Basic usage

Initials are built from `firstName` and `lastName`. If the last name is not passed, only the first letter of the first name is used.

```tsx
<Avatar firstName="Alex" lastName="Morgan" />
```

::playground{src=avatar/AvatarBasicDemo caption="Two letters of initials"}

## Sizes

`size` sets the diameter of the avatar and the size of the initials and the icon. `m` suits most lists and tables, `xl` a profile header, `mini` dense comment rows.

```tsx
<Avatar firstName="Alex" lastName="Morgan" size="mini" />
<Avatar firstName="Alex" lastName="Morgan" size="xl" />
```

::playground{src=avatar/AvatarSizesDemo caption="mini, s, m, l, xl"}

## Photo

Pass `imageSrc` to show a photograph. If the image fails to load, the avatar shows the icon or the initials by itself — there is no need to handle the error.

```tsx
<Avatar
  firstName="Nino"
  lastName="Kobakhidze"
  imageSrc="https://example.com/avatar.jpg"
  size="l"
/>
```

::playground{src=avatar/AvatarPhotoDemo caption="On the left the photo loaded, on the right the link is broken — fallback to initials"}

:::note
When `imageSrc` changes, the error state is reset and the component tries to load the new image.
:::

## Icon instead of initials

`icon` suits entities without a personal name: a bot, a team, an unknown user. The icon is shown when there is no photo and takes priority over the initials — `firstName` and `lastName` can be omitted.

```tsx
import { Bot } from 'lucide-react';

<Avatar icon={<Bot />} aria-label="Support bot" />
```

::playground{src=avatar/AvatarIconDemo caption="An icon instead of initials"}

Without `firstName` the component can't build an `aria-label` from the name, so pass it explicitly, as in the example.

## Background and text color

Without `backgroundColor` the background is a categorical color chosen by the name: the same person always gets the same color. The text and icon color is picked automatically for contrast with the background; `textColor` overrides it.

```tsx
<Avatar firstName="Alice" lastName="Blue" backgroundColor="#6366f1" />
<Avatar firstName="Alice" lastName="Gold" backgroundColor="#1e3a5f" textColor="#fbbf24" />
```

::playground{src=avatar/AvatarColorsDemo caption="A color by name, a custom background and a custom text color"}

## Avatar group

There is no separate component for a stack — build it from `Avatar`: a negative `marginLeft` and an outline from `boxShadow` in the page background color. In such a layout `Flex` must not reset the margins of its children (`disableInnerMargins={false}`), otherwise the negative margin is lost. To show the number of hidden members, pass the counter as `firstName` — it renders as ordinary initials.

```tsx
<Flex disableInnerMargins={false} style={{ paddingLeft: 12 }}>
  {members.map((member) => (
    <Avatar
      key={member.id}
      firstName={member.firstName}
      lastName={member.lastName}
      style={{ marginLeft: -12, boxShadow: '0 0 0 2px var(--background-1)' }}
    />
  ))}
  <Avatar firstName="+4" style={{ marginLeft: -12, boxShadow: '0 0 0 2px var(--background-1)' }} />
</Flex>
```

::playground{src=avatar/AvatarGroupDemo caption="A stack of members with a hidden-count badge"}

## Props

:::prop[firstName]{type="string"}
The first name: the first letter of the initials and part of the `aria-label`. Omitted for an avatar without a personal name (a bot, a team) — it needs an `icon`.
:::

:::prop[lastName]{type="string"}
The last name: the second letter of the initials and part of the `aria-label`.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Avatar size.
:::

:::prop[imageSrc]{type="string"}
A link to the photo. If it fails to load, the `icon` or the initials are shown.
:::

:::prop[icon]{type="ReactElement"}
An icon instead of initials when there is no photo. Takes priority over the initials.
:::

:::prop[backgroundColor]{type="string"}
Background color — any valid CSS value. Without it, the color is chosen by the name from the categorical palette.
:::

:::prop[textColor]{type="string"}
Color of the initials and the icon. Without it, it is picked automatically for contrast with the background.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root element.
:::

Other `<div>` attributes, including `aria-label` and `title`, are passed to the root element.

## Related topics

- [Color](/en/foundations/color) — the categorical palette the default background comes from
- [Tags](/en/components/content/tags) — another way to mark membership
- [DataTable](/en/components/content/dataTable) — a table where avatars often sit in the first column
- [Accessibility](/en/foundations/accessibility) — accessible names and contrast across the library
