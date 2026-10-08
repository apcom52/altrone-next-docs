"use client";

import { useState } from "react";
import { Button } from "altrone-ui";

type State = "idle" | "loading" | "succeeded";

export default function ButtonGuidelineAsyncGoodDemo() {
  const [state, setState] = useState<State>("idle");

  async function handleClick() {
    setState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setState("succeeded");
    setTimeout(() => setState("idle"), 2000);
  }

  return <Button label="Save" variant="submit" state={state} onClick={handleClick} />;
}
