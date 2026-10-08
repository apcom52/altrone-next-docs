"use client";

import { Button, Flex } from "altrone-ui";
import { Search, Settings, X } from "lucide-react";

export default function ButtonGuidelineIconOnlyGoodDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Close panel" showLabel={false} icon={<X />} />
      <Button label="Settings" showLabel={false} icon={<Settings />} />
      <Button label="Search" showLabel={false} icon={<Search />} />
    </Flex>
  );
}
