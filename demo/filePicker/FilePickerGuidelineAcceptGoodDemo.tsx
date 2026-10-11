"use client";

import { FilePicker } from "altrone-ui";

export default function FilePickerGuidelineAcceptGoodDemo() {
  return (
    <FilePicker
      accept=".pdf,.docx"
      autoUpload={false}
      placeholder="Choose a resume"
    />
  );
}
