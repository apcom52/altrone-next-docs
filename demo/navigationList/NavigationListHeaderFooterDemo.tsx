"use client";

import { useState } from "react";
import { Avatar, Flex, NavigationList, Text } from "altrone-ui";
import { Home, Inbox } from "lucide-react";

export default function NavigationListHeaderFooterDemo() {
  const [page, setPage] = useState("home");

  return (
    <Flex style={{ height: 320 }}>
      <NavigationList aria-label="App">
        <NavigationList.Header>
          <Text weight="bold">Acme Inc.</Text>
        </NavigationList.Header>
        <NavigationList.Link label="Home" icon={<Home />} selected={page === "home"} onClick={() => setPage("home")} />
        <NavigationList.Link label="Inbox" icon={<Inbox />} badge={3} selected={page === "inbox"} onClick={() => setPage("inbox")} />
        <NavigationList.Footer>
          <Flex orientation="horizontal" gap="m" align="center">
            <Avatar firstName="Anna" lastName="Lee" size="s" />
            <Text>Anna Lee</Text>
          </Flex>
        </NavigationList.Footer>
      </NavigationList>
    </Flex>
  );
}
