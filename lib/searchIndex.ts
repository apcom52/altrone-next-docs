import MiniSearch from 'minisearch'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'
import { getNavigation } from './navigation'
import { getDocContent } from './content'
import { getDocTabs } from './docTabs'
import { createHeadingAnchor } from './slugify'
import { createPropAnchor } from './propAnchors'
import { searchOptions, type SearchDocument } from './search'

interface ContentNode {
  type: string
  depth?: number
  name?: string
  value?: string
  children?: ContentNode[]
  data?: { directiveLabel?: boolean }
}

function textOf(node: ContentNode): string {
  if (node.type === 'code') return ''
  return node.value ?? node.children?.map(textOf).join('') ?? ''
}

export function indexMarkdown(markdown: string, url: string, page: string): SearchDocument[] {
  const tree = unified().use(remarkParse).use(remarkGfm).use(remarkDirective).parse(markdown)
  const documents: SearchDocument[] = []
  const anchor = createPropAnchor()
  const headingAnchor = createHeadingAnchor()
  let section = ''
  let current: SearchDocument = { id: url, url, title: page, page, kind: 'page', text: '' }
  documents.push(current)

  function walk(node: ContentNode) {
    if (node.type === 'heading') {
      if (!node.depth || node.depth < 2 || node.depth > 4) return
      section = textOf(node)
      const href = `${url}#${headingAnchor(section)}`
      current = { id: href, url: href, title: section, page, kind: 'section', text: '' }
      documents.push(current)
      return
    }
    if (node.type === 'containerDirective' && node.name === 'prop') {
      const title = textOf(node.children?.[0] ?? node).replace(/\*$/, '').trim()
      const href = `${url}#${anchor(section, title)}`
      documents.push({ id: href, url: href, title, page, kind: 'prop', text: node.children?.slice(1).map(textOf).join(' ') ?? '' })
      return
    }
    if (node.type === 'paragraph' || node.type === 'table') {
      current.text += ` ${textOf(node)}`
      return
    }
    node.children?.forEach(walk)
  }
  walk(tree)
  return documents.map((document) => ({ ...document, text: document.text.trim().replace(/\s+/g, ' ') }))
}

export async function buildSearchIndex(locale: string) {
  const nav = await getNavigation(locale)
  const documents: SearchDocument[] = []
  const pages: { slug: string; title: string; url: string; component: boolean }[] = []
  for (const item of nav.items) {
    if (item.type === 'page') {
      pages.push({ ...item, url: `/${locale}/${item.slug}`, component: false })
    } else if (item.type === 'group') {
      const base = item.urlBase ?? item.slug
      for (const page of item.pages) {
        pages.push({ ...page, url: `/${locale}/${base ? `${base}/` : ''}${page.slug}`, component: base.startsWith('components/') })
      }
    } else {
      for (const group of item.groups) {
        for (const page of group.pages) {
          pages.push({ ...page, url: `/${locale}/${item.slug}/${group.slug}/${page.slug}`, component: true })
        }
      }
    }
  }
  for (const page of pages) {
    const tabs = page.component ? await getDocTabs(page.slug, locale) : []
    const sources = tabs.length ? tabs.map((tab) => ({ file: `${page.slug}/${tab.id}`, url: `${page.url}${tab.slug ? `/${tab.slug}` : ''}` })) : [{ file: page.slug, url: page.url }]
    for (const source of sources) {
      let markdown: string
      try {
        markdown = await getDocContent(source.file, locale)
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') continue
        throw error
      }
      documents.push(...indexMarkdown(markdown, source.url, page.title))
    }
  }
  const index = new MiniSearch<SearchDocument>(searchOptions)
  index.addAll(documents)
  return index.toJSON()
}
