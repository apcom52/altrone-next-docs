"use client";

import { Image } from "altrone-ui";

export default function ImageGuidelineFitBadDemo() {
  return (
    <Image
      src="/demo/image/diagram.svg"
      alt="A diagram: a hub connected to four blocks"
      fit="cover"
      width={200}
      height={200}
    />
  );
}
