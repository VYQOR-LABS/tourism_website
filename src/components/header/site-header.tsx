"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Experiences", href: "/experiences" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Gallery", href: "/gallery" },
  { label: "Travel Guide", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function LogoMark({ solid }: { solid: boolean }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={[
        "h-9 w-9 transition-colors duration-500",
        solid ? "text-[#173d37]" : "text-white",
      ].join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16.5" />
      <path d="M8 22h20" strokeLinecap="round" />
      <path d="M12.5 22a5.5 5.5 0 0 1 11 0" strokeLinecap="round" />
      <path d="M11 26.5h14" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const isOpenRef = useRef(false);

  isOpenRef.current = isOpen;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(y > 24);

      // Hide when scrolling down, reveal when scrolling up
      if (!isOpenRef.current) {
        if (y > lastY.current + 6 && y > 240) setIsHidden(true);
        else if (y < lastY.current - 6 || y <= 240) setIsHidden(false);
      }
      lastY.current = y;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock page scroll and support Escape while the menu is open
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const solid = isScrolled || isOpen;
  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-out motion-reduce:transition-none",
          isHidden ? "-translate-y-full" : "translate-y-0",
          "border-b border-white/10 bg-[#102521] shadow-[0_8px_30px_rgba(8,20,18,0.2)]",
        ].join(" ")}
      >
        <Container>
          <nav
            aria-label="Main"
            className={[
              "flex items-center justify-between transition-[padding] duration-500 ease-out motion-reduce:transition-none",
              solid ? "py-3" : "py-5",
            ].join(" ")}
          >
            <Link
              href="/"
              aria-label="Safari Beyond home page"
              className="group flex items-center gap-3 rounded outline-none focus-visible:ring-2 focus-visible:ring-[#b08d57] focus-visible:ring-offset-2"
            >
              <span className="transition-transform duration-700 ease-out group-hover:rotate-[12deg] motion-reduce:transform-none">
                <LogoMark solid={false} />
              </span>
              <span
                className={[
                  "font-serif text-xl tracking-wide transition-colors duration-500",
                  "text-white",
                ].join(" ")}
              >
                Safari Beyond
              </span>
            </Link>

            <ul className="hidden items-center gap-4 xl:flex 2xl:gap-6">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "group relative block py-2 text-[0.9rem] font-medium outline-none transition-colors duration-300",
                        "focus-visible:ring-2 focus-visible:ring-[#b08d57] focus-visible:ring-offset-2 rounded",
                        active ? "text-white" : "text-white/80 hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={[
                          "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[#b08d57] transition-transform duration-300 ease-out motion-reduce:transition-none",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        ].join(" ")}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <div className="hidden xl:block">
                <Button href="/booking" variant="secondary" className="!rounded-full">
                  Plan Your Trip
                </Button>
              </div>

              <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsOpen((value) => !value)}
                className={[
                  "relative flex h-11 w-11 items-center justify-center rounded-full border outline-none transition-colors duration-300 xl:hidden",
                  "focus-visible:ring-2 focus-visible:ring-[#b08d57] focus-visible:ring-offset-2",
                  "border-white/30 text-white hover:bg-white/10",
                ].join(" ")}
              >
                <Menu
                  size={18}
                  className={[
                    "absolute transition-all duration-300 motion-reduce:transition-none",
                    isOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100",
                  ].join(" ")}
                />
                <X
                  size={18}
                  className={[
                    "absolute transition-all duration-300 motion-reduce:transition-none",
                    isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0",
                  ].join(" ")}
                />
              </button>
            </div>
          </nav>
        </Container>

        {/* Reading progress */}
        <div
          aria-hidden="true"
          className={[
            "absolute inset-x-0 bottom-[-1px] h-[2px] overflow-hidden transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <div
            ref={progressRef}
            className="h-full origin-left scale-x-0 bg-[#b08d57] will-change-transform"
          />
        </div>
      </header>

      {/* Mobile and tablet menu */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={[
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#f7f3ee] px-6 pb-10 pt-28 transition-[opacity,visibility] duration-500 xl:hidden",
          "motion-reduce:transition-none",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        ].join(" ")}
      >
        <ul className="mx-auto w-full max-w-md divide-y divide-[#e3ddd2] border-y border-[#e3ddd2]">
          {navItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <li
                key={item.href}
                className={[
                  "transition-all duration-500 ease-out motion-reduce:transition-none",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: isOpen ? `${120 + index * 45}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "flex items-center justify-between py-4 font-serif text-2xl outline-none transition-colors",
                    "focus-visible:text-[#b08d57]",
                    active ? "text-[#173d37]" : "text-[#3b4f4b] hover:text-[#173d37]",
                  ].join(" ")}
                >
                  {item.label}
                  {active ? <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#b08d57]" /> : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className={[
            "mx-auto mt-8 w-full max-w-md transition-all duration-500 ease-out motion-reduce:transition-none",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
          style={{ transitionDelay: isOpen ? `${120 + navItems.length * 45}ms` : "0ms" }}
        >
          <Button href="/booking" variant="primary" className="w-full justify-center">
            Plan Your Trip
          </Button>
        </div>
      </div>
    </>
  );
}