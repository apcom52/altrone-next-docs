"use client";

import { useState } from "react";
import { Drawer, Button, Text, Flex } from "altrone-ui";
import { Bell } from "lucide-react";

export default function DrawerGuidelinePlacementBadDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex justify="between" align="center" style={{ width: "100%" }}>
        <Text weight="bold">Dashboard</Text>
        <Button
          label="Notifications"
          showLabel={false}
          icon={<Bell size={16} />}
          badge={3}
          onClick={() => setOpen(true)}
        />
      </Flex>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Notifications"
        placement="start"
        content={<Text>3 new notifications.</Text>}
      />
    </>
  );
}
