"use client";

import { Progress } from "altrone-ui";

export default function ProgressGuidelineLabelGoodDemo() {
  return <Progress value={3} max={8} aria-label="Uploading files" label="Uploading file 3 of 8" />;
}
