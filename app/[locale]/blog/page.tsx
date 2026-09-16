import { BlogList, type BlogPost } from './BlogList'

const COPY: Record<string, { title: string; empty: string }> = {
  en: { title: 'Blog', empty: 'No posts yet — check back soon.' },
  ru: { title: 'Блог', empty: 'Пока нет статей — загляните позже.' },
}

/** Placeholder — no post source is wired up yet. */
const POSTS: BlogPost[] = []

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const copy = COPY[locale] ?? COPY.en

  return <BlogList locale={locale} title={copy.title} empty={copy.empty} posts={POSTS} />
}
