import type { Options } from 'minisearch'

export interface SearchDocument {
  id: string
  title: string
  page: string
  kind: 'page' | 'section' | 'prop'
  text: string
  url: string
}

export function tokenizeSearch(text: string): string[] {
  const words = text.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []
  const parts = text.replace(/([a-z\d])([A-Z])/g, '$1 $2').toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []
  return [...new Set([...words, ...parts])]
}

export const searchOptions: Options<SearchDocument> = {
  fields: ['title', 'page', 'text'],
  storeFields: ['title', 'page', 'kind', 'text', 'url'],
  tokenize: tokenizeSearch,
  searchOptions: {
    boost: { title: 8, page: 3, text: 1 },
    prefix: true,
    fuzzy: (term) => term.length >= 5 ? 0.2 : false,
    combineWith: 'AND',
  },
}
