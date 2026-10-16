"use client";

import { Button, showToast } from "altrone-ui";

export default function NotificationsGuidelineTextBadDemo() {
  return (
    <Button
      label="Send invoice"
      onClick={() => showToast("Success", { variant: "success" })}
    />
  );
}
