"use client";

import { Button, Flex } from "altrone-ui";

export default function FlexGuidelineBetweenBadDemo() {
  return (
    <Flex justify="between" align="center">
      <Button label="Cancel" variant="text" size="s" />
      <Button label="Save draft" size="s" />
      <Button label="Publish" variant="submit" size="s" />
    </Flex>
  );
}
