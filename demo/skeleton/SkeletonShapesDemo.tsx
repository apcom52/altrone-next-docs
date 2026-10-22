"use client";

import { Flex, Skeleton } from "altrone-ui";

export default function SkeletonShapesDemo() {
  return (
    <Flex gap="l" align="center">
      <Skeleton width="48px" height="48px" radius="50%" />
      <Skeleton width="120px" height="32px" radius="8px" />
      <Skeleton width="120px" height="14px" radius="4px" />
      <Skeleton width="64px" height="64px" />
    </Flex>
  );
}
