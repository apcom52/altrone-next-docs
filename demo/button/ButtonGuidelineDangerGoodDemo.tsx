"use client";

import { Button, showConfirm, showToast } from "altrone-ui";

export default function ButtonGuidelineDangerGoodDemo() {
  const handleClick = async () => {
    const confirmed = await showConfirm({
      title: "Delete this project?",
      message: "All its files will be removed permanently.",
      confirmText: "Delete project",
      danger: true,
    });

    if (confirmed) {
      showToast("Project deleted");
    }
  };

  return <Button label="Delete project" danger onClick={handleClick} />;
}
