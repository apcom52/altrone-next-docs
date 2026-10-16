"use client";

import { Message } from "altrone-ui";
import { CircleAlert } from "lucide-react";

export default function MessageGuidelineTitleBadDemo() {
  return <Message icon={<CircleAlert />} severity="danger" title="Error" />;
}
