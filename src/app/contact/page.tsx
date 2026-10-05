import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#102521] text-white sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80" alt="Travel coast" fill className="object-cover opacity-70" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d1b]/90 via-[#0b1d1b]/70 to-[#0b1d1b]/35" />
          </div>
          <Container className="relative w-full py-24 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e2efe8]">Let’s plan your journey</p>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">Let&apos;s Plan Your Journey</h1>
          </Container>
        </section>

        <section className="py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#2d665d]">Contact</p>
                <h2 className="mt-4 font-serif text-4xl text-[#1a201d]">Talk to our travel team</h2>
              </div>
              <div className="space-y-3 text-sm leading-8 text-[#4e5854]">
                <p><a href="tel:+254791614036" className="transition-colors hover:text-[#173c36]">0791614036</a></p>
                <p><a href="mailto:wilfred@vyqor.co.ke" className="transition-colors hover:text-[#173c36]">wilfred@vyqor.co.ke</a></p>
                <p>Mombasa, Kenya</p>
              </div>
              <div className="rounded-[1.8rem] border border-[#e7dac7] bg-[#fffdf9] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#2d665d]">WhatsApp</p>
                <a
                  href="https://wa.me/254791614036?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20trip."
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#173c36] transition-colors hover:text-[#25a95a]"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <ContactForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
