"use client";

import { Image } from "altrone-ui";

export default function ImageGuidelinePositionGoodDemo() {
  return (
    <Image
      src="/demo/image/landscape.svg"
      alt="Mountains under a pink evening sky, with the sun on the right"
      objectPosition="80% center"
      width={180}
      height={200}
    />
  );
}
