"use client";

import { Dropdown, Button } from "altrone-ui";
import { ChevronDown, Save, Printer } from "lucide-react";

export default function DropdownGuidelineHintTextGoodDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Save" icon={<Save size={16} />} hintText="⌘S" />
          <Dropdown.Action label="Print" icon={<Printer size={16} />} hintText="⌘P" />
        </Dropdown.Menu>
      }
    >
      <Button label="File" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
