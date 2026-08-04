"use client";

import { useState } from "react";
import { Modal, Button, Text } from "altrone-ui";
import { Trash } from "lucide-react";

export default function ModalConfirmDemo() {
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    return (
      <Text size={4} color="muted">
        Проект удалён.
      </Text>
    );
  }

  return (
    <Modal
      title="Удалить проект?"
      content={
        <Text block size={4}>
          Проект «Дизайн-система» и все связанные данные будут удалены
          безвозвратно. Это действие нельзя отменить.
        </Text>
      }
      actions={({ closeModal }) => (
        <>
          <Button label="Отмена" onClick={closeModal} />
          <Button
            label="Удалить"
            variant="submit"
            danger
            onClick={() => { setDeleted(true); closeModal(); }}
          />
        </>
      )}
    >
      <Button label="Удалить проект" icon={<Trash size={16} />} danger />
    </Modal>
  );
}
