"use client";

import * as React from "react";

import Link from "next/link";

import { ArrowUpCircleIcon } from "lucide-react";

import { api } from "@/lib/api";
import { useLanguage } from "@/hooks/use-language-context";
import { t } from "@/lib/translations";

export function UpdateBadge() {
  const [latest, setLatest] = React.useState("");
  const { language } = useLanguage();

  React.useEffect(() => {
    let alive = true;
    api
      .checkUpdate()
      .then((r) => {
        if (alive && r.has_update && r.latest) setLatest(r.latest.replace(/^v(?=\d)/, ""));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  if (!latest) return null;

  return (
    <Link
      href="/system/settings"
      title={t('update.new_version', language, { version: latest })}
      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 font-medium text-primary-foreground text-xs transition-opacity hover:opacity-90"
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-foreground opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-primary-foreground" />
      </span>
      <ArrowUpCircleIcon className="size-3.5" />
      <span className="hidden sm:inline">{t('update.new_version_short', language)} {latest}</span>
      <span className="sm:hidden">{t('update.new_version_short', language)}</span>
    </Link>
  );
}
