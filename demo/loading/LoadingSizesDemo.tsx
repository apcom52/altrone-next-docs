"use client";

import { Flex, Loading } from "altrone-ui";

export default function LoadingSizesDemo() {
  return (
    <Flex gap="l" align="center">
      <Loading size={16} strokeWidth={1.5} />
      <Loading size={24} />
      <Loading size={40} strokeWidth={3} />
      <Loading size={64} strokeWidth={4} />
    </Flex>
  );
}
