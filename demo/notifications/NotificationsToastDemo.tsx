"use client";

import { Button, showToast } from "altrone-ui";

export default function NotificationsToastDemo() {
  return (
    <Button
      label="Save changes"
      onClick={() => showToast("Changes saved successfully.", { variant: "success" })}
    />
  );
}
