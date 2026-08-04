"use client";

import { Modal, Button, Text, Flex } from "altrone-ui";

export default function ModalSizesDemo() {
  return (
    <Flex gap="s">
      <Modal
        title="Подтверждение"
        size="s"
        content={<Text block size={4}>Вы уверены, что хотите продолжить?</Text>}
        actions={({ closeModal }) => (
          <>
            <Button label="Отмена" onClick={closeModal} />
            <Button label="Продолжить" variant="submit" onClick={closeModal} />
          </>
        )}
      >
        <Button label="S" />
      </Modal>

      <Modal
        title="Редактировать профиль"
        size="m"
        content={<Text block size={4}>Форма редактирования профиля. Размер по умолчанию — подходит для большинства сценариев.</Text>}
        actions={({ closeModal }) => (
          <>
            <Button label="Отмена" onClick={closeModal} />
            <Button label="Сохранить" variant="submit" onClick={closeModal} />
          </>
        )}
      >
        <Button label="M" />
      </Modal>

      <Modal
        title="Предварительный просмотр"
        size="l"
        content={<Text block size={4}>Широкий диалог для отображения таблиц, изображений или расширенных форм, которым нужно больше пространства.</Text>}
        actions={({ closeModal }) => (
          <Button label="Закрыть" onClick={closeModal} />
        )}
      >
        <Button label="L" />
      </Modal>
    </Flex>
  );
}
