"use client";

import { Result } from "altrone-ui";

export default function ResultGuidelineStatusBadDemo() {
  return (
    <Result status="error" size="s" title="No messages yet">
      New messages will show up here.
    </Result>
  );
}
