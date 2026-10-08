# PasswordInput

## Keep the toggle

People often type passwords on a phone or in a hurry, and the dots give no way to spot a typo. The eye button lets them check the value before sending it, so there are fewer failed sign-ins and password resets. Turn it off only when a security policy requires it.

::::good-bad
:::good
::playground{src=passwordInput/PasswordInputGuidelineToggleGoodDemo caption="The user can check what they typed"}
:::

:::bad
::playground{src=passwordInput/PasswordInputGuidelineToggleBadDemo caption="A mistake is invisible until the sign-in fails"}
:::
::::

## Say the rules before the user types

If the password has requirements, write them next to the field. Otherwise the user finds them out one error at a time. A short hint under the label does the job: pass `hintText` to `Form.Field`.

::::good-bad
:::good
::playground{src=passwordInput/PasswordInputGuidelineRulesGoodDemo caption="The requirements are visible before the first keystroke"}
:::

:::bad
::playground{src=passwordInput/PasswordInputGuidelineRulesBadDemo caption="The user learns the rules only after a failed attempt"}
:::
::::

## Ask for a confirmation in a separate field

When someone creates a password, add a second `PasswordInput` to repeat it, and compare the two values in the form's own logic. The field itself knows nothing about its neighbors.

## Don't use it for PIN codes

A short numeric code is easier to enter in `NumberInput`, or in a `TextInput` with `type="password"` and `inputMode="numeric"`. The eye button makes little sense for four digits.

## Accessibility

- Give the field a visible label — use `Form.Field` with `label`. A placeholder is not a label.
- The eye button has a localized name ("Show password" / "Hide password") and reports its state through `aria-pressed`, so a screen reader announces what it does and whether the password is currently visible.
- Don't remove the toggle just to be safe: for many people, including those who rely on assistive tech, it is the only way to check what they typed.
