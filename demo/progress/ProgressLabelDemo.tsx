"use client";

import { Flex, Progress } from "altrone-ui";

export default function ProgressLabelDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      <Progress value={42} label="Uploading files…" />
      <Progress
        value={42}
        max={200}
        aria-label="Storage used"
        label={({ value, max, percentage }) => `${value} of ${max} GB (${percentage}%)`}
      />
      <Progress
        value={3}
        max={8}
        aria-label="Step 3 of 8"
        label={({ value, max }) => `Step ${value} of ${max}`}
      />
    </Flex>
  );
}
