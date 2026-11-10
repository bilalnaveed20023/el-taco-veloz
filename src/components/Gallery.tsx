import { asset, gallery } from "@/lib/content";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="gallery" aria-label="Photos from customers">
      <ul className="tiles">
        {gallery.map((g, i) => (
          <li key={g.src} className={g.cls}>
            <Reveal delay={(i % 4) * 50}>
              <img src={asset(g.src)} alt={g.alt} loading="lazy" width={1200} height={g.cls === "wide" ? 800 : 1600} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
