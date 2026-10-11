"use client";

import { FilePicker } from "altrone-ui";

export default function FilePickerAcceptDemo() {
  return (
    <FilePicker
      accept="image/*"
      multiple
      autoUpload={false}
      placeholder="Choose images"
    />
  );
}
