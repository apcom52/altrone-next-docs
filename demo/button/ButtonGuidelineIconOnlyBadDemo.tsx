"use client";

import { Button, Flex } from "altrone-ui";
import { Blocks, Orbit, Shell } from "lucide-react";

export default function ButtonGuidelineIconOnlyBadDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Synchronize" showLabel={false} icon={<Orbit />} />
      <Button label="Publish" showLabel={false} icon={<Blocks />} />
      <Button label="Archive" showLabel={false} icon={<Shell />} />
    </Flex>
  );
}
