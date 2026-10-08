"use client";

import { useState } from "react";
import { AutocompleteInput, Flex, Form } from "altrone-ui";

const CITIES = [
  "Amsterdam", "Barcelona", "Berlin", "Brussels", "Budapest", "Copenhagen",
  "Dublin", "Edinburgh", "Helsinki", "Lisbon", "London", "Madrid",
  "Oslo", "Paris", "Prague", "Rome", "Stockholm", "Vienna", "Warsaw", "Zurich",
];

export default function AutocompleteInputGuidelineUseGoodDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    CITIES.filter((city) => city.toLowerCase().includes(value.toLowerCase()));

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="city" label="City">
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
