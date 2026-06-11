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
const IMG = "https://petersamuelagada.github.io/";
type Cat = "all" | "landing" | "ghl" | "ai" | "funnel";

const projects: { t: string; d: string; img: string; overlay: string; tag: string; cat: Exclude<Cat, "all">; results: { v: string; l: string }[] }[] = [
  { t: "Concrete Construction Lead Gen Page — ISCHBA", d: "Full lead-gen landing page for a US concrete construction company — services showcase, 4-step process, free estimate form, and CRM automation built inside GoHighLevel.", img: IMG + "Mockup_Real_estate.jpg", overlay: "Construction", tag: "Construction — Lead Generation", cat: "landing", results: [{ v: "Lead", l: "Gen System" }, { v: "CRM", l: "Synced" }, { v: "5★", l: "Rating" }] },
  { t: "Herbal Health Product Landing Page", d: "Full landing page for a premium herbal health brand — hero, product showcase, testimonials, FAQ, and conversion-optimized CTAs built inside GoHighLevel.", img: IMG + "mockup-herbal.jpg", overlay: "Landing Page", tag: "Health & Wellness", cat: "landing", results: [{ v: "GHL", l: "Built" }, { v: "Full", l: "Page Design" }, { v: "CRO", l: "Optimised" }] },
  { t: "Restorative Health & Wellness Clinic", d: "Complete website for a health clinic — services, team profiles, testimonials, partner logos and a contact form with full GHL integration and automated follow-up.", img: IMG + "mockup-clinic.jpg", overlay: "Landing Page", tag: "Health & Wellness Clinic", cat: "landing", results: [{ v: "GHL", l: "Integrated" }, { v: "Auto", l: "Follow-up" }, { v: "Multi", l: "Section" }] },
  { t: "All Cities Real Estate Agent Page", d: "Professional real estate landing page in GHL — property listings, partner logos (Zillow, Chase, RE/MAX), agent profiles, testimonials, and lead capture form with CRM sync.", img: IMG + "mockup-realestate.jpg", overlay: "Real Estate", tag: "Real Estate", cat: "landing", results: [{ v: "GHL", l: "Built" }, { v: "Lead", l: "Capture" }, { v: "CRM", l: "Synced" }] },
  { t: "Mastering Photography Course — Scott Spencer", d: "Full course landing page in GHL — instructor bio, 6 modules, 3-tier pricing ($69/$99/$179), FAQ, and enrollment CTA. 1,000+ students enrolled.", img: IMG + "Photography%20Mockup.jpg", overlay: "Course Page", tag: "Education — Course Launch", cat: "landing", results: [{ v: "1,000+", l: "Students" }, { v: "300+", l: "Reviews" }, { v: "99%", l: "Satisfaction" }] },
  { t: "AI Marketing Landing Page — Precision AI Growth", d: "Full landing page for an AI marketing agency — 24/7 AI answering agent offer, 4 AI service blocks, FAQ, and Google-verified testimonials. Built inside GoHighLevel.", img: IMG + "AIPRECIS_LANDING_PAGE_mockup.jpg", overlay: "AI Marketing", tag: "AI Marketing — Lead Generation", cat: "landing", results: [{ v: "AI", l: "Powered" }, { v: "24/7", l: "Agent" }, { v: "GHL", l: "Built" }] },
  { t: "DNA Paternity Testing — PaternityLab.com", d: "Full landing page for a DNA testing lab — order CTA, 4 test types, accreditation badges, lab difference section, local facilities, and client reviews.", img: IMG + "PaternityLabLandingPageDesign_mockup.jpg", overlay: "Healthcare", tag: "Healthcare — DNA Testing", cat: "landing", results: [{ v: "99.99%", l: "Accuracy" }, { v: "4", l: "Test Types" }, { v: "5★", l: "Rating" }] },
  { t: "Motorcycle Mastery Opt-in Page — Petrolhead", d: "Full lead-capture opt-in funnel — free $97 guide offer, 6 chapter previews, 38K subscriber social proof, testimonials, FAQ, and multi-CTA flow in GoHighLevel.", img: IMG + "OptinPageMotorcycle_Masterymockup.jpg", overlay: "Opt-in Page", tag: "Lead Generation — Opt-in Funnel", cat: "funnel", results: [{ v: "38K", l: "Subscribers" }, { v: "Free", l: "Lead Magnet" }, { v: "5★", l: "Rating" }] },
  { t: "Coaching & Speaker Conference — Roventa 2025", d: "Complete event registration page — speaker profiles, 3-day schedule, tiered ticket pricing ($99/$199/$399), sponsor showcase, and testimonials in GoHighLevel.", img: IMG + "Mockup_coaches.jpg", overlay: "Event Page", tag: "Coaching & Events", cat: "landing", results: [{ v: "3-Day", l: "Schedule" }, { v: "Ticket", l: "Integrated" }, { v: "5★", l: "Rating" }] },
  { t: "Blue Hawk Automation — Algorithmic Trading", d: "Full website for an Australia-based algo trading company — 5-way opportunity comparison, License & Funded Account services, case studies, team profiles, FAQ.", img: IMG + "bluehawkautomationmockup.jpg", overlay: "Algo Trading", tag: "Finance — Algorithmic Trading", cat: "landing", results: [{ v: "5", l: "Opportunity Types" }, { v: "🇦🇺", l: "Australia" }, { v: "5★", l: "Rating" }] },
  { t: "Tiffany The Lender — Homeownership & Wealth", d: "Premium mortgage landing page — video-led hero, AI chatbot, qualified vs non-qualified mortgage products, family video testimonials, 8+ FAQ, pre-qualification CTA.", img: IMG + "Tiffany_landing%20page_Mockup.jpg", overlay: "Mortgage & Lending", tag: "Real Estate — Mortgage Lending", cat: "landing", results: [{ v: "AI", l: "Chatbot" }, { v: "2", l: "Product Types" }, { v: "5★", l: "Rating" }] },
  { t: "Vital Virtuals — Healthcare VA Website", d: "Complete healthcare staffing website — HIPAA-compliant virtual scribes, 70% documentation time reduction, AI vs live scribe comparison, pricing, booking form.", img: IMG + "Vital_landing_page_Mockup.jpg", overlay: "Healthcare", tag: "Healthcare — Virtual Assistants", cat: "landing", results: [{ v: "70%", l: "Doc Time Saved" }, { v: "HIPAA", l: "Compliant" }, { v: "5★", l: "Rating" }] },
  { t: "Digital Lead Marketing — CRM & Pricing Page", d: "Clean pricing page — DLM Lead Connector CRM at $149/mo with 60-day free trial, Monthly/Yearly toggle, 3-tier ad management plans, transparent pricing.", img: IMG + "digitallead_marketing_pricing_page_mockup.jpg", overlay: "Pricing Page", tag: "Digital Marketing — CRM & Pricing", cat: "landing", results: [{ v: "60", l: "Day Free Trial" }, { v: "3", l: "Service Tiers" }, { v: "5★", l: "Rating" }] },
  { t: "Transforming Lives Digitally — Financial Platform", d: "Full AI-powered financial literacy platform — crypto, stocks and forex learning tracks, 4-tier pricing ($99–$139), AI tools, live workshops, affiliate programme.", img: IMG + "Transforming_digital_Mockup.jpg", overlay: "Finance & EdTech", tag: "Finance — Course Platform", cat: "landing", results: [{ v: "4", l: "Pricing Tiers" }, { v: "AI", l: "Integrated" }, { v: "5★", l: "Rating" }] },
  { t: "Legal Lead — AI Marketing & Intake for Law Firms", d: "Complete AI-powered marketing and intake system for solo lawyers and SME law firms — AI receptionist, SEO, social media, reputation, CRM automation, 24/7 lead capture.", img: IMG + "Legal_Lead_Marketingmockup.jpg", overlay: "Legal / AI", tag: "Legal — AI Marketing & Intake", cat: "landing", results: [{ v: "24/7", l: "AI Intake" }, { v: "6", l: "Components" }, { v: "5★", l: "Rating" }] },
  { t: "Pro Studio — Real Estate Media Website", d: "Premium real estate media site for a Toronto agency — 6 media services (photography, 4K video, 3D Matterport, drone, reels, floor plans), curated packages, 24hr delivery.", img: IMG + "PRO_STUDIO_Mockup.jpg", overlay: "Real Estate Media", tag: "Real Estate — Media & Photography", cat: "landing", results: [{ v: "6", l: "Services" }, { v: "24hr", l: "Delivery" }, { v: "🇨🇦", l: "Toronto" }] },
  { t: "ClickUp Funnels — DFY Sales Funnel for Coaches", d: "100% done-for-you sales funnel landing page — offer mapping, copy, funnel design, email automation, tech integration, 90-day optimisation. Live in 30 days.", img: IMG + "Clickupmockup.jpg", overlay: "Sales Funnel", tag: "Coaching — DFY Sales Funnel", cat: "funnel", results: [{ v: "DFY", l: "Done For You" }, { v: "30", l: "Days to Live" }, { v: "24/7", l: "Running" }] },
  { t: "Real — Top Producing Agent Recruitment Page", d: "High-converting agent recruitment page — 85% commission splits, Real Academy training (114 replays, 350+ hours), 3 value sections, stock rewards video, 7 consultation CTAs.", img: IMG + "RealEstatePropertyLandingPagemockup.jpg", overlay: "Agent Recruitment", tag: "Real Estate — Agent Recruitment", cat: "landing", results: [{ v: "85%", l: "Commission Split" }, { v: "350+", l: "Training Hours" }, { v: "5★", l: "Rating" }] },
  { t: "AI Agent — OpenAI + SerpAPI + n8n Chat", d: "Intelligent chat-triggered AI agent in n8n — OpenAI Chat Model with Simple Memory for context retention and SerpAPI for real-time web search. Autonomous, 24/7.", img: IMG + "AI-Agent-OpenAI-SerpAPI-n8n.png", overlay: "n8n + OpenAI", tag: "AI Automation — n8n", cat: "ai", results: [{ v: "AI", l: "Agent" }, { v: "Live", l: "Web Search" }, { v: "24/7", l: "Automated" }] },
  { t: "AI Event Aggregator — OpenAI + Pabbly RSS", d: "Automated event aggregation pipeline in Pabbly — RSS triggers ChatGPT to process and summarise items, formats dates across 3 DateTime nodes, publishes via API.", img: IMG + "AI-Event-Aggregator-OpenAI-Pabbly.png", overlay: "Pabbly + OpenAI", tag: "AI Automation — Pabbly Connect", cat: "ai", results: [{ v: "RSS", l: "Triggered" }, { v: "GPT", l: "Powered" }, { v: "Auto", l: "Publishing" }] },
  { t: "AI Lead Scoring & Email Outreach — n8n", d: "Multi-workflow n8n automation — hourly lead fetch, AI intent classification, personalised outreach, Gmail response parsing, lead scoring, daily analytics. Fully autonomous.", img: IMG + "AI-Lead-Scoring-Email-Outreach-n8n.png", overlay: "n8n + AI", tag: "AI Automation — n8n", cat: "ai", results: [{ v: "AI", l: "Lead Scoring" }, { v: "Auto", l: "Outreach" }, { v: "Zero", l: "Manual Work" }] },
  { t: "AI Website Research & Personalised Outreach", d: "Full n8n automation — AI reads a prospect's site, crawls sublinks, researches content, crafts a personalised GPT email, sends it, and logs everything with Telegram alerts.", img: IMG + "AI-PoweredWebsite_ResearchPersonalizedEmailOutreachAutomation_1.png", overlay: "n8n Automation", tag: "n8n — AI Automation", cat: "ai", results: [{ v: "AI", l: "Researched" }, { v: "Auto", l: "Email Sent" }, { v: "RAG", l: "Agent" }] },
  { t: "GitHub Issue Management — Auto-Assign & Comment", d: "n8n workflow triggered by GitHub events — auto-assigns issue creators, detects 'I want to work on this' comments, checks assignment status, assigns commenter, adds comment.", img: IMG + "n8n_2_template.png", overlay: "n8n Automation", tag: "n8n — GitHub Automation", cat: "ai", results: [{ v: "Auto", l: "Assign" }, { v: "4", l: "Branch Logic" }, { v: "GitHub", l: "Integrated" }] },
  { t: "AI Athlete Performance Tracking — n8n", d: "Full n8n AI automation for athlete coaching — logs sessions, analyses performance with GPT, checks thresholds, sends Slack/email alerts, weekly per-athlete summaries.", img: IMG + "n8n_3_project.png", overlay: "n8n + AI Agent", tag: "n8n — AI Performance Tracking", cat: "ai", results: [{ v: "AI", l: "Analysis" }, { v: "Auto", l: "Weekly Reports" }, { v: "Slack", l: "+ Email" }] },
  { t: "Appointment Status Update Workflow — GHL", d: "Multi-branch GHL workflow handling 6 outcomes — Unable to Contact, Contacted, No Show, Showed, Sold, Unqualified. Auto-updates pipeline, tags, emails, SMS, review requests.", img: IMG + "ghl-status-workflow-branches.jpg", overlay: "GHL Workflow", tag: "GoHighLevel — Workflow Automation", cat: "ghl", results: [{ v: "6", l: "Branch Logic" }, { v: "Auto", l: "Pipeline Update" }, { v: "SMS", l: "+ Email" }] },
  { t: "Lead Nurture Workflow — SMS, Email & Video", d: "Multi-trigger GHL nurture — form submit, appointment booking or lead reply. Sends Welcome SMS + Email, waits, checks for reply, follows up with video email. Smart branching.", img: IMG + "ghl-lead-nurture-workflow.png", overlay: "GHL Workflow", tag: "GoHighLevel — Lead Nurture", cat: "ghl", results: [{ v: "3", l: "Triggers" }, { v: "Auto", l: "SMS + Email" }, { v: "Video", l: "Follow-Up" }] },
  { t: "AI-Powered Chatbot for Directory Platform", d: "Custom-trained AI business agent for a client's directory platform — designed to turn website visitors into qualified leads. Each business gets its own AI assistant.", img: IMG + "mockup-chatbot.jpg", overlay: "AI Integration", tag: "AI Integration", cat: "ai", results: [{ v: "AI", l: "Powered" }, { v: "24/7", l: "Automated" }, { v: "VIP", l: "Lead Flow" }] },
];

const filters: { id: Cat; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "landing", label: "Landing Pages" },
  { id: "ghl", label: "GoHighLevel" },
  { id: "ai", label: "AI & Automation" },
  { id: "funnel", label: "Funnels" },
];

export function Projects() {
  const [filter, setFilter] = useState<Cat>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="reveal mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-5xl">
            Featured <span className="text-gradient">projects</span>
          </h2>
          <p className="max-w-md text-muted-foreground">
            {projects.length}+ landing pages, funnels, CRM workflows and AI automations shipped for clients across the US, UK, Canada, AU and EU.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  active
                    ? "border-transparent bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.t}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-2 hover:border-primary/40 hover:shadow-[var(--shadow-card)] animate-[fade-up_0.5s_ease-out_both]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {p.overlay}
                </span>
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-foreground">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-medium uppercase tracking-wider text-accent">{p.tag}</div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.t}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
                  {p.results.map((r) => (
                    <div key={r.l} className="text-center">
                      <div className="font-display text-sm font-bold text-gradient">{r.v}</div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{r.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
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
