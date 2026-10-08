"use client";

import { useState } from "react";
import { AutocompleteInput, Flex, Form } from "altrone-ui";

const SIZES = ["Small", "Medium", "Large"];

export default function AutocompleteInputGuidelineUseBadDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    SIZES.filter((size) => size.toLowerCase().includes(value.toLowerCase()));

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="size" label="T-shirt size">
          <AutocompleteInput
            value={value}
            onChange={setValue}
            getSuggestions={getSuggestions}
            placeholder="Start typing"
          />
        </Form.Field>
      </Form>
    </Flex>
  );
}
