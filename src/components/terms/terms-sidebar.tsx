"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type TermsSectionLink = {
  id: string;
  title: string;
};

export default function TermsSidebar({ sections }: { sections: TermsSectionLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="sticky top-[76px] z-30 -mx-4 min-w-0 bg-[#fbfcfa]/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:mx-0 lg:h-[calc(100vh-76px)] lg:bg-transparent lg:p-0 lg:pt-3 lg:backdrop-blur-none">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="terms-section-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-12 w-full items-center justify-between rounded-xl border border-[#dce5dc] bg-white px-4 py-3 text-base font-bold text-[#173c36] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d43] lg:hidden"
      >
        <span>{isOpen ? "Close sections" : "Browse terms sections"}</span>
        {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
      </button>

      <nav
        id="terms-section-navigation"
        aria-label="Terms and conditions sections"
        className={`${isOpen ? "block" : "hidden"} mt-3 min-w-0 rounded-2xl border border-[#dce5dc] bg-white p-3 shadow-sm lg:mt-0 lg:block lg:h-full lg:overflow-y-auto lg:p-4`}
      >
        <p className="hidden px-3 pb-3 pt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#9a7543] lg:block">
          On this page
        </p>
        <ol className="flex min-w-0 flex-col gap-1 lg:overflow-visible">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#344c43] transition-colors hover:bg-[#edf3ef] hover:text-[#173c36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4d43] lg:text-base"
              >
                <span aria-hidden="true" className="w-6 shrink-0 text-xs font-bold text-[#a27b46]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{section.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
