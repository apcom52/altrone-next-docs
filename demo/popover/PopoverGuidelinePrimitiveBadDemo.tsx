"use client";

import { Popover, Button, Text, Flex } from "altrone-ui";
import { MoreVertical } from "lucide-react";

const ITEMS = ["Rename", "Duplicate", "Archive", "Delete"];

export default function PopoverGuidelinePrimitiveBadDemo() {
  return (
    <Popover
      content={({ hide }) => (
        <Flex orientation="vertical" gap="mini" style={{ width: 160 }}>
          {ITEMS.map((item) => (
            <Text
              key={item}
              block
              onClick={hide}
              style={{ padding: "6px 8px", cursor: "pointer" }}
            >
              {item}
            </Text>
          ))}
        </Flex>
      )}
    >
      <Button label="More options" showLabel={false} icon={<MoreVertical size={16} />} />
    </Popover>
  );
}
