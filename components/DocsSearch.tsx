'use client'

import { Children, useRef, useState, type ReactNode } from 'react'
import { Search, Flex, Text, Toolbar } from 'altrone-ui'
import { Search as SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type MiniSearch from 'minisearch'
import { searchOptions, type SearchDocument } from '@/lib/search'

const indexes = new Map<string, Promise<MiniSearch<SearchDocument>>>()

function loadIndex(locale: string) {
  const cached = indexes.get(locale)
  if (cached) return cached
  const promise = Promise.all([
    import('minisearch'),
    fetch(`/${locale}/search-index.json`).then((response) => {
      if (!response.ok) throw new Error('Search index unavailable')
      return response.text()
    }),
  ]).then(([{ default: MiniSearch }, json]) => MiniSearch.loadJSON<SearchDocument>(json, searchOptions))
    .catch((error: unknown) => {
      indexes.delete(locale)
      throw error
    })
  indexes.set(locale, promise)
  return promise
}

function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return text
  const pattern = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  return text.split(new RegExp(`(${pattern})`, 'gi')).map((part, index) => (
    <Text key={index} highlighted={terms.some((term) => term.toLowerCase() === part.toLowerCase())}>{part}</Text>
  ))
}

export function DocsSearch({ locale, children }: { locale: string; children: ReactNode }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const trigger = useRef<HTMLButtonElement>(null)
  const ru = locale === 'ru'
  const label = ru ? 'Поиск по документации' : 'Search documentation'
  const kinds = ru ? { page: 'Страница', section: 'Раздел', prop: 'Проп' } : { page: 'Page', section: 'Section', prop: 'Prop' }

  const close = () => {
    setOpen(false)
    setQuery('')
    requestAnimationFrame(() => trigger.current?.focus())
  }

  return (
    <Toolbar.Trailing>
      {open ? (
        <Flex align="center" gap="s" style={{ width: 'min(560px, 65vw)', minWidth: 0 }}>
          <Search<SearchDocument>
            showControls={false}
            autoFocus
            aria-label={label}
            placeholder={ru ? 'Компоненты, пропы, функции…' : 'Components, props, functions…'}
            style={{ width: '100%', minWidth: 0 }}
            value={query}
            onChange={setQuery}
            getSuggestions={async ({ value }) => {
              const index = await loadIndex(locale)
              return index.search(value).sort((a, b) => {
                const exactA = String(a.title).toLowerCase() === value.trim().toLowerCase()
                const exactB = String(b.title).toLowerCase() === value.trim().toLowerCase()
                return Number(exactB) - Number(exactA) || b.score - a.score
              }).slice(0, 10).map((result) => ({
                id: String(result.id), title: String(result.title), page: String(result.page),
                kind: result.kind as SearchDocument['kind'], text: String(result.text), url: String(result.url),
              }))
            }}
            getSuggestionValue={(result) => result.title}
            renderSuggestion={({ suggestion, inputValue }) => (
              <Flex orientation="vertical" gap="xxs" style={{ minWidth: 0 }}>
                <Text weight="bold"><Highlight text={suggestion.title} query={inputValue} /></Text>
                <Text size={2} color="muted">{suggestion.page} · {kinds[suggestion.kind]}</Text>
                <Text size={2} lineClamp={2}><Highlight text={suggestion.text.slice(0, 180)} query={inputValue} /></Text>
              </Flex>
            )}
            onSelect={(result) => {
              close()
              router.push(result.url)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault()
                close()
              }
            }}
          />
          <Toolbar.Group priority="high">
            <Toolbar.Action label={ru ? 'Закрыть поиск' : 'Close search'} icon={<X />} showLabel={false} onClick={close} priority="high" />
          </Toolbar.Group>
        </Flex>
      ) : [
          ...Children.toArray(children),
          <Toolbar.Group key="search">
            <Toolbar.Action ref={trigger} label={label} icon={<SearchIcon />} showLabel={false} onClick={() => setOpen(true)} />
          </Toolbar.Group>,
      ]}
    </Toolbar.Trailing>
  )
}
