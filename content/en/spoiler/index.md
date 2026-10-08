# Spoiler

A collapsible section with an animated height transition. The heading is always visible and toggles the content — a native button, so it works with the mouse and the keyboard (`Enter` / `Space`). Use it for secondary material: an FAQ, optional form fields, advanced settings.

## Basic usage

```tsx
<Spoiler title="What is Altrone UI?">
  <Text block>Altrone UI is a React component library with a modern design system.</Text>
</Spoiler>
```

::playground{src=spoiler/SpoilerBasicDemo caption="Click the heading to reveal the content"}

## Open by default

`defaultOpen` sets the initial state of an uncontrolled spoiler. After the first render the component keeps its own state and ignores the prop.

```tsx
<Spoiler title="System requirements" defaultOpen>
  <Text block>React 19 or later and TypeScript 5+.</Text>
</Spoiler>
```

::playground{src=spoiler/SpoilerDefaultOpenDemo caption="The first block is open, the second is collapsed"}

## FAQ list

Several `Spoiler`s in a row form a list with dividers and no extra wrapper. They are independent — any number can be open at once.

```tsx
{faqs.map((faq) => (
  <Spoiler key={faq.id} title={faq.question}>
    <Text block>{faq.answer}</Text>
  </Spoiler>
))}
```

::playground{src=spoiler/SpoilerFaqDemo caption="Several sections can be open at the same time"}

## Reacting to toggles

`onToggle` receives the new state (`true` — open) and the click event after every toggle. Use it for analytics or lazy loading the content.

```tsx
<Spoiler
  title="Advanced settings"
  onToggle={(open) => {
    if (open) loadAdvancedSettings();
  }}
>
  <AdvancedSettingsForm />
</Spoiler>
```

## Controlled state

Pass `open` instead of `defaultOpen` to own the state outside. The component renders exactly what it is given and only asks for changes through `onToggle`.

```tsx
const [open, setOpen] = useState(false);

<Spoiler title="Advanced settings" open={open} onToggle={setOpen}>
  <AdvancedSettingsForm />
</Spoiler>
```

::playground{src=spoiler/SpoilerControlledDemo caption="The button and the heading drive the same state"}

## Single open section

`Spoiler` doesn't limit how many sections are open. To make opening one close the others, keep the id of the open section in the parent state and pass `open` to each spoiler.

```tsx
const [active, setActive] = useState<string | null>(null);

{sections.map((section) => (
  <Spoiler
    key={section.id}
    title={section.title}
    open={active === section.id}
    onToggle={(open) => setActive(open ? section.id : null)}
  >
    {section.content}
  </Spoiler>
))}
```

## Props

:::prop[title*]{type="ReactNode"}
The always-visible heading (a button). A string or any node.
:::

:::prop[children]{type="ReactNode"}
Content hidden while collapsed.
:::

:::prop[open]{type="boolean"}
Controlled open state. Without it the spoiler is uncontrolled — see `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Initial state of an uncontrolled spoiler. Ignored once `open` is passed.
:::

:::prop[onToggle]{type="(open: boolean, event: MouseEvent<HTMLButtonElement>) => void"}
Called after every toggle. `open` is the new state.
:::

:::prop[expandIcon]{type="ReactElement" default="<Plus />"}
Icon shown while the spoiler is collapsed. See the [Icons](/en/components/layout/spoiler/icons) tab.
:::

:::prop[collapseIcon]{type="ReactElement" default="<Minus />"}
Icon shown while the spoiler is open. See the [Icons](/en/components/layout/spoiler/icons) tab.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
A reference to the root `<div>`.
:::

## Related topics

- [Collapsed List](/en/components/layout/collapsedList) — a list that collapses long content behind a "Show more" button
- [Form](/en/components/controls/form) — a spoiler works well as a container for optional form fields
- [Motion](/en/foundations/motion) — how the animation behaves under `prefers-reduced-motion`
