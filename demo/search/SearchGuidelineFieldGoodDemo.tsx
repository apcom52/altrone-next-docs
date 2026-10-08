"use client";

import { useState } from "react";
import { Flex, Form, TextInput } from "altrone-ui";

export default function SearchGuidelineFieldGoodDemo() {
  const [name, setName] = useState("Ada Lovelace");

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="name" label="Full name">
          <TextInput value={name} onChange={setName} />
        </Form.Field>
      </Form>
    </Flex>
  );
}
