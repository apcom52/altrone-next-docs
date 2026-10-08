"use client";

import { useState } from "react";
import { Drawer, Button, Text, Flex } from "altrone-ui";
import { Bell } from "lucide-react";

const NOTIFICATIONS = [
  { id: 1, title: "New comment", desc: "Alex left a comment on your project.", time: "2 min ago" },
  { id: 2, title: "Task completed", desc: "“Update documentation” was closed.", time: "1 hr ago" },
  { id: 3, title: "Mention", desc: "You were mentioned in task #142.", time: "3 hr ago" },
  { id: 4, title: "New member", desc: "Maria joined the team.", time: "Yesterday" },
];

export default function DrawerEndDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        label="Notifications"
        icon={<Bell size={16} />}
        badge={4}
        onClick={() => setOpen(true)}
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Notifications"
        placement="end"
        content={
          <Flex orientation="vertical" gap="m">
            {NOTIFICATIONS.map((n) => (
              <div key={n.id}>
                <Text block size={4} weight="bold">
                  {n.title}
                </Text>
                <Text block size={3}>{n.desc}</Text>
                <Text block size={3} color="muted">{n.time}</Text>
              </div>
            ))}
          </Flex>
        }
      />
    </>
  );
}
