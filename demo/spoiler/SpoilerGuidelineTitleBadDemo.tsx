"use client";

import { Flex, Spoiler, Text } from "altrone-ui";

export default function SpoilerGuidelineTitleBadDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%", maxWidth: 360 }}>
      <Spoiler title="Click here">
        <Text block size={4}>Refunds are issued within 14 days of purchase.</Text>
      </Spoiler>
    </Flex>
  );
}
