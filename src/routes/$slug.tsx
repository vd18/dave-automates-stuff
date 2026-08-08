import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/sections";
import { getBlogPost, type BlogBlock } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `https://dave-vandan.netlify.app/blog/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} | Dave Vandan` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.title },
        { name: "twitter:description", content: loaderData.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: loaderData.title,
            description: loaderData.description,
            datePublished: loaderData.date,
            author: { "@type": "Person", name: "Dave Vandan", url: "https://dave-vandan.netlify.app/" },
            url,
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function renderBlock(block: BlogBlock, i: number) {
  if (block.type === "h2") {
    return (
      <h2 key={i} className="reveal mt-10 font-display text-2xl font-bold sm:text-3xl">
        {block.text}
      </h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul key={i} className="reveal mt-4 space-y-2">
        {block.items.map((item, j) => (
          <li key={j} className="flex gap-3 text-muted-foreground">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p key={i} className="reveal mt-4 leading-relaxed text-muted-foreground">
      {block.text}
    </p>
  );
}

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <article className="relative pt-32 pb-24 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)]" />
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
            <span>By Dave Vandan</span>
          </div>

          <div className="mt-10">{post.content.map(renderBlock)}</div>

          <div className="reveal glass-card mt-14 rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold">
              Want this system built for your business?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              I build the exact Meta Ads → GoHighLevel → automation pipeline described above,
              tailored to your leads and follow-up process.
            </p>
            <a
              href="/#contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              Contact Me
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
