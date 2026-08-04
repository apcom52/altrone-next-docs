"use client";

import { useState } from "react";
import { CloseButton, Flex, Text } from "altrone-ui";

export default function CloseButtonHeaderDemo() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return <Text color="muted">Panel closed</Text>;
  }

  return (
    <Flex justify="between" align="center" style={{ width: "100%" }}>
      <Text weight="medium">Settings</Text>
      <CloseButton onClick={() => setOpen(false)} />
    </Flex>
  );
}
