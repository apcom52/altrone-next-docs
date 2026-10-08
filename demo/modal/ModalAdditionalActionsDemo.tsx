"use client";

import { useState } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { Pencil } from "lucide-react";

export default function ModalAdditionalActionsDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Edit record" icon={<Pencil size={16} />} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Edit record"
        content={<Text block>Invoice #1042 · Paid on March 3.</Text>}
        additionalActions={({ hide }) => (
          <Button label="Delete" variant="text" danger onClick={hide} />
        )}
        actions={({ hide }) => (
          <Button label="Save changes" variant="submit" onClick={hide} />
        )}
      />
    </>
  );
}
