import { notFound } from 'next/navigation'
import { getDocContent } from '@/lib/content'
import { parseDoc } from '@/lib/parser'
import { parseHeadings } from '@/lib/headings'
import { DocSideNav } from './DocSideNav'

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
    <div className="doc-layout">
      <article className="doc-content">
        {rendered}
      </article>
      <DocSideNav headings={headings} />
    </div>
  )
}
