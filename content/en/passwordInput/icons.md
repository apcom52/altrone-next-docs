# PasswordInput

The field draws one pair of icons itself: an eye on the toggle button. Which one you see depends on the state. Icons you put into islands yourself are covered in the [overview](/en/components/controls/passwordInput).

:::spoiler[How to replace the icons]
Pass the icon to `showIcon` and `hideIcon`. You can replace one or both.

```tsx
import { Lock, LockOpen } from 'lucide-react';

<PasswordInput
  value={value}
  onChange={setValue}
  showIcon={<LockOpen />}
  hideIcon={<Lock />}
/>
```

::playground{src=passwordInput/PasswordInputIconsDemo caption="A padlock instead of an eye"}

Each value is a `ReactElement`. The button sizes the icon itself according to the field's `size`, so you don't need to set it. An icon from another library works the same way — see [Icons](/en/foundations/icons).

Remember that `showIcon` is shown while the password is **hidden** and invites the user to reveal it. `hideIcon` is the opposite. With a pair like a padlock, check that the meaning is clear: the open one means "show".
:::

## Icons

The cards show the props that replace the icons.

::::icon-cards
:::icon-card[showIcon]{icon="Eye"}
Shown on the button while the password is hidden — it offers to reveal it
:::

:::icon-card[hideIcon]{icon="EyeOff"}
Shown on the button while the password is visible — it offers to hide it again
:::
::::
