"use client";

import { useState } from "react";
import { Drawer, Button, Form, TextInput } from "altrone-ui";
import { PenLine } from "lucide-react";

export default function DrawerGuidelineDismissBadDemo() {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  return (
    <>
      <Button label="New note" icon={<PenLine size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
          setNote("");
        }}
        dismissible={false}
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
