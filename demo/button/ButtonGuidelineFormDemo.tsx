"use client";

import { Button, Flex, showToast } from "altrone-ui";

export default function ButtonGuidelineFormDemo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        showToast("Form submitted");
      }}
    >
      <Flex align="center" gap="m">
        <Button label="Cancel" variant="text" />
        <Button label="Create account" variant="submit" type="submit" />
      </Flex>
    </form>
  );
}
