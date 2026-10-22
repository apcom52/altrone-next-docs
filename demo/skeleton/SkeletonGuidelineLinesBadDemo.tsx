"use client";

import { Flex, Skeleton } from "altrone-ui";

export default function SkeletonGuidelineLinesBadDemo() {
  return (
    <Flex orientation="vertical" gap="xs" style={{ width: "100%" }}>
      <Skeleton width="100%" height="12px" radius="4px" />
      <Skeleton width="100%" height="12px" radius="4px" />
      <Skeleton width="100%" height="12px" radius="4px" />
    </Flex>
  );
}
