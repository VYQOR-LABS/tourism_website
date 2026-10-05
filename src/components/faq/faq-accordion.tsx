import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/tourism";

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.id} className="group rounded-[1.5rem] border border-[#e7dbc6] bg-[#fffdf9] p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#1b241f]">
            {item.question}
            <ChevronDown className="transition group-open:rotate-180" size={18} />
          </summary>
          <p className="mt-4 text-sm leading-7 text-[#4d564f]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
