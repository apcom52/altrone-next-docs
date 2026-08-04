"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";

export default function TextInputCharCounterDemo() {
  const [bio, setBio] = useState("");

  return (
    <TextInput
      value={bio}
      onChange={setBio}
      maxLength={160}
      placeholder="Расскажите о себе..."
      style={{ maxWidth: 400 }}
    >
      <TextInput.CharCounterIsland placement="right" />
    </TextInput>
  );
}
