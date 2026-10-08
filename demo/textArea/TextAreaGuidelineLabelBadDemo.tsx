"use client";

import { useState } from "react";
import { TextArea } from "altrone-ui";

export default function TextAreaGuidelineLabelBadDemo() {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "100%" }}>
      <TextArea value={value} onChange={setValue} placeholder="Feedback" />
    </div>
  );
}
