"use client";

import { Button, Flex, showToast } from "altrone-ui";

export default function NotificationsVariantsDemo() {
  return (
    <Flex orientation="horizontal" gap="m" wrap>
      <Button label="Default" onClick={() => showToast("New version available.")} />
      <Button label="Success" onClick={() => showToast("Item created.", { variant: "success" })} />
      <Button label="Warning" onClick={() => showToast("Low storage space.", { variant: "warning" })} />
      <Button label="Danger" onClick={() => showToast("Upload failed.", { variant: "danger" })} />
    </Flex>
  );
}
