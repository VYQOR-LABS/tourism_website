import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <Container className="mx-auto max-w-3xl space-y-6 text-[#495d5a]">
          <h1 className="font-serif text-5xl text-[#1b221e]">Privacy Policy</h1>
          <p>We respect the privacy of our travelers and handle personal information responsibly. This sample policy will be replaced with the final legal wording when the client is onboarded.</p>
          <p>Information may be used to respond to inquiries, plan travel arrangements and improve the quality of the service we provide.</p>
          <p>We do not sell personal data. We store it only where necessary for the travel process and maintain reasonable safeguards around access and retention.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
