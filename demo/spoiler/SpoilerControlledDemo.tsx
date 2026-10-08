"use client";

import { useState } from "react";
import { Button, Flex, Spoiler, Text } from "altrone-ui";

export default function SpoilerControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 560 }}>
      <Button label={open ? "Collapse from outside" : "Expand from outside"} onClick={() => setOpen(!open)} />
      <Spoiler title="Advanced settings" open={open} onToggle={setOpen}>
        <Text block size={4}>
          The state lives in the parent: both the button above and the heading change it.
        </Text>
      </Spoiler>
    </Flex>
  );
}
