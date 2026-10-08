"use client";

import { useState } from "react";
import { Flex, Form, PasswordInput } from "altrone-ui";

export default function PasswordInputFormDemo() {
  const [password, setPassword] = useState("1234");

  return (
    <Flex style={{ width: "100%", maxWidth: 400 }}>
      <Form errorMessages={{ password: "The password must be at least 8 characters" }}>
        <Form.Field name="password" label="Password">
          <PasswordInput value={password} onChange={setPassword} />
        </Form.Field>
      </Form>
    </Flex>
  );
}
