"use client";

import { useState } from "react";
import { Text, TextArea, TextInput } from "altrone-ui";

export default function TextAreaIslandsDemo() {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <TextArea value={value} onChange={setValue} maxLength={280} placeholder="Write a comment">
        <TextInput.CustomIsland placement="start">
          <Text kbd>⌘↵</Text>
        </TextInput.CustomIsland>
        <TextInput.CharCounterIsland placement="end" />
      </TextArea>
    </div>
  );
}
