"use client";

import { useState } from "react";
import { Modal, Button, Form, TextInput, Flex } from "altrone-ui";
import { FolderPlus } from "lucide-react";

export default function ModalWithFormDemo() {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSave = (hide: () => void) => {
    if (!name.trim()) {
      setErrors({ name: "Введите название папки" });
      return;
    }
    setName("");
    setErrors({});
    hide();
  };

  return (
    <Modal
      title="Новая папка"
      content={
        <Form errorMessages={errors}>
          <Form.Field name="name" label="Название" required>
            <TextInput
              value={name}
              onChange={(v) => { setName(v); setErrors({}); }}
              placeholder="Например: Проекты 2026"
            />
          </Form.Field>
        </Form>
      }
      actions={({ hide }) => (
        <Flex gap="s">
          <Button label="Отмена" onClick={hide} />
          <Button
            label="Создать"
            variant="submit"
            onClick={() => handleSave(hide)}
          />
        </Flex>
      )}
      onClose={() => { setName(""); setErrors({}); }}
    >
      <Button
        label="Новая папка"
        icon={<FolderPlus size={16} />}
      />
    </Modal>
  );
}
