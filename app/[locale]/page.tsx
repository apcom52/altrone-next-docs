import { HomeContent } from './HomeContent'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <HomeContent locale={locale} />
}
