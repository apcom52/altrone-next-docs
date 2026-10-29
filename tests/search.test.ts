import assert from 'node:assert/strict'
import { test } from 'node:test'
import MiniSearch from 'minisearch'
import { indexMarkdown, buildSearchIndex } from '../lib/searchIndex'
import { searchOptions } from '../lib/search'
import { createPropAnchor } from '../lib/propAnchors'

const markdown = `# Button
A clickable control.

## Button props
:::prop[onChange*]{type="function"}
Called when the value changes.
:::

:::prop[onChange]{type="function"}
Another callback.
:::

## Button.Item props
:::prop[onChange]{type="function"}
Item callback.
:::

## Using \`useTheme\`
Read the current theme.
`

test('indexes props with unique anchors matching the renderer and sections with inline code', () => {
  const records = indexMarkdown(markdown, '/en/components/controls/button', 'Button')
  const props = records.filter((record) => record.kind === 'prop')
  const anchor = createPropAnchor()
  assert.deepEqual(props.map((record) => record.url.split('#')[1]), [
    anchor('Button props', 'onChange'), anchor('Button props', 'onChange'), anchor('Button.Item props', 'onChange'),
  ])
  assert.equal(new Set(records.map((record) => record.id)).size, records.length)
  assert.ok(records.some((record) => record.url.endsWith('#using-usetheme')))
})

test('serialized index searches component + camelCase prop, prefixes and typos', () => {
  const index = new MiniSearch(searchOptions)
  index.addAll(indexMarkdown(markdown, '/en/components/controls/button', 'Button'))
  const loaded = MiniSearch.loadJSON(JSON.stringify(index), searchOptions)
  for (const query of ['button onChange', 'button onCh', 'buton', 'useTheme']) {
    assert.ok(loaded.search(query).length > 0, query)
  }
  assert.equal(loaded.search('button onChange')[0].kind, 'prop')
  assert.equal(loaded.search('nonexistentword').length, 0)
})

for (const locale of ['en', 'ru']) {
  test(`builds a complete ${locale} index including tab URLs`, async () => {
    const json = await buildSearchIndex(locale)
    const index = MiniSearch.loadJSON(JSON.stringify(json), searchOptions)
    assert.ok(index.documentCount > 100)
    const results = index.search('button disabled')
    assert.ok(results.some((result) => String(result.url).startsWith(`/${locale}/components/controls/button#prop-`)))
    const allURLs = Object.values(json.storedFields).map((value) => String(value.url))
    assert.ok(allURLs.some((url) => url.includes('/guidelines#')))
    assert.ok(allURLs.every((url) => url.startsWith(`/${locale}/`)))
  })
}
