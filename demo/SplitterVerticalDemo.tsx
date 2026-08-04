"use client";

import { Splitter, Text } from "altrone-ui";

const CODE = `function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(result); // 55`;

export default function SplitterVerticalDemo() {
  return (
    <div style={{ height: 300, width: "100%", border: "1px solid var(--alt-border-color)", borderRadius: 8, overflow: "hidden" }}>
      <Splitter orientation="vertical">
        <Splitter.Panel defaultSize={60} min={30}>
          <div style={{ padding: 16, height: "100%", background: "var(--alt-surface-color)" }}>
            <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>Редактор</Text>
            <pre style={{ margin: 0, fontFamily: "monospace", fontSize: 13, lineHeight: 1.6, color: "var(--alt-text-color)" }}>
              {CODE}
            </pre>
          </div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={{ padding: 16 }}>
            <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>Результат</Text>
            <Text block size={4} color="muted">fibonacci(10) = 55</Text>
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
