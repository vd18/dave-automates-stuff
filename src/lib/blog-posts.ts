export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string; // used as meta description + card excerpt
  date: string; // e.g. "2026-08-08"
  readTime: string; // e.g. "6 min read"
  tags: string[];
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "meta-ads-to-gohighlevel-lead-automation",
    title: "Meta Ads to GoHighLevel: Building a Lead Automation System That Doesn't Leak Leads",
    description:
      "Most businesses run Meta Ads, capture leads, and still lose them to slow follow-up. Here's how I connect WordPress, Meta Ads, GoHighLevel CRM, and AI follow-up into one automated system.",
    date: "2026-08-08",
    readTime: "6 min read",
    tags: ["GoHighLevel", "Meta Ads", "CRM Automation", "Lead Generation"],
    content: [
      {
        type: "p",
        text: "Most small businesses running Meta Ads have the same silent leak in their funnel: the ad works, the lead comes in, and then nothing happens fast enough. The lead sits in an inbox or a spreadsheet for hours before anyone follows up — and by then, they've already messaged three competitors.",
      },
      {
        type: "p",
        text: "I see this constantly with businesses that hire one person for ads, a different person for their website, and never connect either to a CRM. Three disconnected pieces, no system holding them together.",
      },
      {
        type: "h2",
        text: "The system I build instead",
      },
      {
        type: "p",
        text: "Rather than treating website, ads, and CRM as separate projects, I wire them into a single pipeline:",
      },
      {
        type: "ul",
        items: [
          "WordPress site — fast, conversion-focused pages built to capture intent, not just look good",
          "Meta Ads — traffic sent straight into a tracked funnel, not a generic contact form",
          "GoHighLevel CRM — every lead lands in one place instantly, tagged and routed automatically",
          "AI-assisted follow-up — instant SMS/email response within minutes, not hours",
          "Pipeline tracking — every lead visible from first click to closed deal, no spreadsheets",
        ],
      },
      {
        type: "h2",
        text: "Why speed to lead matters more than ad spend",
      },
      {
        type: "p",
        text: "Businesses often try to fix a leaky funnel by spending more on ads. That rarely works — more traffic into a broken follow-up process just means more wasted leads. Fixing the automation behind the ads almost always has a bigger impact than increasing budget.",
      },
      {
        type: "h2",
        text: "Who this is for",
      },
      {
        type: "p",
        text: "This setup makes the most sense for businesses already running (or about to run) Meta Ads, who are currently managing leads manually across email, WhatsApp, and spreadsheets. If that's you, this is exactly the kind of system I build.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
