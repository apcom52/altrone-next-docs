"use client";

import { useState } from "react";
import { AutocompleteInput, showToast } from "altrone-ui";

export default function AutocompleteInputErrorDemo() {
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
      onError={() => showToast("Could not load suggestions")}
      placeholder="Type anything to simulate a failure"
      style={{ maxWidth: 360 }}
    />
  );
}
