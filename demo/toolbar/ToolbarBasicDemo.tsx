"use client";

import { Toolbar } from "altrone-ui";
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Link, Underline } from "lucide-react";

export default function ToolbarBasicDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Group>
          <Toolbar.Action label="Bold" icon={<Bold />} showLabel={false} kbd="⌘B" />
          <Toolbar.Action label="Italic" icon={<Italic />} showLabel={false} kbd="⌘I" />
          <Toolbar.Action label="Underline" icon={<Underline />} showLabel={false} kbd="⌘U" />
          <Toolbar.Action label="Link" icon={<Link />} showLabel={false} kbd="⌘K" />
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Action label="Align left" icon={<AlignLeft />} showLabel={false} selected />
          <Toolbar.Action label="Align center" icon={<AlignCenter />} showLabel={false} />
          <Toolbar.Action label="Align right" icon={<AlignRight />} showLabel={false} />
        </Toolbar.Group>
      </Toolbar>
    </div>
  );
}
