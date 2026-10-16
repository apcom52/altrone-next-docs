"use client";

import { Button, showNotification } from "altrone-ui";
import { Download } from "lucide-react";

export default function NotificationsCardDemo() {
  return (
    <Button
      label="Finish export"
      onClick={() =>
        showNotification({
          title: "Your export is ready",
          content: "The file is available for 7 days.",
          icon: <Download />,
          actions: [
            { label: "Download", onClick: () => {} },
            { label: "Later", onClick: () => {} },
          ],
        })
      }
    />
  );
}
