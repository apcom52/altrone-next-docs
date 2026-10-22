"use client";

import { Box, Flex, Skeleton } from "altrone-ui";

export default function SkeletonCardDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%", maxWidth: 360 }}>
      <Box material="pale" shape="rounded" radius={12} padding={12}>
        <Flex orientation="vertical" gap="m">
          <Skeleton width="100%" height="160px" radius="8px" />
          <Flex gap="m" align="center">
            <Skeleton width="40px" height="40px" radius="50%" />
            <Flex orientation="vertical" gap="xs" style={{ flex: 1 }}>
              <Skeleton width="60%" height="14px" radius="4px" />
              <Skeleton width="40%" height="12px" radius="4px" />
            </Flex>
          </Flex>
          <Skeleton width="90%" height="12px" radius="4px" />
          <Skeleton width="50%" height="12px" radius="4px" />
        </Flex>
      </Box>
    </Flex>
  );
}
