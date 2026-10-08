"use client";

import { Toolbar } from "altrone-ui";
import { Bold, Italic, Sparkles, Underline } from "lucide-react";

export default function ToolbarGuidelineLabelsGoodDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar size="s">
        <Toolbar.Group>
          <Toolbar.Action label="Bold" icon={<Bold />} showLabel={false} kbd="⌘B" />
          <Toolbar.Action label="Italic" icon={<Italic />} showLabel={false} kbd="⌘I" />
          <Toolbar.Action label="Underline" icon={<Underline />} showLabel={false} kbd="⌘U" />
          <Toolbar.Action label="Run analysis" icon={<Sparkles />} />
        </Toolbar.Group>
      </Toolbar>
    </div>
  );
}
