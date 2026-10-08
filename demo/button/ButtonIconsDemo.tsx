"use client";

import { Button, Flex } from "altrone-ui";
import { Send, ChevronDown, Download } from "lucide-react";

export default function ButtonIconsDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button label="Send" icon={<Send />} />
      <Button label="More options" additionalIcon={<ChevronDown />} />
      <Button
        label="Export"
        icon={<Download />}
        additionalIcon={<ChevronDown />}
      />
    </Flex>
  );
}
