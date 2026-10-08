"use client";

import { Popover, Button, Text } from "altrone-ui";

export default function PopoverBasicDemo() {
  return (
    <Popover
      content={
        <div style={{ padding: 16, maxWidth: 260 }}>
          <Text block size={4} weight="bold" style={{ marginBottom: 6 }}>Tip</Text>
          <Text block size={3} color="muted">
            This is arbitrary content inside the popover. You can put a form,
            a list, or any other React component here.
          </Text>
        </div>
      }
    >
      <Button label="Open popover" />
    </Popover>
  );
}
