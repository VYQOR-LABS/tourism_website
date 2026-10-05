import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const destination = destinations.find((item) => item.slug === slug);

    return {
      title: destination ? `${destination.name} | Travel Guide` : "Destination",
      description: destination?.description ?? "Explore this destination.",
    };
  });
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  const relatedTours = tours.filter((tour) => tour.destination.toLowerCase().includes(destination.name.toLowerCase().split(" ")[0] || destination.name.toLowerCase()));

  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[420px] items-center overflow-hidden sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image src={destination.image} alt={destination.name} fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d1b]/85 via-[#0a1c1a]/60 to-[#0a1c1a]/20" />
          </div>

          <Container className="relative w-full py-24 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e2f0eb]">{destination.region}</p>
            <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">{destination.name}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">{destination.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm">Best time: {destination.bestTime}</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm">Average stay: {destination.averageStay}</span>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-serif text-4xl text-[#1b221e]">About {destination.name}</h2>
              <p className="mt-4 text-base leading-8 text-[#4f5d59]">
                {destination.description} This destination captures the spirit of East Africa through landscapes, communities and experiences that feel both premium and authentic.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#e8dfd2] bg-[#fffdf9] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#2d665d]">Ideal for</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {destination.idealFor.map((item) => (
                      <span key={item} className="rounded-full bg-[#edf3ef] px-2.5 py-1 text-xs text-[#23493e]">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[#e8dfd2] bg-[#fffdf9] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#2d665d]">Popular activities</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {destination.activities.map((item) => (
                      <span key={item} className="rounded-full bg-[#f6efe0] px-2.5 py-1 text-xs text-[#4e5739]">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#e8dfd2] bg-[#fffdf9] p-6 shadow-[0_12px_30px_rgba(27,34,31,0.05)]">
              <p className="text-xs uppercase tracking-[0.22em] text-[#2d665d]">Quick facts</p>
              <ul className="mt-6 space-y-4 text-sm text-[#485d58]">
                <li className="flex items-center gap-3"><MapPin size={16} className="text-[#173c36]" /> {destination.country}</li>
                <li className="flex items-center gap-3"><Clock3 size={16} className="text-[#173c36]" /> {destination.averageStay}</li>
                <li className="flex items-center gap-3"><Sparkles size={16} className="text-[#173c36]" /> Ideal for {destination.idealFor.join(", ")}</li>
              </ul>
              <Link href="/booking" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-white">
                Plan a trip to {destination.name} <ArrowRight size={15} />
              </Link>
            </aside>
          </Container>
        </section>

        <section className="bg-[#f4efe7] py-20">
          <Container>
            <h2 className="font-serif text-4xl text-[#1b221e]">Recommended tours</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedTours.length > 0 ? relatedTours.slice(0, 3).map((tour) => (
                <div key={tour.id} className="rounded-[1.5rem] border border-[#e8dfd2] bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#2d665d]">{tour.category}</p>
                  <h3 className="mt-3 font-serif text-2xl text-[#1b221e]">{tour.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#4d564f]">{tour.summary}</p>
                  <Link href={`/tours/${tour.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#173c36]">
                    View trip <ArrowRight size={15} />
                  </Link>
                </div>
              )) : <p className="text-[#495b57]">No tours match this destination yet.</p>}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
