"use client";

import { Drawer, Button, Text, Flex } from "altrone-ui";
import { SlidersHorizontal } from "lucide-react";

export default function DrawerBasicDemo() {
  return (
    <Drawer
      title="Настройки профиля"
      content={
        <Flex direction="column" gap="m">
          <Text block size={4}>
            Здесь будут настройки профиля пользователя: имя, email,
            аватар и предпочтения уведомлений.
          </Text>
          <Text block size={3} color="muted">
            Панель закрывается кнопкой ✕, нажатием Escape или кликом
            по затемнённому фону.
          </Text>
        </Flex>
      }
    >
      <Button
        label="Открыть настройки"
        icon={<SlidersHorizontal size={16} />}
      />
    </Drawer>
  );
}
