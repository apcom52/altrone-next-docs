"use client";

import { Tooltip } from "altrone-ui";
import { Info } from "lucide-react";

export default function TooltipTriggerIconDemo() {
  return (
    <Tooltip content="A secret key for accessing the API." triggerIcon={<Info size={16} />} />
  );
}
