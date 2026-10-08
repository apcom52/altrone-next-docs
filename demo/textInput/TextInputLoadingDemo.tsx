"use client";

import { useRef, useState } from "react";
import { TextInput } from "altrone-ui";
import { Search } from "lucide-react";

export default function TextInputLoadingDemo() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleChange = (next: string) => {
    setValue(next);
    clearTimeout(timer.current);
    setIsLoading(Boolean(next));

    if (next) {
      timer.current = setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      placeholder="Search users"
      style={{ width: "100%", maxWidth: 360 }}
    >
      <TextInput.IconIsland icon={<Search />} />
      {isLoading && <TextInput.LoadingIsland placement="end" />}
    </TextInput>
  );
}
