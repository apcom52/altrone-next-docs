"use client";

import { FilePicker } from "altrone-ui";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function FilePickerUploadFailDemo() {
  return (
    <FilePicker
      autoUploadFn={async ({ startUploading, fail }) => {
        startUploading();
        await wait(600);
        fail("The server is unavailable");
      }}
      removeFileFn={async () => {}}
    />
  );
}
