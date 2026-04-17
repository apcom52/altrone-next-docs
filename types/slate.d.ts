import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type ParagraphElement = { type: 'paragraph'; children: CustomText[] }
export type LeadElement = { type: 'lead'; children: CustomText[] }
export type Heading1Element = { type: 'h1'; children: CustomText[] }
export type Heading2Element = { type: 'h2'; children: CustomText[] }
export type Heading3Element = { type: 'h3'; children: CustomText[] }

export type CustomElement = ParagraphElement | LeadElement | Heading1Element | Heading2Element | Heading3Element

export type CustomText = {
  text: string
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}
