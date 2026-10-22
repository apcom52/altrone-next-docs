"use client";

import { Avatar, Flex } from "altrone-ui";

export default function AvatarPhotoDemo() {
  return (
    <Flex gap="m" align="center">
      <Avatar
        firstName="Nino"
        lastName="Kobakhidze"
        imageSrc="https://i.pravatar.cc/150?img=47"
        size="l"
      />
      <Avatar
        firstName="Nino"
        lastName="Kobakhidze"
        imageSrc="https://broken-url.example/avatar.jpg"
        size="l"
      />
    </Flex>
  );
}
