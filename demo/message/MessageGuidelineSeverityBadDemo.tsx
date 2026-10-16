"use client";

import { Message } from "altrone-ui";
import { CircleAlert } from "lucide-react";

export default function MessageGuidelineSeverityBadDemo() {
  return (
    <Message icon={<CircleAlert />} severity="danger" title="Tip: press ? to see all shortcuts">
      Shortcuts speed up everyday work.
    </Message>
  );
}
