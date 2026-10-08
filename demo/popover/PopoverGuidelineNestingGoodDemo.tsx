"use client";

import { Popover, Button, Text, Flex } from "altrone-ui";
import { Trash } from "lucide-react";

export default function PopoverGuidelineNestingGoodDemo() {
  return (
    <Popover
      content={({ hide }) => (
        <Flex orientation="vertical" gap="s" style={{ padding: 16, width: 200 }}>
          <Text block size={3}>Delete this project?</Text>
          <Button label="Delete" variant="submit" danger size="s" onClick={hide} />
        </Flex>
      )}
    >
      <Button label="Delete project" icon={<Trash size={16} />} danger />
    </Popover>
  );
}
