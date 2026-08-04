"use client";

import { Toolbar } from "altrone-ui";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Link } from "lucide-react";

export default function ToolbarBasicDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Action label="Жирный" icon={<Bold size={16} />} showLabel={false} kbd="⌘B" />
        <Toolbar.Action label="Курсив" icon={<Italic size={16} />} showLabel={false} kbd="⌘I" />
        <Toolbar.Action label="Подчёркнутый" icon={<Underline size={16} />} showLabel={false} kbd="⌘U" />
        <Toolbar.Action label="Ссылка" icon={<Link size={16} />} showLabel={false} kbd="⌘K" />
        <Toolbar.Action label="По левому краю" icon={<AlignLeft size={16} />} showLabel={false} />
        <Toolbar.Action label="По центру" icon={<AlignCenter size={16} />} showLabel={false} />
        <Toolbar.Action label="По правому краю" icon={<AlignRight size={16} />} showLabel={false} />
      </Toolbar>
    </div>
  );
}
