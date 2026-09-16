"use client";

import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

const AsideContext = createContext<{
  aside: ReactNode;
  setAside: (node: ReactNode) => void;
}>({ aside: null, setAside: () => {} });

export function AsideProvider({ children }: { children: ReactNode }) {
  const [aside, setAside] = useState<ReactNode>(null);
  return (
    <AsideContext.Provider value={{ aside, setAside }}>
      {children}
    </AsideContext.Provider>
  );
}

export function useAside() {
  return useContext(AsideContext).aside;
}

/**
 * Every docs page renders this (with `null` when it has no TOC) so the
 * persistent `Screen.Aside` always reflects the *current* page — without it,
 * navigating from a page with a TOC to one without would leave the old TOC
 * showing, since `Screen` itself never remounts between docs routes.
 */
export function PageAside({ children }: { children?: ReactNode }) {
  const { setAside } = useContext(AsideContext);
  useLayoutEffect(() => {
    setAside(children ?? null);
  }, [children, setAside]);
  return null;
}
