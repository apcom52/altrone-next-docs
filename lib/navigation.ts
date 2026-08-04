import { readFile } from 'fs/promises'
import path from 'path'
import type {
  Navigation,
  NavigationRaw,
  NavItemRaw,
  NavItem,
  NavPageRaw,
  NavSubGroupRaw,
  NavPage,
  NavSubGroup,
  LocalizedTitle,
} from './types'

function t(title: LocalizedTitle, locale: string): string {
  return title[locale] ?? title['en'] ?? Object.values(title)[0] ?? ''
}

function resolvePage(page: NavPageRaw, locale: string): NavPage {
  return { slug: page.slug, title: t(page.title, locale), icon: page.icon }
}

function resolveSubGroup(group: NavSubGroupRaw, locale: string): NavSubGroup {
  return {
    slug: group.slug,
    title: t(group.title, locale),
    icon: group.icon,
    pages: group.pages.map((p) => resolvePage(p, locale)),
  }
}

function resolveItem(item: NavItemRaw, locale: string): NavItem {
  if (item.type === 'page') {
    return { type: 'page', slug: item.slug, title: t(item.title, locale), icon: item.icon }
  }
  if (item.type === 'group') {
    return {
      type: 'group',
      slug: item.slug,
      title: t(item.title, locale),
      urlBase: item.urlBase,
      pages: item.pages.map((p) => resolvePage(p, locale)),
    }
  }
  return {
    type: 'nested-group',
    slug: item.slug,
    title: t(item.title, locale),
    groups: item.groups.map((g) => resolveSubGroup(g, locale)),
  }
}

export async function getNavigation(locale: string): Promise<Navigation> {
  const navPath = path.join(process.cwd(), 'content', 'navigation.json')
  const raw: NavigationRaw = JSON.parse(await readFile(navPath, 'utf-8'))
  return { items: raw.items.map((item) => resolveItem(item, locale)) }
}
