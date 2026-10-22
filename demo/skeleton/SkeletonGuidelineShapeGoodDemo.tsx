"use client";

import { Flex, Skeleton } from "altrone-ui";

export default function SkeletonGuidelineShapeGoodDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      {["55%", "70%", "45%"].map((width) => (
        <Flex key={width} gap="m" align="center">
          <Skeleton width="32px" height="32px" radius="50%" />
          <Skeleton width={width} height="12px" radius="4px" />
        </Flex>
      ))}
    </Flex>
  );
}
