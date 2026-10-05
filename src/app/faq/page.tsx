import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import FAQAccordion from "@/components/faq/faq-accordion";
import { faqs } from "@/data/faqs";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="py-20">
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
