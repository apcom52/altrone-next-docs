"use client";

import { Flex, TextArea } from "altrone-ui";

export default function TextAreaStatesDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 400 }}>
      <TextArea value="Default" onChange={() => {}} />
      <TextArea value="Invalid" onChange={() => {}} invalid />
      <TextArea value="Read only" onChange={() => {}} readOnly />
      <TextArea value="Disabled" onChange={() => {}} disabled />
    </Flex>
  );
}
