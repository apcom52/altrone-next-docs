"use client";

import { useState } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { Save } from "lucide-react";

export default function ModalGuidelineInfoBadDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Save draft" icon={<Save size={16} />} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Draft saved"
        size="s"
        content={<Text block>Your draft was saved successfully.</Text>}
        showCancelButton={false}
        actions={({ hide }) => <Button label="OK" variant="submit" onClick={hide} />}
      />
    </>
  );
}
