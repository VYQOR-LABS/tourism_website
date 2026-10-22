import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import PageHero from "@/components/hero/page-hero";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import { accommodation } from "@/data/accommodation";
import { getPageMetadata } from "@/lib/seo";

const countryOrder = ["Kenya", "Uganda", "Tanzania", "Rwanda"];

export const metadata = getPageMetadata({
  title: "Safari Lodges & Beach Stays in East Africa",
  description: "Explore the hotels and safari lodges suggested for Safariman's sample East African itineraries.",
  path: "/accommodation",
});

export default function AccommodationPage() {
  const staysByCountry = countryOrder.map((country) => ({
    country,
    stays: accommodation.filter((stay) => stay.country === country),
  }));

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Rest well, travel deeper"
          title="Stay in places that feel as memorable as the journey"
          description="Explore the named hotels, safari lodges and coastal stays suggested across our sample itineraries. Availability and rates must be confirmed for your dates."
          image="/serengeti-sunrise.jpg"
          imageAlt="Sunrise over the Serengeti"
        />

        <section className="space-y-16 py-20">
          <Container className="space-y-16">
            <div className="mx-auto max-w-3xl rounded-3xl border border-[#e4d9c9] bg-white px-6 py-7 text-center shadow-[0_14px_30px_rgba(16,28,25,0.04)]">
              <p className="font-serif text-2xl text-[#1d241f]">Rates change with your travel dates</p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#53615d]">
                Room rates vary by season, room type, meal plan and availability. You can always reach out to us for the correct, up-to-date price for your trip.
              </p>
              <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#1b4d43] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#143a33]">
                Ask us for current prices
              </Link>
            </div>
            {staysByCountry.map(({ country, stays }) => (
              <section key={country} aria-labelledby={`stays-${country.toLowerCase()}`}>
                <div className="mb-7 flex items-end justify-between gap-4 border-b border-[#e4d9c9] pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7543]">Suggested stays</p>
                    <h2 id={`stays-${country.toLowerCase()}`} className="mt-2 font-serif text-4xl text-[#1d241f]">{country}</h2>
                  </div>
                  <span className="text-sm text-[#587168]">{stays.length} properties</span>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {stays.map((stay) => (
                    <article key={stay.id} className="overflow-hidden rounded-[1.8rem] border border-[#ece3d3] bg-white shadow-[0_14px_30px_rgba(16,28,25,0.06)]">
                      <div className="relative h-64">
                        <Image src={stay.image} alt={stay.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                      </div>
                      <div className="space-y-4 p-6">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-serif text-2xl text-[#1d241f]">{stay.name}</h3>
                          <span className="shrink-0 rounded-full bg-[#f3efe9] px-3 py-1 text-xs font-medium text-[#1a4b41]">{stay.type}</span>
                        </div>
                        <p className="text-sm text-[#587168]">{stay.location}</p>
                        <p className="text-sm leading-7 text-[#4d564f]">{stay.description}</p>
                        <div className="rounded-2xl bg-[#f7f3ed] p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7543]">Indicative nightly rate</p>
                          <p className="mt-2 font-serif text-xl text-[#173d37]">{stay.startingRate ?? "Contact us for current rates"}</p>
                          {stay.rateSource ? (
                            <a href={stay.rateSource} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-[#587168] underline underline-offset-2">
                              Check property details and request rates
                            </a>
                          ) : (
                            <p className="mt-2 text-xs text-[#587168]">Rates depend on dates, room and meal plan.</p>
                          )}
                        </div>
                        {stay.imageCredit && stay.imageCreditUrl ? (
                          <a href={stay.imageCreditUrl} target="_blank" rel="noreferrer" className="block text-xs text-[#587168] underline underline-offset-2">
                            Photo: {stay.imageCredit}
                          </a>
                        ) : <p className="text-xs text-[#7b847f]">Illustrative hotel or lodge image; not a photo of this specific property.</p>}
                        <div className="flex flex-wrap gap-2">
                          {stay.amenities.map((feature) => (
                            <span key={feature} className="rounded-full bg-[#edf3ef] px-2.5 py-1 text-xs text-[#23493e]">{feature}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
