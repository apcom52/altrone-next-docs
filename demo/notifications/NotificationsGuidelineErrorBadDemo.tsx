"use client";

import { Button, showToast } from "altrone-ui";

export default function NotificationsGuidelineErrorBadDemo() {
  return (
    <Button
      label="Upload"
      onClick={() =>
        showToast("The file is larger than 10 MB. Choose a smaller one and try again.", {
          variant: "danger",
          duration: 1500,
        })
      }
    />
  );
}
