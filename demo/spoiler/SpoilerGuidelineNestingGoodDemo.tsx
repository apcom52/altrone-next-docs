"use client";

import { Flex, Spoiler, Text } from "altrone-ui";

export default function SpoilerGuidelineNestingGoodDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <Spoiler title="Delivery">
        <Text block size={4}>Delivery takes 2–5 business days.</Text>
      </Spoiler>
      <Spoiler title="Returns">
        <Text block size={4}>Returns are free within 14 days.</Text>
      </Spoiler>
    </Flex>
  );
}
