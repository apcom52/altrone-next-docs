# Form

The only icon `Form` draws itself is the help icon of `Form.Field`: the button with a tooltip that appears next to the label when `hintText` is set. Without `hintText` no icon is rendered at all. Controls inside the field draw their own icons — see their pages.

:::spoiler[How to replace the icon]
Pass `hintIcon` to a single field. It takes the place of the help icon inside the same hint button, and the button sizes it to `12px` automatically.

```tsx
import { Info } from "lucide-react";

<Form.Field
  name="slug"
  label="Project slug"
  hintText="Lowercase letters, digits and dashes only."
  hintIcon={<Info />}
>
  <TextInput value={slug} onChange={setSlug} />
</Form.Field>
```

::playground{src=form/FormHintIconDemo caption="An info icon instead of the question mark"}

To change the icon for every form at once, set the `help` role through the `icons` prop of `Application` — `hintIcon` is used only when a field needs something different. Icons from any library work — see [Icons](/en/foundations/icons).
:::

## Icons

::::icon-cards
:::icon-card[hintIcon]{icon="HelpCircle"}
Opens the tooltip with `hintText` next to the label
:::
::::
