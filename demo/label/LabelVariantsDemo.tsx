"use client";

import { Flex, Label } from "altrone-ui";

export default function LabelVariantsDemo() {
  return (
    <Flex gap="m" wrap align="center">
      <Label color="primary">Solid</Label>
      <Label color="primary" variant="soft">Soft</Label>
      <Label color="primary" variant="outline">Outline</Label>
      <Label color="primary" variant="status">Status</Label>
    </Flex>
  );
}
