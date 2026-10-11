"use client";

import { useState } from "react";
import { Flex, Form, Radio } from "altrone-ui";

export default function RadioFormDemo() {
  const [delivery, setDelivery] = useState("courier");
  const [payment, setPayment] = useState("card");

  return (
    <Form size="l">
      <Flex orientation="vertical" gap="m">
        <Form.Field name="delivery">
          <Radio value={delivery} onChange={setDelivery}>
            <Radio.Item value="courier">Courier</Radio.Item>
            <Radio.Item value="pickup">Pickup</Radio.Item>
          </Radio>
        </Form.Field>
        <Form.Field name="payment" disabled>
          <Radio value={payment} onChange={setPayment}>
            <Radio.Item value="card">Card</Radio.Item>
            <Radio.Item value="cash">Cash</Radio.Item>
          </Radio>
        </Form.Field>
      </Flex>
    </Form>
  );
}
