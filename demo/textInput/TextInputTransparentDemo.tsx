"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";

export default function TextInputTransparentDemo() {
  const [title, setTitle] = useState("Quarterly report");

  return (
    <TextInput
      value={title}
      onChange={setTitle}
      variant="transparent"
      size="xl"
      style={{ width: "100%", maxWidth: 420 }}
    />
  );
}
