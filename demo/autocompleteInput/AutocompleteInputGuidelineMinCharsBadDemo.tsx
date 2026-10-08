"use client";

import { useState } from "react";
import { AutocompleteInput, Flex, Form } from "altrone-ui";

const COUNTRIES = [
  "Austria", "Belgium", "Czechia", "Denmark", "Finland", "France",
  "Germany", "Greece", "Ireland", "Italy", "Netherlands", "Norway",
  "Poland", "Portugal", "Spain", "Sweden", "Switzerland",
];

export default function AutocompleteInputGuidelineMinCharsBadDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    COUNTRIES.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase()),
    );

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="country" label="Country">
          <AutocompleteInput
            value={value}
            onChange={setValue}
            getSuggestions={getSuggestions}
            placeholder="Type a letter"
          />
        </Form.Field>
      </Form>
    </Flex>
  );
}
