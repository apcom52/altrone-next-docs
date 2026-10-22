"use client";

import { Flex, Label } from "altrone-ui";

export default function LabelGuidelineVariantBadDemo() {
  return (
    <Flex gap="s" wrap align="center">
      <Label color="blue">Frontend</Label>
      <Label color="purple" variant="outline" shape="pill">Design</Label>
      <Label color="teal" variant="status" size="l">SDK</Label>
      <Label color="amber" variant="soft" size="s">Docs</Label>
    </Flex>
  );
}
