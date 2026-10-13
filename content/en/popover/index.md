# Popover

A floating panel anchored to a trigger. The base primitive `Dropdown`, `AutocompleteInput`, `ColorPicker`, and `DatePicker` are built on. Use `Popover` directly when the content goes beyond a list of menu items — a form, a confirmation, an info block.

## Basic usage

```tsx
<Popover content={<div style={{ padding: 16 }}>Panel content</div>}>
  <Button label="Open popover" />
</Popover>
```

::playground{src=popover/PopoverBasicDemo caption="A click opens and closes the panel"}

## Open state in the trigger

`children` can be a function — it receives `{ open, hide }`. Use it to switch the trigger button's icon or style.

```tsx
<Popover content={<FilterPanel />}>
  {({ open }) => (
    <Button
      label="Filters"
      additionalIcon={open ? <ChevronUp /> : <ChevronDown />}
    />
  )}
</Popover>
```

::playground{src=popover/PopoverOpenStateDemo caption="The trigger's icon reacts to the popover's state"}

## Closing from inside

`content` can also be a function — it receives `hide` and `hideAllSequence`. Pass `hide` to buttons inside the panel.

```tsx
<Popover
  content={({ hide }) => (
    <div style={{ padding: 16 }}>
      <p>Delete this record?</p>
      <Button label="Delete" danger onClick={() => { handleDelete(); hide(); }} />
      <Button label="Cancel" variant="text" onClick={hide} />
    </div>
  )}
>
  <Button label="Delete" danger />
</Popover>
```

::playground{src=popover/PopoverConfirmDemo caption="A delete confirmation inside the popover"}

## Placement

`placement` accepts Floating UI strings: `top`, `bottom`, `left`, `right`, and their `-start`/`-end` variants. `auto` picks the best fit automatically.

```tsx
<Popover placement="right-start" content={<HelpPanel />}>
  <HelpButton />
</Popover>

<Popover placement="auto" content={<QuickActions />}>
  <ContextMenuTrigger />
</Popover>
```

`overlap` changes the positioning geometry: the panel sits on top of the trigger instead of beside it — useful for replacing a control with a panel while a value is being picked.

```tsx
<Popover overlap content={<ColorSwatches />}>
  <ColorPreview />
</Popover>
```

## Hover or focus trigger

```tsx
{/* Hover only */}
<Popover trigger="hover" content={<PreviewCard />}>
  <ProjectRow />
</Popover>

{/* Multiple triggers */}
<Popover trigger={['click', 'focus']} content={<Suggestions />}>
  <TextInput />
</Popover>
```

:::note
With `trigger="hover"`, opening is delayed by 500ms and closing by 250ms. The built-in `safePolygon` keeps the panel open while the pointer travels from the trigger to it. Touch devices have no hover, so there the popover opens and closes on tap.
:::

## Programmatic control

Pass `controlRef` to get an imperative API: open, close, read the current state.
The regular `ref` still points to the trigger's DOM element, like on any other component.

```tsx
const popoverRef = useRef<PopoverRef>(null);

<Popover controlRef={popoverRef} content={<Panel />}>
  <Button label="Open" />
</Popover>

<Button
  label="Close from outside"
  onClick={() => popoverRef.current?.hide()}
/>
```

## Nested popovers

`hideAllSequence` closes the entire chain of nested popovers at once — useful for a confirmation nested inside a menu.

```tsx
<Popover
  content={({ hideAllSequence }) => (
    <Popover
      content={({ hideAllSequence: hideAll }) => (
        <Button label="Close all" onClick={hideAll} />
      )}
    >
      <Button label="Nested popover" />
    </Popover>
  )}
>
  <Button label="Parent popover" />
</Popover>
```

## Props

:::prop[children*]{type="ReactElement | ((ctx: { open: boolean; hide: () => void }) => ReactElement)"}
The trigger element. A render function receives the current state and a close callback. The trigger's own `ref` is merged with the `ref` passed to `Popover`, never overwritten.
:::

:::prop[content*]{type="ReactElement | ((ctx: { hide: () => void; hideAllSequence: () => void }) => ReactElement)"}
Panel content. A render function receives callbacks to close this popover or the whole chain of nested popovers.
:::

:::prop[placement]{type="Placement | 'auto'" default="'auto'"}
Panel position — a Floating UI string (`'top'`, `'bottom-start'`, …) or `'auto'` for the best-fit position.
:::

:::prop[trigger]{type="'click' | 'focus' | 'hover' | Array<'click' | 'focus' | 'hover'>" default="'click'"}
What opens the popover. An array combines several triggers at once.
:::

:::prop[overlap]{type="boolean" default="false"}
The panel covers the trigger instead of sitting beside it.
:::

:::prop[parentWidth]{type="boolean" default="false"}
Matches the panel's width to the trigger's width.
:::

:::prop[title]{type="string"}
Header title. Combined with `showCloseButton`, makes the panel a labelled `role="dialog"`.
:::

:::prop[showCloseButton]{type="boolean" default="false"}
Shows a close button in the header.
:::

:::prop[focusTrap]{type="boolean" default="true"}
Traps keyboard focus inside the open panel.
:::

:::prop[focusTrapTargets]{type="('reference' | 'floating' | 'content')[]" default="['reference', 'content']"}
Tab order for the focus trap. Mostly relevant when building your own menu on top of `Popover` — `Dropdown` and `Select` configure it themselves.
:::

:::prop[listNavigation]{type="boolean" default="false"}
Enables arrow-key navigation over list items inside the panel. Used by `Dropdown` and `Select` to build menus — not needed for a plain panel with arbitrary content.
:::

:::prop[defaultListNavigationIndex]{type="number | null" default="null"}
Initial active index for `listNavigation`.
:::

:::prop[virtualNavigationFocus]{type="boolean" default="false"}
With `listNavigation`, keeps real DOM focus on the trigger and only highlights the active list item visually — the `aria-activedescendant` pattern, as used by `AutocompleteInput`.
:::

:::prop[enabled]{type="boolean" default="true"}
When `false`, renders only the trigger — all opening and positioning logic is disabled.
:::

:::prop[open]{type="boolean"}
Controlled open state. Omit for an uncontrolled popover — see `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Initial open state for an uncontrolled popover. Ignored once `open` is passed.
:::

:::prop[onOpenChange]{type="(open: boolean, event?: Event, reason?: OpenChangeReason) => void"}
Called on every state change. `reason` says *how* it changed: `escape-key`, `outside-press`, `reference-press`, `hover`…
:::

:::prop[ref]{type="Ref<HTMLElement>"}
A reference to the trigger's DOM element — not the floating panel.
:::

:::prop[controlRef]{type="Ref<PopoverRef>"}
Imperative access to the popover's state and controls: `open`, `show()`, `hide()`, `activeIndex`, `childrenNode`, `contentNode`, `context`, `actualPlacement`, `transformOrigin`.
:::

## Related topics

- [Dropdown](/en/components/overlays/dropdown) — a layer on top of `Popover` for menu lists with icons, shortcuts and dividers
- [Modal](/en/components/overlays/modal) — a blocking dialog for decisions that need the user's full attention, unlike a quick contextual action
- [Drawer](/en/components/overlays/drawer) — a side panel not attached to a trigger, for heavier content
