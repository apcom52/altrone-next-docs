# Search

The CSS custom properties `Search` reads and that can be overridden. Everything about the field itself — fill, border, size, islands — is inherited from [TextInput](/en/components/controls/textInput/css-vars): its variables work here too.

:::spoiler[How to override variables]
The `--search-*` variables are declared on the app root and read by the placeholder drawn inside the field, so set them through the `style` prop of that `Search` — the value reaches the placeholder by inheritance:

```tsx
<Search
  value={query}
  onChange={setQuery}
  style={{ '--search-icon-size': '24px' } as React.CSSProperties}
/>
```

::playground{src=search/SearchCssVarsDemo caption="A larger magnifier and an accent-colored placeholder"}

What can't be overridden:

- **The look of a filled field.** Once the field has a value, the placeholder is gone and the magnifier is an ordinary `TextInput` icon island: its size comes from `--text-input-icon-size`, not from `--search-icon-size`.
- **The disabled look.** `disabled` only halves the opacity of the placeholder; the colors of the field itself are forced by `TextInput`.
:::

## Internal variables

Defined by `Search` itself and used by the placeholder of the empty field.

::::css-vars
:::css-var[--search-placeholder-color]{kind="text" type="Text color" color="var(--placeholder-text-color)"}
Color of the placeholder text and the magnifier in the empty field. Default: `var(--placeholder-text-color)`
:::

:::css-var[--search-icon-size]{kind="size" type="Size"}
Size of the magnifier in the empty field. Default: `18px`
:::
::::

## Global variables

Not defined by `Search`: global design tokens.

::::css-vars
:::css-var[--placeholder-text-color]{kind="text" type="Text color" color="var(--placeholder-text-color)"}
Default of `--search-placeholder-color`; shared with other fields. Default: `var(--gray-a9)`
:::

:::css-var[--narrow-gap]{kind="gap" type="Spacing"}
Space between the magnifier and the placeholder text. Default: `2px`
:::
::::
