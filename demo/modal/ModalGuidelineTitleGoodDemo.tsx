"use client";

import { useState } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { Trash } from "lucide-react";

export default function ModalGuidelineTitleGoodDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Delete project" icon={<Trash size={16} />} danger onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete project?"
        size="s"
        content={<Text block>All files and members will be removed permanently.</Text>}
        actions={({ hide }) => <Button label="Delete project" variant="submit" danger onClick={hide} />}
      />
    </>
  );
}
