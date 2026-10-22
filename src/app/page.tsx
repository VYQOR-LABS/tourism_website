import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Headphones, Mail, MapPinned, Phone, ShieldCheck } from "lucide-react";
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/hero/hero";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import DestinationCard from "@/components/destinations/destination-card";
import ExperienceCard from "@/components/experiences/experience-card";
import TourCard from "@/components/tours/tour-card";
import TestimonialsCarousel from "@/components/testimonials/testimonials-carousel";
import Footer from "@/components/footer";
import GalleryGrid from "@/components/gallery/gallery-grid";
import WhatsAppButton from "@/components/whatsapp-button";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { featuredDestinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { featuredTours } from "@/data/tours";
import { accommodation } from "@/data/accommodation";
import { flightSafaris } from "@/data/flights";
import { galleryImages } from "@/data/gallery";

const trustFeatures = [
  {
    icon: Compass,
    title: "Local Expertise",
    description: "Local knowledge helps us create authentic experiences.",
  },
  {
    icon: MapPinned,
    title: "Carefully Selected Experiences",
    description: "We focus on experiences worth remembering.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized Journeys",
    description: "Your trip should reflect the way you want to travel.",
  },
  {
    icon: Headphones,
    title: "Trusted Support",
    description: "We are available before, during and after your journey.",
  },
];

function SeeMore({ href, children }: { href: string; children: string }) {
  return (
    <div className="mt-9 flex justify-center">
      <Button href={href} variant="ghost" className="gap-2">
        {children} <ArrowRight size={16} />
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="pb-20 pt-20">
          <Container>
            <SectionHeading
              eyebrow="Four countries, one region"
              title="Explore East Africa with Safariman"
              description="Safariman Expeditions offers tours in Kenya, Tanzania, Rwanda and Uganda, from savannah safaris to island escapes and mountain gorilla trekking."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featuredDestinations.slice(0, 3).map((destination) => (
                <div key={destination.id}>
                  <DestinationCard destination={destination} />
                </div>
              ))}
            </div>
            <SeeMore href="/destinations">See more destinations</SeeMore>
          </Container>
        </section>

        <section className="bg-[#f4efe7] py-20">
          <Container>
            <SectionHeading
              eyebrow="Experience more than a destination"
              title="Experience More Than a Destination"
              description="Choose wildlife, coast, culture and adventure experiences across Kenya, Tanzania, Rwanda and Uganda."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {experiences.slice(0, 3).map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
            <SeeMore href="/experiences">See more experiences</SeeMore>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading eyebrow="About Safariman" title="Travel with people who know East Africa" description="We create thoughtful journeys shaped by local knowledge, personal care and respect for the places we visit." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {trustFeatures.slice(0, 3).map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-[1.8rem] border border-[#eae0d2] bg-[#fffdf9] p-6 shadow-[0_15px_35px_rgba(17,27,24,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5f1] text-[#173c36]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-[#1c231f]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4d564f]">{description}</p>
                </div>
              ))}
            </div>
            <SeeMore href="/about">See more about us</SeeMore>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container>
            <SectionHeading eyebrow="Popular journeys in four countries" title="Tours Across East Africa" description="Explore curated sample tours in Kenya, Tanzania, Rwanda and Uganda. Each itinerary is a starting point for a trip tailored to you." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredTours.slice(0, 3).map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
            <SeeMore href="/tours">See more tours</SeeMore>
          </Container>
        </section>

        <section className="bg-[#f5f0e9] py-20">
          <Container>
            <SectionHeading
              eyebrow="Travel by air"
              title="Fly further across East Africa"
              description="Discover sample flying safaris that connect wildlife destinations with shorter journeys between regions."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {flightSafaris.slice(0, 3).map((flight) => (
                <article key={flight.id} className="overflow-hidden rounded-[1.8rem] border border-[#e8dfd1] bg-white shadow-[0_14px_35px_rgba(16,28,25,0.08)]">
                  <div className="relative h-60">
                    <Image src={flight.image} alt={flight.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7543]">{flight.duration} · {flight.region}</p>
                    <h3 className="mt-3 font-serif text-2xl text-[#1d241f]">{flight.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#53615d]">{flight.description}</p>
                    <p className="mt-4 text-sm text-[#53615d]">{flight.route}</p>
                    <Link href="/flights" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#173c36]">
                      View flight itinerary <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <SeeMore href="/flights">See more flight packages</SeeMore>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Where you will stay"
              title="Rest well along the way"
              description="A few of the hotels, safari lodges and beach stays suggested in our East African itineraries."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {accommodation.slice(0, 3).map((stay) => (
                <article key={stay.id} className="overflow-hidden rounded-[1.7rem] border border-[#ece4d9] bg-white shadow-[0_10px_28px_rgba(16,30,26,0.05)]">
                  <div className="relative h-60">
                    <Image src={stay.image} alt={stay.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7543]">{stay.location} · {stay.country}</p>
                    <h3 className="font-serif text-2xl text-[#1c241f]">{stay.name}</h3>
                    <p className="text-sm leading-6 text-[#53615d]">{stay.description}</p>
                    <p className="text-sm font-semibold text-[#173c36]">{stay.startingRate ?? "Contact for current rate"}</p>
                  </div>
                </article>
              ))}
            </div>
            <SeeMore href="/accommodation">See more accommodation</SeeMore>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative h-[520px] overflow-hidden rounded-[2.2rem]">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Traveler by the sea"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#3b6c62]">Your next story starts here</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1a201d] sm:text-5xl">Your Next Story Starts Here.</h2>
              <p className="mt-6 text-base leading-8 text-[#4f5d59]">
                Whether you are after a serene beach getaway, a wildlife-filled safari or a culturally rich coastal journey, we design travel that feels personal, grounded and extraordinary.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/booking" variant="primary">Start Planning</Button>
                <Button href="/tours" variant="ghost">Explore Tours</Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f5f0e9] py-20">
          <Container>
            <SectionHeading eyebrow="Gallery" title="A Visual Story of East Africa" description="Explore real destination highlights from Kenya, Tanzania, Rwanda and Uganda." align="center" />
            <div className="mt-10">
              <GalleryGrid images={galleryImages.slice(0, 3)} />
            </div>
            <SeeMore href="/gallery">See more photos</SeeMore>
          </Container>
        </section>

        <TestimonialsCarousel />

        <section className="bg-[#f5f0e9] py-16 sm:py-20">
          <Container>
            <div className="rounded-[2rem] border border-[#e7dac7] bg-[#fffdf9] px-6 py-10 text-center shadow-[0_16px_40px_rgba(38,52,43,0.06)] sm:px-10 sm:py-14">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8c6b3e]">Contact our local team</p>
              <h2 className="mt-3 font-serif text-3xl text-[#173c36] sm:text-4xl">Ready to plan your East African journey?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#52635b]">
                Talk with us about destinations, dates, accommodation and the right itinerary for you.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href="tel:0737468278" className="inline-flex items-center gap-2 rounded-full border border-[#cbd7ce] px-5 py-3 text-sm font-semibold text-[#173c36] transition-colors hover:bg-[#edf3ef]">
                  <Phone size={16} aria-hidden="true" /> Call us
                </a>
                <a href="mailto:info@safariman.co.ke" className="inline-flex items-center gap-2 rounded-full border border-[#cbd7ce] px-5 py-3 text-sm font-semibold text-[#173c36] transition-colors hover:bg-[#edf3ef]">
                  <Mail size={16} aria-hidden="true" /> Email us
                </a>
                <a href="https://wa.me/254737468278" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#cbd7ce] px-5 py-3 text-sm font-semibold text-[#173c36] transition-colors hover:bg-[#edf3ef]">
                  <WhatsAppIcon size={17} /> WhatsApp
                </a>
              </div>
              <div className="mt-7">
                <Button href="/contact" variant="primary">See more contact options</Button>
              </div>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
