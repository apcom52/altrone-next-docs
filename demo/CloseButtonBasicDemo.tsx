"use client";

import { useState } from "react";
import { CloseButton } from "altrone-ui";

export default function CloseButtonBasicDemo() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return <CloseButton disabled />;
  }

  return <CloseButton onClick={() => setVisible(false)} />;
}
