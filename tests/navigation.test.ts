import assert from 'node:assert/strict'
import { test } from 'node:test'
import { findPageTitle, type Navigation } from '../lib/types'

const navigation: Navigation = {
  items: [
    { type: 'page', slug: 'getting-started', title: 'Начало работы' },
    { type: 'group', slug: 'controls', urlBase: 'components/controls', title: 'Элементы управления', pages: [{ slug: 'button', title: 'Button' }] },
    { type: 'group', slug: 'foundations', title: 'Основы', pages: [{ slug: 'color', title: 'Цвет' }] },
  ],
}

test('keeps the component title on every documentation tab', () => {
  for (const tab of ['', '/guidelines', '/css-vars', '/icons', '/history']) {
    assert.equal(findPageTitle(navigation, `components/controls/button${tab}`), 'Button')
  }
})

test('preserves page matching and rejects unknown tabs and category indexes', () => {
  assert.equal(findPageTitle(navigation, 'getting-started'), 'Начало работы')
  assert.equal(findPageTitle(navigation, 'foundations/color'), 'Цвет')
  for (const path of ['components/controls', 'components/controls/button/unknown', 'components/controls/button/history/extra', 'foundations/color/history']) {
    assert.equal(findPageTitle(navigation, path), undefined)
  }
})
