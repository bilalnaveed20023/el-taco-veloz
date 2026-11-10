"use client";

import { useEffect, useState } from "react";

export type Day = { open: number; close: number }; // 24h decimal hours, open -1 = closed, close may exceed 24 for after-midnight
type State = { open: boolean; label: string } | null;

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fmt = (h: number) => {
  const hh = Math.floor(h) % 24;
  const mm = Math.round((h - Math.floor(h)) * 60);
  return `${((hh + 11) % 12) + 1}${mm ? ":" + String(mm).padStart(2, "0") : ""} ${hh >= 12 ? "PM" : "AM"}`;
};

function compute(byDay: Day[], tz: string): State {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
  const wd = Math.max(0, DAYS.indexOf(parts.find((p) => p.type === "weekday")?.value ?? "Sun"));
  const h = (Number(parts.find((p) => p.type === "hour")?.value) % 24) + Number(parts.find((p) => p.type === "minute")?.value) / 60;
  const today = byDay[wd];
  const prev = byDay[(wd + 6) % 7];
  if (prev.open >= 0 && prev.close > 24 && h < prev.close - 24) return { open: true, label: `Open now · until ${fmt(prev.close)}` };
  if (today.open >= 0 && h >= today.open && h < today.close) return { open: true, label: `Open now · until ${fmt(today.close)}` };
  for (let i = 0; i < 7; i++) {
    const d = (wd + i) % 7;
    const t = byDay[d];
    if (t.open < 0) continue;
    if (i === 0 && h >= t.open) continue;
    const when = i === 0 ? "today" : i === 1 ? "tomorrow" : DAYS[d];
    return { open: false, label: `Closed · opens ${when} ${fmt(t.open)}` };
  }
  return { open: false, label: "Closed" };
}

export default function OpenStatus({ byDay, tz = "America/Detroit", className = "" }: { byDay: Day[]; tz?: string; className?: string }) {
  const [s, setS] = useState<State>(null);
  useEffect(() => {
    setS(compute(byDay, tz));
    const id = setInterval(() => setS(compute(byDay, tz)), 60_000);
    return () => clearInterval(id);
  }, [byDay, tz]);
  return (
    <span className={`status ${s ? (s.open ? "is-open" : "is-closed") : ""} ${className}`}>
      <i aria-hidden="true" />
      {s ? s.label : "See hours below"}
    </span>
  );
}
