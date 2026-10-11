"use client";

import { useState } from "react";
import { Flex, Radio } from "altrone-ui";

export default function RadioDisabledDemo() {
  const [role, setRole] = useState("editor");

  return (
    <Flex orientation="vertical" gap="m">
      <Radio value={role} onChange={setRole}>
        <Radio.Item value="viewer">Viewer</Radio.Item>
        <Radio.Item value="editor">Editor</Radio.Item>
        <Radio.Item value="admin" disabled>Admin</Radio.Item>
      </Radio>
      <Radio value="a" onChange={() => {}} disabled>
        <Radio.Item value="a">Whole group disabled</Radio.Item>
        <Radio.Item value="b">Second option</Radio.Item>
      </Radio>
    </Flex>
  );
}
