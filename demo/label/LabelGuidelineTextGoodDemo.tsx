"use client";

import { Flex, Label } from "altrone-ui";

export default function LabelGuidelineTextGoodDemo() {
  return (
    <Flex gap="s" wrap align="center">
      <Label color="danger" variant="soft">Blocked</Label>
      <Label color="warning" variant="soft">In review</Label>
    </Flex>
  );
}
