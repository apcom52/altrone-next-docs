"use client";

import { useState } from "react";
import { Button, Flex, NavigationList, showToast } from "altrone-ui";
import { Plus } from "lucide-react";

const PROJECTS = ["Website", "Mobile app", "Design system"];

export default function NavigationListActionsDemo() {
  const [project, setProject] = useState("Website");

  return (
    <Flex style={{ height: 260 }}>
      <NavigationList aria-label="Projects">
        <NavigationList.Group
          title="Projects"
          actions={
            <Button size="s" label="New project" icon={<Plus />} showLabel={false} onClick={() => showToast("New project created")} />
          }
        >
          {PROJECTS.map((name) => (
            <NavigationList.Link
              key={name}
              label={name}
              selected={project === name}
              onClick={() => setProject(name)}
              actions={
                <Button size="s" label={`Add page to ${name}`} icon={<Plus />} showLabel={false} onClick={() => showToast(`Page added to ${name}`)} />
              }
            />
          ))}
        </NavigationList.Group>
      </NavigationList>
    </Flex>
  );
}
