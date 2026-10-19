"use client";

import { useState, type CSSProperties } from "react";
import { BottomNavigation } from "altrone-ui";
import { Home, Search, User } from "lucide-react";

export default function BottomNavigationCssVarsDemo() {
  const [active, setActive] = useState("home");

  return (
    <BottomNavigation
      floating={false}
      style={
        {
          "--bottom-navigation-rounding": "12px",
          "--bottom-navigation-link-rounding": "8px",
          "--bottom-navigation-selected-link-text-color": "var(--danger-text-1)",
        } as CSSProperties
      }
    >
      <BottomNavigation.Link icon={<Home />} label="Home" selected={active === "home"} onClick={() => setActive("home")} />
      <BottomNavigation.Link icon={<Search />} label="Search" selected={active === "search"} onClick={() => setActive("search")} />
      <BottomNavigation.Link icon={<User />} label="Profile" selected={active === "profile"} onClick={() => setActive("profile")} />
    </BottomNavigation>
  );
}
