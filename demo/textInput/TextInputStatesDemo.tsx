"use client";

import { Flex, TextInput } from "altrone-ui";

export default function TextInputStatesDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value="Default" onChange={() => {}} />
      <TextInput value="Invalid" onChange={() => {}} invalid />
      <TextInput value="Read only" onChange={() => {}} readOnly />
      <TextInput value="Disabled" onChange={() => {}} disabled />
    </Flex>
  );
}
