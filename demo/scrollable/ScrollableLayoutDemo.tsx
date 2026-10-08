"use client";

import { Box, Flex, Scrollable, Text } from "altrone-ui";

const CHAPTERS = [
  { id: 1, title: "Introduction", preview: "Getting to know the library and the core ideas of the design system." },
  { id: 2, title: "Installation", preview: "How to add Altrone UI to an existing Next.js or Vite project." },
  { id: 3, title: "Theming", preview: "Configuring colors, typography, and spacing through CSS variables." },
  { id: 4, title: "Components", preview: "An overview of every available component and what it is for." },
  { id: 5, title: "Forms", preview: "Working with Form, Form.Field, and built-in validation." },
  { id: 6, title: "Overlays", preview: "Drawer, Modal, Popover, and other layers on top of the page." },
  { id: 7, title: "Layout", preview: "Flex, Grid, Screen, Splitter — building the structure of a page." },
  { id: 8, title: "Accessibility", preview: "ARIA attributes, focus, and keyboard navigation." },
];

export default function ScrollableLayoutDemo() {
  return (
    <Flex style={{ height: 280, width: "100%" }}>
      <Box width={180} material="pale" shape="rounded" radius={12} style={{ flexShrink: 0 }}>
        <Scrollable>
          <Flex orientation="vertical" gap="s" style={{ padding: 12 }}>
            {CHAPTERS.map((chapter) => (
              <Text key={chapter.id} block>{chapter.title}</Text>
            ))}
          </Flex>
        </Scrollable>
      </Box>
      <Box material="pale" shape="rounded" radius={12} style={{ flex: 1, minWidth: 0 }}>
        <Scrollable>
          <Flex orientation="vertical" gap="m" style={{ padding: 12 }}>
            {CHAPTERS.map((chapter) => (
              <Flex key={chapter.id} orientation="vertical">
                <Text block size={5} weight="bold">{chapter.title}</Text>
                <Text block color="muted">{chapter.preview}</Text>
              </Flex>
            ))}
          </Flex>
        </Scrollable>
      </Box>
    </Flex>
  );
}
