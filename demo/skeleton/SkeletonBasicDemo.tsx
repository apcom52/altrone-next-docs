"use client";

import { Flex, Skeleton } from "altrone-ui";

export default function SkeletonBasicDemo() {
  return (
    <Flex orientation="vertical" gap="xs" style={{ width: "100%", maxWidth: 400 }}>
      <Skeleton width="100%" height="14px" radius="4px" />
      <Skeleton width="100%" height="14px" radius="4px" />
      <Skeleton width="70%" height="14px" radius="4px" />
    </Flex>
  );
}
