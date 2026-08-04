"use client";

import { Button, Flex } from "altrone-ui";
import { X, Settings, Search, Bell } from "lucide-react";

export default function ButtonIconOnlyDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Закрыть панель" showLabel={false} icon={<X size={16} />} />
      <Button label="Настройки" showLabel={false} icon={<Settings size={16} />} />
      <Button label="Поиск" showLabel={false} icon={<Search size={16} />} variant="submit" />
      <Button label="Уведомления" showLabel={false} icon={<Bell size={16} />} variant="text" />
    </Flex>
  );
}
