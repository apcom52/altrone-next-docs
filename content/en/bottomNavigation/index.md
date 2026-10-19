# BottomNavigation

`BottomNavigation` is a bottom navigation bar: the main way to switch between sections in mobile interfaces. It is always at hand and doesn't require scrolling to the top of the screen. The `BottomNavigation` container holds the bar, and `BottomNavigation.Link` is a single section with an icon above its label. The backdrop of the selected section glides between links.

```tsx
import { BottomNavigation } from 'altrone-ui';
```

## Basic usage

Put `BottomNavigation.Link` elements inside. The icon and the label are required and passed as `icon` and `label`. The current section is marked with `selected` — it gets the backdrop, the accent color and `aria-current="page"`. The bar doesn't keep the selection: drive `selected` from a single source — the current route or local state.

```tsx
const [active, setActive] = useState('home');

<BottomNavigation>
  <BottomNavigation.Link icon={<Home />} label="Home" selected={active === 'home'} onClick={() => setActive('home')} />
  <BottomNavigation.Link icon={<Wallet />} label="Wallet" selected={active === 'wallet'} onClick={() => setActive('wallet')} />
</BottomNavigation>
```

::playground{src=bottomNavigation/BottomNavigationBasicDemo caption="The backdrop glides to the selected section"}

Without `href`, a link receives focus and fires on `Enter` and `Space`, like a button. With `href` it is an ordinary `<a>`.

## Pinned and inline bar

By default `floating={true}`: the bar is pinned to the bottom edge of the screen, centered, with an offset from the edge that accounts for the safe area on notched devices. It takes no space in the page flow, so leave room for it at the bottom of your content. With `floating={false}` the bar stays an ordinary block in the flow and sits where you put it, for example inside the `Screen.BottomNavigation` area.

```tsx
<BottomNavigation floating={false}>
  <BottomNavigation.Link icon={<Home />} label="Home" selected />
  <BottomNavigation.Link icon={<Search />} label="Search" />
</BottomNavigation>
```

::playground{src=bottomNavigation/BottomNavigationInlineDemo caption="floating={false} — the bar sits in the flow instead of being pinned to the screen"}

:::note
The examples on this page are shown with `floating={false}`: a pinned bar would attach to the bottom of the browser window, not to the example.
:::

## Badges

`badge` shows a notification counter or a short label in the top right corner of the link.

```tsx
<BottomNavigation.Link icon={<Bell />} label="Alerts" badge="3" />
<BottomNavigation.Link icon={<Wallet />} label="Wallet" badge="NEW" />
```

::playground{src=bottomNavigation/BottomNavigationBadgesDemo caption="A numeric counter and a text label"}

## Router integration

To use your router's link component, pass `asChild` and put the router link as the only child. The styles, `ref` and handlers move onto it, while the icon, label, badge and backdrop still come from props.

```tsx
import { Link, useLocation } from 'react-router-dom';

const { pathname } = useLocation();

<BottomNavigation.Link icon={<Home />} label="Home" selected={pathname === '/home'} asChild>
  <Link to="/home" />
</BottomNavigation.Link>
```

:::note
If `children` with `asChild` is not a single valid React element, the component logs an error to the console and returns `null`.
:::

## Props

### BottomNavigation

:::prop[floating]{type="boolean" default="true"}
Pins the bar to the bottom edge of the screen, centered. When `false`, the bar stays in the page flow.
:::

:::prop[children]{type="ReactNode"}
`BottomNavigation.Link` elements.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the bar element.
:::

Other `<div>` attributes are passed to the root element.

### BottomNavigation.Link

:::prop[icon*]{type="ReactElement"}
The icon above the label.
:::

:::prop[label*]{type="string"}
The label under the icon. Long text is truncated with an ellipsis.
:::

:::prop[selected]{type="boolean" default="false"}
Marks the current section: the backdrop, the accent color and `aria-current="page"`.
:::

:::prop[badge]{type="string | number | ReactElement"}
A badge in the top right corner: a counter or a short label.
:::

:::prop[asChild]{type="boolean" default="false"}
Move the styles, `ref` and handlers onto the single child element, for example a router link.
:::

:::prop[children]{type="ReactNode"}
Used only with `asChild`. Must be exactly one valid React element.
:::

:::prop[ref]{type="Ref<HTMLAnchorElement>"}
Reference to the `<a>` or the child element with `asChild`.
:::

Other `<a>` attributes (except `children`) are passed to the link.

## Related topics

- [Tabs](/en/components/navigation/tabs) — switching between views of one screen
- [NavigationList](/en/components/navigation/navigationList) — a vertical menu for larger screens
- [Screen](/en/components/layout/screen) — the page layout with the `Screen.BottomNavigation` area for the bar
- [Layout and responsiveness](/en/layout) — how to change navigation depending on the screen size
