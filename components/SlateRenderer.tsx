import React from 'react'
import type { SlateNode, SlateTextNode, SlateElementNode } from '@/lib/types'

function isText(node: SlateNode): node is SlateTextNode {
  return 'text' in node
}

function renderText(node: SlateTextNode, key: number): React.ReactNode {
  let content: React.ReactNode = node.text

  if (node.code) content = <code className="slate-inline-code">{content}</code>
  if (node.bold) content = <strong>{content}</strong>
  if (node.italic) content = <em>{content}</em>
  if (node.underline) content = <u>{content}</u>
  if (node.strikethrough) content = <s>{content}</s>

  return <React.Fragment key={key}>{content}</React.Fragment>
}

function renderElement(node: SlateElementNode, key: number): React.ReactNode {
  const children = node.children.map((child, i) => renderNode(child, i))

  switch (node.type) {
    case 'paragraph':
      return <p key={key} className="slate-paragraph">{children}</p>

    case 'lead':
      return <p key={key} className="slate-lead">{children}</p>

    case 'message':
      return (
        <div key={key} className={`slate-message slate-message--${node.severity ?? 'primary'}`}>
          {node.header && <div className="slate-message__header">{node.header}</div>}
          <div className="slate-message__body">{children}</div>
        </div>
      )

    case 'heading-one':
      return <h1 key={key} className="slate-h1">{children}</h1>

    case 'heading-two':
      return <h2 key={key} className="slate-h2">{children}</h2>

    case 'heading-three':
      return <h3 key={key} className="slate-h3">{children}</h3>

    case 'bulleted-list':
      return <ul key={key} className="slate-ul">{children}</ul>

    case 'numbered-list':
      return <ol key={key} className="slate-ol">{children}</ol>

    case 'list-item':
      return <li key={key} className="slate-li">{children}</li>

    case 'code-block':
      return (
        <pre key={key} className="slate-code-block">
          <code>{children}</code>
        </pre>
      )

    case 'block-quote':
      return <blockquote key={key} className="slate-blockquote">{children}</blockquote>

    case 'link':
      return (
        <a key={key} href={node.url} className="slate-link" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )

    case 'divider':
      return <hr key={key} className="slate-divider" />

    default:
      return <div key={key}>{children}</div>
  }
}

function renderNode(node: SlateNode, key: number): React.ReactNode {
  if (isText(node)) return renderText(node, key)
  return renderElement(node, key)
}

export function SlateRenderer({ document }: { document: SlateElementNode[] }) {
  return (
    <div className="slate-content">
      {document.map((node, i) => renderNode(node, i))}
    </div>
  )
}
