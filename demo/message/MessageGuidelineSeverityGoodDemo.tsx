"use client";

import { Message } from "altrone-ui";
import { TriangleAlert } from "lucide-react";

export default function MessageGuidelineSeverityGoodDemo() {
  return (
    <Message icon={<TriangleAlert />} severity="warning" title="Storage is almost full">
      You have used 95% of your space. Free some up before uploading more.
    </Message>
  );
}
