"use client";

import { Toolbar } from "altrone-ui";
import { Undo2, Redo2, Save, Share2, Send } from "lucide-react";

export default function ToolbarGroupsDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Group weight={1}>
          <Toolbar.Action label="Отменить" icon={<Undo2 size={16} />} showLabel={false} kbd="⌘Z" />
          <Toolbar.Action label="Повторить" icon={<Redo2 size={16} />} showLabel={false} kbd="⌘⇧Z" />
          <Toolbar.Action label="Сохранить" icon={<Save size={16} />} kbd="⌘S" />
        </Toolbar.Group>
        <Toolbar.Group align="end">
          <Toolbar.Action label="Поделиться" icon={<Share2 size={16} />} />
          <Toolbar.Action label="Опубликовать" icon={<Send size={16} />} />
        </Toolbar.Group>
      </Toolbar>
    </div>
  );
}
