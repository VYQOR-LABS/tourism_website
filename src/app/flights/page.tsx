import Image from "next/image";
import { ArrowRight, CalendarDays, MapPinned, Plane } from "lucide-react";
import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import Button from "@/components/ui/button";
import { flightPackageExclusions, flightPackageInclusions, flightSafaris } from "@/data/flights";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata({
  title: "East Africa Flying Safaris & Flight Packages",
  description: "Explore sample flying safaris from Nairobi to Kenya, Uganda, Tanzania and Rwanda, with suggested stays and itinerary estimates.",
  path: "/flights",
});

export default function FlightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#102521] text-white sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/serengeti-sunrise.jpg"
              alt="Sunrise over the Serengeti"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f1d]/90 via-[#0b1f1d]/65 to-[#0b1f1d]/35" />
          </div>
          <Container className="relative w-full py-24 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#e4d2ad]">
              <Plane size={14} />
              Fly further, see more
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl">Flying safaris across East Africa</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
              Sample itineraries connecting Kenya, Uganda, Tanzania and Rwanda by air, with suggested stays and transparent planning estimates.
            </p>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm leading-7 text-[#53615d]">
                These packages are planning examples, not live flight or hotel offers. Prices, routes, permits and availability must be confirmed for your travel dates before booking.
              </p>
            </div>
            <div className="grid gap-8 xl:grid-cols-2">
              {flightSafaris.map((safari) => (
                <article key={safari.id} className="overflow-hidden rounded-[1.8rem] border border-[#ece3d3] bg-white shadow-[0_14px_30px_rgba(16,28,25,0.06)]">
                  <div className="relative h-72">
                    <Image
                      src={safari.image}
                      alt={safari.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 50vw"
                    />
                    <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-[#102521]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {safari.region}
                    </span>
                  </div>
                  <div className="space-y-6 p-6 sm:p-8">
                    <div>
                      <h2 className="font-serif text-3xl text-[#1d241f] sm:text-4xl">{safari.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-[#53615d]">{safari.description}</p>
                    </div>

                    <div className="grid gap-3 text-sm text-[#3f514b] sm:grid-cols-2">
                      <p className="flex items-start gap-2"><CalendarDays size={17} className="mt-0.5 shrink-0 text-[#9a7543]" />{safari.duration}</p>
                      <p className="flex items-start gap-2 sm:col-span-2"><MapPinned size={17} className="mt-0.5 shrink-0 text-[#9a7543]" />{safari.route}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7543]">Suggested accommodation</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {safari.accommodation.map((stay) => (
                          <li key={stay} className="rounded-full bg-[#edf3ef] px-3 py-1.5 text-xs text-[#23493e]">{stay}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7543]">Sample itinerary</h3>
                      <ol className="mt-3 space-y-3">
                        {safari.itinerary.map((day) => (
                          <li key={day} className="border-l-2 border-[#d4a75f]/60 pl-4 text-sm leading-6 text-[#4d564f]">{day}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="rounded-2xl bg-[#f7f3ed] p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7543]">Illustrative estimate per person</h3>
                      <div className="mt-3 grid gap-3 text-sm text-[#3f514b] sm:grid-cols-2">
                        <p>For 2 travelers: <strong className="text-[#173d37]">{safari.priceForTwo}</strong></p>
                        <p>For 4 travelers: <strong className="text-[#173d37]">{safari.priceForFour}</strong></p>
                      </div>
                      {safari.flightBudget ? <p className="mt-3 text-xs leading-6 text-[#53615d]">Indicative flight budget: {safari.flightBudget}</p> : null}
                    </div>

                    <Button href="/booking" variant="primary" className="w-full justify-center">
                      Ask about this itinerary <ArrowRight size={16} />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-[#e8dfd1] bg-[#f1ece3] py-16">
          <Container className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-[#1d241f]">What may be included</h2>
              <ul className="mt-5 space-y-3">
                {flightPackageInclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#4d564f]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a7543]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-[#1d241f]">Not included unless confirmed</h2>
              <ul className="mt-5 space-y-3">
                {flightPackageExclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#4d564f]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a7543]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs leading-6 text-[#64716d] lg:col-span-2">
              Published fare and hotel-rate references in the source material are indicative only, not guaranteed booking prices. Confirm the exact flight sectors, luggage rules, room basis, park fees and permits in a written quotation.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
