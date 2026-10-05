import Image from "next/image";
import Container from "@/components/ui/container";
import PageHero from "@/components/hero/page-hero";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Make the journey yours"
          title="Crafted experiences for every kind of traveler"
          description="Explore safaris, beaches, culture and adventure experiences that bring East Africa to life."
          image={experiences[0].image}
          imageAlt={experiences[0].title}
        />

        <section className="py-20">
          <Container className="grid gap-8 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.id} className="overflow-hidden rounded-[1.8rem] border border-[#ece3d3] bg-white shadow-[0_14px_30px_rgba(16,28,25,0.06)]">
                <div className="relative h-80">
                  <Image src={experience.image} alt={experience.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-[#edf3ef] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1b4d43]">{experience.category}</span>
                  <h3 className="mt-5 font-serif text-3xl text-[#1d241f]">{experience.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4d564f]">{experience.description}</p>
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
