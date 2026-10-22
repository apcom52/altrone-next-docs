"use client";

import { Flex, Label } from "altrone-ui";

export default function LabelGuidelineVariantGoodDemo() {
  return (
    <Flex gap="s" wrap align="center">
      <Label color="blue" variant="soft">Frontend</Label>
      <Label color="purple" variant="soft">Design</Label>
      <Label color="teal" variant="soft">SDK</Label>
      <Label color="amber" variant="soft">Docs</Label>
    </Flex>
  );
}
