"use client";

import { useState } from "react";
import { Drawer, Button, Form, TextInput } from "altrone-ui";
import { Plus } from "lucide-react";

export default function DrawerDoneDemo() {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDone = async () => {
    await new Promise((r) => setTimeout(r, 800));

    if (!name.trim()) {
      setErrors({ name: "Название обязательно" });
      return false;
    }

    setName("");
    setErrors({});
  };

  return (
    <Drawer
      title="Новая задача"
      content={
        <Form errorMessages={errors}>
          <Form.Field name="name" label="Название" required>
            <TextInput
              value={name}
              onChange={setName}
              placeholder="Опишите задачу"
            />
          </Form.Field>
        </Form>
      }
      onDone={handleDone}
      onClose={() => { setName(""); setErrors({}); }}
    >
      <Button label="Создать задачу" variant="submit" icon={<Plus size={16} />} />
    </Drawer>
  );
}
