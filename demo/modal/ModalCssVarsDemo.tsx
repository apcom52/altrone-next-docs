"use client";

import { useState, type CSSProperties } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { Palette } from "lucide-react";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function ModalCssVarsDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Open modal" icon={<Palette size={16} />} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Custom title color"
        content={<Text block>The title above reads --modal-header-text-color from style.</Text>}
        style={vars({ "--modal-header-text-color": "var(--accent-9)" })}
      />
    </>
  );
}
