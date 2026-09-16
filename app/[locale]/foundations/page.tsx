import { notFound } from 'next/navigation'
import { getFoundationsGroup } from '@/lib/navigation'
import { PageAside } from '../../AsideContext'
import { CategoryGrid } from '../../CategoryGrid'

export default async function FoundationsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const group = await getFoundationsGroup(locale)

  if (!group) {
    notFound()
  }

  const prefix = group.urlBase ?? group.slug

  return (
    <>
      <PageAside>{null}</PageAside>
      <CategoryGrid locale={locale} title={group.title} prefix={prefix} pages={group.pages} />
    </>
  )
}
