"use client";

import { Button, dismissNotification, showToast } from "altrone-ui";

export default function NotificationsUndoDemo() {
  return (
    <Button
      label="Delete file"
      onClick={() => {
        const id = showToast("File deleted.", {
          action: {
            label: "Undo",
            onClick: () => dismissNotification(id),
          },
        });
      }}
    />
  );
}
