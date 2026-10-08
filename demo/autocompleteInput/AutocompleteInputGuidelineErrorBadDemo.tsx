"use client";

import { useState } from "react";
import { AutocompleteInput, Flex, Form } from "altrone-ui";

export default function AutocompleteInputGuidelineErrorBadDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = async (): Promise<string[]> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    throw new Error("Suggestions service is unavailable");
  };

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="city" label="City">
          <AutocompleteInput
            value={value}
            onChange={setValue}
            getSuggestions={getSuggestions}
            placeholder="Type anything"
          />
        </Form.Field>
      </Form>
    </Flex>
  );
}
