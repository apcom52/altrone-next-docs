# Tooltip

`Tooltip` draws exactly one icon itself — the `?` icon on the button it auto-generates when no `children` is passed. It has no effect once a custom trigger is passed via `children`, since there's no button left to draw it on.

:::spoiler[How to replace it]
Two ways to override it, depending on scope:

- **This one tooltip** — pass `triggerIcon`:

  ```tsx
  <Tooltip content="A secret key for accessing the API." triggerIcon={<Info size={16} />} />
  ```

- **Every default help icon in the app** — `triggerIcon` defaults to the shared `help` role from `useIcons()`, the same role `Form.Field`'s own help icon uses. Override it once on `Application` instead of on every `Tooltip`:

  ```tsx
  <Application icons={{ help: <Info /> }}>
    <YourApp />
  </Application>
  ```

::playground{src=tooltip/TooltipTriggerIconDemo caption="A custom triggerIcon on one tooltip"}

The auto-generated button is a fixed 24×24px circle — size the icon around `16px` to leave it visual breathing room, matching the default `HelpCircle`.
:::

## Icons

::::icon-cards
:::icon-card[triggerIcon]{icon="HelpCircle"}
The auto-generated trigger's icon, shown only while `children` is omitted. Defaults to the shared `help` role.
:::
::::
