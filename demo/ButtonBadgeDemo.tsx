"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonBadgeDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button label="Уведомления" badge={5} />
      <Button label="Экспорт" badge="NEW" variant="submit" />
      <Button label="Оплатить позже" badge="+20%" danger />
    </Flex>
  );
}
