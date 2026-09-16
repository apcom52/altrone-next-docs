import { notFound } from 'next/navigation'
import { getDocContent } from '@/lib/content'
import { parseDoc } from '@/lib/parser'
import { parseHeadings } from '@/lib/headings'
import { DocSideNav } from '@/components/DocSideNav'
import { PageAside } from '../../AsideContext'

export default async function DocPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>
}) {
  const { locale, slug } = await params
  const slugPath = slug.join('/')

  let content: string
  try {
    content = await getDocContent(slugPath, locale)
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
