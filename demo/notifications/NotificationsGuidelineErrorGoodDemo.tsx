"use client";

import { Button, showNotification } from "altrone-ui";

export default function NotificationsGuidelineErrorGoodDemo() {
  return (
    <Button
      label="Upload"
      onClick={() =>
        showNotification({
          title: "Upload failed",
          content: "The file is larger than 10 MB. Choose a smaller one and try again.",
          actions: [{ label: "Choose another file", onClick: () => {} }],
          autoClose: false,
        })
      }
    />
  );
}
