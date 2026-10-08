import { notFound } from 'next/navigation'
import { getDocContent } from '@/lib/content'
import { getDocTabs } from '@/lib/docTabs'
import { parseDoc } from '@/lib/parser'
import { parseHeadings } from '@/lib/headings'
import { getComponentCategory } from '@/lib/navigation'
import { DocSideNav } from '@/components/DocSideNav'
import { DocTabs } from '@/components/DocTabs'
import { PageAside } from '../../../../../AsideContext'

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; component: string; tab?: string[] }>
}) {
  const { locale, category, component, tab } = await params

  const group = await getComponentCategory(locale, category)
  if (!group || !group.pages.some((page) => page.slug === component)) {
    notFound()
  }

  if (tab && tab.length > 1) {
    notFound()
  }
  const activeSlug = tab?.[0] ?? ''

  const tabs = await getDocTabs(component, locale)
  let docPath = component
  if (tabs.length > 0) {
    const activeTab = tabs.find((item) => item.slug === activeSlug)
    if (!activeTab) {
      notFound()
    }
    docPath = `${component}/${activeTab.id}`
  } else if (activeSlug) {
    notFound()
  }

  let content: string
  try {
    content = await getDocContent(docPath, locale)
  } catch {
    notFound()
  }

  const titleMatch = tabs.length > 1 ? content!.match(/^# [^\n]*\n/) : null
  const title = titleMatch ? titleMatch[0] : ''
  const body = content!.slice(title.length)

  const [renderedTitle, rendered, headings] = await Promise.all([
    title ? parseDoc(title) : null,
    parseDoc(body),
    parseHeadings(body),
  ])

  return (
    <>
      <PageAside>{headings.length > 0 ? <DocSideNav headings={headings} locale={locale} /> : null}</PageAside>
      <article className="doc-article">
        {renderedTitle}
        <DocTabs
          tabs={tabs}
          activeSlug={activeSlug}
          basePath={`/${locale}/components/${category}/${component}`}
        />
        {rendered}
      </article>
    </>
  )
}
