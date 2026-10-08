"use client";

import { Flex, Text } from "altrone-ui";

export default function TextLinkDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Text href="#links">Internal link</Text>
      <Text href="https://github.com" external>
        External link, opens in a new tab
      </Text>
      <Text block>
        Read more in the <Text href="#links">installation guide</Text>.
      </Text>
    </Flex>
  );
}
