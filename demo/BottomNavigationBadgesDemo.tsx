"use client";

import { BottomNavigation } from "altrone-ui";
import { Home, Bell, Wallet, User } from "lucide-react";

export default function BottomNavigationBadgesDemo() {
  return (
    <BottomNavigation>
      <BottomNavigation.Item icon={<Home />} label="Home" selected />
      <BottomNavigation.Item icon={<Bell />} label="Alerts" badge="3" />
      <BottomNavigation.Item icon={<Wallet />} label="Wallet" badge="NEW" />
      <BottomNavigation.Item icon={<User />} label="Profile" />
    </BottomNavigation>
  );
}
