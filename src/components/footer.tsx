import Link from "next/link";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

function SocialIcon({ type }: { type: "facebook" | "x" | "instagram" | "tripadvisor" }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  switch (type) {
    case "facebook":
      return (
        <svg {...commonProps}>
          <path d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tripadvisor":
      return (
        <svg {...commonProps}>
          <path d="M7 9.5A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 5 5.5" />
          <path d="M5.5 13.5c1.5 1.7 3.7 2.7 6.5 2.7s5-1 6.5-2.7" />
          <path d="M9 15.5l1 4 2-3 2 3 1-4" />
        </svg>
      );
    default:
      return null;
  }
}

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

const socials: Array<{ icon: "facebook" | "x" | "instagram" | "tripadvisor"; label: string; href: string }> = [
  { icon: "facebook", label: "Facebook", href: "https://web.facebook.com/SafarimanExped/" },
  { icon: "x", label: "X", href: "https://x.com/safariman007" },
  { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/safariman_expeditions/" },
  { icon: "tripadvisor", label: "TripAdvisor", href: "https://www.tripadvisor.com/Attraction_Review-g294207-d13951657-Reviews-Safariman_Expeditions-Nairobi.html" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#670800] text-[#f7ebd2]">
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
              {socials.map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a75f]/40 text-[#f3dca2] transition hover:border-[#f3dca2]/80 hover:text-[#fff3d2]">
                  <SocialIcon type={icon} />
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
              <p><a href="tel:0737468278" className="transition-colors hover:text-[#fff3d2]">0737 468 278</a></p>
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
