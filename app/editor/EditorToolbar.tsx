"use client";

import { useSlate, ReactEditor } from "slate-react";
import { Editor, Transforms, Element as SlateElement } from "slate";
import { Dropdown, Button, Flex, Divider } from "altrone-ui";
import type { CustomElement } from "@/types/slate";
import s from "./styles.module.css";
import { Grid2X2Plus, Heading1, Pilcrow } from "lucide-react";

const BLOCK_LABELS: Record<string, string> = {
  paragraph: "Абзац",
  lead: "Вступление",
  h1: "Заголовок 1",
  h2: "Заголовок 2",
  h3: "Заголовок 3",
};

function getCurrentBlockType(editor: Editor): string {
  const [match] = Editor.nodes(editor, {
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n),
    mode: "highest",
  });
  return match ? (match[0] as CustomElement).type : "paragraph";
}

function setBlockType(editor: Editor, type: CustomElement["type"]) {
  Transforms.setNodes(editor, { type });
}

export function EditorToolbar() {
  const editor = useSlate();
  const currentType = getCurrentBlockType(editor);
  const currentLabel = BLOCK_LABELS[currentType] ?? "Абзац";

  return (
    <Flex className={s.toolbar} gap="m" onMouseDown={(e) => e.preventDefault()}>
      <Dropdown
        content={
          <Dropdown.Menu>
            <Dropdown.RadioList
              value={currentType}
              onChange={(type) => {
                ReactEditor.focus(editor);
                setBlockType(editor, type as CustomElement["type"]);
              }}
            >
              <Dropdown.RadioItem value="h1" label="Заголовок 1" />
              <Dropdown.RadioItem value="h2" label="Заголовок 2" />
              <Dropdown.RadioItem value="h3" label="Заголовок 3" />
              <Dropdown.RadioItem value="paragraph" label="Абзац" />
              <Dropdown.RadioItem value="lead" label="Вступление" />
            </Dropdown.RadioList>
          </Dropdown.Menu>
        }
      >
        {({ opened }: { opened: boolean }) => (
          <Button icon={<Grid2X2Plus />} label={currentLabel} size="s" />
        )}
      </Dropdown>
      <Button
        icon={<Heading1 />}
        label="Заголовок 1"
        showLabel={false}
        size="s"
        selected={currentType === "h1"}
        onClick={() => {
          ReactEditor.focus(editor);
          setBlockType(editor, "h1");
        }}
      />
      <Button
        icon={<Pilcrow />}
        label="Абзац"
        showLabel={false}
        size="s"
        selected={currentType === "paragraph"}
        onClick={() => {
          ReactEditor.focus(editor);
          setBlockType(editor, "paragraph");
        }}
      />
      <Divider direction="vertical" />
    </Flex>
  );
}
