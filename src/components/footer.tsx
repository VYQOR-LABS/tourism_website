import Link from "next/link";
import { Camera, Globe, Music2, Play, MessageCircle } from "lucide-react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const footerLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Experiences", href: "/experiences" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Gallery", href: "/gallery" },
  { label: "Travel Guide", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

const socials = [
  { icon: Camera, label: "Instagram", href: "https://instagram.com" },
  { icon: Globe, label: "Facebook", href: "https://facebook.com" },
  { icon: Music2, label: "TikTok", href: "https://tiktok.com" },
  { icon: Play, label: "YouTube", href: "https://youtube.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/254791614036?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20trip." },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#111b1a] text-[#edf2ee]">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                S
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.24em] uppercase">Safari</div>
                <div className="text-[10px] uppercase tracking-[0.38em] text-white/70">Beyond</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Thoughtful journeys across East Africa, designed around immersive experiences, local expertise and memorable travel.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-white/40 hover:text-white">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">Support</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {supportLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p><a href="tel:+254791614036" className="transition-colors hover:text-white">0791614036</a></p>
              <p><a href="mailto:wilfred@vyqor.co.ke" className="transition-colors hover:text-white">wilfred@vyqor.co.ke</a></p>
              <p>Mombasa, Kenya</p>
            </div>
            <div className="mt-6">
              <Button href="/booking" className="w-full justify-center" variant="primary">Plan Your Trip</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Safari &amp; Beyond. All rights reserved.</p>
          <a
            href="https://vyqor.co.ke"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Powered by VYQOR LABS
          </a>
        </div>
      </Container>
    </footer>
  );
}
