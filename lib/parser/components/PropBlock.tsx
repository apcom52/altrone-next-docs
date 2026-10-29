"use client";

import type { ReactNode } from "react";
import { Flex, Label } from "altrone-ui";
import s from "./prop.module.css";
import clsx from "clsx";

export function PropBlock({
  name,
  id,
  required,
  propType,
  propDefault,
  version,
  deprecated,
  children,
}: {
  name?: string;
  id?: string;
  required?: boolean | string;
  propType?: string;
  propDefault?: string;
  version?: string;
  deprecated?: boolean | string;
  children?: ReactNode;
}) {
  const isRequired = required === true || required === "true";
  const isDeprecated = deprecated === true || deprecated === "true";

  return (
    <div id={id} className={s.PropertyWrapper}>
      <div className={s.Property}>
        <div className={s.PropertyHeader}>
          <div
            className={clsx(
              s.PropertyName,
              isDeprecated && s.PropertyNameDeprecated,
            )}
          >
            {name}
          </div>
          <div className={s.PropertyMeta}>
            <span className={clsx(s.PropertyMetaItem, s.PropertyType)}>
              {propType}
            </span>
            {isRequired ? (
              <span className={clsx(s.PropertyMetaItem, s.PropertyRequired)}>
                Required
              </span>
            ) : null}
            {version && parseInt(version) > 40 ? (
              <span className={clsx(s.PropertyMetaItem, s.PropertyVersion)}>
                Version:{" "}
                <span
                  className={s.PropertyValue}
                >{`${Math.floor(Number(version) / 10)}.${Number(version) % 10}`}</span>
              </span>
            ) : null}
            {propDefault ? (
              <span className={clsx(s.PropertyMetaItem, s.PropertyDefault)}>
                Default: <span className={s.PropertyValue}>{propDefault}</span>
              </span>
            ) : null}
            {deprecated ? (
              <span className={clsx(s.PropertyMetaItem, s.PropertyDeprecated)}>
                Deprecated
              </span>
            ) : null}
          </div>
        </div>
        <div className={s.PropertyDescription}>{children}</div>
      </div>
    </div>
  );
}
