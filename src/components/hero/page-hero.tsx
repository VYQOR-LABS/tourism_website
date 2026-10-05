import Image from "next/image";
import Container from "@/components/ui/container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[360px] items-center overflow-hidden bg-[#102521] py-20 text-white sm:min-h-[440px]">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071714]/70 via-[#0b1d1b]/65 to-[#071714]/80" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e4d2ad]">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">{description}</p>
        </div>
      </Container>
    </section>
  );
}