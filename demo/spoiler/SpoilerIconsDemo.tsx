"use client";

import { Flex, Spoiler, Text } from "altrone-ui";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SpoilerIconsDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%", maxWidth: 560 }}>
      <Spoiler title="Shipping details" expandIcon={<ChevronDown />} collapseIcon={<ChevronUp />}>
        <Text block size={4}>Orders placed before noon ship the same day.</Text>
      </Spoiler>
    </Flex>
  );
}
