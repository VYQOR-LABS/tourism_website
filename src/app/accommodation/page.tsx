import Image from "next/image";
import Container from "@/components/ui/container";
import PageHero from "@/components/hero/page-hero";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import { accommodation } from "@/data/accommodation";

export default function AccommodationPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Rest well, travel deeper"
          title="Stay in places that feel as memorable as the journey"
          description="Explore sample lodges, villas and boutique stays across East Africa."
          image={accommodation[0].image}
          imageAlt={accommodation[0].name}
        />

        <section className="py-20">
          <Container className="grid gap-6 lg:grid-cols-2">
            {accommodation.map((stay) => (
              <article key={stay.id} className="overflow-hidden rounded-[1.8rem] border border-[#ece3d3] bg-white shadow-[0_14px_30px_rgba(16,28,25,0.06)]">
                <div className="relative h-72">
                  <Image src={stay.image} alt={stay.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-3xl text-[#1d241f]">{stay.name}</h3>
                    <span className="rounded-full bg-[#f3efe9] px-3 py-1 text-xs font-medium text-[#1a4b41]">{stay.type}</span>
                  </div>
                  <p className="text-sm text-[#587168]">{stay.location}</p>
                  <p className="text-sm leading-7 text-[#4d564f]">{stay.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {stay.amenities.map((feature) => (
                      <span key={feature} className="rounded-full bg-[#edf3ef] px-2.5 py-1 text-xs text-[#23493e]">{feature}</span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-[#173c36]">From ${stay.priceFrom}/night</p>
                </div>
              </article>
            ))}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
