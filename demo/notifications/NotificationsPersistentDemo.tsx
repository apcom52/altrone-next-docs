"use client";

import { Button, dismissNotification, showToast } from "altrone-ui";

export default function NotificationsPersistentDemo() {
  const run = async () => {
    const id = showToast("Syncing in background…", { autoClose: false });
    await new Promise((resolve) => setTimeout(resolve, 2500));
    dismissNotification(id);
    showToast("Sync complete.", { variant: "success" });
  };

  return <Button label="Start sync" onClick={run} />;
}
