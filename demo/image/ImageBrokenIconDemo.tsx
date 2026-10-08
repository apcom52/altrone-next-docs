"use client";

import { Flex, Image } from "altrone-ui";
import { Camera } from "lucide-react";

export default function ImageBrokenIconDemo() {
  return (
    <Flex gap="m" wrap align="start">
      <Image src="/demo/image/missing-1.jpg" alt="Default icon" width={200} height={200} caption="Default" />
      <Image
        src="/demo/image/missing-2.jpg"
        alt="Custom icon"
        brokenIcon={<Camera />}
        width={200}
        height={200}
        caption="brokenIcon"
      />
    </Flex>
  );
}
