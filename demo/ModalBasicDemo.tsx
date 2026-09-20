"use client";

import { Modal, Button, Text } from "altrone-ui";
import { Info } from "lucide-react";

export default function ModalBasicDemo() {
  return (
    <Modal
      title="О версии"
      content={
        <Text block size={4}>
          Altrone UI 3.5.0 — стабильный выпуск. Включает новые компоненты,
          исправления доступности и улучшенную поддержку тёмной темы.
        </Text>
      }
      actions={({ hide }) => (
        <Button label="Закрыть" onClick={hide} />
      )}
    >
      <Button label="О версии" icon={<Info size={16} />} />
    </Modal>
  );
}
