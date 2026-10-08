"use client";

import { useState } from "react";
import { TextArea } from "altrone-ui";

export default function TextAreaBasicDemo() {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <TextArea value={value} onChange={setValue} placeholder="Tell us about yourself" />
    </div>
  );
}
