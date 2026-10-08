"use client";

import { useState } from "react";
import { Button, Modal, Text } from "altrone-ui";

const CLAUSES = Array.from({ length: 14 }, (_, i) => `Clause ${i + 1}. The service is provided as is.`);

export default function ScrollableGuidelineModalGoodDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Read terms" onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Terms of service"
        content={
          <>
            {CLAUSES.map((clause) => (
              <Text key={clause} block>{clause}</Text>
            ))}
          </>
        }
      />
    </>
  );
}
