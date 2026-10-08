"use client";

import { Flex, TextArea } from "altrone-ui";

export default function TextAreaSizesDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 400 }}>
      <TextArea value="" onChange={() => {}} placeholder="mini" size="mini" />
      <TextArea value="" onChange={() => {}} placeholder="s" size="s" />
      <TextArea value="" onChange={() => {}} placeholder="m" size="m" />
      <TextArea value="" onChange={() => {}} placeholder="l" size="l" />
      <TextArea value="" onChange={() => {}} placeholder="xl" size="xl" />
    </Flex>
  );
}
