"use client";

import { useState } from "react";
import { BottomNavigation } from "altrone-ui";
import { Home, Search, Bell, User } from "lucide-react";

export default function BottomNavigationGuidelineCountGoodDemo() {
  const [active, setActive] = useState("home");

  return (
    <BottomNavigation floating={false}>
      <BottomNavigation.Link icon={<Home />} label="Home" selected={active === "home"} onClick={() => setActive("home")} />
      <BottomNavigation.Link icon={<Search />} label="Search" selected={active === "search"} onClick={() => setActive("search")} />
      <BottomNavigation.Link icon={<Bell />} label="Alerts" selected={active === "alerts"} onClick={() => setActive("alerts")} />
      <BottomNavigation.Link icon={<User />} label="Profile" selected={active === "profile"} onClick={() => setActive("profile")} />
    </BottomNavigation>
  );
}
