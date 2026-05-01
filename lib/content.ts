import { readFile } from 'fs/promises'
import path from 'path'

export async function getDocContent(slug: string, locale: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'content', locale, `${slug}.md`)
  try {
    return await readFile(filePath, 'utf-8')
  } catch {
    const fallback = path.join(process.cwd(), 'content', 'en', `${slug}.md`)
    return await readFile(fallback, 'utf-8')
  }
}
