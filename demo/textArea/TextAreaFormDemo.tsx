"use client";

import { useState } from "react";
import { Form, TextArea } from "altrone-ui";

export default function TextAreaFormDemo() {
  const [description, setDescription] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form errorMessages={{ description: "Describe the project in a few words" }}>
        <Form.Field name="description" label="Description">
          <TextArea value={description} onChange={setDescription} placeholder="What is it about?" />
        </Form.Field>
      </Form>
    </div>
  );
}
