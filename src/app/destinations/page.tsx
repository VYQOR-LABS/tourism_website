import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPinned, Sparkles } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#0f221f] text-white sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
              alt="Mountain landscape"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f1d]/90 via-[#0b1f1d]/70 to-[#0b1f1d]/35" />
          </div>
          <Container className="relative w-full py-24 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dfece8]">Discover your next destination</p>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">Discover Your Next Destination</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-2"><MapPinned size={14} /> Kenya</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-2"><Sparkles size={14} /> Safari</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-2"><CalendarDays size={14} /> Best in season</span>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading title="Find the right destination for your next escape" description="Choose a region, travel style and pace that matches the kind of journey you want to have." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {destinations.map((destination) => (
                <article key={destination.id} className="overflow-hidden rounded-[1.8rem] border border-[#ebdfd3] bg-white shadow-[0_14px_30px_rgba(16,28,25,0.06)]">
                  <div className="relative h-64">
                    <Image src={destination.image} alt={destination.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-3xl text-[#1d241f]">{destination.name}</h3>
                      <span className="rounded-full bg-[#f3efe9] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#16443b]">{destination.region}</span>
                    </div>
                    <p className="text-sm text-[#4e5854]">{destination.country}</p>
                    <p className="text-sm leading-7 text-[#53615d]">{destination.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities.slice(0, 3).map((activity) => (
                        <span key={activity} className="rounded-full bg-[#edf5f1] px-2.5 py-1 text-xs font-medium text-[#23493e]">{activity}</span>
                      ))}
                    </div>
                    <Link href={`/destinations/${destination.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#183f38]">
                      Explore destination <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
