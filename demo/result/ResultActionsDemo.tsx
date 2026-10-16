"use client";

import { Button, Result } from "altrone-ui";
import { FolderPlus, Plus, Upload } from "lucide-react";

export default function ResultActionsDemo() {
  return (
    <Result
      icon={<FolderPlus />}
      title="No projects yet"
      actions={
        <>
          <Button label="New project" icon={<Plus />} variant="submit" />
          <Button label="Import" icon={<Upload />} />
        </>
      }
    >
      Projects group your work, deploys and members. Create the first one to get going.
    </Result>
  );
}
