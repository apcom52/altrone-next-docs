"use client";

import { useState } from "react";
import { Form, TextInput, PasswordInput, Flex } from "altrone-ui";

export default function FormHintDemo() {
  const [apiKey, setApiKey] = useState("");
  const [webhook, setWebhook] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 440 }}>
      <Form>
        <Flex direction="column" gap="m">
          <Form.Field
            name="apiKey"
            label="API-ключ"
            required
            hintText="Ключ доступен в разделе «Разработчик» настроек аккаунта."
            description="Используется для всех API-запросов от вашего имени."
          >
            <PasswordInput
              value={apiKey}
              onChange={setApiKey}
              placeholder="sk-..."
            />
          </Form.Field>
          <Form.Field
            name="webhook"
            label="Webhook URL"
            hintText="Сервер должен отвечать на POST-запросы с кодом 200."
            description="На этот адрес будут отправляться события в реальном времени."
          >
            <TextInput
              value={webhook}
              onChange={setWebhook}
              placeholder="https://example.com/webhook"
            />
          </Form.Field>
        </Flex>
      </Form>
    </div>
  );
}
