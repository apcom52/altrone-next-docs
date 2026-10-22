"use client";

import { Flex, Label } from "altrone-ui";

export default function LabelGuidelineMeaningBadDemo() {
  return (
    <Flex gap="s" wrap align="center">
      <Label color="danger" variant="status">Completed</Label>
      <Label color="pink" variant="status">In review</Label>
      <Label color="success" variant="status">Failed</Label>
    </Flex>
  );
}
