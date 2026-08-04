"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";
import { Search, X } from "lucide-react";

export default function TextInputClearDemo() {
  const [search, setSearch] = useState("");

  return (
    <TextInput
      value={search}
      onChange={setSearch}
      placeholder="Поиск"
      style={{ maxWidth: 360 }}
    >
      <TextInput.IconIsland icon={<Search size={16} />} placement="left" />
      {search && (
        <TextInput.ActionIsland
          label="Очистить"
          icon={<X size={16} />}
          showLabel={false}
          placement="right"
          onClick={() => setSearch("")}
        />
      )}
    </TextInput>
  );
}
