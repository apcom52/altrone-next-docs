import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { revalidatePath } from 'next/cache'
import { LOCALES } from '@/lib/types'

type Params = { lang: string; slug: string[] }

function buildFilePath(lang: string, slug: string[]): string {
  return path.join(process.cwd(), 'content', lang, ...slug) + '.json'
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  const { lang, slug } = await params

  if (!LOCALES.includes(lang as never)) {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 })
  }

  const filePath = buildFilePath(lang, slug)

  try {
    const raw = await readFile(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(raw))
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Read-only in production' }, { status: 403 })
  }

  const { lang, slug } = await params

  if (!LOCALES.includes(lang as never)) {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 })
  }

  const body = await req.json()
  const filePath = buildFilePath(lang, slug)

  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, JSON.stringify(body, null, 2), 'utf-8')

  revalidatePath('/', 'layout')

  return NextResponse.json({ ok: true })
}
