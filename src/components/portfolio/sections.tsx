import {
  Workflow, Zap, Mail, MessageSquare, Globe, Code2, Calendar, Users,
  Database, GitBranch, ShoppingCart, Cog, ArrowUpRight, Send, Phone, MapPin,
  CheckCircle2, Sparkles, Layers, Plug, Briefcase, Star, Quote,
} from "lucide-react";
import { Counter } from "./Counter";
import portrait from "@/assets/dave-portrait.jpg";
import { useState } from "react";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="reveal">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent opacity-75" />
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Marketing Automation &amp; <span className="text-gradient">CRM Developer</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Helping businesses automate lead generation, client onboarding, sales pipelines, and customer
            communication through GoHighLevel, CRM systems, and custom automation solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
            >
              Contact Me
              <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 font-medium backdrop-blur transition hover:bg-secondary"
            >
              View Work
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { n: 5, s: "+", l: "Years Experience" },
              { n: 100, s: "+", l: "Automation Workflows" },
              { n: 50, s: "+", l: "Funnels Built" },
              { n: 10, s: "+", l: "CRM Platforms" },
            ].map((st) => (
              <div key={st.l} className="glass-card rounded-2xl px-4 py-4">
                <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  <Counter to={st.n} suffix={st.s} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{st.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 [background:var(--gradient-glow)] animate-glow-pulse blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-border glass-card animate-float">
            <img
              src={portrait}
              alt="Dave Vandan, Marketing Automation Developer"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl glass-card p-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)]">
                <Sparkles size={18} className="text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">Dave Vandan</div>
                <div className="truncate text-xs text-muted-foreground">GoHighLevel · CRM · WordPress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="reveal mt-4 max-w-3xl font-display text-3xl font-bold sm:text-5xl">
          Building <span className="text-gradient">automated growth engines</span> for modern businesses.
        </h2>
        <div className="reveal mt-10 grid gap-6 text-base text-muted-foreground sm:text-lg md:grid-cols-2">
          <p>
            I am Dave Vandan, a Marketing Automation &amp; CRM Developer with over 5 years of experience
            building complete marketing ecosystems for businesses across multiple industries.
          </p>
          <p>
            My expertise spans GoHighLevel automation, CRM management, funnel development, API integrations,
            email and SMS automation, WordPress, and business process automation.
          </p>
        </div>
        <p className="reveal mt-6 max-w-3xl text-muted-foreground">
          I specialize in transforming manual business operations into automated systems that increase
          efficiency, improve customer experience, and generate predictable growth.
        </p>

        <div className="reveal mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Workflow, t: "Systems Thinker", d: "End-to-end marketing infrastructure design." },
            { icon: Zap, t: "Automation First", d: "Eliminate manual work with smart workflows." },
            { icon: Briefcase, t: "Business Focused", d: "Built for ROI, not just for show." },
          ].map((f) => (
            <div key={f.t} className="glass-card glow-border rounded-2xl p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)]">
                <f.icon size={20} className="text-primary-foreground" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{f.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
const skillGroups = [
  {
    icon: Users,
    title: "GoHighLevel & CRM",
    items: ["GoHighLevel Expert", "CRM Pipeline Management", "Lead Nurturing Systems", "Snapshot Development", "Appointment Automation", "Missed Call Text Back", "Membership Setup", "White Label Setup"],
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    items: ["Workflow Automation", "Email Automation", "SMS Automation", "Voice Automation", "Trigger Campaigns", "Conditional Logic", "Customer Journeys"],
  },
  {
    icon: Plug,
    title: "Integrations",
    items: ["Zapier", "Make (Integromat)", "N8N", "Webhooks", "REST APIs", "Third-Party Integrations"],
  },
  {
    icon: Globe,
    title: "Website Development",
    items: ["WordPress Development", "Elementor Pro", "WooCommerce", "Custom Plugins", "SEO Optimization", "Performance Optimization"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>What I Do</SectionLabel>
        <h2 className="reveal mt-4 max-w-3xl font-display text-3xl font-bold sm:text-5xl">
          Skills &amp; <span className="text-gradient">expertise</span>
        </h2>
        <p className="reveal mt-4 max-w-2xl text-muted-foreground">
          A modern stack that turns scattered tools into a single, automated revenue engine.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.title} className="reveal glass-card glow-border group relative rounded-3xl p-6 transition hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
                <g.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { icon: Users, t: "GoHighLevel Setup & Management", d: "Complete CRM setup, pipelines, workflows, funnels, calendars, and automation." },
  { icon: Layers, t: "Sales Funnel Development", d: "Landing pages, upsells, downsells, checkout pages, and conversion optimization." },
  { icon: Workflow, t: "CRM Automation", d: "Automated lead nurturing, follow-ups, appointment reminders, and client onboarding." },
  { icon: Plug, t: "API Integrations", d: "Connect business tools using APIs, webhooks, Zapier, Make, and N8N." },
  { icon: Globe, t: "WordPress Development", d: "Custom WordPress websites, WooCommerce stores, and Elementor development." },
  { icon: Cog, t: "Marketing Systems", d: "End-to-end marketing infrastructure for lead generation and customer management." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Services</SectionLabel>
        <div className="reveal mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-5xl">
            How I help you <span className="text-gradient">grow</span>
          </h2>
          <p className="max-w-md text-muted-foreground">
            From CRM strategy to last-mile integrations — done-for-you systems your team will actually use.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div
              key={s.t}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[image:var(--gradient-primary)] opacity-0 blur-3xl transition group-hover:opacity-30" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
                    <s.icon size={22} />
                  </div>
                  <span className="text-xs text-muted-foreground">0{idx + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
const projects = [
  { t: "GoHighLevel Snapshot System", d: "Built reusable automation systems including funnels, workflows, pipelines, calendars, and onboarding processes.", tags: ["GoHighLevel", "Snapshots", "Workflows"], grad: "from-blue-500 to-indigo-600" },
  { t: "Multi-Step Lead Nurturing Automation", d: "Created email, SMS, and voicemail campaigns that automatically nurture leads through every stage.", tags: ["Email", "SMS", "Voice"], grad: "from-cyan-500 to-blue-600" },
  { t: "CRM Migration Project", d: "Migrated client data from WordPress-based systems to GoHighLevel CRM with zero data loss.", tags: ["CRM", "Migration", "WordPress"], grad: "from-violet-500 to-purple-600" },
  { t: "Funnel & Appointment Booking System", d: "Designed complete sales funnel connected to automated appointment scheduling and reminders.", tags: ["Funnels", "Calendar", "Automation"], grad: "from-teal-500 to-emerald-600" },
  { t: "N8N Workflow Automation", d: "Built self-hosted automation systems integrating multiple business platforms via custom nodes.", tags: ["N8N", "Self-hosted", "APIs"], grad: "from-orange-500 to-pink-600" },
  { t: "WooCommerce Automation Integration", d: "Connected eCommerce stores with CRM systems and automated abandoned-cart follow-up campaigns.", tags: ["WooCommerce", "CRM", "eCom"], grad: "from-pink-500 to-rose-600" },
  { t: "API & Webhook Integration Project", d: "Implemented real-time synchronization between CRMs and third-party applications via webhooks.", tags: ["APIs", "Webhooks", "Realtime"], grad: "from-amber-500 to-orange-600" },
];

const projectIcons = [Database, MessageSquare, GitBranch, Calendar, Workflow, ShoppingCart, Plug];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="reveal mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-5xl">
            Featured <span className="text-gradient">projects</span>
          </h2>
          <p className="max-w-md text-muted-foreground">
            A look inside the automation systems, funnels, and integrations I&apos;ve shipped.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = projectIcons[i % projectIcons.length];
            return (
              <article
                key={p.t}
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.grad}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_60%)]" />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center transition duration-500 group-hover:scale-110">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/30">
                      <Icon size={36} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-foreground">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.d}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
const exp = [
  {
    co: "Mutant Technologies",
    range: "2023 — Present",
    role: "GoHighLevel & Automation Developer",
    bullets: [
      "Built advanced GHL workflows",
      "Created high-converting funnels",
      "Managed CRM pipelines",
      "Developed automation systems",
      "Created snapshots",
      "Implemented API integrations",
    ],
  },
  {
    co: "Technocomet Solution",
    range: "2021 — 2023",
    role: "Junior CRM Designer / Developer",
    bullets: [
      "WordPress development",
      "WooCommerce customization",
      "SEO optimization",
      "Performance improvements",
      "CRM setup and automation",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="reveal mt-4 font-display text-3xl font-bold sm:text-5xl">
          Career <span className="text-gradient">timeline</span>
        </h2>

        <div className="relative mt-14 pl-6 sm:pl-10">
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent sm:left-3" />
          {exp.map((e) => (
            <div key={e.co} className="reveal relative mb-12 last:mb-0">
              <div className="absolute -left-[14px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)] sm:-left-[22px]">
                <div className="h-1.5 w-1.5 rounded-full bg-background" />
              </div>
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{e.co}</h3>
                  <span className="text-sm text-muted-foreground">{e.range}</span>
                </div>
                <div className="mt-1 text-sm text-accent">{e.role}</div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TECH STACK ---------- */
const stack = [
  "GoHighLevel", "HubSpot", "Zoho CRM", "ActiveCampaign", "Mailchimp", "Zapier",
  "Make", "N8N", "WordPress", "WooCommerce", "Elementor", "Shopify",
  "ClickFunnels", "Systeme.io", "Google Tag Manager", "Meta Pixel",
];

export function Stack() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel center>Tech Stack</SectionLabel>
        <h2 className="reveal mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-bold sm:text-4xl">
          Tools I work with every day
        </h2>
      </div>
      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {[...stack, ...stack].map((s, i) => (
            <div
              key={i}
              className="glass-card flex shrink-0 items-center gap-3 rounded-2xl px-6 py-4"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-sm font-bold text-primary-foreground">
                {s[0]}
              </div>
              <span className="text-sm font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { n: "Marcus Reed", r: "Founder, Bright Agency", q: "Dave rebuilt our entire client onboarding in GoHighLevel. We cut manual work by 70% in three weeks." },
  { n: "Priya Shah", r: "CMO, Lumen Health", q: "From funnel to follow-up SMS, Dave delivered a system that genuinely moves the needle. Highly recommend." },
  { n: "Jonas Müller", r: "Owner, FitLab Studios", q: "Our missed-call text back and appointment automation paid for itself in the first month." },
  { n: "Sara Liu", r: "Operations, NorthPeak", q: "He thinks like a marketer and builds like an engineer. Rare combo. Our pipeline has never been cleaner." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionLabel center>Testimonials</SectionLabel>
        <h2 className="reveal mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-bold sm:text-5xl">
          Trusted by <span className="text-gradient">founders &amp; agencies</span>
        </h2>

        <div className="reveal glass-card mt-12 rounded-3xl p-8 sm:p-12">
          <Quote className="text-accent" size={32} />
          <p className="mt-5 font-display text-xl leading-relaxed sm:text-2xl">&ldquo;{t.q}&rdquo;</p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-primary)] font-bold text-primary-foreground">
                {t.n[0]}
              </div>
              <div className="min-w-0">
                <div className="font-semibold">{t.n}</div>
                <div className="truncate text-sm text-muted-foreground">{t.r}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
              </div>
              <div className="ml-3 flex gap-2">
                {testimonials.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Testimonial ${k + 1}`}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-[image:var(--gradient-primary)]" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              Let&apos;s automate your <span className="text-gradient">business</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Ready to streamline your operations, automate customer journeys, and scale your business?
              Tell me about your project — I usually reply within a day.
            </p>

            <div className="mt-10 space-y-4">
              <ContactItem icon={Phone} label="Phone" value="+91 6354589953" href="tel:+916354589953" />
              <ContactItem icon={Mail} label="Email" value="davevandan18@gmail.com" href="mailto:davevandan18@gmail.com" />
              <ContactItem icon={MapPin} label="Location" value="Junagadh, Gujarat, India" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/916354589953"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-secondary"
              >
                <MessageSquare size={16} /> WhatsApp
              </a>
              <a
                href="mailto:davevandan18@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-secondary"
              >
                <Mail size={16} /> Email Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                <Calendar size={16} /> Book a Call
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Cmp: any = href ? "a" : "div";
  return (
    <Cmp href={href} className="glass-card group flex items-center gap-4 rounded-2xl p-4 transition hover:border-primary/40">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)]">
        <Icon size={18} className="text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </Cmp>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="reveal glass-card glow-border rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" />
        <Field label="Email" name="email" type="email" />
      </div>
      <div className="mt-5">
        <Field label="Subject" name="subject" />
      </div>
      <div className="mt-5">
        <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
        <textarea
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:opacity-90"
      >
        {sent ? "Message Sent ✓" : (<>Send Message <Send size={16} /></>)}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </label>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:px-8">
        <div>© {new Date().getFullYear()} Dave Vandan. Crafted with precision.</div>
        <div className="flex items-center gap-4">
          <a href="mailto:davevandan18@gmail.com" className="hover:text-foreground">Email</a>
          <a href="https://wa.me/916354589953" className="hover:text-foreground">WhatsApp</a>
          <a href="#top" className="hover:text-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- shared ---------- */
function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`reveal inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur ${center ? "mx-auto block w-fit" : ""}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
