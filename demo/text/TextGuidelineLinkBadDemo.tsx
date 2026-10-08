"use client";

import { Text } from "altrone-ui";

export default function TextGuidelineLinkBadDemo() {
  return (
    <Text block>
      See the{" "}
      <Text color="success" onClick={() => undefined}>
        pricing page
      </Text>{" "}
      for details.
    </Text>
  );
}
