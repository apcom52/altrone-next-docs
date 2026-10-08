"use client";

import { useState } from "react";
import { Button } from "altrone-ui";
import { PartyPopper, TriangleAlert } from "lucide-react";

type State = "idle" | "loading" | "succeeded" | "failed";

export default function ButtonStateIconsDemo() {
  const [state, setState] = useState<State>("idle");

  async function handleClick() {
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState(Math.random() > 0.5 ? "succeeded" : "failed");
    setTimeout(() => setState("idle"), 2000);
  }

  return (
    <Button
      label="Publish"
      variant="submit"
      state={state}
      successIcon={<PartyPopper />}
      failedIcon={<TriangleAlert />}
      onClick={handleClick}
    />
  );
}
