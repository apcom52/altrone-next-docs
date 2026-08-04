"use client";

import { useRef } from "react";
import { Splitter, Button, Text, Flex } from "altrone-ui";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

export default function SplitterCollapsibleDemo() {
  const controlRef = useRef<React.ComponentRef<typeof Splitter>>(null);

  return (
    <Flex direction="column" gap="s" style={{ width: "100%" }}>
      <Flex gap="s">
        <Button
          label="Свернуть панель"
          icon={<PanelLeftClose size={16} />}
          size="s"
          onClick={() => (controlRef.current as any)?.collapse(0)}
        />
        <Button
          label="Развернуть панель"
          icon={<PanelLeftOpen size={16} />}
          size="s"
          onClick={() => (controlRef.current as any)?.expand(0)}
        />
      </Flex>
      <div style={{ height: 220, border: "1px solid var(--alt-border-color)", borderRadius: 8, overflow: "hidden" }}>
        <Splitter controlRef={controlRef as any}>
          <Splitter.Panel defaultSize={30} min={20} max={50} collapsible>
            <div style={{ padding: 16, height: "100%" }}>
              <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>Боковая панель</Text>
              <Text block size={4} color="muted">Нажмите стрелку на разделителе или кнопки выше.</Text>
            </div>
          </Splitter.Panel>
          <Splitter.Panel>
            <div style={{ padding: 16 }}>
              <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>Основная область</Text>
              <Text block size={4} color="muted">При свёрнутой панели занимает всё пространство.</Text>
            </div>
          </Splitter.Panel>
        </Splitter>
      </div>
    </Flex>
  );
}
