# Drawer

A side panel that slides in over the current screen without taking the user anywhere else. That's its main advantage: the user keeps seeing the context they acted from and can return to it in one move. Use `Drawer` for work that needs a form or a list of settings but doesn't deserve a page of its own.

## Basic usage

Unlike `Popover`/`Dropdown`/`Tooltip`, `Drawer` isn't attached to a trigger element — open it explicitly via `open`, close it via `onClose`. The panel's content is passed through `content`.

```tsx
const [open, setOpen] = useState(false);

<Button label="Open settings" icon={<Settings />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Profile settings"
  content={<ProfileForm />}
/>
```

::playground{src=drawer/DrawerBasicDemo caption="Close it with the ✕ button, the Escape key, or a click on the backdrop"}

## Footer with actions

Put buttons in `footer` when a panel needs explicit confirmation. The footer stays visible while the content scrolls.

```tsx
<Button label="Filters" icon={<Filter />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Filters"
  content={<FilterPanel />}
  footer={
    <Flex gap="s" style={{ width: "100%" }}>
      <Button label="Reset" variant="text" />
      <Button label="Apply filters" variant="submit" style={{ flex: 1 }} />
    </Flex>
  }
/>
```

::playground{src=drawer/DrawerFooterDemo caption="The footer is pinned to the bottom and doesn't scroll with the content"}

## Placement

By default the panel slides in from the left. `placement="end"` slides it in from the right. Pick the side based on where the trigger sits and where the user expects the panel to appear from.

```tsx
<Button label="Notifications" icon={<Bell />} badge={4} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Notifications"
  placement="end"
  content={<NotificationList />}
/>
```

::playground{src=drawer/DrawerEndDemo caption="The panel slides in from the right — placement=end"}

## Done button with validation

`onDone` takes an async function. While it's running, the button shows a loading state. Returning `false` keeps the panel open. Use it for forms with server- or client-side validation.

```tsx
<Button label="Create task" variant="submit" onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="New task"
  content={<TaskForm ref={formRef} />}
  onDone={async () => {
    const ok = await formRef.current.submit();
    return ok ? undefined : false;
  }}
/>
```

::playground{src=drawer/DrawerDoneDemo caption="Click Done with the field empty — the panel stays open"}

## Custom header actions

`actions` fully replaces the Done button in the header; `additionalActions` adds elements after the close button. Both accept a single element, an array, or a function that receives `hide`.

```tsx
<Button label="Share" icon={<Share />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Share"
  content={<SharePanel />}
  actions={({ hide }) => (
    <Button
      label="Copy link"
      icon={<Link />}
      onClick={() => {
        copyLink();
        hide();
      }}
    />
  )}
/>
```

## Props

:::prop[open]{type="boolean"}
Controlled open state. Omit for an uncontrolled drawer — see `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Initial open state for an uncontrolled drawer. Ignored once `open` is passed.
:::

:::prop[title]{type="string"}
Panel title, shown in the header.
:::

:::prop[content]{type="ReactElement"}
Main content. Rendered inside the scrollable area.
:::

:::prop[footer]{type="ReactElement"}
Footer content. Stays visible while the content scrolls.
:::

:::prop[placement]{type="'start' | 'end'" default="'start'"}
Side the panel slides in from. `start` is the left edge, `end` is the right edge.
:::

:::prop[width]{type="number" default="400"}
Panel width in pixels.
:::

:::prop[dismissible]{type="boolean" default="true"}
When `false`, a backdrop click or `Escape` no longer close the panel — it shakes instead. The close button and `onDone` still close it normally.
:::

:::prop[showCloseButton]{type="boolean" default="true"}
Shows or hides the header close button.
:::

:::prop[onDone]{type="(event: MouseEvent) => Promise<boolean | void>"}
Async handler for the Done button. Returning `false` keeps the panel open. Any other resolved value closes it.
:::

:::prop[onClose]{type="(event?: MouseEvent | KeyboardEvent) => void"}
Called when the panel closes — the ✕ button, the backdrop, Escape, or after `onDone`. For a controlled `Drawer` this is the only place that flips `open` back to `false` — the component never closes itself.
:::

:::prop[additionalActions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Extra elements after the close button in the header.
:::

:::prop[actions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Primary elements at the end of the header. Replaces the Done button when passed.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
A reference to the panel's root DOM element.
:::

## Related topics

- [Modal](/en/components/overlays/modal) — a blocking dialog for decisions that need the user's full attention, unlike the non-blocking `Drawer`
- [Popover](/en/components/overlays/popover) — a floating panel attached to a trigger element, for when a dedicated side panel isn't needed
- [Form](/en/components/controls/form) — the component `Drawer` content is usually built from
