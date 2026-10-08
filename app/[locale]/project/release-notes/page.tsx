import { getDocContent } from '@/lib/content'
import { parseDoc } from '@/lib/parser'
import { RELEASES } from '@/lib/releases'
import { DocSideNav } from '@/components/DocSideNav'
import { ReleaseNotes } from './ReleaseNotes'
import { PageAside } from '../../../AsideContext'

const LOCALE_TAGS: Record<string, string> = { en: 'en-US', ru: 'ru-RU' }

const TITLES: Record<string, string> = {
  en: 'Release Notes',
  ru: 'Примечания к релизам',
}

export default async function ReleaseNotesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dateFormat = new Intl.DateTimeFormat(LOCALE_TAGS[locale] ?? LOCALE_TAGS.en, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  const releases = await Promise.all(
    RELEASES.map(async (release) => ({
      slug: release.slug,
      id: `release-${release.slug.replace(/\./g, '-')}`,
      title: release.title,
      date: dateFormat.format(new Date(release.date)),
      body: await parseDoc(await getDocContent(`release-notes/${release.slug}`, locale)),
    })),
  )

  const headings = releases.map((release) => ({ id: release.id, text: release.title, level: 2 as const }))

  return (
    <>
      <PageAside>
        <DocSideNav headings={headings} locale={locale} />
      </PageAside>
      <ReleaseNotes title={TITLES[locale] ?? TITLES.en} releases={releases} />
    </>
  )
}
