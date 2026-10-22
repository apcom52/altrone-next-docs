"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, Button, Flex, Skeleton, Text } from "altrone-ui";

export default function SkeletonLoadingStateDemo() {
  const [loading, setLoading] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const simulateLoading = () => {
    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    timer.current = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <Flex orientation="vertical" gap="l" style={{ width: "100%", maxWidth: 360 }}>
      <Flex gap="m" align="center" aria-busy={loading} aria-live="polite">
        {loading ? (
          <>
            <Skeleton width="40px" height="40px" radius="50%" />
            <Flex orientation="vertical" gap="xs" style={{ flex: 1 }}>
              <Skeleton width="50%" height="14px" radius="4px" />
              <Skeleton width="70%" height="12px" radius="4px" />
            </Flex>
          </>
        ) : (
          <>
            <Avatar firstName="Alex" lastName="Morgan" size="l" />
            <Flex orientation="vertical" gap="xxs">
              <Text weight="bold">Alex Morgan</Text>
              <Text color="muted">Product designer</Text>
            </Flex>
          </>
        )}
      </Flex>
      <Flex>
        <Button label="Simulate loading" onClick={simulateLoading} />
      </Flex>
    </Flex>
  );
}
