"use client";

import { Tags } from "altrone-ui";

export default function TagsBasicDemo() {
  return (
    <Tags>
      <Tags.Item label="React" />
      <Tags.Item label="TypeScript" />
      <Tags.Item label="Design systems" />
      <Tags.Item label="Accessibility" />
    </Tags>
  );
}
