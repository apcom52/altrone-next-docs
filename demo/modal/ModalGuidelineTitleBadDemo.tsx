"use client";

import { useState } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { Trash } from "lucide-react";

export default function ModalGuidelineTitleBadDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Delete project" icon={<Trash size={16} />} danger onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmation"
        size="s"
        content={<Text block>Are you sure?</Text>}
        actions={({ hide }) => <Button label="Delete project" variant="submit" danger onClick={hide} />}
      />
    </>
  );
}
