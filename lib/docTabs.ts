import { readdir } from 'fs/promises'
import path from 'path'

export interface DocTab {
  id: string
  /** URL segment after the page slug; empty for the main (`index`) tab. */
  slug: string
  title: string
}

const KNOWN_TABS: { id: string; title: Record<string, string> }[] = [
  { id: 'index', title: { en: 'Overview', ru: 'Сведения' } },
  { id: 'guidelines', title: { en: 'Guidelines', ru: 'Гайдлайны' } },
  { id: 'css_vars', title: { en: 'CSS variables', ru: 'CSS переменные' } },
  { id: 'icons', title: { en: 'Icons', ru: 'Иконки' } },
  { id: 'history', title: { en: 'Change history', ru: 'История изменений' } },
]

async function readFolder(dir: string): Promise<string[] | null> {
  try {
    return await readdir(dir)
  } catch {
    return null
  }
}

/**
 * Tabs of a page authored as a folder (`content/<locale>/<slug>/index.md` plus
 * sibling files). Returns `[]` for a plain single-file page.
 */
export async function getDocTabs(slug: string, locale: string): Promise<DocTab[]> {
  const root = path.join(process.cwd(), 'content')
  const files =
    (await readFolder(path.join(root, locale, slug))) ??
    (await readFolder(path.join(root, 'en', slug))) ??
    []
  const present = new Set(files.filter((file) => file.endsWith('.md')).map((file) => file.slice(0, -3)))

  return KNOWN_TABS.filter((tab) => present.has(tab.id)).map((tab) => ({
    id: tab.id,
    slug: tab.id === 'index' ? '' : tab.id.replace(/_/g, '-'),
    title: tab.title[locale] ?? tab.title.en,
  }))
}
