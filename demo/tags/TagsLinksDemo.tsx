"use client";

import { Tags } from "altrone-ui";

export default function TagsLinksDemo() {
  return (
    <Tags>
      <Tags.Item label="#javascript" href="#javascript" />
      <Tags.Item label="#typescript" href="#typescript" />
      <Tags.Item label="#react" href="#react" />
    </Tags>
  );
}
