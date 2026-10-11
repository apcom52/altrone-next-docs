"use client";

import { FilePicker } from "altrone-ui";

export default function FilePickerDisabledDemo() {
  return (
    <FilePicker
      disabled
      autoUpload={false}
      defaultValue={[{ id: "1", filename: "contract.pdf" }]}
    />
  );
}
