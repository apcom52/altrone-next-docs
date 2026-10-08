"use client";

import { Checkbox, Flex } from "altrone-ui";

export default function CheckboxDisabledDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Checkbox disabled onChange={() => {}}>Unavailable, unchecked</Checkbox>
      <Checkbox checked disabled onChange={() => {}}>Unavailable, checked</Checkbox>
    </Flex>
  );
}
