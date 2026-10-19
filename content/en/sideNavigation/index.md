# SideNavigation

`SideNavigation` is an outline of the current page: a list of links to its sections that follows scrolling and highlights the section in view. It renders a semantic `<nav>` with a list, supports nested links and an optional title. Use it next to a long article or documentation so that people see the structure of the page and can jump to the right place quickly.

```tsx
import { SideNavigation } from 'altrone-ui';
```

## Basic usage

Put `SideNavigation.Link` elements inside. Pass a section selector like `#id` as `href` and the link text as `label`. The page element with that `id` must exist: that is what the component observes. The optional `title` draws a heading above the links and names the `<nav>` for assistive technology.

```tsx
<SideNavigation title="On this page">
  <SideNavigation.Link href="#introduction" label="Introduction" />
  <SideNavigation.Link href="#installation" label="Installation" />
  <SideNavigation.Link href="#usage" label="Usage" />
</SideNavigation>
```

::playground{src=sideNavigation/SideNavigationBasicDemo caption="Scroll the page — the link of the best-visible section is highlighted"}

The highlighted link is the one whose section is the most visible in the viewport. While none of the sections is in view, no link is highlighted. The highlighted link is shown in bold and in the accent color, and gets `aria-current="page"`.

The component doesn't pin itself to the screen. To keep the outline in view while scrolling, give it `position: sticky` through `style` or wrap it in a pinned container.

## Nested links

Links placed inside another `SideNavigation.Link` form indented sub-items, which is handy for showing subsections. Sub-items observe their own sections too, so the highlight works at any level.

```tsx
<SideNavigation.Link href="#api" label="API">
  <SideNavigation.Link href="#props" label="Props" />
  <SideNavigation.Link href="#events" label="Events" />
</SideNavigation.Link>
```

::playground{src=sideNavigation/SideNavigationNestedDemo caption="The API section with Props and Events subsections"}

## Handling clicks

`SideNavigation.Link` is an ordinary `<a>`, so a click on `#id` scrolls the page to the section with the browser's own means. Other `<a>` attributes, such as `onClick`, are passed to the link.

## Props

### SideNavigation

:::prop[title]{type="string"}
A heading above the links, for example "On this page". It also names the `<nav>`.
:::

:::prop[children]{type="ReactNode"}
`SideNavigation.Link` elements.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the `<nav>` element.
:::

Other `<nav>` attributes are passed to the root element.

### SideNavigation.Link

:::prop[href*]{type="string"}
A section selector like `#id`. The link is highlighted when the section with this `id` is the most visible one.
:::

:::prop[label*]{type="string"}
The link text.
:::

:::prop[children]{type="ReactNode"}
Nested `SideNavigation.Link` elements — sub-items.
:::

:::prop[ref]{type="Ref<HTMLLIElement>"}
Reference to the item's `<li>` element.
:::

Other `<a>` attributes are passed to the link.

## Related topics

- [NavigationList](/en/components/navigation/navigationList) — a vertical menu for navigating the sections of an application
- [Tabs](/en/components/navigation/tabs) — switching between views of one screen
- [Breadcrumbs](/en/components/navigation/breadcrumbs) — the path through the page hierarchy
- [Accessibility](/en/accessibility) — keyboard navigation and focus across the library
