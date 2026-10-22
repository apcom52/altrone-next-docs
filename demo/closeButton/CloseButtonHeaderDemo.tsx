"use client";

import { useState } from "react";
import { Box, Button, CloseButton, Flex, Text } from "altrone-ui";

const PANELS = ["Filters", "Activity", "Details"];

export default function CloseButtonHeaderDemo() {
  const [panels, setPanels] = useState(PANELS);

  if (panels.length === 0) {
    return <Button label="Restore panels" onClick={() => setPanels(PANELS)} />;
  }

  return (
    <Flex orientation="vertical" gap="s" style={{ width: 320 }}>
      {panels.map((name) => (
        <Box
          key={name}
          material="outline"
          radius={10}
          padding={{ x: 14, y: 10 }}
        >
          <Flex
            align="center"
            justify="between"
            gap="m"
            style={{ width: "100%" }}
          >
            <Text weight="medium">{name}</Text>
            <CloseButton
              size="s"
              label={`Close ${name}`}
              onClick={() =>
                setPanels((prev) => prev.filter((p) => p !== name))
              }
            />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}
