import { readFile } from 'fs/promises'
import path from 'path'
import { AltroneWrapper } from '../AltroneWrapper'
import type { Navigation } from '@/lib/types'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const navPath = path.join(process.cwd(), 'content', 'navigation.json')
  const nav: Navigation = JSON.parse(await readFile(navPath, 'utf-8'))

  return <AltroneWrapper nav={nav}>{children}</AltroneWrapper>
}
