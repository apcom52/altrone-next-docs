"use client";

import { Progress } from "altrone-ui";

export default function ProgressGuidelineLabelBadDemo() {
  return <Progress value={3} max={8} label={({ value }) => value} />;
}
