"use client";

import type { CSSProperties } from "react";
import { Toolbar } from "altrone-ui";
import { Plus, Settings } from "lucide-react";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function ToolbarCssVarsDemo() {
  return (
    <div style={{ width: "100%" }}>
      <Toolbar style={vars({ "--toolbar-size": "72px", "--toolbar-inset": "24px", "--toolbar-gap": "24px" })}>
        <Toolbar.Leading>
          <Toolbar.Title title="Roomier toolbar" />
        </Toolbar.Leading>
        <Toolbar.Trailing>
          <Toolbar.Group>
            <Toolbar.Action label="New" icon={<Plus />} />
            <Toolbar.Action label="Settings" icon={<Settings />} showLabel={false} />
          </Toolbar.Group>
        </Toolbar.Trailing>
      </Toolbar>
    </div>
  );
}
