"use client";

import { useState } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { Info } from "lucide-react";

export default function ModalBasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="About this version" icon={<Info size={16} />} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="About this version"
        content={
          <Text block>
            Altrone UI 4.0 is a beta release. It includes new primitives,
            accessibility fixes, and improved dark theme support.
          </Text>
        }
      />
    </>
  );
}
