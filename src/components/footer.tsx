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
    <footer className="mt-20 bg-[linear-gradient(180deg,#5a3321_0%,#2d1a12_100%)] text-[#f7ebd2]">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/safariman_logo.png"
                alt="Safariman logo"
                className="h-30 w-30 rounded-full object-cover ring-2 ring-[#f5d896]/70"
              />
              <div>
                <div className="text-base font-semibold tracking-[0.24em] uppercase text-[#f5d896]">Safariman</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-[#f7ebd2]/80">
              Thoughtful journeys across East Africa, designed around immersive experiences, local expertise and memorable travel.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a75f]/40 text-[#f3dca2] transition hover:border-[#f3dca2]/80 hover:text-[#fff3d2]">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.22em] text-[#f3dca2]">Navigation</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-[#f7ebd2]/80">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#fff3d2]">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.22em] text-[#f3dca2]">Support</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-[#f7ebd2]/80">
              {supportLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#fff3d2]">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold uppercase tracking-[0.22em] text-[#f3dca2]">Contact</h3>
            <div className="mt-5 space-y-3 text-[0.95rem] text-[#f7ebd2]/80">
              <p><a href="tel:+254733349711" className="transition-colors hover:text-[#fff3d2]">+254 733-349-711</a></p>
              <p><a href="mailto:info@safariman.co.ke" className="transition-colors hover:text-[#fff3d2]">info@safariman.co.ke</a></p>
            </div>
            <div className="mt-6">
              <Button href="/booking" className="w-full justify-center" variant="primary">Plan Your Trip</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#d4a75f]/20 pt-6 text-[0.95rem] text-[#f3e2ba]/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Safariman. All rights reserved.</p>
          <a
            href="https://vyqor.co.ke"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#fff3d2]"
          >
            Powered by VYQOR LABS
          </a>
        </div>
      </Container>
    </footer>
  );
}
