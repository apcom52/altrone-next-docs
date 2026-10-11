"use client";

import { useState } from "react";
import { ColorPicker, Flex, Form } from "altrone-ui";

export default function ColorPickerFormDemo() {
  const [primary, setPrimary] = useState<string | undefined>("#5b5bd6");
  const [secondary, setSecondary] = useState<string | undefined>("#3dd68c");

  return (
    <Form size="l">
      <Flex orientation="vertical" gap="s">
        <Form.Field name="primary">
          <ColorPicker value={primary} onChange={setPrimary} style={{ width: 240 }} />
        </Form.Field>
        <Form.Field name="secondary" disabled>
          <ColorPicker value={secondary} onChange={setSecondary} style={{ width: 240 }} />
        </Form.Field>
      </Flex>
    </Form>
  );
}
