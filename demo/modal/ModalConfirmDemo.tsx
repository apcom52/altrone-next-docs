"use client";

import { useState } from "react";
import { Modal, Button, Text, Flex } from "altrone-ui";
import { Trash } from "lucide-react";

export default function ModalConfirmDemo() {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    return (
      <Flex gap="s">
        <Text color="muted">Project deleted.</Text>
        <Button label="Restore" variant="text" onClick={() => setDeleted(false)} />
      </Flex>
    );
  }

  return (
    <>
      <Button label="Delete project" icon={<Trash size={16} />} danger onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete project?"
        size="s"
        content={
          <Text block>
            “Design system” and all its data will be deleted permanently. This
            can't be undone.
          </Text>
        }
        actions={({ hide }) => (
          <Button
            label="Delete project"
            variant="submit"
            danger
            onClick={() => {
              setDeleted(true);
              hide();
            }}
          />
        )}
      />
    </>
  );
}
