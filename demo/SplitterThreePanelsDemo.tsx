"use client";

import { Splitter, Text } from "altrone-ui";

const FILES = ["index.tsx", "styles.css", "utils.ts", "types.ts", "config.json"];
const ERRORS = [
  { file: "index.tsx", line: 12, msg: "Property 'label' is missing" },
  { file: "utils.ts",  line: 7,  msg: "Cannot find name 'fetch'" },
];

export default function SplitterThreePanelsDemo() {
  return (
    <div style={{ height: 260, width: "100%", border: "1px solid var(--alt-border-color)", borderRadius: 8, overflow: "hidden" }}>
      <Splitter>
        <Splitter.Panel defaultSize={20} min={15} max={30}>
          <div style={{ padding: "8px 0", height: "100%" }}>
            <Text block size={3} weight="bold" style={{ padding: "0 12px 8px" }}>Файлы</Text>
            {FILES.map((f) => (
              <div key={f} style={{ padding: "5px 12px" }}>
                <Text size={3}>{f}</Text>
              </div>
            ))}
          </div>
        </Splitter.Panel>
        <Splitter.Panel defaultSize={55}>
          <div style={{ padding: 16 }}>
            <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>index.tsx</Text>
            <pre style={{ margin: 0, fontFamily: "monospace", fontSize: 12, color: "var(--alt-text-color)", lineHeight: 1.7 }}>
              {`import { Button } from 'altrone-ui';\n\nexport default function Page() {\n  return <Button />\n}`}
            </pre>
          </div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={{ padding: 12 }}>
            <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>Ошибки</Text>
            {ERRORS.map((e, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <Text block size={3} color="muted">{e.file}:{e.line}</Text>
                <Text block size={3}>{e.msg}</Text>
              </div>
            ))}
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
