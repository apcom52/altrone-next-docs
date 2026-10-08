"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";
import { Search, X } from "lucide-react";

export default function TextInputGuidelineIslandsGoodDemo() {
  const [value, setValue] = useState("design");

  return (
    <TextInput value={value} onChange={setValue} placeholder="Search" style={{ width: "100%" }}>
      <TextInput.IconIsland icon={<Search />} />
      {value && (
        <TextInput.ActionIsland
          label="Clear"
          icon={<X />}
          showLabel={false}
          placement="end"
          onClick={() => setValue("")}
        />
      )}
    </TextInput>
  );
}
