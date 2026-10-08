"use client";

import { useState } from "react";
import { AutocompleteInput } from "altrone-ui";
import { ServerCrash } from "lucide-react";

export default function AutocompleteInputIconsDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = async (): Promise<string[]> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    throw new Error("Suggestions service is unavailable");
  };

  return (
    <AutocompleteInput
      value={value}
      onChange={setValue}
      getSuggestions={getSuggestions}
      errorIcon={<ServerCrash />}
      placeholder="Type anything to simulate a failure"
      style={{ maxWidth: 360 }}
    />
  );
}
