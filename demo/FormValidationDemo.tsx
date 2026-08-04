"use client";

import { useState } from "react";
import { Form, TextInput, PasswordInput, Button, Flex } from "altrone-ui";

export default function FormValidationDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!email.trim()) next.email = "Введите email";
    else if (!email.includes("@")) next.email = "Некорректный формат email";
    if (!password) next.password = "Введите пароль";
    else if (password.length < 8) next.password = "Пароль слишком короткий";
    return next;
  };

  const handleSubmit = () => {
    const next = validate();
    setErrors(next);
    if (!Object.keys(next).length) alert("Форма отправлена!");
  };

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form onSubmit={handleSubmit} errorMessages={errors}>
        <Flex direction="column" gap="m">
          <Form.Field name="email" label="Email" required>
            <TextInput
              value={email}
              onChange={(v) => { setEmail(v); setErrors((e) => ({ ...e, email: "" })); }}
              placeholder="you@example.com"
            />
          </Form.Field>
          <Form.Field name="password" label="Пароль" required>
            <PasswordInput
              value={password}
              onChange={(v) => { setPassword(v); setErrors((e) => ({ ...e, password: "" })); }}
              placeholder="Минимум 8 символов"
            />
          </Form.Field>
          <Button label="Продолжить" variant="submit" type="submit" />
        </Flex>
      </Form>
    </div>
  );
}
