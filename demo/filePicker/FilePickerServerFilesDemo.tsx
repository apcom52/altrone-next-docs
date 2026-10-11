"use client";

import { useState } from "react";
import { FilePicker, FileItem } from "altrone-ui";

export default function FilePickerServerFilesDemo() {
  const [files, setFiles] = useState<FileItem[]>([
    { id: "srv-1", filename: "report.pdf" },
    { id: "srv-2", filename: "invoice.pdf" },
  ]);

  return (
    <FilePicker
      multiple
      value={files}
      onChange={setFiles}
      removeFileFn={async () => {}}
    />
  );
}
