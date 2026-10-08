"use client";

import { Button, Flex } from "altrone-ui";
import { X, Settings, Search, Bell } from "lucide-react";

export default function ButtonIconOnlyDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Close panel" showLabel={false} icon={<X />} />
      <Button label="Settings" showLabel={false} icon={<Settings />} />
      <Button label="Search" showLabel={false} icon={<Search />} variant="submit" />
      <Button label="Notifications" showLabel={false} icon={<Bell />} variant="text" />
    </Flex>
  );
}
