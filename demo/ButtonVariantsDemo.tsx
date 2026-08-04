"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonVariantsDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Сохранить черновик" />
      <Button label="Отправить" variant="submit" />
      <Button label="Отмена" variant="text" />
    </Flex>
  );
}
