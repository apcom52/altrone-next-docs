export interface Release {
  slug: string
  title: string
  date: string
}

export const RELEASES: Release[] = [
  { slug: '4.0-beta-3', title: 'Altrone 4.0 Beta 3', date: '2026-10-11' },
  { slug: '4.0-beta-2', title: 'Altrone 4.0 Beta 2', date: '2026-09-27' },
  { slug: '4.0-beta-1', title: 'Altrone 4.0 Beta 1', date: '2026-09-13' },
]
