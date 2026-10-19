import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import FAQAccordion from "@/components/faq/faq-accordion";
import JsonLd from "@/components/seo/json-ld";
import { faqs } from "@/data/faqs";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata({
  title: "East Africa Safari Travel FAQs",
  description: "Find answers about planning, booking and traveling with Safariman Expeditions in East Africa.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
        <Container className="mx-auto max-w-4xl">
          <div className="mb-10 space-y-4">
            <h1 className="font-serif text-5xl text-[#1b221e]">Frequently asked questions</h1>
            <p className="text-[#495d5a]">Helpful answers for planning, booking and travel support.</p>
          </div>
          <FAQAccordion items={faqs} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
