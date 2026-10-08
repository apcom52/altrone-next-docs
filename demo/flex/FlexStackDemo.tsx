"use client";

import { Button, Flex, PasswordInput, TextInput } from "altrone-ui";

export default function FlexStackDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ maxWidth: 360 }}>
      <TextInput placeholder="Email" />
      <PasswordInput placeholder="Password" />
      <Button label="Sign in" variant="submit" />
    </Flex>
  );
}
