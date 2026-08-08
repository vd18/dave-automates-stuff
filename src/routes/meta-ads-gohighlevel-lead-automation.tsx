import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight, Globe, Megaphone, Workflow, Bot, TrendingUp,
  CheckCircle2, Clock, AlertTriangle,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer, Contact } from "@/components/portfolio/sections";

export const Route = createFileRoute("/services/meta-ads-gohighlevel-lead-automation")({
  head: () => ({
    meta: [
      { title: "Meta Ads to GoHighLevel Lead Automation | Dave Vandan" },
      {
        name: "description",
        content:
          "I connect WordPress, Meta Ads, GoHighLevel CRM, and AI follow-up into one automated lead system — so no lead sits unanswered. Built and run by Dave Vandan.",
      },
      { property: "og:title", content: "Meta Ads to GoHighLevel Lead Automation | Dave Vandan" },
      {
        property: "og:description",
        content: "One connected system: WordPress → Meta Ads → GoHighLevel CRM → AI follow-up. No more leads slipping through the cracks.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://dave-vandan.netlify.app/services/meta-ads-gohighlevel-lead-automation",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dave-vandan.netlify.app/services/meta-ads-gohighlevel-lead-automation",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Meta Ads to GoHighLevel Lead Automation",
          provider: { "@type": "Person", name: "Dave Vandan", url: "https://dave-vandan.netlify.app/" },
          areaServed: "IN",
          description:
            "End-to-end lead automation connecting WordPress, Meta Ads, GoHighLevel CRM, and AI-assisted follow-up.",
        }),
      },
    ],
  }),
  component: LeadAutomationPage,
});

const pipeline = [
  {
    icon: Globe,
    title: "WordPress Site",
    desc: "A fast, conversion-focused page built to capture intent — not just look good.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Traffic sent into a tracked funnel with proper pixel/event setup, not a generic contact form.",
  },
  {
    icon: Workflow,
    title: "GoHighLevel CRM",
    desc: "Every lead lands in one place instantly — tagged, scored, and routed automatically.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Follow-Up",
    desc: "Instant SMS/email/WhatsApp response within minutes, not hours.",
  },
  {
    icon: TrendingUp,
    title: "Pipeline Tracking",
    desc: "Every lead visible from first click to closed deal — no spreadsheets, no guesswork.",
  },
];

const painPoints = [
  "Leads come in through ads but sit unanswered for hours",
  "Website, ads, and CRM are handled by different people and never talk to each other",
  "You're manually copying leads from Meta forms into a spreadsheet or WhatsApp",
  "No visibility into which ads actually produce paying customers",
];

const included = [
  "WordPress landing page or site update, built for conversion",
  "Meta Ads lead form / pixel integration into GoHighLevel",
  "GoHighLevel CRM pipeline setup, tagging, and lead routing",
  "Automated instant follow-up sequences (SMS, email, WhatsApp)",
  "AI-assisted lead qualification and response workflows",
  "Reporting dashboard so you know what's working",
];

function LeadAutomationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)]" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Lead Automation System
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Meta Ads to GoHighLevel: <span className="text-gradient">a lead system that never sleeps</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            I connect your website, Meta Ads, GoHighLevel CRM, and AI follow-up into one automated
            pipeline — so every lead gets a response in minutes, not hours, and nothing falls through
            the cracks.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              Get This Set Up
              <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/blog/meta-ads-to-gohighlevel-lead-automation"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 font-medium backdrop-blur transition hover:bg-secondary"
            >
              Read the Full Breakdown
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            The Problem
          </div>
          <h2 className="reveal mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Ad spend isn't the leak. <span className="text-gradient">Follow-up speed is.</span>
          </h2>
          <div className="reveal mt-8 grid gap-4 sm:grid-cols-2">
            {painPoints.map((p) => (
              <div key={p} className="glass-card flex items-start gap-3 rounded-2xl border border-border p-5">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground sm:text-base">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            The System
          </div>
          <h2 className="reveal mt-4 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            One connected pipeline, <span className="text-gradient">start to close</span>
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {pipeline.map((step, i) => (
              <div key={step.title} className="reveal glass-card relative rounded-2xl border border-border p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-primary)]">
                  <step.icon size={18} className="text-primary-foreground" />
                </div>
                <div className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Step {i + 1}
                </div>
                <h3 className="mt-1 font-display text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            What's Included
          </div>
          <h2 className="reveal mt-4 font-display text-3xl font-bold sm:text-4xl">
            Everything wired together, <span className="text-gradient">not sold piecemeal</span>
          </h2>
          <div className="reveal mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground sm:text-base">{item}</span>
              </div>
            ))}
          </div>
          <div className="reveal glass-card mt-10 flex flex-col items-start gap-3 rounded-2xl border border-border p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Clock size={20} className="shrink-0 text-accent" />
              <p className="text-sm text-muted-foreground sm:text-base">
                Most setups go from first call to live system in 1–2 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
