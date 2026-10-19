import Image from "next/image";
import { Compass, Headphones, MapPinned, ShieldCheck } from "lucide-react";
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/hero/hero";
import SearchPanel from "@/components/home/search-panel";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import DestinationCard from "@/components/destinations/destination-card";
import ExperienceCard from "@/components/experiences/experience-card";
import TourCard from "@/components/tours/tour-card";
import TestimonialsCarousel from "@/components/testimonials/testimonials-carousel";
import BlogCard from "@/components/blog/blog-card";
import Newsletter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer";
import GalleryGrid from "@/components/gallery/gallery-grid";
import WhatsAppButton from "@/components/whatsapp-button";
import { featuredDestinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { featuredTours } from "@/data/tours";
import { featuredBlogPosts } from "@/data/blog";

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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchPanel />

        <section className="pb-20 pt-20">
          <Container>
            <SectionHeading
              eyebrow="Four countries, one region"
              title="Explore East Africa with Safariman"
              description="Safariman Expeditions offers tours in Kenya, Tanzania, Rwanda and Uganda, from savannah safaris to island escapes and mountain gorilla trekking."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {featuredDestinations.map((destination) => (
                <div key={destination.id}>
                  <DestinationCard destination={destination} />
                </div>
              ))}
            </div>
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
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading eyebrow="Travel with confidence" title="Travel With Confidence" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {trustFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-[1.8rem] border border-[#eae0d2] bg-[#fffdf9] p-6 shadow-[0_15px_35px_rgba(17,27,24,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5f1] text-[#173c36]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-[#1c231f]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4d564f]">{description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container>
            <SectionHeading eyebrow="Popular journeys in four countries" title="Tours Across East Africa" description="Explore curated sample tours in Kenya, Tanzania, Rwanda and Uganda. Each itinerary is a starting point for a trip tailored to you." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
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
              <GalleryGrid />
            </div>
          </Container>
        </section>

        <TestimonialsCarousel />

        <section className="bg-[#f5f0e9] py-20">
          <Container>
            <SectionHeading eyebrow="Travel inspiration across four countries" title="Travel Inspiration" description="Plan for Kenya, Tanzania, Rwanda and Uganda with destination guides and practical advice." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredBlogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </Container>
        </section>

        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
