import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import Button from "@/components/ui/button";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata({
  title: "About Our East Africa Travel Team",
  description: "Meet the East African travel team creating thoughtful safaris, cultural journeys and beach escapes across the region.",
  path: "/about",
});

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
                Safariman Expeditions is a proudly East African-owned travel company with over 20 years of experience in designing meaningful and transformative journeys across Kenya, Tanzania, Uganda, Rwanda, and Zanzibar.
              </p>
              <p className="mt-6 text-base leading-8 text-[#4e5854]">
                Built on the values of transparency, honesty, and passion, we specialize in tailor-made safaris, cultural immersions, beach escapes, mountain treks, and conservation travel that go beyond the ordinary. Whether you’re seeking to witness the Great Wildebeest Migration, trek with mountain gorillas, or unwind on the Swahili coast, Safariman connects you to the real East Africa — responsibly and memorably.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-[#e6dac6] bg-[#fffdf9] p-6 shadow-[0_16px_40px_rgba(18,28,26,0.05)]">
              <p className="text-sm uppercase tracking-[0.2em] text-[#2d665d]">Our mission</p>
              <p className="mt-4 text-base leading-8 text-[#455a56]">
                Our team of seasoned local experts understands this region intimately. From luxury fly-in safaris to family-friendly adventures and small-group tours, we create experiences shaped around your travel style.
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

        <section className="bg-[#f7f2eb] py-12">
          <Container className="flex justify-center">
            <div className="w-full max-w-[820px] rounded-[1.5rem] border border-[#e7ddcf] bg-white shadow-[0_12px_30px_rgba(18,28,26,0.04)]">
              <div className="px-4 py-5 text-center md:px-8 md:py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2d665d]">Start Your Journey</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-[#1d241f] sm:text-5xl">Start Your Journey</h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[#4d564f]">
                  Tell us where you want to go and we will shape a trip around your pace, interests and travel dreams.
                </p>
                <p className="mx-auto mt-2 max-w-xl text-base leading-8 text-[#4d564f]">
                  From coastal escapes and wildlife adventures to immersive cultural experiences, we curate journeys that are thoughtful, smooth, and deeply personal.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 px-4 pb-6 md:gap-5 md:px-8">
                <Link href="/destinations" className="inline-flex items-center gap-2 rounded-full bg-[#2b1d12] px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 md:text-base">
                  Our Destinations <span aria-hidden="true">»</span>
                </Link>
                <Link href="/tours" className="inline-flex items-center gap-2 rounded-full bg-[#d4a75f] px-5 py-3 text-sm font-medium text-[#2d1a12] transition-transform duration-200 hover:-translate-y-0.5 md:text-base">
                  Our Tour Packages <span aria-hidden="true">»</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
