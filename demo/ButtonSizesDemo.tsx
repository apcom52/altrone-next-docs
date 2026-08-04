"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonSizesDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button size="mini" label="mini" />
      <Button size="s" label="Small" />
      <Button size="m" label="Medium" />
      <Button size="l" label="Large" />
      <Button size="xl" label="Extra large" />
    </Flex>
  );
}
