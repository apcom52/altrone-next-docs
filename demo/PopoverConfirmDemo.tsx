"use client";

import { useState } from "react";
import { Popover, Button, Text, Flex } from "altrone-ui";
import { Trash } from "lucide-react";

export default function PopoverConfirmDemo() {
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    return <Text size={4} color="muted">Запись удалена.</Text>;
  }

  return (
    <Popover
      placement="bottom-start"
      content={({ closePopup }) => (
        <div style={{ padding: 16, maxWidth: 260 }}>
          <Text block size={4} weight="bold" style={{ marginBottom: 4 }}>Удалить запись?</Text>
          <Text block size={3} color="muted" style={{ marginBottom: 12 }}>
            Это действие нельзя отменить.
          </Text>
          <Flex gap="s">
            <Button
              label="Удалить"
              variant="submit"
              danger
              size="s"
              onClick={() => { setDeleted(true); closePopup(); }}
            />
            <Button label="Отмена" size="s" variant="text" onClick={closePopup} />
          </Flex>
        </div>
      )}
    >
      <Button label="Удалить" icon={<Trash size={16} />} danger />
    </Popover>
  );
}
