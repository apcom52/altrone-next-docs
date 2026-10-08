"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";
import { AtSign, Filter, Mic, Search, X } from "lucide-react";

export default function TextInputGuidelineIslandsBadDemo() {
  const [value, setValue] = useState("design");

  return (
    <TextInput value={value} onChange={setValue} placeholder="Search" style={{ width: "100%" }}>
      <TextInput.IconIsland icon={<Search />} />
      <TextInput.TextIsland label="in:" />
      <TextInput.ActionIsland label="Mention" icon={<AtSign />} showLabel={false} />
      <TextInput.ActionIsland label="Voice" icon={<Mic />} showLabel={false} placement="end" />
      <TextInput.ActionIsland label="Filter" icon={<Filter />} showLabel={false} placement="end" />
      <TextInput.ActionIsland label="Clear" icon={<X />} showLabel={false} placement="end" />
    </TextInput>
  );
}
