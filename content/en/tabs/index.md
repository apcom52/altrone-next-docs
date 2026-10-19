# Tabs

`Tabs` is a compact tab strip for switching between views of one screen. The `Tabs` container renders a `role="tablist"`, and each `Tabs.Item` is one tab (`role="tab"`). The backdrop of the selected tab glides to the new one, and a single `size` prop scales the whole strip.

```tsx
import { Tabs } from 'altrone-ui';
```

## Basic usage

Put `Tabs.Item` elements inside. The text goes in `label`, the active tab is marked with `selected`. The component does not keep the selection itself — your code owns the state, and `Tabs` only draws the strip: show the tab's content next to it, driven by the same state.

```tsx
const [tab, setTab] = useState('overview');

<Tabs>
  <Tabs.Item label="Overview" selected={tab === 'overview'} onClick={() => setTab('overview')} />
  <Tabs.Item label="Analytics" selected={tab === 'analytics'} onClick={() => setTab('analytics')} />
  <Tabs.Item label="Settings" selected={tab === 'settings'} onClick={() => setTab('settings')} />
</Tabs>
```

::playground{src=tabs/TabsBasicDemo caption="The backdrop glides to the selected tab"}

From the keyboard, `Tab` lands on the selected tab — it is the only one in the tab order. Arrow keys and `Home`/`End` move focus between tabs, skipping disabled ones, and `Enter` or `Space` activates a tab.

## Sizes

The `size` prop scales the whole strip: height, rounding, padding, and the size of text and icons.

```tsx
<Tabs size="l">
  <Tabs.Item label="Day" selected />
  <Tabs.Item label="Week" />
</Tabs>
```

::playground{src=tabs/TabsSizesDemo caption="Five sizes: mini, s, m, l, xl"}

## Icons

`icon` puts an icon before the label. If you don't need the label, set `showLabel={false}` — the tab becomes icon-only, while `label` stays its accessible name and `title` hint.

```tsx
<Tabs.Item label="Grid" icon={<Grid2x2 />} selected />
<Tabs.Item label="List" icon={<List />} showLabel={false} />
```

::playground{src=tabs/TabsIconsDemo caption="Tabs with labels and icon-only tabs"}

## Badges and disabled tabs

`badge` shows a counter or a short label at the right edge of the tab. `disabled` removes the tab from the tab order, skips it during arrow-key navigation and ignores clicks.

```tsx
<Tabs.Item label="Inbox" badge={12} />
<Tabs.Item label="Mentions" badge="NEW" />
<Tabs.Item label="Billing" disabled />
```

::playground{src=tabs/TabsStatesDemo caption="A numeric badge, a text badge and a disabled tab"}

## Links

Without `href`, a tab is a `<button type="button">`. With `href` it renders as an `<a>`. To use your router's link component, pass `asChild` and put the router link inside: the role, styles and handlers move onto it, while the icon, label and badge still come from props.

```tsx
import { Link } from 'react-router-dom';

<Tabs.Item label="Overview" selected={pathname === '/'} asChild>
  <Link to="/" />
</Tabs.Item>
```

::playground{src=tabs/TabsLinksDemo caption="Link tabs: via href and via asChild"}

:::note
If `children` with `asChild` is not a single valid React element, the component logs an error to the console and returns `null`.
:::

## Props

### Tabs

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Size of the strip and of all the tabs in it.
:::

:::prop[children]{type="ReactNode"}
`Tabs.Item` elements.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the strip element.
:::

Other `<div>` attributes are passed to the root element.

### Tabs.Item

:::prop[label*]{type="string"}
The tab label. It is also the `title` hint and the accessible name when `showLabel={false}`.
:::

:::prop[selected]{type="boolean" default="false"}
Marks the active tab: shows the backdrop, sets `aria-selected` and makes the tab the only one in the tab order.
:::

:::prop[icon]{type="ReactElement"}
An icon before the label.
:::

:::prop[showLabel]{type="boolean" default="true"}
When `false` the label is hidden — an icon-only tab.
:::

:::prop[disabled]{type="boolean" default="false"}
Disables the tab: it can't be focused and ignores activation.
:::

:::prop[badge]{type="string | number | ReactElement"}
A badge at the right edge of the tab: a counter or a short label.
:::

:::prop[href]{type="string"}
Renders the tab as an `<a>` instead of a `<button>`.
:::

:::prop[asChild]{type="boolean" default="false"}
Move the role, styles, `ref` and handlers onto the single child element, for example a router link.
:::

:::prop[children]{type="ReactElement"}
Used only with `asChild`. Must be exactly one valid React element.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the `<button>`, the `<a>` or the child element with `asChild`.
:::

Other `<a>` attributes (except `children`) are passed to the tab.

## Related topics

- [NavigationList](/en/components/navigation/navigationList) — a vertical menu for moving between sections of an application
- [BottomNavigation](/en/components/navigation/bottomNavigation) — a bottom navigation bar for mobile screens
- [Breadcrumbs](/en/components/navigation/breadcrumbs) — the path through the page hierarchy
- [Accessibility](/en/accessibility) — keyboard navigation and focus across the library
