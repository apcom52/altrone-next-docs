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
      placeholder="Search"
      style={{ width: "100%", maxWidth: 360 }}
    >
      <TextInput.IconIsland icon={<Search />} />
      {search && (
        <TextInput.ActionIsland
          label="Clear"
          icon={<X />}
          showLabel={false}
          placement="end"
          onClick={() => setSearch("")}
        />
      )}
    </TextInput>
  );
}
