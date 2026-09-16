"use client";

import { Toolbar } from "altrone-ui";
import { Altrone4 } from "altrone-ui/logos";
import Link from "next/link";
import s from "./LogoMark.module.css";

/** Clickable "Altrone UI" brand lockup — logo mark + wordmark, shared by every header. */
export function LogoMark({ locale }: { locale: string }) {
  return (
    <Link href={`/${locale}`} className={s.logoLink}>
      <Toolbar.Logo className={s.logoMark}>
        <Altrone4 />
      </Toolbar.Logo>
      <span className={s.logoText}>Altrone UI</span>
    </Link>
  );
}
