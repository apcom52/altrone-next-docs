"use client";

import { useState } from "react";
import { BottomNavigation } from "altrone-ui";
import { Bell, Home, Mail, Search, Settings, User, Wallet } from "lucide-react";

const ITEMS = [
  { id: "home", label: "Home", icon: <Home /> },
  { id: "search", label: "Search", icon: <Search /> },
  { id: "mail", label: "Mail", icon: <Mail /> },
  { id: "alerts", label: "Alerts", icon: <Bell /> },
  { id: "wallet", label: "Wallet", icon: <Wallet /> },
  { id: "settings", label: "Settings", icon: <Settings /> },
  { id: "profile", label: "Profile", icon: <User /> },
];

export default function BottomNavigationGuidelineCountBadDemo() {
  const [active, setActive] = useState("home");

  return (
    <BottomNavigation floating={false}>
      {ITEMS.map((item) => (
        <BottomNavigation.Link
          key={item.id}
          icon={item.icon}
          label={item.label}
          selected={active === item.id}
          onClick={() => setActive(item.id)}
        />
      ))}
    </BottomNavigation>
  );
}
