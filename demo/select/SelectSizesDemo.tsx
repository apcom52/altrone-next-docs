"use client";

import { Flex, Select } from "altrone-ui";

const OPTIONS = [
  { value: "one", label: "Option one" },
  { value: "two", label: "Option two" },
];

export default function SelectSizesDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 320 }}>
      <Select value="one" onChange={() => {}} options={OPTIONS} size="mini" />
      <Select value="one" onChange={() => {}} options={OPTIONS} size="s" />
      <Select value="one" onChange={() => {}} options={OPTIONS} size="m" />
      <Select value="one" onChange={() => {}} options={OPTIONS} size="l" />
      <Select value="one" onChange={() => {}} options={OPTIONS} size="xl" />
    </Flex>
  );
}
