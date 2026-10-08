# Application

The CSS variables you can override on `Application`. They control the page background, the text color and the font of the whole app.

:::spoiler[How to override variables]
The most reliable way is the `style` prop: an inline value beats the default in both themes. A rule in your stylesheet works too, but its selector must be more specific than `[data-altrone-root='true']`.

```tsx
<Application
  style={{ '--app-font-family': "'Georgia', serif" } as React.CSSProperties}
>
  <App />
</Application>
```

A fixed color replaces the default, which adapts to the theme, so it looks the same in light and dark mode. To keep both themes working, use a token such as `var(--gray-2)` instead of a plain color.

`Application` copies the background to `<body>` and `<html>` when it starts and every time the theme changes. It doesn't watch the variable itself, so if you change it later while the app is running, the copy updates only on the next theme change. A `transparent` background is never copied.

What you can't override:

- **The colors copied to `<html>` and `<body>`.** They are calculated from `--app-background`, so change the variable, not the styles.
- **Tokens that other parts of the library set on the root** — accent, status and gray colors, spacing, radius. They belong to their own topics; see [Color](/en/foundations/color).
:::

## Internal variables

Defined by `Application` itself.

::::css-vars
:::css-var[--app-background]{kind="fill" type="Fill color" color="var(--background-1)"}
Background of the app and the page, also copied to `<body>`. Default: `var(--background-1)`
:::

:::css-var[--app-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Default text color of the app. Default: `var(--text-2)`
:::

:::css-var[--app-font-family]{kind="font" type="Font family"}
Font of all text in the app. Default: `var(--font-family-base)`
:::
::::

## Global variables

Not defined by `Application`: the global tokens its defaults come from, and the base text sizes it uses. Changing a token restyles the whole library at once.

::::css-vars
:::css-var[--background-1]{kind="fill" type="Fill color" color="var(--gray-1)"}
Where the default app background comes from. Default: `var(--gray-1)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--gray-12)"}
Where the default text color comes from. Default: `var(--gray-12)`
:::

:::css-var[--font-family-base]{kind="font" type="Font family"}
Where the default font comes from: Inter Variable with system fonts as a fallback. Default: `'Inter Variable'`
:::

:::css-var[--text-size-4]{kind="font" type="Font size"}
Base text size of the app. Default: `14px`
:::

:::css-var[--line-height-4]{kind="font" type="Line height"}
Base line height of the app. Default: `20px`
:::
::::
