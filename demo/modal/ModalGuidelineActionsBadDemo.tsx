"use client";

import { useState } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { LogOut } from "lucide-react";

export default function ModalGuidelineActionsBadDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Close editor" icon={<LogOut size={16} />} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Leave without saving?"
        size="s"
        content={<Text block>Your last changes haven't been saved yet.</Text>}
        showCancelButton={false}
        actions={({ hide }) => [
          <Button key="no" label="No" onClick={hide} />,
          <Button key="yes" label="Yes" variant="submit" onClick={hide} />,
        ]}
      />
    </>
  );
}
