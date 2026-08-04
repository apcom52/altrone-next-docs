"use client";

import { useState } from "react";
import { TextInput, Text } from "altrone-ui";

export default function TextInputTransparentDemo() {
  const [title, setTitle] = useState("Название документа");

  return (
    <div style={{ padding: "24px", background: "var(--altrone-layer-1)", borderRadius: "12px", width: "100%" }}>
      <TextInput
        value={title}
        onChange={setTitle}
        variant="transparent"
        style={{ width: "100%", fontSize: "20px", fontWeight: 600 }}
      />
      <Text block size={3} color="muted" style={{ marginTop: 8 }}>
        Прозрачный вариант — для редактирования заголовков внутри карточек и страниц
      </Text>
    </div>
  );
}
