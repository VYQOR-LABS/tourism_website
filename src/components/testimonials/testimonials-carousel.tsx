"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import TestimonialCard from "@/components/testimonials/testimonial-card";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updatePageCount = () => {
      const firstCard = viewport.firstElementChild;
      if (!firstCard || viewport.clientWidth === 0) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = Number.parseFloat(getComputedStyle(viewport).columnGap) || 0;
      const visibleCards = Math.max(1, Math.round((viewport.clientWidth + gap) / (cardWidth + gap)));
      setPageCount(Math.ceil(testimonials.length / visibleCards));
    };

    updatePageCount();
    const observer = new ResizeObserver(updatePageCount);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const goToPage = (page: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const targetPage = Math.min(Math.max(page, 0), pageCount - 1);
    viewport.scrollTo({ left: targetPage * viewport.clientWidth, behavior: "smooth" });
  };

  const move = (direction: -1 | 1) => {
    const targetPage = (activePage + direction + pageCount) % pageCount;
    goToPage(targetPage);
  };

  const updateActivePage = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setActivePage(Math.round(viewport.scrollLeft / viewport.clientWidth));
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-9 text-center">
          <h2
            className="text-4xl leading-tight text-[#d69743] sm:text-5xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="relative sm:px-10">
          <div
            ref={viewportRef}
            onScroll={updateActivePage}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0 snap-start md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#e6e6e4] text-white transition hover:bg-[#d69743] sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#e6e6e4] text-white transition hover:bg-[#d69743] sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2" aria-label="Testimonial pages">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonials"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#68746f] hover:bg-[#f1eee9] sm:hidden"
          >
            <ChevronLeft size={20} />
          </button>
          {Array.from({ length: pageCount }).map((_, page) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              aria-label={`Go to testimonial page ${page + 1}`}
              aria-current={activePage === page ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${activePage === page ? "bg-[#bdbdb8]" : "border border-[#bdbdb8] bg-white"}`}
            />
          ))}
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonials"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#68746f] hover:bg-[#f1eee9] sm:hidden"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}