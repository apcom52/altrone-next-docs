"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonBadgeDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button label="Notifications" badge={5} />
      <Button label="Export" badge="NEW" variant="submit" />
      <Button label="Pay later" badge="+20%" danger />
    </Flex>
  );
}
