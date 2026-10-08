# Button

The only icons a `Button` draws itself are the ones that report an async `state`. While one is visible, the button's own content is hidden but keeps its space, so the width doesn't change; a loading button also gets `aria-busy`. The loading spinner is altrone-ui's own `Loading` and can't be replaced. Icons you pass yourself (`icon`, `additionalIcon`) are covered in the [overview](/en/components/controls/button#icons).

:::spoiler[How to replace the icons]
Pass `successIcon` and `failedIcon` when an outcome deserves a more specific signal. The replacement takes the place of the checkmark or the cross inside the same colored circle, and — like any `lucide-react` icon — sizes itself to it automatically.

```tsx
import { PartyPopper, TriangleAlert } from "lucide-react";

<Button
  label="Publish"
  variant="submit"
  state={state}
  successIcon={<PartyPopper />}
  failedIcon={<TriangleAlert />}
  onClick={handleClick}
/>
```

::playground{src=button/ButtonStateIconsDemo caption="Press the button — the outcome is random"}

The circle's color follows the outcome, not the icon: green for `succeeded`, red for `failed`. Use the icon to say *what* happened, not whether it worked, and keep it recognizable at a glance — it's on screen only as long as you keep the state.

Both props accept any `ReactElement`. Automatic sizing is keyed to the `lucide` class, so an icon from another library needs an explicit size of about `16px` — see [Icons](/en/foundations/icons).

```tsx
<Button label="Save" state={state} successIcon={<CheckIcon className="size-4" />} />
```
:::

## Icons

::::icon-cards
:::icon-card[successIcon]{icon="Check"}
Signals a successful outcome while `state` is `succeeded`
:::

:::icon-card[failedIcon]{icon="X"}
Signals a failed outcome while `state` is `failed`
:::
::::
