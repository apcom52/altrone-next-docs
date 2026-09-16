import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['en', 'ru']
const DEFAULT_LOCALE = 'en'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = LOCALES.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (hasLocale) return NextResponse.next()

  const storedLocale = request.cookies.get('altrone-docs-locale')?.value
  const locale = LOCALES.includes(storedLocale ?? '') ? storedLocale! : DEFAULT_LOCALE

  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|favicon\\.ico|api|editor|.*\\..*).*)',],
}
