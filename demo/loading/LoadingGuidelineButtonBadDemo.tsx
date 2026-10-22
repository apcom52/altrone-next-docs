"use client";

import { Button, Flex, Loading } from "altrone-ui";

export default function LoadingGuidelineButtonBadDemo() {
  return (
    <Flex gap="s" align="center">
      <Button label="Save changes" />
      <Loading size={20} aria-label="Saving changes" />
    </Flex>
  );
}
