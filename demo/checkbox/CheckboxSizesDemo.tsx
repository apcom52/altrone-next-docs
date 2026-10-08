"use client";

import { useState } from "react";
import { Checkbox, Flex } from "altrone-ui";

export default function CheckboxSizesDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Flex orientation="vertical" gap="s">
      <Checkbox size="mini" checked={checked} onChange={setChecked}>mini</Checkbox>
      <Checkbox size="s" checked={checked} onChange={setChecked}>s</Checkbox>
      <Checkbox size="m" checked={checked} onChange={setChecked}>m</Checkbox>
      <Checkbox size="l" checked={checked} onChange={setChecked}>l</Checkbox>
      <Checkbox size="xl" checked={checked} onChange={setChecked}>xl</Checkbox>
    </Flex>
  );
}
