"use client";

import { useMemo, Suspense, Component } from "react";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Loading, Message } from "altrone-ui";
import s from "./playground.module.css";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div className={s.error}>
          <Message severity="danger">
            Failed to load demo: <code>{(this.props as any).src}</code>
          </Message>
        </div>
      );
    }
    return this.props.children;
  }
}

export function Playground({
  src,
  caption,
}: {
  src?: string;
  caption?: string;
}) {
  const Demo = useMemo(
    () =>
      dynamic(() => import(`@/demo/${src}`), {
        loading: () => <Loading />,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [src],
  );

  if (!src) return null;

  return (
    <div className={s.playground}>
      <div className={s.preview}>
        <ErrorBoundary src={src}>
          <Suspense fallback={<Loading />}>
            <Demo />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className={s.captionWrapper}>
        {caption && <div className={s.caption}>{caption}</div>}
      </div>
    </div>
  );
}
