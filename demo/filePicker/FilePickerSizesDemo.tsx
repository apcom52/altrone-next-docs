"use client";

import { FilePicker, Flex } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function FilePickerSizesDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      {SIZES.map((size) => (
        <FilePicker
          key={size}
          size={size}
          autoUpload={false}
          defaultValue={[{ id: size, filename: `${size}.pdf` }]}
        />
      ))}
    </Flex>
  );
}
