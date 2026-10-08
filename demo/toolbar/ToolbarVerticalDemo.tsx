"use client";

import { Flex, Toolbar } from "altrone-ui";
import { Eraser, MousePointer2, Pen, Square } from "lucide-react";

export default function ToolbarVerticalDemo() {
  return (
    <Flex style={{ width: "100%", height: 240 }}>
      <Toolbar edge="left" variant="grouped">
        <Toolbar.Leading>
          <Toolbar.Group>
            <Toolbar.Action label="Select" icon={<MousePointer2 />} showLabel={false} selected />
            <Toolbar.Action label="Pen" icon={<Pen />} showLabel={false} />
            <Toolbar.Action label="Rectangle" icon={<Square />} showLabel={false} />
            <Toolbar.Action label="Eraser" icon={<Eraser />} showLabel={false} />
          </Toolbar.Group>
        </Toolbar.Leading>
      </Toolbar>
    </Flex>
  );
}
