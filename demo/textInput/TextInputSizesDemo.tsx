"use client";

import { Flex, TextInput } from "altrone-ui";

export default function TextInputSizesDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value="" onChange={() => {}} placeholder="mini" size="mini" />
      <TextInput value="" onChange={() => {}} placeholder="s" size="s" />
      <TextInput value="" onChange={() => {}} placeholder="m" size="m" />
      <TextInput value="" onChange={() => {}} placeholder="l" size="l" />
      <TextInput value="" onChange={() => {}} placeholder="xl" size="xl" />
    </Flex>
  );
}
