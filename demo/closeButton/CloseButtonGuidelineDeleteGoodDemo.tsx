"use client";

import { Box, Button, Flex, Text } from "altrone-ui";
import { Trash2 } from "lucide-react";

export default function CloseButtonGuidelineDeleteGoodDemo() {
  return (
    <Flex orientation="vertical" style={{ width: 280 }}>
      <Box material="outline" radius={12} padding={{ x: 16, y: 12 }}>
        <Flex
          align="center"
          justify="between"
          gap="m"
          style={{ width: "100%" }}
        >
          <Text>quarterly-report.pdf</Text>
          <Button
            label="Delete file"
            showLabel={false}
            icon={<Trash2 />}
            variant="text"
            size="s"
            danger
          />
        </Flex>
      </Box>
    </Flex>
  );
}
