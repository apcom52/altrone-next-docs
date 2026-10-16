# Slider

## Name the slider

A slider has no label of its own, and a screen reader without a name reads only "slider, 50". Give it a visible label and repeat it in `aria-label`.

::::good-bad
:::good
::playground{src=slider/SliderGuidelineNameGoodDemo caption="The label is visible and `aria-label` names the slider for a screen reader"}
:::

:::bad
::playground{src=slider/SliderGuidelineNameBadDemo caption="No label and no name — it is unclear what is being adjusted"}
:::
::::

## Show the value when precision matters

A slider is good for an approximate choice. When the user cares about the number — a font size, a price, a period — show it always with `showCurrentValue="always"` and format it with units through `renderLabel`. When exact input is needed, use `NumberInput`.

::::good-bad
:::good
::playground{src=slider/SliderGuidelineValueGoodDemo caption="The value with units is always visible"}
:::

:::bad
::playground{src=slider/SliderGuidelineValueBadDemo caption="The number is hidden, a specific size can only be picked by eye"}
:::
::::

## Keep onChange light

`onChange` fires on every pointer move. Move server requests, heavy recalculations and saving to `onChangeEnd`, and leave only the state update in `onChange`.

## Pick the variant by density

`default` takes little space and fits forms, dialogs and settings panels. `fill` is a large expressive control for standalone quick settings such as volume or brightness; in a dense form it pulls too much attention.

## Accessibility

- Always set a name with `aria-label` or `aria-labelledby`.
- The slider is fully keyboard-operable: arrows, `Home` and `End`; the keyboard increment equals `step`.
- `renderLabel` builds `aria-valuetext`, so the units are read aloud.
- The hit area never gets lower than 24px, even at `size="mini"`.
- Don't rely on the fill color as the only carrier of the value: show the number when it matters.
