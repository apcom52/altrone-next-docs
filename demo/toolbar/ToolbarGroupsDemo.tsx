"use client";

import { Toolbar } from "altrone-ui";
import { Redo2, Save, Send, Share2, Trash2, Undo2 } from "lucide-react";

export default function ToolbarGroupsDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Group>
          <Toolbar.Action label="Undo" icon={<Undo2 />} showLabel={false} kbd="⌘Z" />
          <Toolbar.Action label="Redo" icon={<Redo2 />} showLabel={false} kbd="⌘⇧Z" />
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action label="Save" icon={<Save />} kbd="⌘S" />
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Group>
          <Toolbar.Action label="Share" icon={<Share2 />} />
          <Toolbar.Action label="Publish" icon={<Send />} />
        </Toolbar.Group>
        <Toolbar.Separator variant="line" />
        <Toolbar.Group>
          <Toolbar.Action label="Delete" icon={<Trash2 />} showLabel={false} danger />
        </Toolbar.Group>
      </Toolbar>
    </div>
  );
}
