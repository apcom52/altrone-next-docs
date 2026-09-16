import { notFound } from 'next/navigation'
import { getDocContent } from '@/lib/content'
import { parseDoc } from '@/lib/parser'
import { parseHeadings } from '@/lib/headings'
import { getComponentCategory } from '@/lib/navigation'
import { DocSideNav } from '@/components/DocSideNav'
import { PageAside } from '../../../../AsideContext'

export default async function ComponentDocPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; component: string }>
}) {
  const { locale, category, component } = await params

  const group = await getComponentCategory(locale, category)
  if (!group || !group.pages.some((page) => page.slug === component)) {
    notFound()
  }

  let content: string
  try {
    content = await getDocContent(component, locale)
  } catch {
    notFound()
  }

  const [rendered, headings] = await Promise.all([
    parseDoc(content!),
    parseHeadings(content!),
  ])

  return (
    <>
      <PageAside>{headings.length > 0 ? <DocSideNav headings={headings} locale={locale} /> : null}</PageAside>
      <article className="doc-article">{rendered}</article>
    </>
  )
}
