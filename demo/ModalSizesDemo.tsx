"use client";

import { Modal, Button, Text, Flex } from "altrone-ui";

export default function ModalSizesDemo() {
  return (
    <Flex gap="s">
      <Modal
        title="Подтверждение"
        size="s"
        content={<Text block size={4}>Вы уверены, что хотите продолжить?</Text>}
        actions={({ hide }) => (
          <>
            <Button label="Отмена" onClick={hide} />
            <Button label="Продолжить" variant="submit" onClick={hide} />
          </>
        )}
      >
        <Button label="S" />
      </Modal>

      <Modal
        title="Редактировать профиль"
        size="m"
        content={<Text block size={4}>Форма редактирования профиля. Размер по умолчанию — подходит для большинства сценариев.</Text>}
        actions={({ hide }) => (
          <>
            <Button label="Отмена" onClick={hide} />
            <Button label="Сохранить" variant="submit" onClick={hide} />
          </>
        )}
      >
        <Button label="M" />
      </Modal>

      <Modal
        title="Предварительный просмотр"
        size="l"
        content={<Text block size={4}>Широкий диалог для отображения таблиц, изображений или расширенных форм, которым нужно больше пространства.</Text>}
        actions={({ hide }) => (
          <Button label="Закрыть" onClick={hide} />
        )}
      >
        <Button label="L" />
      </Modal>
    </Flex>
  );
}
