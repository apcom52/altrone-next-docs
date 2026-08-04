"use client";

import { Drawer, Button, Text, Flex } from "altrone-ui";
import { Bell } from "lucide-react";

const NOTIFICATIONS = [
  { id: 1, title: "Новый комментарий", desc: "Алексей оставил комментарий к вашему проекту.", time: "2 мин назад" },
  { id: 2, title: "Задача выполнена", desc: "«Обновить документацию» закрыта.", time: "1 ч назад" },
  { id: 3, title: "Упоминание", desc: "Вас упомянули в задаче #142.", time: "3 ч назад" },
  { id: 4, title: "Новый участник", desc: "Мария присоединилась к команде.", time: "Вчера" },
];

export default function DrawerEndDemo() {
  return (
    <Drawer
      title="Уведомления"
      placement="end"
      content={
        <Flex direction="column" gap="m">
          {NOTIFICATIONS.map((n) => (
            <div key={n.id}>
              <Text block size={4} weight="bold">
                {n.title}
              </Text>
              <Text block size={3}>{n.desc}</Text>
              <Text block size={3} color="muted">{n.time}</Text>
            </div>
          ))}
        </Flex>
      }
    >
      <Button
        label="Уведомления"
        icon={<Bell size={16} />}
        badge={4}
      />
    </Drawer>
  );
}
