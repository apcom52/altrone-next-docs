"use client";

import { Flex, Skeleton } from "altrone-ui";

export default function LoadingGuidelineShapeGoodDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ width: 240 }}>
      <Skeleton width="100%" height="20px" />
      <Skeleton width="80%" height="20px" />
      <Skeleton width="90%" height="20px" />
    </Flex>
  );
}
