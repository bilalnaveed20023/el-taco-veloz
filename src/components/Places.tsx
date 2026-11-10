import { links, places } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";
import { Star } from "./art";

export default function Places() {
  return (
    <section className="places" id="places">
      <div className="wrap">
        <Reveal>
          <p className="mono kicker">Find us</p>
          <h2 className="display h2">
            Two spots. <span className="o">Same tacos.</span>
          </h2>
        </Reveal>
        <div className="place-grid">
          {places.map((p, i) => (
            <Reveal key={p.id} className="place" delay={i * 80}>
              <div className="place-top">
                <p className="mono where">{p.where}</p>
                <h3 className="display">{p.name}</h3>
                <address>
                  {p.street}
                  <br />
                  {p.city} {p.zip}
                </address>
                <p className="rate">
                  <Star className="rs" />
                  <b>{p.rating}</b> · {p.reviews.toLocaleString()} Google reviews
                </p>
                <ul className="hrs">
                  {p.hours.map((h) => (
                    <li key={h.days}>
                      <span>{h.days}</span>
                      <b>{h.time}</b>
                    </li>
                  ))}
                </ul>
                <OpenStatus byDay={p.byDay} className="place-status" />
                <div className="place-cta">
                  <a className="btn btn-orange" href={links.tel(p)}>Call {p.phone}</a>
                  <a className="btn btn-line" href={links.directions(p)} target="_blank" rel="noopener noreferrer">Directions</a>
                </div>
              </div>
              <div className="place-map">
                <iframe title={`Map: El Taco Veloz, ${p.street}`} src={links.embed(p)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="menu-note">The menu above is from the Marcus Market counter. Toledo St may differ, so ask when you call.</p>
      </div>
    </section>
  );
}
