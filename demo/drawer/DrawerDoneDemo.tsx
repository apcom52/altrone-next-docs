"use client";

import { useState } from "react";
import { Drawer, Button, Form, TextInput } from "altrone-ui";
import { Plus } from "lucide-react";

export default function DrawerDoneDemo() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDone = async () => {
    await new Promise((r) => setTimeout(r, 800));

    if (!name.trim()) {
      setErrors({ name: "Name is required" });
      return false;
    }

    setName("");
    setErrors({});
  };

  return (
    <>
      <Button label="Create task" variant="submit" icon={<Plus size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
          setName("");
          setErrors({});
        }}
        title="New task"
        content={
          <Form errorMessages={errors}>
            <Form.Field name="name" label="Name" required>
              <TextInput
                value={name}
                onChange={setName}
                placeholder="Describe the task"
              />
            </Form.Field>
          </Form>
        }
        onDone={handleDone}
      />
    </>
  );
}
