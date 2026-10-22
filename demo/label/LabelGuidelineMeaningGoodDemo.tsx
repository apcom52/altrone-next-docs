"use client";

import { Flex, Label } from "altrone-ui";

export default function LabelGuidelineMeaningGoodDemo() {
  return (
    <Flex gap="s" wrap align="center">
      <Label color="success" variant="status">Completed</Label>
      <Label color="warning" variant="status">In review</Label>
      <Label color="danger" variant="status">Failed</Label>
    </Flex>
  );
}
