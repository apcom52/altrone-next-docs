"use client";

import { useState } from "react";
import { Flex, Form, Slider } from "altrone-ui";

export default function SliderFormDemo() {
  const [volume, setVolume] = useState(50);
  const [bass, setBass] = useState(30);

  return (
    <Form size="l" style={{ width: 280 }}>
      <Flex orientation="vertical" gap="l">
        <Form.Field name="volume">
          <Slider aria-label="Volume" value={volume} onChange={setVolume} />
        </Form.Field>
        <Form.Field name="bass" disabled>
          <Slider aria-label="Bass" value={bass} onChange={setBass} />
        </Form.Field>
      </Flex>
    </Form>
  );
}
