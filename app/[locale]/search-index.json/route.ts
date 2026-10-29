import { buildSearchIndex } from '@/lib/searchIndex'
import { LOCALES } from '@/lib/types'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return Response.json(await buildSearchIndex(locale))
}
