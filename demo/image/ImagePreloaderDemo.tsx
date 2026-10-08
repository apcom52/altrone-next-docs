"use client";

import { useState } from "react";
import { Button, Flex, Image, Loading } from "altrone-ui";

export default function ImagePreloaderDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      <Button
        label={loading ? "Finish loading" : "Start loading"}
        onClick={() => setLoading((value) => !value)}
      />
      <Image
        isLoading={loading}
        preloader={<Loading size={32} />}
        fit="contain"
        width="100%"
        height={200}
      >
        <svg viewBox="0 0 200 100" width="100%" height="100%" role="img" aria-label="A blue rounded square">
          <rect x="60" y="15" width="70" height="70" rx="14" fill="var(--accent-9)" />
        </svg>
      </Image>
    </Flex>
  );
}
