"use client";

import { CloseButton, Flex, Text } from "altrone-ui";
import { CircleX, PanelRightClose } from "lucide-react";

export default function CloseButtonIconDemo() {
  return (
    <Flex align="center" gap="l">
      <Flex orientation="vertical" align="center" gap="s">
        <CloseButton />
        <Text size={2} color="muted">
          default
        </Text>
      </Flex>
      <Flex orientation="vertical" align="center" gap="s">
        <CloseButton icon={<CircleX />} />
        <Text size={2} color="muted">
          CircleX
        </Text>
      </Flex>
      <Flex orientation="vertical" align="center" gap="s">
        <CloseButton label="Close side panel" icon={<PanelRightClose />} />
        <Text size={2} color="muted">
          PanelRightClose
        </Text>
      </Flex>
    </Flex>
  );
}
