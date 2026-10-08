"use client";

import { Popover, Button, Text } from "altrone-ui";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PopoverOpenStateDemo() {
  return (
    <Popover
      placement="bottom-start"
      content={({ hide }) => (
        <div style={{ padding: 16, maxWidth: 240 }}>
          <Text block size={3} style={{ marginBottom: 12 }}>
            The popover is open. The trigger button reacted to the state.
          </Text>
          <Button label="Close" size="s" onClick={hide} />
        </div>
      )}
    >
      {({ open }) => (
        <Button
          label="Filters"
          additionalIcon={open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        />
      )}
    </Popover>
  );
}
