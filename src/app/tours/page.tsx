import Image from "next/image";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import TourCard from "@/components/tours/tour-card";
import { tours } from "@/data/tours";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata({
  title: "East Africa Safari & Tour Itineraries",
  description: "Explore safari, beach, culture and adventure itineraries in Kenya, Tanzania, Rwanda and Uganda.",
  path: "/tours",
});

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#102521] text-white sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image src={tours[0].image} alt={tours[0].title} fill className="object-cover opacity-70" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d1b]/90 via-[#0b1d1b]/65 to-[#0b1d1b]/35" />
          </div>
          <Container className="relative w-full py-24 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e2efe8]">Curated journeys</p>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">Explore Tour Packages</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">Safariman Expeditions plans wildlife, beach and culture journeys across Kenya, Tanzania, Rwanda and Uganda.</p>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading title="Browse tours across four countries" description="Choose a sample safari, beach, culture or adventure itinerary in Kenya, Tanzania, Rwanda or Uganda." />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
