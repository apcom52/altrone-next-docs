"use client";

import { Highlight, themes } from "prism-react-renderer";
import s from "./code.module.css";

export function CodeBlock({
  lang = "",
  code = "",
  filename,
}: {
  lang?: string;
  code?: string;
  filename?: string;
}) {
  return (
    <div className={s.code}>
      {filename && <div className="code-block__filename">{filename}</div>}
      <Highlight
        theme={themes.github}
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
    </div>
  );
}
