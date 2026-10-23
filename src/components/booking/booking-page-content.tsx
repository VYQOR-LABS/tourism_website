import Image from "next/image";
import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import InquiryForm from "@/components/booking/inquiry-form";

export interface BookingPageSelection {
  kind: "destination" | "tour" | "flight";
  id: string;
  title: string;
  destination: string;
  duration: string;
  summary: string;
}

export default function BookingPageContent({
  initialPackageSlug,
  initialDestination,
  initialDuration,
  initialDestinationSlug,
  initialFlightId,
  selection,
}: {
  initialPackageSlug?: string;
  initialDestination?: string;
  initialDuration?: string;
  initialDestinationSlug?: string;
  initialFlightId?: string;
  selection?: BookingPageSelection;
}) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[420px] items-center overflow-hidden sm:min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/amboseli-elephants-kilimanjaro.jpg"
              alt="Elephants crossing Amboseli with Mount Kilimanjaro in the background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1d1a]/88 via-[#0d1d1a]/60 to-[#0d1d1a]/30" />
          </div>

          <Container className="relative w-full py-24 text-center text-white">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dfeae7]">Plan your escape</p>
              <h1 className="mt-5 font-serif text-5xl leading-none sm:text-6xl">Start planning your perfect itinerary</h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/75">
                Share your preferences and we will help shape the next step in your journey.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <InquiryForm
                initialPackageSlug={initialPackageSlug}
                initialDestination={initialDestination}
                initialDuration={initialDuration}
                initialDestinationSlug={initialDestinationSlug}
                initialFlightId={initialFlightId}
                selection={selection}
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
