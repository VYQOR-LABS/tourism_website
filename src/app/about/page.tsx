import Image from "next/image";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import Button from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#0c1e1b] text-white sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80" alt="Travelers together" fill className="object-cover opacity-80" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d1a]/90 via-[#0a1d1a]/70 to-[#0a1d1a]/25" />
          </div>
          <Container className="relative w-full py-24 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e1ece8]">Travel is about more than places</p>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">Travel Is About More Than Places.</h1>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Our story" title="We design journeys that feel deeply human" />
              <p className="mt-6 text-base leading-8 text-[#4e5854]">
                We believe travel should feel seamless, energizing and rich with story. Our sample itineraries are built around local knowledge, thoughtful pacing and experiences that celebrate the personality of each destination.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-[#e6dac6] bg-[#fffdf9] p-6 shadow-[0_16px_40px_rgba(18,28,26,0.05)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[#2d665d]">Our mission</p>
              <p className="mt-4 text-base leading-8 text-[#455a56]">
                To create extraordinary, trustworthy and locally informed travel experiences that leave space for wonder, rest and connection.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-[#f5efe7] py-20">
          <Container>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Our Values", "Authenticity, care and memorable travel design."],
                ["Why We Travel", "To help people feel more connected to landscapes, people and culture."],
                ["Local Expertise", "Every recommendation is shaped by local insight and on-the-ground understanding."],
                ["Sustainability", "We prioritize meaningful travel that respects the places we visit."],
              ].map(([title, description], index) => (
                <div key={title} className="rounded-[1.7rem] border border-[#e9dfd1] bg-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#2d665d]">0{index + 1}</p>
                  <h3 className="mt-4 font-serif text-2xl text-[#1c221d]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4d564f]">{description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading eyebrow="Meet the team" title="Placeholder team data for future real client stories" align="center" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Asha Kariuki", "Travel Designer"],
                ["David Achieng", "Safari Specialist"],
                ["Nina Langat", "Coastal Experience Lead"],
              ].map(([name, role]) => (
                <div key={name} className="rounded-[1.7rem] border border-[#ebe0d4] bg-[#fffdf9] p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#edf5f1] text-xl font-semibold text-[#173c36]">{name.split(" ").map((part) => part[0]).join("")}</div>
                  <h3 className="mt-5 font-serif text-2xl text-[#1d241f]">{name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#587169]">{role}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#102521] py-20 text-white">
          <Container className="flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl sm:text-5xl">Start Your Journey</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/75">Tell us where you want to go and we will shape a trip around your pace, interests and travel dreams.</p>
            <div className="mt-8">
              <Button href="/booking" variant="primary">Start Your Journey</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
