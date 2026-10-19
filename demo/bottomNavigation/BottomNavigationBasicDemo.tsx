"use client";

import { useState } from "react";
import { BottomNavigation } from "altrone-ui";
import { Home, Wallet, Settings, User } from "lucide-react";

export default function BottomNavigationBasicDemo() {
  const [active, setActive] = useState("home");

  return (
    <BottomNavigation floating={false}>
      <BottomNavigation.Link
        icon={<Home />}
        label="Home"
        selected={active === "home"}
        onClick={() => setActive("home")}
      />
      <BottomNavigation.Link
        icon={<Wallet />}
        label="Wallet"
        selected={active === "wallet"}
        onClick={() => setActive("wallet")}
      />
      <BottomNavigation.Link
        icon={<Settings />}
        label="Settings"
        selected={active === "settings"}
        onClick={() => setActive("settings")}
      />
      <BottomNavigation.Link
        icon={<User />}
        label="Profile"
        selected={active === "profile"}
        onClick={() => setActive("profile")}
      />
    </BottomNavigation>
  );
}
