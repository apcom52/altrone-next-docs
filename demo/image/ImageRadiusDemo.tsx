"use client";

import { Flex, Image } from "altrone-ui";

export default function ImageRadiusDemo() {
  return (
    <Flex gap="m" wrap align="start">
      <Image src="/demo/image/landscape.svg" alt="Mountains" radius={0} width={150} height={200} caption="radius 0" />
      <Image src="/demo/image/landscape.svg" alt="Mountains" width={150} height={200} caption="default" />
      <Image src="/demo/image/landscape.svg" alt="Mountains" radius={32} width={150} height={200} caption="radius 32" />
    </Flex>
  );
}
