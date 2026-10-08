"use client";

import { useState } from "react";
import { Drawer, Button, Text, Flex } from "altrone-ui";
import { SlidersHorizontal } from "lucide-react";

export default function DrawerBasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        label="Open settings"
        icon={<SlidersHorizontal size={16} />}
        onClick={() => setOpen(true)}
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Profile settings"
        content={
          <Flex orientation="vertical" gap="m">
            <Text block size={4}>
              This is where the profile settings would live: name, email,
              avatar and notification preferences.
            </Text>
            <Text block size={3} color="muted">
              Close the panel with the ✕ button, the Escape key, or a click
              on the dimmed backdrop.
            </Text>
          </Flex>
        }
      />
    </>
  );
}
