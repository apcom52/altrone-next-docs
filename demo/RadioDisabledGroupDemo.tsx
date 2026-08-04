"use client";

import { Radio } from "altrone-ui";

export default function RadioDisabledGroupDemo() {
  return (
    <Radio value="b" onChange={() => {}} name="locked" disabled>
      <Radio.Item value="a">Вариант A</Radio.Item>
      <Radio.Item value="b">Вариант B</Radio.Item>
      <Radio.Item value="c">Вариант C</Radio.Item>
    </Radio>
  );
}
