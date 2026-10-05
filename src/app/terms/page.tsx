import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <Container className="mx-auto max-w-3xl space-y-6 text-[#495d5a]">
          <h1 className="font-serif text-5xl text-[#1b221e]">Terms & Conditions</h1>
          <p>These sample terms are placeholders for the final tourism company terms and conditions. They outline the general principles for tour bookings, communication and travel planning.</p>
          <p>All itineraries and pricing are sample content for prototype purposes and should be updated before commercial deployment.</p>
          <p>Travelers should verify entry requirements, availability and relevant conditions before finalizing a trip.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
