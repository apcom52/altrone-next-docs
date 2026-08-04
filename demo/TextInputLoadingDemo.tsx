"use client";

import { useState, useEffect } from "react";
import { TextInput } from "altrone-ui";
import { Search } from "lucide-react";

export default function TextInputLoadingDemo() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value) { setIsLoading(false); return; }
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <TextInput
      value={value}
      onChange={setValue}
      placeholder="Поиск пользователей..."
      style={{ maxWidth: 360 }}
    >
      <TextInput.IconIsland icon={<Search size={16} />} placement="left" />
      {isLoading && <TextInput.LoadingIsland placement="right" />}
    </TextInput>
  );
}
