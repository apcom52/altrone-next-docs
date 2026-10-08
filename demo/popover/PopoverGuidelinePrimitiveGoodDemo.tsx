"use client";

import { useState } from "react";
import { Popover, Button, Form, TextInput, Flex } from "altrone-ui";
import { Tag } from "lucide-react";

export default function PopoverGuidelinePrimitiveGoodDemo() {
  const [label, setLabel] = useState("");

  return (
    <Popover
      content={({ hide }) => (
        <div style={{ padding: 16, width: 220 }}>
          <Form>
            <Form.Field name="label" label="Label name">
              <TextInput value={label} onChange={setLabel} placeholder="Backend" />
            </Form.Field>
          </Form>
          <Flex justify="end" style={{ marginTop: 12 }}>
            <Button label="Add" variant="submit" size="s" onClick={hide} />
          </Flex>
        </div>
      )}
    >
      <Button label="Add label" icon={<Tag size={16} />} />
    </Popover>
  );
}
