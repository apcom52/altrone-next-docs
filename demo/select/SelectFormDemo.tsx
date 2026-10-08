"use client";

import { useState } from "react";
import { Form, Select } from "altrone-ui";

const ROLES = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

export default function SelectFormDemo() {
  const [role, setRole] = useState<string | undefined>();

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form errorMessages={{ role: "Choose a role to continue" }}>
        <Form.Field name="role" label="Role">
          <Select
            value={role}
            onChange={(value) => setRole(value as string | undefined)}
            options={ROLES}
            placeholder="Choose a role"
          />
        </Form.Field>
      </Form>
    </div>
  );
}
