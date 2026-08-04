"use client";

import { TextInput, Flex } from "altrone-ui";

export default function TextInputStatesDemo() {
  return (
    <Flex direction="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value="Обычный ввод" onChange={() => {}} />
      <TextInput value="Ошибка в поле" onChange={() => {}} invalid />
      <TextInput value="Только чтение" onChange={() => {}} readOnly />
      <TextInput value="Отключено" onChange={() => {}} disabled />
    </Flex>
  );
}
