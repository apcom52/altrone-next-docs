"use client";

import { Flex, Text, Toolbar } from "altrone-ui";
import { Redo2, Share2, Undo2 } from "lucide-react";

const VARIANTS = ["plain", "grouped", "solid"] as const;

export default function ToolbarVariantsDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%" }}>
      {VARIANTS.map((variant) => (
        <Flex key={variant} orientation="vertical" gap="s">
          <Text code>{variant}</Text>
          <Toolbar variant={variant} size="s">
            <Toolbar.Leading>
              <Toolbar.Group>
                <Toolbar.Action label="Undo" icon={<Undo2 />} showLabel={false} kbd="⌘Z" />
                <Toolbar.Action label="Redo" icon={<Redo2 />} showLabel={false} kbd="⌘⇧Z" />
              </Toolbar.Group>
            </Toolbar.Leading>
            <Toolbar.Trailing>
              <Toolbar.Group>
                <Toolbar.Action label="Share" icon={<Share2 />} />
              </Toolbar.Group>
            </Toolbar.Trailing>
          </Toolbar>
        </Flex>
      ))}
    </Flex>
  );
}
