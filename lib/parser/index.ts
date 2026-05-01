import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime'
import type { ReactNode } from 'react'
import { calloutPlugin } from './plugins/callout'
import { codePlugin } from './plugins/code'
import { columnsPlugin } from './plugins/columns'
import { playgroundPlugin } from './plugins/playground'
import { components } from './components'

export async function parseDoc(markdown: string): Promise<ReactNode> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(calloutPlugin)
    .use(columnsPlugin)
    .use(playgroundPlugin)
    .use(codePlugin)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeReact, {
      jsx,
      jsxs,
      Fragment,
      components,
    })
    .process(markdown)

  return file.result as ReactNode
}
