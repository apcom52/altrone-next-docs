"use client";

import { useEffect, useState } from "react";
import { Button, Flex, Progress } from "altrone-ui";

export default function ProgressLiveDemo() {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setValue((current) => {
        if (current >= 100) {
          setRunning(false);
          return 100;
        }
        return current + 4;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [running]);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      <Progress value={value} label={value >= 100 ? "Done" : `Uploading… ${value}%`} />
      <Button
        label={value >= 100 ? "Upload again" : "Start upload"}
        disabled={running}
        onClick={() => {
          setValue(0);
          setRunning(true);
        }}
      />
    </Flex>
  );
}
