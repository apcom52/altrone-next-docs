"use client";

import { useState } from "react";
import { Text, Tags } from "altrone-ui";

const TOPICS = ["React", "TypeScript", "CSS", "Testing"];

export default function TagsInteractiveDemo() {
  const [topic, setTopic] = useState<string | null>(null);

  return (
    <>
      <Tags>
        {TOPICS.map((name) => (
          <Tags.Item key={name} label={name} onClick={() => setTopic(name)} />
        ))}
      </Tags>
      <Text color="muted" block>
        {topic ? `Showing articles about ${topic}` : "Pick a topic"}
      </Text>
    </>
  );
}
