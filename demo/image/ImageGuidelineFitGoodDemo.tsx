"use client";

import { Image } from "altrone-ui";

export default function ImageGuidelineFitGoodDemo() {
  return (
    <Image
      src="/demo/image/diagram.svg"
      alt="A diagram: a hub connected to four blocks"
      fit="contain"
      width="100%"
      height={200}
    />
  );
}
