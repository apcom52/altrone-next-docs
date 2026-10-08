"use client";

import { Toolbar } from "altrone-ui";
import { Redo2, Send, Share2, Undo2 } from "lucide-react";

export default function ToolbarGuidelineGroupingGoodDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar size="s">
        <Toolbar.Group>
          <Toolbar.Action label="Undo" icon={<Undo2 />} showLabel={false} />
          <Toolbar.Action label="Redo" icon={<Redo2 />} showLabel={false} />
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action label="Share" icon={<Share2 />} />
          <Toolbar.Action label="Publish" icon={<Send />} />
        </Toolbar.Group>
      </Toolbar>
    </div>
  );
}
