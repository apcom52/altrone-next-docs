"use client";

import { Flex, Label } from "altrone-ui";
import { Check } from "lucide-react";

export default function LabelShapeDemo() {
  return (
    <Flex gap="m" wrap align="center">
      <Label color="indigo">v2.0.0</Label>
      <Label color="indigo" shape="pill">v2.0.0</Label>
      <Label color="success" variant="status" icon={<Check />}>
        Completed
      </Label>
      <Label color="success" variant="status" shape="pill" icon={<Check />}>
        Completed
      </Label>
    </Flex>
  );
}
