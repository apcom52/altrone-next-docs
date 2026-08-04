"use client";

import { TextInput, Flex } from "altrone-ui";

export default function TextInputSizesDemo() {
  return (
    <Flex direction="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value="" onChange={() => {}} placeholder="mini" size="mini" />
      <TextInput value="" onChange={() => {}} placeholder="small" size="s" />
      <TextInput value="" onChange={() => {}} placeholder="medium" size="m" />
      <TextInput value="" onChange={() => {}} placeholder="large" size="l" />
      <TextInput value="" onChange={() => {}} placeholder="extra large" size="xl" />
    </Flex>
  );
}
