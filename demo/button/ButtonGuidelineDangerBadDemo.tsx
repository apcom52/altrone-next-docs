"use client";

import { Button, showToast } from "altrone-ui";

export default function ButtonGuidelineDangerBadDemo() {
  return <Button label="Delete project" danger onClick={() => showToast("Project deleted")} />;
}
