"use client";

import { useState } from "react";
import { Popover, Button, Text, Flex } from "altrone-ui";
import { Trash } from "lucide-react";

export default function PopoverConfirmDemo() {
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    return <Text size={4} color="muted">Record deleted.</Text>;
  }

  return (
    <Popover
      placement="bottom-start"
      content={({ hide }) => (
        <div style={{ padding: 16, maxWidth: 260 }}>
          <Text block size={4} weight="bold" style={{ marginBottom: 4 }}>Delete record?</Text>
          <Text block size={3} color="muted" style={{ marginBottom: 12 }}>
            This action can't be undone.
          </Text>
          <Flex gap="s">
            <Button
              label="Delete"
              variant="submit"
              danger
              size="s"
              onClick={() => { setDeleted(true); hide(); }}
            />
            <Button label="Cancel" size="s" variant="text" onClick={hide} />
          </Flex>
        </div>
      )}
    >
      <Button label="Delete" icon={<Trash size={16} />} danger />
    </Popover>
  );
}
