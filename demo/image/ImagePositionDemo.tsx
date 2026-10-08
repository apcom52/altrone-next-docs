"use client";

import { Flex, Image } from "altrone-ui";

const POSITIONS = ["left", "center", "right"] as const;

export default function ImagePositionDemo() {
  return (
    <Flex gap="m" wrap align="start">
      {POSITIONS.map((position) => (
        <Image
          key={position}
          src="/demo/image/landscape.svg"
          alt="Mountains under a pink evening sky"
          objectPosition={position}
          width={150}
          height={200}
          caption={position}
        />
      ))}
    </Flex>
  );
}
