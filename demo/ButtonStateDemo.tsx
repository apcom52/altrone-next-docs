"use client";

import { useState } from "react";
import { Button, Flex } from "altrone-ui";

type State = "idle" | "loading" | "succeeded" | "failed";

function AsyncButton({ label, outcome }: { label: string; outcome: "succeeded" | "failed" }) {
  const [state, setState] = useState<State>("idle");

  async function handleClick() {
    setState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setState(outcome);
    setTimeout(() => setState("idle"), 2000);
  }

  return <Button label={label} state={state} onClick={handleClick} variant="submit" />;
}

export default function ButtonStateDemo() {
  return (
    <Flex align="center" gap="m">
      <AsyncButton label="Сохранить" outcome="succeeded" />
      <AsyncButton label="Отправить" outcome="failed" />
    </Flex>
  );
}
