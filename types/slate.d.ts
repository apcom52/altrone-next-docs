import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type CodeLanguage = 'tsx' | 'bash' | 'css'
export type HeadingLevel = 1 | 2 | 3
export type MessageSeverity = 'info' | 'success' | 'warning' | 'danger'

export type ParagraphElement = { type: 'paragraph'; children: CustomText[] }
export type LeadElement = { type: 'lead'; children: CustomText[] }
export type HeadingElement = { type: 'heading'; config: { level: HeadingLevel }; children: CustomText[] }
export type CodeElement = { type: 'code'; config: { language: CodeLanguage }; children: CustomText[] }

export type MessageElement = {
  type: 'message';
  config: { severity: MessageSeverity; title?: string; icon?: string };
  children: CustomText[]
}

export type CustomElement = ParagraphElement | LeadElement | HeadingElement | CodeElement | LinkElement | MessageElement

export type CustomText = {
  text: string
  tokenType?: string
  bold?: true
  italic?: true
  underline?: true
  strikethrough?: true
  code?: true
}

export type LinkElement = { type: 'link'; url: string; children: CustomText[] }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}
