import { notFound } from 'next/navigation'
import { getDocContent } from '@/lib/content'
import { parseDoc } from '@/lib/parser'

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

  const rendered = await parseDoc(content!)

  return (
    <article className="doc-content">
      {rendered}
    </article>
  )
}
