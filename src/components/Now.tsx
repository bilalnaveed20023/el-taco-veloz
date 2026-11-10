"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

type S = { tue: boolean; daysToTue: number; bf: boolean } | null;

function compute(): S {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: site.tz, weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.find((p) => p.type === "weekday")?.value ?? "Sun");
  const h = (Number(parts.find((p) => p.type === "hour")?.value) % 24) + Number(parts.find((p) => p.type === "minute")?.value) / 60;
  return { tue: wd === 2, daysToTue: (2 - wd + 7) % 7, bf: h >= 10 && h < 13 };
}

export default function Now({ className = "" }: { className?: string }) {
  const [s, setS] = useState<S>(null);
  useEffect(() => {
    setS(compute());
    const id = setInterval(() => setS(compute()), 60_000);
    return () => clearInterval(id);
  }, []);

  const tueText = !s ? "Every Tuesday" : s.tue ? "Today!" : s.daysToTue === 1 ? "Tomorrow" : `In ${s.daysToTue} days`;
  return (
    <ul className={`now ${className}`} aria-label="Specials right now">
      <li className={`pill tue${s?.tue ? " lit" : ""}`}>
        <b className="display">$2</b>
        <span>
          <em>Taco Tuesday</em>
          {tueText}
        </span>
      </li>
      <li className={`pill bf${s?.bf ? " lit" : ""}`}>
        <b className="display">10–1</b>
        <span>
          <em>Breakfast, daily</em>
          {s?.bf ? "Serving now" : "Burritos $5.99 · tacos $2"}
        </span>
      </li>
    </ul>
  );
}
