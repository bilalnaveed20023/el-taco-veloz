"use client";

import { useState } from "react";
import { addOns, board, proteins, type Protein } from "@/lib/content";
import Reveal from "./Reveal";

const filters: { id: "all" | Protein["kind"]; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "meat", label: "Meat" },
  { id: "vegan", label: "Vegan" },
  { id: "sea", label: "Seafood" },
];

export default function Menu() {
  const [f, setF] = useState<(typeof filters)[number]["id"]>("all");

  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="mono kicker">The board</p>
          <h2 className="display h2">
            Order <span className="o">fast.</span> Eat well.
          </h2>
          <p className="lede">Pulled from the menu board at the Marcus Market counter. Tax is not included in menu prices.</p>
        </Reveal>

        <div className="boards">
          {board.map((b, i) => (
            <Reveal key={b.id} className={`panel p${i}`} delay={i * 60}>
              <h3 className="display">{b.title}</h3>
              {b.note ? <p className="panel-note">{b.note}</p> : null}
              <ul>
                {b.rows.map((r) => (
                  <li key={r.n}>
                    <div className="row">
                      <span className="rn">{r.n}</span>
                      <span className="rdots" aria-hidden="true" />
                      <span className="rp display">{r.p}</span>
                    </div>
                    {r.d ? <p className="rd">{r.d}</p> : null}
                    {r.dinner ? <p className="rdin mono">{r.dinner}</p> : null}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="protein" delay={60}>
          <div className="protein-head">
            <h3 className="display">Pick your protein</h3>
            <div className="filters" role="group" aria-label="Filter proteins">
              {filters.map((x) => (
                <button key={x.id} type="button" aria-pressed={f === x.id} className={f === x.id ? "on" : ""} onClick={() => setF(x.id)}>
                  {x.label}
                </button>
              ))}
            </div>
          </div>
          <ul className="prots">
            {proteins.map((p) => (
              <li key={p.n} className={`${p.kind}${f !== "all" && f !== p.kind ? " dim" : ""}`}>
                <b className="display">{p.n}</b>
                <span>{p.en}</span>
                {p.note ? <em className="mono">{p.note}</em> : null}
                <i aria-hidden="true">{p.kind === "vegan" ? "VEGAN" : p.kind === "sea" ? "SEAFOOD" : "MEAT"}</i>
              </li>
            ))}
          </ul>
          <p className="addons">
            <span className="mono">Add-ons</span> {addOns.join(" · ")}. Marked add-ons come automatically unless you say otherwise. Extra salsa is 75¢.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
