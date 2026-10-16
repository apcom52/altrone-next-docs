# Message

CSS custom properties that `Message` reads and that can be overridden.

:::spoiler[How to override variables]
The variables are set on the message element itself, so the `style` prop is a reliable way to change them for one message: an inline value beats the default.

```tsx
<Message
  icon={<Info />}
  title="Roomier message"
  style={{ "--message-icon-size": "32px", "--message-rounding": "12px" } as React.CSSProperties}
/>
```

::playground{src=message/MessageCssVarsDemo caption="A larger icon, a smaller radius and stronger text"}

The fill and the title and icon color come from `Box` and depend on `severity`: to change them, pick another `severity` rather than overriding `--box-*`.
:::

## Internal variables

Defined by the message itself.

::::css-vars
:::css-var[--message-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the explanation. Default: `var(--text-2)`
:::

:::css-var[--message-icon-size]{kind="size" type="Size"}
Icon size. Default: `24px`
:::

:::css-var[--message-rounding]{kind="radius" type="Corner radius"}
Message corner radius. Default: `24px`
:::
::::

## Global variables

Not defined by the message itself, but they shape its look.

::::css-vars
:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Title and icon color; depends on `severity`.
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
The default of `--message-text-color`.
:::

:::css-var[--space-content]{kind="gap" type="Spacing"}
The inner padding of the message.
:::
::::
