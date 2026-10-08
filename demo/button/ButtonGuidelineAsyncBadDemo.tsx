"use client";

import { Button, showToast } from "altrone-ui";

export default function ButtonGuidelineAsyncBadDemo() {
  return (
    <Button
      label="Save"
      variant="submit"
      onClick={() => setTimeout(() => showToast("Saved"), 1500)}
    />
  );
}
