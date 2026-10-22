"use client";

import { Flex, Label } from "altrone-ui";

export default function LabelGuidelineTextBadDemo() {
  return (
    <Flex gap="s" wrap align="center">
      <Label color="danger" variant="soft">This task is blocked by the design team</Label>
      <Label color="warning" variant="soft">Waiting for a review from two people</Label>
    </Flex>
  );
}
