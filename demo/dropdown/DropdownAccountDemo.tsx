"use client";

import { useState } from "react";
import { Dropdown, Button, Divider } from "altrone-ui";
import { User, Settings, CreditCard, LogOut } from "lucide-react";

export default function DropdownAccountDemo() {
  const [theme, setTheme] = useState("system");
  const [compact, setCompact] = useState(false);

  return (
    <Dropdown
      placement="bottom-end"
      content={
        <Dropdown.Menu>
          <Dropdown.Action
            icon={<User size={16} />}
            label="Alex Morgan"
            hintText="@amorgan"
          />
          <Divider />
          <Dropdown.Action icon={<Settings size={16} />} label="Profile settings" hintText="⌘," />
          <Dropdown.Action icon={<CreditCard size={16} />} label="Billing & plan" badge="PRO" />
          <Divider />
          <Dropdown.RadioList label="Theme" value={theme} onChange={setTheme}>
            <Dropdown.RadioItem value="system" label="System" />
            <Dropdown.RadioItem value="light" label="Light" />
            <Dropdown.RadioItem value="dark" label="Dark" />
          </Dropdown.RadioList>
          <Divider />
          <Dropdown.Checkbox label="Compact mode" checked={compact} onChange={setCompact} />
          <Divider />
          <Dropdown.Action danger icon={<LogOut size={16} />} label="Log out" />
        </Dropdown.Menu>
      }
    >
      <Button label="Account" icon={<User size={16} />} />
    </Dropdown>
  );
}
