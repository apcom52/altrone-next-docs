"use client";

import { useState, type CSSProperties } from "react";
import { Drawer, Button, Text } from "altrone-ui";
import { Palette } from "lucide-react";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function DrawerCssVarsDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label="Open drawer" icon={<Palette size={16} />} onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Custom title color"
        content={<Text>The title above reads --drawer-header-text-color from style.</Text>}
        style={vars({ "--drawer-header-text-color": "var(--accent-9)" })}
      />
    </>
  );
}
