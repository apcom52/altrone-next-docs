"use client";

import { Popover, Button } from "altrone-ui";
import { MoreHorizontal, Trash } from "lucide-react";

export default function PopoverGuidelineNestingBadDemo() {
  return (
    <Popover
      content={
        <Popover
          content={
            <Popover
              content={({ hide }) => (
                <Button label="Confirm delete" variant="submit" danger size="s" onClick={hide} />
              )}
            >
              <Button label="Delete" icon={<Trash size={16} />} danger size="s" />
            </Popover>
          }
        >
          <Button label="More" additionalIcon={<MoreHorizontal size={16} />} size="s" />
        </Popover>
      }
    >
      <Button label="Options" icon={<MoreHorizontal size={16} />} />
    </Popover>
  );
}
