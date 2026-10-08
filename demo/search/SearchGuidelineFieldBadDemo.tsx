"use client";

import { useState } from "react";
import { Flex, Form, Search } from "altrone-ui";

export default function SearchGuidelineFieldBadDemo() {
  const [name, setName] = useState("Ada Lovelace");

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="name" label="Full name">
          <Search value={name} onChange={setName} />
        </Form.Field>
      </Form>
    </Flex>
  );
}
