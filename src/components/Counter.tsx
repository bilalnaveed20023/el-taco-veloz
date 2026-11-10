import { asset } from "@/lib/content";
import Reveal from "./Reveal";

const facts = [
  ["Counter service", "Order at the window, watch the board, grab it when it’s up."],
  ["Seats", "There are seats, but reviewers say not much atmosphere. It’s a lunch-break kind of place."],
  ["Vegan and gluten-free", "Mushrooms with fried veggies, veggie sausage and beans are on the board. Reviewers mention gluten-free options too."],
  ["Toppings come standard", "Onions, cilantro and grilled peppers are added to a dish unless you ask for it plain."],
];

export default function Counter() {
  return (
    <section className="counter" id="counter">
      <div className="wrap counter-grid">
        <Reveal className="counter-copy">
          <p className="mono kicker">The counter</p>
          <h2 className="display h2">
            A taco window in the back of <span className="o">Marcus Market.</span>
          </h2>
          <p>
            The counter inside the market on 2nd Ave in Midtown is easy to miss from the street, which regulars call a hidden gem. A second El Taco Veloz on Toledo St
            in Southwest Detroit opens at 7 AM and has even more reviews.
          </p>
          <ul className="facts">
            {facts.map(([h, t]) => (
              <li key={h}>
                <b className="display">{h}</b>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="counter-photos" delay={80}>
          <img src={asset("/img/menu-board.webp")} alt="The menu boards at the El Taco Veloz counter inside Marcus Market" width={1400} height={640} loading="lazy" />
          <div className="duo">
            <img src={asset("/img/torta-2.webp")} alt="A torta on a plate with a lime" width={1200} height={1600} loading="lazy" />
            <img src={asset("/img/combo.webp")} alt="Tacos and rice in a to-go clamshell" width={1200} height={1600} loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
