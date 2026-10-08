"use client";

import { useState } from "react";
import { Flex, Form, PasswordInput } from "altrone-ui";

export default function PasswordInputGuidelineToggleGoodDemo() {
  const [value, setValue] = useState("correct-horse-battery");

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="password" label="Password">
          <PasswordInput value={value} onChange={setValue} />
        </Form.Field>
      </Form>
    </Flex>
  );
}
