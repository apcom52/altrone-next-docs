"use client";

import { BottomNavigation } from "altrone-ui";
import { Home, Search } from "lucide-react";

export default function BottomNavigationInlineDemo() {
  return (
    <BottomNavigation floating={false}>
      <BottomNavigation.Link icon={<Home />} label="Home" selected />
      <BottomNavigation.Link icon={<Search />} label="Search" />
    </BottomNavigation>
  );
}
