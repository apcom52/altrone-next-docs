"use client";

import { CircleAlert, FolderUp, RefreshCw, X } from "lucide-react";
import { FilePicker } from "altrone-ui";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function FilePickerIconsDemo() {
  return (
    <FilePicker
      uploadIcon={<FolderUp />}
      errorIcon={<CircleAlert />}
      retryIcon={<RefreshCw />}
      deleteIcon={<X />}
      autoUploadFn={async ({ startUploading, fail }) => {
        startUploading();
        await wait(400);
        fail("Upload failed");
      }}
      removeFileFn={async () => {}}
    />
  );
}
