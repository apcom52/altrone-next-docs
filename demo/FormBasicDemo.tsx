"use client";

import { useState } from "react";
import { Form, TextInput, PasswordInput, Button, Flex } from "altrone-ui";

export default function FormBasicDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form onSubmit={() => alert(`Вход: ${email}`)}>
        <Flex direction="column" gap="m">
          <Form.Field name="email" label="Email" required>
            <TextInput
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
            />
          </Form.Field>
          <Form.Field name="password" label="Пароль" required>
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder="Минимум 8 символов"
            />
          </Form.Field>
          <Button label="Войти" variant="submit" type="submit" />
        </Flex>
      </Form>
    </div>
  );
}
