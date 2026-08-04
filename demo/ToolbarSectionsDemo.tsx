"use client";

import { useState } from "react";
import { Toolbar, Search } from "altrone-ui";
import { Settings, Bell, Plus } from "lucide-react";

export default function ToolbarSectionsDemo() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ width: "100%" }}>
      <Toolbar>
        <Toolbar.Leading>
          <Toolbar.Title label="Мой воркспейс" clickable />
        </Toolbar.Leading>
        <Toolbar.Center>
          <Search
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск..."
            style={{ width: 240 }}
          />
        </Toolbar.Center>
        <Toolbar.Trailing>
          <Toolbar.Action label="Создать" icon={<Plus size={16} />} />
          <Toolbar.Action label="Уведомления" icon={<Bell size={16} />} showLabel={false} badge={3} />
          <Toolbar.Action label="Настройки" icon={<Settings size={16} />} showLabel={false} />
        </Toolbar.Trailing>
      </Toolbar>
    </div>
  );
}
