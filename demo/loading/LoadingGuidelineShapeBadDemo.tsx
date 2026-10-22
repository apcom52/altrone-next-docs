"use client";

import { Flex, Loading } from "altrone-ui";

export default function LoadingGuidelineShapeBadDemo() {
  return (
    <Flex justify="center" align="center" style={{ width: 240, height: 76 }}>
      <Loading aria-label="Loading comments" />
    </Flex>
  );
}
