"use client";

import { useState } from "react";
import { Drawer, Button, Text, Flex } from "altrone-ui";
import { Filter } from "lucide-react";

export default function DrawerFooterDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Filters" icon={<Filter size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Filters"
        content={
          <Flex orientation="vertical" gap="s">
            <Text block size={4} weight="bold">
              Category
            </Text>
            <Text block size={3} color="muted">
              Electronics · Clothing · Books · Sports
            </Text>
            <Text block size={4} weight="bold" style={{ marginTop: 8 }}>
              Price
            </Text>
            <Text block size={3} color="muted">
              $0 to $500
            </Text>
            <Text block size={4} weight="bold" style={{ marginTop: 8 }}>
              Rating
            </Text>
            <Text block size={3} color="muted">
              4 stars and up
            </Text>
          </Flex>
        }
        footer={
          <Flex gap="s" style={{ width: "100%" }}>
            <Button label="Reset" variant="text" />
            <Button
              label="Apply filters"
              variant="submit"
              style={{ flex: 1 }}
            />
          </Flex>
        }
      />
    </>
  );
}
