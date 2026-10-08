"use client";

import { useState } from "react";
import { TextArea, TextInput } from "altrone-ui";

export default function TextAreaGuidelineLimitGoodDemo() {
  const [value, setValue] = useState("Release notes for the new version");

  return (
    <div style={{ width: "100%" }}>
      <TextArea value={value} onChange={setValue} maxLength={140}>
        <TextInput.CharCounterIsland placement="end" />
      </TextArea>
    </div>
  );
}
