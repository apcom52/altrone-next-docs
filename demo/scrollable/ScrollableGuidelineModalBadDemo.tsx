"use client";

import { useState } from "react";
import { Box, Button, Modal, Scrollable, Text } from "altrone-ui";

const CLAUSES = Array.from({ length: 14 }, (_, i) => `Clause ${i + 1}. The service is provided as is.`);

export default function ScrollableGuidelineModalBadDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Read terms" onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Terms of service"
        content={
          <Box material="pale" shape="rounded" radius={12} padding={12} height={200}>
            <Scrollable>
              {CLAUSES.map((clause) => (
                <Text key={clause} block>{clause}</Text>
              ))}
            </Scrollable>
          </Box>
        }
      />
    </>
  );
}
