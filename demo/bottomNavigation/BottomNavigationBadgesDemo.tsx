"use client";

import { BottomNavigation } from "altrone-ui";
import { Home, Bell, Wallet, User } from "lucide-react";

export default function BottomNavigationBadgesDemo() {
  return (
    <BottomNavigation floating={false}>
      <BottomNavigation.Link icon={<Home />} label="Home" selected />
      <BottomNavigation.Link icon={<Bell />} label="Alerts" badge="3" />
      <BottomNavigation.Link icon={<Wallet />} label="Wallet" badge="NEW" />
      <BottomNavigation.Link icon={<User />} label="Profile" />
    </BottomNavigation>
  );
}
