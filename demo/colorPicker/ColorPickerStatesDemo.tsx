"use client";

import { ColorPicker, Flex } from "altrone-ui";

export default function ColorPickerStatesDemo() {
  return (
    <Flex gap="m" wrap>
      <ColorPicker value="#5b5bd6" onChange={() => {}} readOnly style={{ width: 240 }} />
      <ColorPicker value="#5b5bd6" onChange={() => {}} disabled style={{ width: 240 }} />
    </Flex>
  );
}
