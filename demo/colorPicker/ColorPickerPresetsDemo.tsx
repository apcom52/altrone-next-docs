"use client";

import { useState } from "react";
import { ColorPicker, Flex } from "altrone-ui";
import { BRAND_COLORS } from "./ColorPickerPresets";

export default function ColorPickerPresetsDemo() {
  const [withPalette, setWithPalette] = useState<string | undefined>("#3dd68c");
  const [presetsOnly, setPresetsOnly] = useState<string | undefined>("#f5a623");

  return (
    <Flex gap="m" wrap>
      <ColorPicker
        value={withPalette}
        onChange={setWithPalette}
        colorPresets={BRAND_COLORS}
        style={{ width: 240 }}
      />
      <ColorPicker
        value={presetsOnly}
        onChange={setPresetsOnly}
        colorPresets={BRAND_COLORS}
        allowPalette={false}
        style={{ width: 240 }}
      />
    </Flex>
  );
}
