import { MessageCircle } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254791614036";
const whatsappMessage = encodeURIComponent("Hello, I would like to plan a trip.");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_rgba(37,211,102,0.4)] transition hover:scale-105"
    >
      <MessageCircle size={22} />
    </a>
  );
}
