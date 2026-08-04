"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonDangerDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Удалить аккаунт" danger />
      <Button label="Удалить аккаунт" variant="submit" danger />
      <Button label="Удалить" variant="text" danger />
    </Flex>
  );
}
