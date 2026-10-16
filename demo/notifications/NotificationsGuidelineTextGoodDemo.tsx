"use client";

import { Button, showToast } from "altrone-ui";

export default function NotificationsGuidelineTextGoodDemo() {
  return (
    <Button
      label="Send invoice"
      onClick={() => showToast("Invoice sent to anna@example.com", { variant: "success" })}
    />
  );
}
