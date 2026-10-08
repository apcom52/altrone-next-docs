"use client";

import { useState } from "react";
import { Form, TextInput } from "altrone-ui";
import { Info } from "lucide-react";

export default function FormHintIconDemo() {
  const [slug, setSlug] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form>
        <Form.Field
          name="slug"
          label="Project slug"
          hintText="Lowercase letters, digits and dashes only."
          hintIcon={<Info />}
        >
          <TextInput value={slug} onChange={setSlug} placeholder="my-project" />
        </Form.Field>
      </Form>
    </div>
  );
}
