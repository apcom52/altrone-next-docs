import { notFound } from 'next/navigation'
import { getComponentCategories, getComponentCategory } from '@/lib/navigation'
import { PageAside } from '../../../AsideContext'
import { CategoryGrid } from '../../../CategoryGrid'

export async function generateStaticParams() {
  const categories = await getComponentCategories('en')
  return categories.map((category) => ({ category: category.slug }))
}

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>
}) {
  const { locale, category } = await params

  const group = await getComponentCategory(locale, category)

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
