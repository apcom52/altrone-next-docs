# SideNavigation

## Echo the page headings

An outline link is the name of the section it leads to. Use the same words as the section heading: people recognize the place at once, and the label stays short.

::::good-bad
:::good
::playground{src=sideNavigation/SideNavigationGuidelineLabelsGoodDemo caption="Short section names"}
:::

:::bad
::playground{src=sideNavigation/SideNavigationGuidelineLabelsBadDemo caption="Phrases wrap and are hard to scan"}
:::
::::

## Stay within two levels

An outline works as a map of the page, not as a tree. Two levels — a section and its subsections — read at a glance; anything deeper turns a narrow column into a staircase.

::::good-bad
:::good
::playground{src=sideNavigation/SideNavigationGuidelineDepthGoodDemo caption="A section and two subsections"}
:::

:::bad
::playground{src=sideNavigation/SideNavigationGuidelineDepthBadDemo caption="Five levels of nesting"}
:::
::::

## Make sure the sections exist

The highlight works only for sections that have an element with the matching `id` on the page. If there is no such element, the link is never highlighted and a click leads nowhere.

## Don't use it for application navigation

`SideNavigation` leads through the sections of one page. For moving between the pages and sections of an application, use `NavigationList`.

## Accessibility

- The outline is a `<nav>` with a list of links; when `title` is set, it becomes the navigation's name through `aria-labelledby`.
- The link of the highlighted section gets `aria-current="page"`, and the state is not conveyed by color alone: the highlighted link is also bolder.
- If there is more than one navigation on the page, give each a `title` or an `aria-label` so a screen reader can tell them apart.
