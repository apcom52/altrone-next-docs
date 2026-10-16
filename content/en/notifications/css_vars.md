# Notifications

CSS custom properties that toasts and notification cards read and that can be overridden.

:::spoiler[How to override variables]
The variables are set on the application root, because the stack is rendered in a portal and has no element of its own to put `style` on. Override them in your stylesheet with a selector at least as specific as `[data-altrone-root='true']`.

```css
[data-altrone-root='true'] {
  --toast-max-width: 520px;
  --notification-width: 400px;
  --toast-success-icon-color: var(--accent-9);
}
```

The toast and the card are built on `Box`, so the fill and blur come from `--box-*`; for the fill use `--toast-surface`.
:::

## Internal variables

Defined by the notifications themselves.

::::css-vars
:::css-var[--toast-max-width]{kind="size" type="Size"}
Maximum toast width. Default: `420px`
:::

:::css-var[--toast-surface]{kind="fill" type="Fill color" color="var(--gray-1)"}
Opaque fill of toasts and cards. Default: `var(--gray-1)`
:::

:::css-var[--toast-default-icon-color]{kind="text" type="Text color" color="var(--text-2)"}
Icon color of the `default` toast. Default: `var(--text-2)`
:::

:::css-var[--toast-success-icon-color]{kind="text" type="Text color" color="var(--teal-9)"}
Icon color of the `success` toast. Default: `var(--teal-9)`
:::

:::css-var[--toast-warning-icon-color]{kind="text" type="Text color" color="var(--amber-9)"}
Icon color of the `warning` toast. Default: `var(--amber-9)`
:::

:::css-var[--toast-danger-icon-color]{kind="text" type="Text color" color="var(--red-9)"}
Icon color of the `danger` toast. Default: `var(--red-9)`
:::

:::css-var[--notification-width]{kind="size" type="Size"}
Card width. Default: `320px`
:::

:::css-var[--notification-image-height]{kind="size" type="Size"}
Height of the card image. Default: `140px`
:::
::::

## Global variables

Not defined by the notifications themselves, but they shape their look.

::::css-vars
:::css-var[--elevation-toast-z-index]{kind="size" type="Layer"}
Layer of the stack above the page.
:::

:::css-var[--space-content]{kind="gap" type="Spacing"}
Padding of the card and the distance from the screen edge.
:::

:::css-var[--space-stack]{kind="gap" type="Spacing"}
Space between messages in the stack.
:::

:::css-var[--space-inline]{kind="gap" type="Spacing"}
Space between the card icon, the title and the buttons.
:::

:::css-var[--interactive-a1]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Fill of the circle behind the icon.
:::
::::
