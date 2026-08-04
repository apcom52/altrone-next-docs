"use client";

import { Drawer, Button, Text, Flex } from "altrone-ui";
import { Filter } from "lucide-react";

export default function DrawerFooterDemo() {
  return (
    <Drawer
      title="Фильтры"
      content={
        <Flex direction="column" gap="s">
          <Text block size={4} weight="bold">
            Категория
          </Text>
          <Text block size={3} color="muted">
            Электроника · Одежда · Книги · Спорт
          </Text>
          <Text block size={4} weight="bold" style={{ marginTop: 8 }}>
            Цена
          </Text>
          <Text block size={3} color="muted">
            от 0 ₽ до 50 000 ₽
          </Text>
          <Text block size={4} weight="bold" style={{ marginTop: 8 }}>
            Рейтинг
          </Text>
          <Text block size={3} color="muted">
            4 звезды и выше
          </Text>
        </Flex>
      }
      footer={
        <Flex gap="s" style={{ width: "100%" }}>
          <Button label="Сбросить" variant="text" />
          <Button
            label="Применить фильтры"
            variant="submit"
            style={{ flex: 1 }}
          />
        </Flex>
      }
    >
      <Button label="Фильтры" icon={<Filter size={16} />} />
    </Drawer>
  );
}
