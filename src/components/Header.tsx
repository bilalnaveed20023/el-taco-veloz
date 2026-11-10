import { marcus, links } from "@/lib/content";

export default function Header() {
  return (
    <header className="top">
      <a href="#top" className="brand" aria-label="El Taco Veloz, home">
        <span className="brand-name">
          El <b>Taco</b> Veloz
        </span>
      </a>
      <nav className="top-nav" aria-label="Sections">
        <a href="#menu">Menu</a>
        <a href="#places">Find us</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <a className="btn btn-orange btn-sm" href={links.tel(marcus)}>Call</a>
    </header>
  );
}
