"use client";

import { Flex, Message } from "altrone-ui";
import { Check, CircleAlert, Info, TriangleAlert } from "lucide-react";

export default function MessageSeverityDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      <Message icon={<Info />} title="A new version is available." />
      <Message icon={<Info />} severity="primary" title="Your trial ends in 3 days." />
      <Message icon={<Check />} severity="success" title="Your changes were saved." />
      <Message icon={<TriangleAlert />} severity="warning" title="Storage is almost full." />
      <Message icon={<CircleAlert />} severity="danger" title="Failed to connect to the server." />
    </Flex>
  );
}
