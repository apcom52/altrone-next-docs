import { AltroneWrapper } from '../AltroneWrapper'
import { getNavigation } from '@/lib/navigation'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const nav = await getNavigation(locale)

  return <AltroneWrapper nav={nav}>{children}</AltroneWrapper>
}
