"use client";

import { useState } from "react";
import { AutocompleteInput, Flex, Form } from "altrone-ui";

const CITIES = [
  "Amsterdam", "Barcelona", "Berlin", "Brussels", "Copenhagen",
  "Dublin", "Lisbon", "London", "Madrid", "Paris", "Prague", "Vienna",
];

export default function AutocompleteInputFormDemo() {
  const [city, setCity] = useState("Pari");

  const getSuggestions = ({ value }: { value: string }) =>
    CITIES.filter((item) => item.toLowerCase().startsWith(value.toLowerCase()));

  return (
    <Flex style={{ width: "100%", maxWidth: 400 }}>
      <Form errorMessages={{ city: "Pick a city from the list" }}>
        <Form.Field name="city" label="City">
          <AutocompleteInput
            value={city}
            onChange={setCity}
            getSuggestions={getSuggestions}
          />
        </Form.Field>
      </Form>
    </Flex>
  );
}
