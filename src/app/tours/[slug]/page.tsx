import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";
import type { Metadata } from "next";
import { tours } from "@/data/tours";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const tour = tours.find((item) => item.slug === slug);

    return {
      title: tour ? `${tour.title} | Sample Tourism Package` : "Tour Package",
      description: tour?.summary ?? "Explore this tour package.",
    };
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
        <section className="relative flex min-h-[420px] items-center overflow-hidden sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image src={tour.image} alt={tour.title} fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a17]/90 via-[#0d1a17]/70 to-[#0d1a17]/25" />
          </div>
          <Container className="relative w-full py-24 text-center text-white">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">{tour.category}</span>
            <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-none sm:text-6xl">{tour.title}</h1>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><MapPin size={14} /> {tour.destination}</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={14} /> {tour.duration}</span>
              <span className="inline-flex items-center gap-2"><Star size={14} fill="currentColor" /> {tour.rating}</span>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#355d53]">Overview</p>
              <h2 className="mt-4 font-serif text-4xl text-[#1c221d]">A journey shaped around your travel rhythm</h2>
              <p className="mt-5 text-base leading-8 text-[#4f5d59]">{tour.summary}</p>

              <div className="mt-10">
                <h3 className="font-serif text-2xl text-[#1b221e]">Highlights</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#425650]">
                  {tour.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-primary)]" /> {highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="font-serif text-2xl text-[#1b221e]">Included</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#425650]">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[#3c6c62]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#e8dfd2] bg-[#fffdf9] p-6 shadow-[0_12px_30px_rgba(27,34,31,0.05)]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#2d665d]">From</p>
              <p className="mt-2 text-4xl font-semibold text-[#173c36]">${tour.price}</p>
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
