import { links, places } from "@/lib/content";
import { Van } from "./art";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Van className="foot-van" />
          <p className="display">El Taco Veloz</p>
        </div>
        <div className="foot-cols">
          {places.map((p) => (
            <div key={p.id}>
              <p className="mono label">{p.name}</p>
              <p>
                {p.street}
                <br />
                {p.city} {p.zip}
                <br />
                <a href={links.tel(p)}>{p.phone}</a>
              </p>
            </div>
          ))}
        </div>
        <p className="foot-fine mono">© {new Date().getFullYear()} El Taco Veloz · Detroit</p>
      </div>
    </footer>
  );
}
