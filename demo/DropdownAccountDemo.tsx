"use client";

import { useState } from "react";
import { Dropdown, Button, Divider, Text } from "altrone-ui";
import { User, Settings, CreditCard, LogOut, Monitor } from "lucide-react";

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
            label="Алексей Петров"
            hintText="@apetrov"
          />
          <Divider />
          <Dropdown.Action icon={<Settings size={16} />} label="Настройки профиля" hintText="⌘," />
          <Dropdown.Action icon={<CreditCard size={16} />} label="Тариф и оплата" badge="PRO" />
          <Divider />
          <Dropdown.RadioList label="Тема" value={theme} onChange={setTheme}>
            <Dropdown.RadioItem value="system" label="Системная" />
            <Dropdown.RadioItem value="light" label="Светлая" />
            <Dropdown.RadioItem value="dark" label="Тёмная" />
          </Dropdown.RadioList>
          <Divider />
          <Dropdown.Checkbox label="Компактный режим" checked={compact} onChange={setCompact} />
          <Divider />
          <Dropdown.Action danger icon={<LogOut size={16} />} label="Выйти" />
        </Dropdown.Menu>
      }
    >
      <Button label="Аккаунт" icon={<User size={16} />} />
    </Dropdown>
  );
}
