"use client";

import { Toolbar } from "altrone-ui";
import Image from "next/image";
import Link from "next/link";
import s from "./LogoMark.module.css";

/** Clickable "Altrone UI" brand lockup — logo mark + wordmark, shared by every header. */
export function LogoMark({ locale }: { locale: string }) {
  return (
    <Link href={`/${locale}`} className={s.logoLink}>
      <Toolbar.Logo className={s.logoMark}>
        <Image src="/logos/altrone-4.png" alt="" width={36} height={36} priority />
      </Toolbar.Logo>
      <span className={s.logoText}>Altrone UI</span>
    </Link>
  );
}
