"use client";

import { Image, Text } from "altrone-ui";

export default function ImageCaptionDemo() {
  return (
    <Image
      src="/demo/image/landscape.svg"
      alt="Mountains under a pink evening sky"
      width="100%"
      height={200}
      caption={
        <>
          Illustration by <Text href="#caption">Altrone docs</Text>, 2026
        </>
      }
    />
  );
}
