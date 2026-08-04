"use client";

import { Checkbox, Flex } from "altrone-ui";

export default function CheckboxDisabledDemo() {
  return (
    <Flex direction="column" gap="s">
      <Checkbox disabled>Недоступна (не выбрана)</Checkbox>
      <Checkbox checked disabled>
        Недоступна (выбрана)
      </Checkbox>
    </Flex>
  );
}
