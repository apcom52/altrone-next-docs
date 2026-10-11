"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioGuidelineLabelGoodDemo() {
  const [plan, setPlan] = useState("team");

  return (
    <Radio value={plan} onChange={setPlan} orientation="vertical">
      <Radio.Item value="solo">Solo — one project</Radio.Item>
      <Radio.Item value="team">Team — unlimited projects</Radio.Item>
    </Radio>
  );
}
