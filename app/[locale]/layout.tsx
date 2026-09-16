import { AltroneWrapper } from '../AltroneWrapper'
import { AsideProvider } from '../AsideContext'
import { ScreenShell } from '../ScreenShell'
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

  return (
    <AltroneWrapper>
      <AsideProvider>
        <ScreenShell locale={locale} nav={nav}>
          {children}
        </ScreenShell>
      </AsideProvider>
    </AltroneWrapper>
  )
}
