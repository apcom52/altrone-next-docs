"use client";

import { Image } from "altrone-ui";

export default function ImageBasicDemo() {
  return (
    <Image
      src="/demo/image/landscape.svg"
      alt="Mountains under a pink evening sky"
      caption="Evening in the mountains"
      width="100%"
      height={240}
    />
  );
}
