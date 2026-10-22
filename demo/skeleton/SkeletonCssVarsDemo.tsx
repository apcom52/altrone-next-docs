"use client";

import type { CSSProperties } from "react";
import { Flex, Skeleton } from "altrone-ui";

export default function SkeletonCssVarsDemo() {
  return (
    <Flex
      orientation="vertical"
      gap="xs"
      style={
        {
          width: "100%",
          maxWidth: 400,
          "--skeleton-background-color": "var(--accent-a3)",
          "--skeleton-animate-background-color": "var(--accent-a5)",
        } as CSSProperties
      }
    >
      <Skeleton width="100%" height="14px" radius="4px" />
      <Skeleton width="70%" height="14px" radius="4px" />
    </Flex>
  );
}
