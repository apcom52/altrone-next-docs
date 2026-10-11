# File Picker

The CSS custom properties `FilePicker` reads and that can be overridden.

:::spoiler[How to override variables]
The colors are declared on the application root and inherited, so you can set them through the `style` prop of the `FilePicker` — for the whole picker at once:

```tsx
<FilePicker
  autoUpload={false}
  style={{
    "--file-picker-item-background-color": "var(--accent-3)",
    "--file-picker-item-text-color": "var(--accent-12)",
  } as React.CSSProperties}
/>
```

What can't be overridden:

- **The chip sizes.** The height, the left padding and the font sizes of a chip are declared by the chip itself for each `size`, so a value set on the picker doesn't reach them. Change `size` instead.
- **The look of the buttons.** The choose button and the buttons on the chips are regular [Buttons](/en/components/controls/button/css-vars) and take their variables.
:::

## Internal variables

Defined by `FilePicker` itself.

::::css-vars
:::css-var[--file-picker-item-background-color]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Fill of a chip. Default: `var(--interactive-1)`
:::

:::css-var[--file-picker-item-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the file name. Default: `var(--text-2)`
:::

:::css-var[--file-picker-item-size-text-color]{kind="text" type="Text color" color="var(--text-1)"}
Color of the file size. Default: `var(--text-1)`
:::

:::css-var[--file-picker-progress-color]{kind="fill" type="Fill color" color="var(--accent-3)"}
Fill of the progress bar behind the chip. Default: `var(--accent-3)`
:::

:::css-var[--file-picker-invalid-item-background-color]{kind="fill" type="Fill color" color="var(--red-3)"}
Fill of a chip whose upload failed. Default: `var(--red-3)`
:::

:::css-var[--file-picker-invalid-item-text-color]{kind="text" type="Text color" color="var(--red-12)"}
Color of the name, size and error icon of a failed chip. Default: `var(--red-12)`
:::

:::css-var[--file-picker-empty-text-color]{kind="text" type="Text color" color="var(--text-1)"}
Color of the "No files" text. Default: `var(--text-1)`
:::
::::

## Global variables

Not defined by `FilePicker`: global design tokens.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
Space between the chips and the button. Default: `8px`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Color of the "No files" text while the picker is disabled. Default: `var(--disabled-text-color)`
:::
::::
