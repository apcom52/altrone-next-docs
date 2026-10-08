"use client";

import { Image } from "altrone-ui";

export default function ImageBrokenDemo() {
  return (
    <Image
      src="/demo/image/does-not-exist.jpg"
      alt="A photo that failed to load"
      width="100%"
      height={200}
    />
  );
}
