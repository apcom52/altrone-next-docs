"use client";

import { Flex, Label } from "altrone-ui";
import { Ban, Check, Clock } from "lucide-react";

export default function LabelIconDemo() {
  return (
    <Flex gap="m" wrap align="center">
      <Label color="primary" icon={<Clock />}>
        Pending
      </Label>
      <Label color="success" variant="soft" icon={<Check />}>
        Verified
      </Label>
      <Label color="danger" variant="outline" icon={<Ban />}>
        Revoked
      </Label>
    </Flex>
  );
}
