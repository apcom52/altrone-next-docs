"use client";

import { Dropdown, Button } from "altrone-ui";
import { ChevronDown, Download } from "lucide-react";

export default function DropdownGuidelineSingleItemBadDemo() {
  return (
    <Dropdown
      placement="bottom-start"
      content={
        <Dropdown.Menu>
          <Dropdown.Action label="Download" icon={<Download size={16} />} />
        </Dropdown.Menu>
      }
    >
      <Button label="Download" additionalIcon={<ChevronDown size={16} />} />
    </Dropdown>
  );
}
