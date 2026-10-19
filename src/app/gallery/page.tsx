import Container from "@/components/ui/container";
import PageHero from "@/components/hero/page-hero";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import GalleryGrid from "@/components/gallery/gallery-grid";
import { galleryImages } from "@/data/gallery";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata({
  title: "East Africa Safari & Travel Photo Gallery",
  description: "View wildlife, landscapes, coastlines and cultural highlights from Kenya, Tanzania, Rwanda and Uganda.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="The East African collection"
          title="Travel stories in motion"
          description="Explore destination-specific wildlife, coast and culture across Kenya, Tanzania, Rwanda and Uganda."
          image={galleryImages[0].image}
          imageAlt={galleryImages[0].title}
        />
        <section className="py-20">
          <Container>
            <GalleryGrid />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
