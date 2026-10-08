"use client";

import { Flex, Spoiler, Text } from "altrone-ui";

export default function SpoilerGuidelineNestingBadDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%", maxWidth: 360 }}>
      <Spoiler title="Orders" defaultOpen>
        <Spoiler title="Delivery" defaultOpen>
          <Spoiler title="Delivery times" defaultOpen>
            <Text block size={4}>Delivery takes 2–5 business days.</Text>
          </Spoiler>
        </Spoiler>
      </Spoiler>
    </Flex>
  );
}
