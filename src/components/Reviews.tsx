import { links, marcus, reviews, stars } from "@/lib/content";
import Reveal from "./Reveal";
import { Star } from "./art";

export default function Reviews() {
  const max = Math.max(...stars);
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <Reveal className="rev-head">
          <div>
            <p className="mono kicker">What people say</p>
            <h2 className="display h2">
              <span className="o">{marcus.rating}</span> stars from {marcus.reviews} regulars.
            </h2>
          </div>
          <div className="score">
            <span className="stars" aria-label={`${marcus.rating} out of 5 stars`}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="st" />
              ))}
            </span>
            <ul className="hist" aria-label="Rating breakdown">
              {stars.map((n, i) => (
                <li key={i}>
                  <span className="mono">{5 - i}</span>
                  <i style={{ width: `${(n / max) * 100}%` }} />
                  <em className="mono">{n}</em>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <ul className="tickets">
          {reviews.map((r, i) => (
            <li key={r.who} className="ticket">
              <Reveal delay={(i % 4) * 60}>
                <blockquote>
                  <span className="tno mono">Order #{String(101 + i)}</span>
                  <p>“{r.text}”</p>
                  <footer>
                    <b>{r.who}</b> · {r.when}
                  </footer>
                </blockquote>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="rev-foot mono">
          Public Google reviews of the Marcus Market counter, first names only. <a href={links.place} target="_blank" rel="noopener noreferrer">Read them all</a>
        </p>
      </div>
    </section>
  );
}
