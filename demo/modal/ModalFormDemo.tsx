"use client";

import { useState } from "react";
import { Modal, Button, Form, TextInput } from "altrone-ui";
import { FolderPlus } from "lucide-react";

export default function ModalFormDemo() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const reset = () => {
    setName("");
    setErrors({});
  };

  const handleCreate = (hide: () => void) => {
    if (!name.trim()) {
      setErrors({ name: "Enter a folder name" });
      return;
    }
    hide();
  };

  return (
    <>
      <Button label="New folder" icon={<FolderPlus size={16} />} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          reset();
        }}
        title="New folder"
        content={
          <Form errorMessages={errors}>
            <Form.Field name="name" label="Name" required>
              <TextInput
                value={name}
                onChange={(value) => {
                  setName(value);
                  setErrors({});
                }}
                placeholder="Projects 2026"
              />
            </Form.Field>
          </Form>
        }
        actions={({ hide }) => (
          <Button label="Create" variant="submit" onClick={() => handleCreate(hide)} />
        )}
      />
    </>
  );
}
