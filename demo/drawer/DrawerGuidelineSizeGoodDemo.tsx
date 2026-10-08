"use client";

import { useState } from "react";
import { Drawer, Button, Form, TextInput } from "altrone-ui";
import { Filter } from "lucide-react";

export default function DrawerGuidelineSizeGoodDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Filters" icon={<Filter size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Filters"
        content={
          <Form>
            <Form.Field name="category" label="Category">
              <TextInput placeholder="Electronics" />
            </Form.Field>
            <Form.Field name="maxPrice" label="Max price">
              <TextInput placeholder="$500" />
            </Form.Field>
          </Form>
        }
        footer={
          <Button label="Apply filters" variant="submit" style={{ width: "100%" }} onClick={() => setOpen(false)} />
        }
      />
    </>
  );
}
