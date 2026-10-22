"use client";

import { Flex, Label } from "altrone-ui";
import { Ban, Check } from "lucide-react";

export default function LabelStatusDemo() {
  return (
    <Flex gap="m" wrap align="center">
      <Label color="default" variant="status">Queued</Label>
      <Label color="warning" variant="status">In review</Label>
      <Label color="success" variant="status" icon={<Check />}>
        Completed
      </Label>
      <Label color="danger" variant="status" icon={<Ban />}>
        Blocked
      </Label>
    </Flex>
  );
}
