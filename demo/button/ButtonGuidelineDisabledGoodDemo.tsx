"use client";

import { useState } from "react";
import { Button, Flex, Message } from "altrone-ui";

export default function ButtonGuidelineDisabledGoodDemo() {
  const [showError, setShowError] = useState(false);

  return (
    <Flex orientation="vertical" align="center" gap="m">
      <Button label="Create account" variant="submit" onClick={() => setShowError(true)} />
      {showError ? <Message severity="danger">Enter your email to continue.</Message> : null}
    </Flex>
  );
}
