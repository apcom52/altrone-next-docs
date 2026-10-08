"use client";

import type { CSSProperties } from "react";
import { Flex, Image } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function ImageCssVarsDemo() {
  return (
    <Flex gap="m" wrap align="start">
      <Image src="/demo/image/missing-1.jpg" alt="Default" width={200} caption="Default" />
      <Image
        src="/demo/image/missing-2.jpg"
        alt="Restyled"
        width={200}
        caption="Restyled"
        style={vars({
          "--image-min-height": "120px",
          "--image-broken-media-size": "56px",
          "--image-broken-icon-size": "26px",
          "--image-broken-media-background": "var(--danger-interactive-1)",
          "--image-broken-media-color": "var(--danger-text-1)",
        })}
      />
    </Flex>
  );
}
