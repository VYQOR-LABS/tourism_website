import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/container";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = blogPosts.find((item) => item.slug === slug);

    return {
      title: post ? `${post.title} | Travel Guide` : "Travel Guide",
      description: post?.excerpt ?? "Read our travel guide article.",
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <article>
          <div className="relative flex min-h-[440px] items-center justify-center text-center sm:min-h-[560px]">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d1b]/85 via-[#0b1d1b]/55 to-[#0b1d1b]/30" />
            <Container className="relative py-24 text-white">
              <div className="mx-auto max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">{post.category}</p>
                <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">{post.title}</h1>
                <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-white/80">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Container>
          </div>

          <Container className="py-12">
            <div className="mx-auto max-w-3xl">
              <div className="mt-10 space-y-7 text-base leading-8 text-[#4d564f] sm:text-lg sm:leading-9">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
