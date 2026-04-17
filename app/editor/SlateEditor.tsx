"use client";

import {
  Slate,
  Editable,
  withReact,
  type RenderElementProps,
  type RenderLeafProps,
} from "slate-react";
import { createEditor, type Descendant } from "slate";
import { withHistory } from "slate-history";
import { Flex } from "altrone-ui";
import type { CustomElement } from "@/types/slate";
import { EditorToolbar } from "./EditorToolbar";
import { ParagraphBlock } from "./renderers/ParagraphBlock";
import { LeadBlock } from "./renderers/LeadBlock";
import { Heading1Block } from "./renderers/Heading1Block";
import { Heading2Block } from "./renderers/Heading2Block";
import { Heading3Block } from "./renderers/Heading3Block";
import s from "./styles.module.css";

// ─── Element renderer ─────────────────────────────────────────────────────────

function ElementRenderer(props: RenderElementProps) {
  const type = (props.element as CustomElement).type;
  if (type === "lead") return <LeadBlock {...props} />;
  if (type === "h1") return <Heading1Block {...props} />;
  if (type === "h2") return <Heading2Block {...props} />;
  if (type === "h3") return <Heading3Block {...props} />;
  return <ParagraphBlock {...props} />;
}

// ─── Leaf renderer ────────────────────────────────────────────────────────────

function renderLeaf({ attributes, children }: RenderLeafProps) {
  return <span {...attributes}>{children}</span>;
}

// ─── Main component ───────────────────────────────────────────────────────────

export const EMPTY_DOCUMENT: Descendant[] = [
  { type: "paragraph", children: [{ text: "" }] },
];

interface SlateEditorProps {
  editor: ReturnType<typeof createEditor>;
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
}

export function SlateEditor({ editor, value, onChange }: SlateEditorProps) {
  return (
    <Slate
      editor={editor as ReturnType<typeof withReact>}
      initialValue={value}
      onChange={onChange}
    >
      <Flex direction="vertical" gap="m" style={{ height: "100%" }}>
        <EditorToolbar />
        <Editable
          renderElement={(props) => <ElementRenderer {...props} />}
          renderLeaf={renderLeaf}
          style={{
            padding: "0 16px 16px",
            flex: 1,
            outline: "none",
            lineHeight: 1.6,
            display: "flex",
            flexDirection: "column",
            gap: "var(--gap)",
          }}
          placeholder="Start writing..."
        />
      </Flex>
    </Slate>
  );
}
