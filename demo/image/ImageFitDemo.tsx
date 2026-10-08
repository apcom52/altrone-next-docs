"use client";

import { Flex, Image } from "altrone-ui";

const FITS = ["cover", "contain", "fill", "scale-down", "none"] as const;

export default function ImageFitDemo() {
  return (
    <Flex gap="m" wrap align="start">
      {FITS.map((fit) => (
        <Image
          key={fit}
          src="/demo/image/landscape.svg"
          alt="Mountains under a pink evening sky"
          fit={fit}
          width={150}
          height={200}
          caption={fit}
        />
      ))}
    </Flex>
  );
}
