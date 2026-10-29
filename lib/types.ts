export type Locale = 'en' | 'ru'

export const LOCALES: Locale[] = ['en', 'ru']
export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
}

// Navigation

export interface NavPage {
  slug: string
  title: string
  icon?: string
}

export interface NavSubGroup {
  slug: string
  title: string
  icon?: string
  pages: NavPage[]
}

// Group with direct pages (e.g. Design System → Colors)
export interface NavFlatGroupItem {
  type: 'group'
  slug: string
  title: string
  // when set, overrides slug for URL generation; "" means no prefix (flat URLs)
  urlBase?: string
  icon?: string
  pages: NavPage[]
}

// Group with nested subgroups (e.g. Components → Forms → Button)
export interface NavNestedGroupItem {
  type: 'nested-group'
  slug: string
  title: string
  groups: NavSubGroup[]
}

export interface NavPageItem extends NavPage {
  type: 'page'
}

export type NavItem = NavFlatGroupItem | NavNestedGroupItem | NavPageItem

export interface Navigation {
  items: NavItem[]
}

/**
 * Title of the current doc page, matched from the URL path (without the
 * locale segment, e.g. `getting-started` or `components/layout/application`).
 * Returns `undefined` for a category index page (e.g. `components/layout`) or
 * an unrecognized path — the caller decides the fallback.
 */
export function findPageTitle(nav: Navigation, restOfPath: string): string | undefined {
  const topLevelPages = nav.items.filter(
    (item): item is NavPageItem => item.type === 'page'
  )
  const topPage = topLevelPages.find((page) => page.slug === restOfPath)
  if (topPage) return topPage.title

  const groups = nav.items.filter(
    (item): item is NavFlatGroupItem => item.type === 'group'
  )
  for (const group of groups) {
    const base = group.urlBase ?? group.slug
    if (restOfPath.startsWith(`${base}/`)) {
      const pageSlug = restOfPath.slice(base.length + 1)
      const page = group.pages.find((p) => {
        if (p.slug === pageSlug) return true
        if (!base.startsWith('components/')) return false
        return ['guidelines', 'css-vars', 'icons', 'history'].some(
          (tab) => pageSlug === `${p.slug}/${tab}`
        )
      })
      if (page) return page.title
    }
  }

  return undefined
}

// Raw navigation (from navigation.json — titles are localized objects)

export type LocalizedTitle = Record<string, string>

export interface NavPageRaw {
  slug: string
  title: LocalizedTitle
  icon?: string
}

export interface NavSubGroupRaw {
  slug: string
  title: LocalizedTitle
  icon?: string
  pages: NavPageRaw[]
}

export interface NavFlatGroupItemRaw {
  type: 'group'
  slug: string
  title: LocalizedTitle
  urlBase?: string
  icon?: string
  pages: NavPageRaw[]
}

export interface NavNestedGroupItemRaw {
  type: 'nested-group'
  slug: string
  title: LocalizedTitle
  groups: NavSubGroupRaw[]
}

export interface NavPageItemRaw {
  type: 'page'
  slug: string
  title: LocalizedTitle
  icon?: string
}

export type NavItemRaw = NavFlatGroupItemRaw | NavNestedGroupItemRaw | NavPageItemRaw

export interface NavigationRaw {
  items: NavItemRaw[]
}

// Slate content

export interface SlateTextNode {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
  strikethrough?: boolean
}

export interface SlateElementNode {
  type: string
  children: SlateNode[]
  url?: string
  // message block
  severity?: string
  header?: string
  // block-specific settings
  config?: Record<string, unknown>
}

export type SlateNode = SlateTextNode | SlateElementNode

export interface PageData {
  title: string
  description?: string
  document: SlateElementNode[]
}
