"use client";

import { useState } from "react";
import { FilePicker, FileItem, Text } from "altrone-ui";

export default function FilePickerControlledDemo() {
  const [files, setFiles] = useState<FileItem[]>([]);

  return (
    <>
      <FilePicker multiple autoUpload={false} value={files} onChange={setFiles} />
      <Text>{files.length} file(s) selected</Text>
    </>
  );
}
