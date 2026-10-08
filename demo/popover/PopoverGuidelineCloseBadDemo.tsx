"use client";

import { useState } from "react";
import { Popover, Button, Text, Flex } from "altrone-ui";
import { Star } from "lucide-react";

export default function PopoverGuidelineCloseBadDemo() {
  const [favorited, setFavorited] = useState(false);

  return (
    <Popover
      content={
        <Flex orientation="vertical" gap="s" style={{ padding: 16, width: 200 }}>
          <Text block size={3}>Add this project to favorites?</Text>
          <Button
            label="Add to favorites"
            variant="submit"
            size="s"
            onClick={() => setFavorited(true)}
          />
        </Flex>
      }
    >
      <Button
        label={favorited ? "Favorited" : "Favorite"}
        icon={<Star size={16} fill={favorited ? "currentColor" : "none"} />}
      />
    </Popover>
  );
}
