"use client";

import { Flex, Text, Button } from "altrone-ui";

const users = [
  { name: "Александра Белова", role: "Product Designer", initials: "АБ" },
  { name: "Михаил Соколов", role: "Frontend Engineer", initials: "МС" },
  { name: "Елена Морозова", role: "Engineering Manager", initials: "ЕМ" },
];

export default function FlexNestedDemo() {
  return (
    <Flex direction="vertical" gap="s" style={{ width: "100%", maxWidth: 400 }}>
      {users.map((u) => (
        <Flex
          key={u.name}
          justify="between"
          align="center"
          style={{
            padding: "10px 14px",
            background: "var(--altrone-layer-2)",
            borderRadius: "10px",
            border: "1px solid var(--altrone-border)",
          }}
        >
          <Flex gap="m" align="center">
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "var(--altrone-accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Text size={2} weight="bold" style={{ color: "#fff" }}>{u.initials}</Text>
            </div>
            <Flex direction="vertical" gap="xxs">
              <Text size={3} weight="medium">{u.name}</Text>
              <Text size={2} color="muted">{u.role}</Text>
            </Flex>
          </Flex>
          <Button label="Профиль" size="s" variant="text" />
        </Flex>
      ))}
    </Flex>
  );
}
