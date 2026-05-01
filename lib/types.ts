export type Locale = 'en' | 'ru'

export const LOCALES: Locale[] = ['en', 'ru']
export const DEFAULT_LOCALE: Locale = 'en'

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
