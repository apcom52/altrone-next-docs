"use client";

import { useState } from "react";
import { Drawer, Button, Form, TextInput } from "altrone-ui";
import { UserCog } from "lucide-react";

const FIELDS = [
  "Company name", "Legal address", "Tax ID", "Billing contact", "Billing email",
  "Phone", "Website", "Industry", "Employee count", "Time zone",
  "Preferred currency", "Payment terms", "Account manager", "Support tier",
];

export default function DrawerGuidelineSizeBadDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Edit account" icon={<UserCog size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Edit account"
        content={
          <Form>
            {FIELDS.map((field) => (
              <Form.Field key={field} name={field} label={field}>
                <TextInput />
              </Form.Field>
            ))}
          </Form>
        }
        onDone={async () => setOpen(false)}
      />
    </>
  );
}
