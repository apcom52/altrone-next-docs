"use client";

import { Progress } from "altrone-ui";

export default function ProgressRangeDemo() {
  return (
    <Progress
      min={100}
      max={200}
      value={140}
      aria-label="Temperature"
      label={({ value }) => `${value}°`}
    />
  );
}
