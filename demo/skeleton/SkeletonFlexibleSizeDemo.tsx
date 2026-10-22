"use client";

import { Flex, Skeleton } from "altrone-ui";

export default function SkeletonFlexibleSizeDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
      <Skeleton width="100%" minWidth="120px" maxWidth="320px" height="14px" radius="4px" />
      <Skeleton width="100%" height="14px" radius="4px" />
    </Flex>
  );
}
