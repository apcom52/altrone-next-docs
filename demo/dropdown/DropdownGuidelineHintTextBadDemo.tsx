"use client";

import { Dropdown, Button } from "altrone-ui";
import { ChevronDown, Save, Printer } from "lucide-react";

export default function DropdownGuidelineHintTextBadDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Save" icon={<Save size={16} />} hintText="Press Command and S together" />
          <Dropdown.Action label="Print" icon={<Printer size={16} />} hintText="Hold Command, then press P" />
        </Dropdown.Menu>
      }
    >
      <Button label="File" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
