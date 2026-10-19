# Breadcrumbs

`Breadcrumbs` shows where a person is in the page hierarchy and gives a quick way back without the browser's Back button. The component renders a semantic `<nav>` with a localized `aria-label` and an ordered list `<ol>` inside, and places the separators between crumbs itself.

```tsx
import { Breadcrumbs } from 'altrone-ui';
```

## Basic usage

Put `Breadcrumbs.Item` elements inside and pass the text as `label`. Mark the last crumb — the current page — with `current`: it gets bold weight, the accent color and `aria-current="page"`.

```tsx
<Breadcrumbs>
  <Breadcrumbs.Item label="Home" />
  <Breadcrumbs.Item label="Products" />
  <Breadcrumbs.Item label="Details" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsBasicDemo caption="Three crumbs, the last one is the current page"}

A separator is drawn after every crumb except the last one — there's nothing to take care of.

## Links

Without `asChild`, a crumb is a plain block, not a link. To make it clickable, pass `asChild` and put an `<a>` or a router link inside: the styles, `ref` and handlers move onto it. `label` and `icon` automatically become its content — don't write text inside. The `icon` is usually put only on the first crumb — "Home".

```tsx
<Breadcrumbs>
  <Breadcrumbs.Item icon={<Home />} label="Home" asChild>
    <a href="/" />
  </Breadcrumbs.Item>
  <Breadcrumbs.Item label="Catalog" asChild>
    <a href="/catalog" />
  </Breadcrumbs.Item>
  <Breadcrumbs.Item label="Item #42" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsLinksDemo caption="Home and Catalog are links, the last crumb is the current page"}

It works the same with a router:

```tsx
import { Link } from 'react-router-dom';

<Breadcrumbs.Item label="Orders" asChild>
  <Link to="/orders" />
</Breadcrumbs.Item>
```

:::note
If `children` with `asChild` is not a single valid React element, the component logs an error to the console and returns `null`.
:::

## Collapsed path

When the path is too deep, replace the middle crumbs with one holding an ellipsis that opens a `Dropdown` with the hidden levels.

```tsx
<Breadcrumbs>
  <Breadcrumbs.Item icon={<Home />} label="Home" asChild>
    <a href="/" />
  </Breadcrumbs.Item>
  <Dropdown
    content={
      <Dropdown.Menu>
        <Dropdown.Action label="Category" />
        <Dropdown.Action label="Subcategory" />
      </Dropdown.Menu>
    }
  >
    <Breadcrumbs.Item icon={<Ellipsis />} />
  </Dropdown>
  <Breadcrumbs.Item label="Product" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsCollapsedDemo caption="Open the ellipsis — a menu with the hidden levels appears"}

## Props

### Breadcrumbs

:::prop[children]{type="ReactNode"}
`Breadcrumbs.Item` elements.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the `<nav>` element.
:::

Other `<nav>` attributes are passed to the root element.

### Breadcrumbs.Item

:::prop[label]{type="string"}
The crumb text. Long text is truncated with an ellipsis.
:::

:::prop[icon]{type="ReactElement"}
An icon to the left of the text.
:::

:::prop[separatorIcon]{type="ReactElement" default="<ChevronRight />"}
The separator after this crumb. More on the [Icons](/en/components/navigation/breadcrumbs/icons) tab.
:::

:::prop[current]{type="boolean" default="false"}
Marks the current page: bold weight, the accent color and `aria-current="page"`. Don't combine it with `asChild`.
:::

:::prop[asChild]{type="boolean" default="false"}
Move the styles, `ref` and handlers onto the single child element, for example an `<a>` or a router link. `label` and `icon` become its content.
:::

:::prop[children]{type="ReactElement"}
Used only with `asChild`. Must be exactly one valid React element.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the crumb: a `<div>`, or the child element with `asChild`.
:::

Other `<div>` attributes (except `children`) are passed to the crumb.

## Related topics

- [Dropdown](/en/components/overlays/dropdown) — a menu for the collapsed levels of the path
- [NavigationList](/en/components/navigation/navigationList) — a vertical menu for navigating sections
- [Tabs](/en/components/navigation/tabs) — switching between views of one screen
- [Accessibility](/en/accessibility) — keyboard navigation and focus across the library
