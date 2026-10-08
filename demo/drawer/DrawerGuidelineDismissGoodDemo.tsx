"use client";

import { useState } from "react";
import { Drawer, Button, Form, TextInput, showConfirm } from "altrone-ui";
import { PenLine } from "lucide-react";

export default function DrawerGuidelineDismissGoodDemo() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  const handleClose = async () => {
    if (note.trim()) {
      const discard = await showConfirm({
        title: "Discard note?",
        message: "Your draft hasn't been saved.",
        confirmText: "Discard",
        danger: true,
      });
      if (!discard) return;
    }
    setOpen(false);
    setNote("");
  };

  return (
    <>
      <Button label="New note" icon={<PenLine size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={handleClose}
        title="New note"
        content={
          <Form>
            <Form.Field name="note" label="Note">
              <TextInput value={note} onChange={setNote} placeholder="Type something…" />
            </Form.Field>
          </Form>
        }
      />
    </>
  );
}
