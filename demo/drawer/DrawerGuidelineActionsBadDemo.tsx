"use client";

import { useState } from "react";
import { Drawer, Button, Form, TextInput } from "altrone-ui";
import { Tag } from "lucide-react";

export default function DrawerGuidelineActionsBadDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Rename tag" icon={<Tag size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Rename tag"
        content={
          <Form>
            <Form.Field name="name" label="Name">
              <TextInput defaultValue="Backend" />
            </Form.Field>
          </Form>
        }
        footer={<Button label="Save" variant="submit" style={{ width: "100%" }} />}
        onDone={async () => setOpen(false)}
      />
    </>
  );
}
