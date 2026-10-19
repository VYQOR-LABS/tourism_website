import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { tours } from "@/data/tours";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";
import { getPageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const tour = tours.find((item) => item.slug === slug);

    return tour
      ? getPageMetadata({
          title: tour.title,
          description: tour.summary,
          path: `/tours/${tour.slug}`,
          image: tour.image,
        })
      : getPageMetadata({
          title: "East Africa Tour Itinerary",
          description: "Explore safari and travel itineraries across East Africa.",
          path: "/tours",
        });
  });
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: tour.title,
            description: tour.summary,
            touristType: tour.category,
            image: tour.image,
            itinerary: {
              "@type": "ItemList",
              itemListElement: tour.itinerary.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item,
              })),
            },
            provider: { "@type": "TravelAgency", name: SITE_NAME, url: SITE_URL },
            url: `${SITE_URL}/tours/${tour.slug}`,
          }}
        />
        <section className="relative flex min-h-[420px] items-center overflow-hidden sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image src={tour.image} alt={tour.imageAlt} fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a17]/90 via-[#0d1a17]/70 to-[#0d1a17]/25" />
          </div>
          <Container className="relative w-full py-24 text-center text-white">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">{tour.category}</span>
            <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-none sm:text-6xl">{tour.title}</h1>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><MapPin size={14} /> {tour.destination}</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={14} /> {tour.duration}</span>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#355d53]">Overview</p>
              <h2 className="mt-4 font-serif text-4xl text-[#1c221d]">A journey shaped around your travel rhythm</h2>
              <p className="mt-5 text-base leading-8 text-[#4f5d59]">{tour.summary}</p>
              <div className="mt-5 space-y-4 text-base leading-8 text-[#4f5d59]">
                {tour.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl text-[#1b221e]">Highlights</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#425650]">
                  {tour.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-primary)]" /> {highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl text-[#1b221e]">Potential inclusions to confirm</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#425650]">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#3c6c62]" /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl text-[#1b221e]">Suggested itinerary</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#425650]">
                  {tour.itinerary.map((day) => (
                    <li key={day} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" /> {day}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl text-[#1b221e]">Not included unless confirmed</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#425650]">
                  {tour.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3c6c62]" /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl text-[#1b221e]">What to bring</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#425650]">
                  {tour.whatToBring.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3c6c62]" /> {item}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-10 rounded-2xl border border-[#e8dfd2] bg-[#fffdf9] p-5 text-sm leading-7 text-[#495d5a]">
                This is a suggested sample, not a confirmed operator arrangement. Confirm driving times, accommodation, transport, meals, availability and cancellation terms before booking. Wildlife sightings and optional activities are not guaranteed.
              </p>
            </div>

            <aside className="h-fit self-start rounded-[2rem] border border-[#e8dfd2] bg-[#fffdf9] p-6 shadow-[0_12px_30px_rgba(27,34,31,0.05)]">
              <div className="mt-6 space-y-4 text-sm text-[#495d5a]">
                <p>Destination: {tour.destination}</p>
                <p>Duration: {tour.duration}</p>
                <p>Category: {tour.category}</p>
              </div>
              <Link href="/booking" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white">
                Request This Trip <ArrowRight size={15} />
              </Link>
            </aside>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
