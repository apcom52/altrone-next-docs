"use client";

import { useState } from "react";
import { Box, Button, CloseButton, Flex, Text } from "altrone-ui";

export default function CloseButtonBasicDemo() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return <Button label="Show the card again" onClick={() => setOpen(true)} />;
  }

  return (
    <Flex orientation="vertical" style={{ width: 320 }}>
      <Box material="outline" radius={12} padding={{ x: 16, y: 12 }}>
        <Flex
          align="center"
          justify="between"
          gap="m"
          style={{ width: "100%" }}
        >
          <Text weight="medium">Weekly digest is ready</Text>
          <CloseButton size="s" onClick={() => setOpen(false)} />
        </Flex>
      </Box>
    </Flex>
  );
}
