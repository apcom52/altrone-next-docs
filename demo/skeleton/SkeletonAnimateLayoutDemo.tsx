"use client";

import { useState } from "react";
import { Button, Flex, Skeleton } from "altrone-ui";

export default function SkeletonAnimateLayoutDemo() {
  const [wide, setWide] = useState(false);
  const width = wide ? "90%" : "40%";

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 400 }}>
      <Skeleton width={width} height="14px" radius="4px" animateLayout />
      <Skeleton width={width} height="14px" radius="4px" />
      <Flex>
        <Button label="Toggle width" onClick={() => setWide((value) => !value)} />
      </Flex>
    </Flex>
  );
}
