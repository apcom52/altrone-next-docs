# Dropdown

A floating menu anchored to a trigger button. Built on `Popover` and adds a ready-made item system: actions with icons, keyboard-shortcut hints and badges, radio lists, checkboxes, and nested submenus. `Dropdown` is the right choice whenever you need to hide a set of actions behind a single button.

## Basic example

```tsx
<Dropdown
  content={
    <Dropdown.Menu>
      <Dropdown.Action label="Edit"      icon={<Pencil />} onClick={handleEdit} />
      <Dropdown.Action label="Duplicate" icon={<Copy />}   onClick={handleDuplicate} />
      <Divider />
      <Dropdown.Action label="Delete" icon={<Trash />} danger onClick={handleDelete} />
    </Dropdown.Menu>
  }
>
  <Button label="Actions" additionalIcon={<ChevronDown />} />
</Dropdown>
```

::playground{src=dropdown/DropdownBasicDemo caption="Arrow keys ↑↓ navigate, Enter selects, Escape closes"}

## Open state on the trigger

`children` can be a function — it receives `open`. Use it to flip the chevron icon.

```tsx
<Dropdown content={<Dropdown.Menu>…</Dropdown.Menu>}>
  {({ open }) => (
    <Button
      label="Export"
      additionalIcon={open ? <ChevronUp /> : <ChevronDown />}
    />
  )}
</Dropdown>
```

::playground{src=dropdown/DropdownOpenStateDemo caption="The chevron icon reflects the menu's open state"}

## Keyboard shortcuts

`hintText` is shown to the right of the item's label. Its typical use is a keyboard shortcut hint.

```tsx
<Dropdown.Action label="Save"   icon={<Save />} hintText="⌘S" onClick={save} />
<Dropdown.Action label="Print"  icon={<Print />} hintText="⌘P" onClick={print} />
<Dropdown.Action label="Undo"   icon={<Undo />}  hintText="⌘Z" onClick={undo} />
```

If an item has both `badge` and `hintText`, the badge takes priority and `hintText` is not shown.

## Radio lists and checkboxes

`Dropdown.RadioList` is a group of mutually exclusive options. `Dropdown.Checkbox` is an independent toggle. Both are controlled externally through their `value`/`checked` props. Unlike `Dropdown.Action`, selecting a radio item or toggling a checkbox does not close the menu — this lets a user change several options in one open session.

```tsx
const [sort, setSort] = useState('date');
const [compact, setCompact] = useState(false);

<Dropdown.RadioList label="Sort by" value={sort} onChange={setSort}>
  <Dropdown.RadioItem value="date" label="By date" />
  <Dropdown.RadioItem value="name" label="By name" />
  <Dropdown.RadioItem value="size" label="By size" />
</Dropdown.RadioList>

<Divider />

<Dropdown.Checkbox
  label="Compact mode"
  checked={compact}
  onChange={setCompact}
/>
```

::playground{src=dropdown/DropdownRadioDemo caption="The selection persists across reopenings of the menu"}

## Nested submenus

`Dropdown.ChildMenu` opens a nested menu on click, positioned to the side of the parent item.

```tsx
<Dropdown.ChildMenu label="Share" icon={<Share />}>
  <Dropdown.Action label="Copy link" icon={<Link />} />
  <Dropdown.Action label="Send by email" icon={<Mail />} />
</Dropdown.ChildMenu>
```

::playground{src=dropdown/DropdownChildMenuDemo caption="Click an item to open its submenu"}

## Actions as links

`asChild` transfers `Dropdown.Action`'s styling onto the child element. Use it for router links.

```tsx
<Dropdown.Action asChild icon={<Settings />} label="Settings" hintText="⌘,">
  <a href="/settings" />
</Dropdown.Action>
```

## Full example: account menu

```tsx
<Dropdown
  placement="bottom-end"
  content={
    <Dropdown.Menu>
      <Dropdown.Action icon={<User />} label="Alex Morgan" hintText="@amorgan" />
      <Divider />
      <Dropdown.Action icon={<Settings />} label="Settings" hintText="⌘," />
      <Dropdown.Action icon={<CreditCard />} label="Billing & plan" badge="PRO" />
      <Divider />
      <Dropdown.RadioList label="Theme" value={theme} onChange={setTheme}>
        <Dropdown.RadioItem value="system" label="System" />
        <Dropdown.RadioItem value="light"  label="Light" />
        <Dropdown.RadioItem value="dark"   label="Dark" />
      </Dropdown.RadioList>
      <Divider />
      <Dropdown.Checkbox label="Compact mode" checked={compact} onChange={setCompact} />
      <Divider />
      <Dropdown.Action danger icon={<LogOut />} label="Log out" />
    </Dropdown.Menu>
  }
>
  <Avatar firstName="Alex" lastName="Morgan" size="s" />
</Dropdown>
```

::playground{src=dropdown/DropdownAccountDemo}

## Props

`Dropdown` accepts every `Popover` prop (`placement`, `trigger`, `overlap`, `controlRef`, `focusTrap`, …) in addition to the ones below — see the [Popover](/en/components/overlays/popover) documentation for the full list.

:::prop[children*]{type="ReactNode | ((ctx: { open: boolean; hide: () => void }) => ReactNode)"}
The trigger. A function receives the current open state and a close callback.
:::

:::prop[content*]{type="ReactNode | ((ctx: { hide: () => void; hideAllSequence: () => void }) => ReactNode)"}
The menu content.
:::

:::prop[placement]{type="Placement | 'auto'" default="'bottom'"}
The menu's position relative to the trigger.
:::

:::prop[trigger]{type="'click' | 'focus' | 'hover' | Array" default="'click'"}
What opens the menu.
:::

:::prop[closeParentPopover]{type="boolean" default="true"}
Whether to close the parent popover when selecting an item inside a nested menu.
:::

### Dropdown.Action

:::prop[label*]{type="string"}
The menu item's label.
:::

:::prop[icon]{type="ReactElement"}
Icon on the left.
:::

:::prop[hintText]{type="string"}
Secondary text on the right — typically a keyboard shortcut.
:::

:::prop[badge]{type="string | number | ReactElement"}
Badge on the right.
:::

:::prop[danger]{type="boolean" default="false"}
Red color for destructive actions.
:::

:::prop[disabled]{type="boolean" default="false"}
Disables the item.
:::

:::prop[asChild]{type="boolean" default="false"}
Transfers the styling onto the child element via Slot.
:::

## Related topics

- [Popover](/en/components/overlays/popover) — the floating primitive `Dropdown` is built on: placement, triggers, and the imperative `controlRef` API
- [Button](/en/components/controls/button) — the most common trigger element for a `Dropdown`
- [Accessibility](/en/foundations/accessibility) — keyboard navigation and the `aria-label` requirement for icon-only triggers
