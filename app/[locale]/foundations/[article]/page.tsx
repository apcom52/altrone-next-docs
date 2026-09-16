import { notFound } from 'next/navigation'
import { getDocContent } from '@/lib/content'
import { parseDoc } from '@/lib/parser'
import { parseHeadings } from '@/lib/headings'
import { getFoundationsGroup } from '@/lib/navigation'
import { DocSideNav } from '@/components/DocSideNav'
import { PageAside } from '../../../AsideContext'

export default async function FoundationsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; article: string }>
}) {
  const { locale, article } = await params

  const group = await getFoundationsGroup(locale)
  if (!group || !group.pages.some((page) => page.slug === article)) {
    notFound()
  }

  let content: string
  try {
    content = await getDocContent(article, locale)
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
