# NavigationList

`NavigationList` is a vertical navigation menu: a sidebar with links, titled groups, nested items, a header and a footer. It renders a semantic `<nav>`, marks the current page for assistive technology and slides the highlight smoothly from one item to another. Use it for the main navigation of an application or a section.

```tsx
import { NavigationList } from 'altrone-ui';
```

## Basic usage

Put `NavigationList.Link` elements inside. The text goes in `label`, an optional icon in `icon`. Mark the current item with `selected` — it gets the highlight and `aria-current="page"`. Give the list an `aria-label` so a screen reader can tell it from other navigation.

```tsx
<NavigationList aria-label="Main">
  <NavigationList.Link label="Dashboard" icon={<Home />} href="/" selected={pathname === '/'} />
  <NavigationList.Link label="Projects" icon={<Folder />} href="/projects" selected={pathname === '/projects'} />
</NavigationList>
```

::playground{src=navigationList/NavigationListBasicDemo caption="The highlight slides to the selected item"}

The list is 300px wide and as tall as its container, scrolling when the content doesn't fit.

## Links and buttons

With `href` a link is a regular `<a>`. Without `href` but with `onClick` it acts as a button: it is focusable and works with `Enter` and `Space`. To use the link component of your router, pass `asChild` and put the router link inside.

```tsx
<NavigationList.Link label="Dashboard" icon={<Home />} selected={pathname === '/'} asChild>
  <Link to="/" />
</NavigationList.Link>
```

## Groups

`NavigationList.Group` collects related links under a `title`. A group with a title is exposed to assistive technology as a named group; without a title it only separates a cluster of links.

```tsx
<NavigationList.Group title="Workspace">
  <NavigationList.Link label="Overview" href="/overview" />
  <NavigationList.Link label="Members" href="/members" />
</NavigationList.Group>
```

::playground{src=navigationList/NavigationListGroupsDemo caption="Two groups with titles"}

## Nested links

Links placed inside another link form a sub-menu. It opens while the parent or one of its nested links is `selected`, and stays closed otherwise. Nesting goes as deep as you need, but two levels are usually enough.

```tsx
<NavigationList.Link label="Teams" icon={<Users />} selected={inTeams}>
  <NavigationList.Link label="Frontend" selected={team === 'frontend'} onClick={() => setTeam('frontend')} />
  <NavigationList.Link label="Backend" selected={team === 'backend'} onClick={() => setTeam('backend')} />
</NavigationList.Link>
```

::playground{src=navigationList/NavigationListNestedDemo caption="The Teams sub-menu opens when a team is selected"}

## Badges and disabled items

`badge` shows a counter or a short word at the right edge. `disabled` removes the link, takes it out of the tab order and ignores clicks.

```tsx
<NavigationList.Link label="Inbox" icon={<Inbox />} badge={12} />
<NavigationList.Link label="Reports" icon={<BarChart2 />} disabled />
```

::playground{src=navigationList/NavigationListStatesDemo caption="A number badge, a text badge and a disabled item"}

## Actions

`actions` puts buttons at the edge of a link or a group header, for example "Add" or "More". A click on an action never triggers the link itself. The function form receives `{ selected, disabled }`, so you can show actions only when they make sense.

```tsx
<NavigationList.Group
  title="Projects"
  actions={<Button size="s" label="New project" icon={<Plus />} showLabel={false} onClick={createProject} />}
>
  <NavigationList.Link
    label="Website"
    actions={<Button size="s" label="Add page" icon={<Plus />} showLabel={false} onClick={addPage} />}
  />
</NavigationList.Group>
```

::playground{src=navigationList/NavigationListActionsDemo caption="An action in the group header and in every link"}

Icon-only buttons need a `label`, it becomes their accessible name.

## Header and footer

`NavigationList.Header` and `NavigationList.Footer` are pinned to the top and bottom edges and stay in place while the groups scroll between them. Typical content is a workspace switcher on top and the account on the bottom.

```tsx
<NavigationList>
  <NavigationList.Header>...</NavigationList.Header>
  <NavigationList.Link label="Home" href="/" />
  <NavigationList.Footer>...</NavigationList.Footer>
</NavigationList>
```

::playground{src=navigationList/NavigationListHeaderFooterDemo caption="A fixed header and footer around the links"}

## Props

### NavigationList

:::prop[children]{type="ReactNode"}
`Header`, `Group`, `Link` and `Footer` elements.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the `<nav>` element.
:::

Other `<nav>` attributes, such as `aria-label`, `className` and `style`, are passed through.

### NavigationList.Group

:::prop[title]{type="string"}
The group heading.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | (() => ReactElement | ReactElement[])"}
Elements, usually `Button`, next to the heading.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the group element.
:::

### NavigationList.Link

:::prop[label*]{type="string"}
The item text.
:::

:::prop[href]{type="string"}
The link target. Without it, the item works as a button.
:::

:::prop[selected]{type="boolean"}
The current item: highlight, `aria-current="page"` and open nested links.
:::

:::prop[icon]{type="ReactElement"}
An icon to the left of the text.
:::

:::prop[badge]{type="string | number | ReactElement"}
A badge at the right edge.
:::

:::prop[disabled]{type="boolean"}
Disables the item.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | ((context: { selected?: boolean; disabled?: boolean }) => ReactElement | ReactElement[])"}
Elements at the right edge. Clicks inside do not trigger the link.
:::

:::prop[childrenIcon]{type="ReactElement" default="<ChevronDown />"}
The icon shown while nested links are open. See [Icons](/en/components/navigation/navigationList/icons).
:::

:::prop[asChild]{type="boolean" default="false"}
Merges the link styling onto a single child element, for example a router link.
:::

:::prop[ref]{type="Ref<HTMLAnchorElement>"}
Reference to the link element.
:::

### NavigationList.Header and NavigationList.Footer

:::prop[children]{type="ReactNode"}
Content pinned to the top or the bottom.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the element.
:::

## Related topics

- [Tabs](/en/components/navigation/tabs) — switching between views of one screen
- [Screen](/en/components/layout/screen) — the page layout where the list usually lives in the sidebar
- [Button](/en/components/controls/button) — buttons for `actions`
- [Accessibility](/en/accessibility) — keyboard navigation and focus across the library
