import { asset, links, marcus } from "@/lib/content";
import Now from "./Now";
import OpenStatus from "./OpenStatus";
import { Van } from "./art";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="road" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="mono hero-kicker">Midtown · Southwest Detroit</p>
          <h1 className="display hero-h1">
            <span>Fast tacos.</span>
            <span className="o">Real food.</span>
          </h1>
          <p className="hero-sub">
            Asada, pastor, mushrooms, shrimp. Ordered at the counter, out the window in about five minutes. Vegan options, breakfast every morning, $2 tacos on Tuesdays.
          </p>
          <div className="hero-cta">
            <a className="btn btn-orange" href={links.tel(marcus)}>Call {marcus.phone}</a>
            <a className="btn btn-line" href="#menu">See the menu</a>
          </div>
          <OpenStatus byDay={marcus.byDay} className="hero-status" />
          <Now />
        </div>
        <div className="hero-art">
          <Van className="van" />
          <figure className="hero-photo">
            <img src={asset("/img/asada-tacos.webp")} alt="Asada tacos with cilantro, onion and lime" width={1200} height={1600} fetchPriority="high" />
            <figcaption className="mono">Asada tacos · $3</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
