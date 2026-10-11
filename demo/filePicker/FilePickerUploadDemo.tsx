"use client";

import { FilePicker } from "altrone-ui";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function FilePickerUploadDemo() {
  return (
    <FilePicker
      multiple
      autoUploadFn={async ({ file, startUploading, setProgress, complete }) => {
        startUploading();
        for (let step = 1; step <= 5; step++) {
          await wait(300);
          setProgress((file.size / 5) * step);
        }
        complete();
      }}
      removeFileFn={async () => {}}
    />
  );
}
