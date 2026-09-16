"use client";

import { Highlight, themes } from "prism-react-renderer";
import s from "./code.module.css";
import { Scrollable, useAltroneTheme, useMediaMatch } from "altrone-ui";

export function CodeBlock({
  lang = "",
  code = "",
  filename,
}: {
  lang?: string;
  code?: string;
  filename?: string;
}) {
  const { theme } = useAltroneTheme();
  const prefersDark = useMediaMatch("(prefers-color-scheme: dark)");
  const isDark = theme === "dark" || (theme === "auto" && prefersDark);

  return (
    <Scrollable className={s.code}>
      {filename && <div className="code-block__filename">{filename}</div>}
      <Highlight
        theme={isDark ? themes.vsDark : themes.github}
        code={code.trim()}
        language={lang || "text"}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Scrollable>
  );
}
