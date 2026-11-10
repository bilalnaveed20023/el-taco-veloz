import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Counter from "@/components/Counter";
import Places from "@/components/Places";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { places } from "@/lib/content";

const jsonLd = places.map((p) => ({
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: "El Taco Veloz",
  description: p.id === "marcus" ? "Counter inside Marcus Market" : undefined,
  servesCuisine: ["Mexican", "Tacos", "Vegan options"],
  telephone: p.tel,
  priceRange: "$",
  address: { "@type": "PostalAddress", streetAddress: p.street, addressLocality: "Detroit", addressRegion: "MI", postalCode: p.zip, addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: p.lat, longitude: p.lng },
  aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviews },
}));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Counter />
        <Places />
        <Reviews />
        <Gallery />
      </main>
      <Footer />
      <StickyBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
