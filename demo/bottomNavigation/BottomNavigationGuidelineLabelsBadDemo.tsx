"use client";

import { useState } from "react";
import { BottomNavigation } from "altrone-ui";
import { Home, Wallet, User } from "lucide-react";

export default function BottomNavigationGuidelineLabelsBadDemo() {
  const [active, setActive] = useState("home");

  return (
    <BottomNavigation floating={false}>
      <BottomNavigation.Link icon={<Home />} label="Your personal home page" selected={active === "home"} onClick={() => setActive("home")} />
      <BottomNavigation.Link icon={<Wallet />} label="Money and payments" selected={active === "wallet"} onClick={() => setActive("wallet")} />
      <BottomNavigation.Link icon={<User />} label="Account settings" selected={active === "profile"} onClick={() => setActive("profile")} />
    </BottomNavigation>
  );
}
