"use client";

import { Flex, Text } from "altrone-ui";

export default function TextAlignDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
      <Text block align="start">Aligned to the start (default)</Text>
      <Text block align="center">Aligned to the center</Text>
      <Text block align="end">Aligned to the end</Text>
      <Text block align="justify">
        Justified text stretches every full line to the width of its container,
        which only shows once a paragraph runs to several lines.
      </Text>
    </Flex>
  );
}
