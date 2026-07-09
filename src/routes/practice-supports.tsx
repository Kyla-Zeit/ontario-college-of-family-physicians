import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/practice-supports")({
  head: () => ({
    meta: [
      { title: "Practice Supports & Resource Hub - OCFP" },
      { name: "description", content: "The OCFP Resource Hub: searchable, filterable professional development, clinical tools, and continuing education." },
      { property: "og:title", content: "Practice Supports & Resource Hub - OCFP" },
      { property: "og:description", content: "Your central destination for professional development and clinical resources." },
    ],
  }),
  component: PracticeSupports,
});

type Resource = {
  title: string;
  format: "Webinar" | "Toolkit" | "Recording" | "Slides" | "Guide";
  topic: "Mental Health" | "LTC" | "Health Equity" | "Leadership" | "Exam Prep" | "Wellness";
  audience: "Physicians" | "Residents" | "All";
  updated: string;
};

const resources: Resource[] = [
  { title: "Children's Mental Health: Practical Frameworks for the Family Physician", format: "Webinar", topic: "Mental Health", audience: "Physicians", updated: "Jun 2026" },
  { title: "Osteoporosis & Fracture Prevention Toolkit", format: "Toolkit", topic: "LTC", audience: "All", updated: "May 2026" },
  { title: "Long-Term Care Fracture Prevention: On-Demand Session", format: "Recording", topic: "LTC", audience: "Physicians", updated: "May 2026" },
  { title: "CFPC Exam Orientation 2026", format: "Slides", topic: "Exam Prep", audience: "Residents", updated: "Apr 2026" },
  { title: "Practising Well: Reducing Administrative Burden", format: "Guide", topic: "Wellness", audience: "Physicians", updated: "Apr 2026" },
  { title: "Leadership Academy - Cohort 4 Materials", format: "Slides", topic: "Leadership", audience: "Physicians", updated: "Mar 2026" },
  { title: "Changing the Way We Work: Team-Based Care", format: "Webinar", topic: "Wellness", audience: "All", updated: "Mar 2026" },
  { title: "Health Equity Community of Practice - Session 12", format: "Recording", topic: "Health Equity", audience: "All", updated: "Feb 2026" },
  { title: "Peer Connect Mentorship - Getting Started Guide", format: "Guide", topic: "Wellness", audience: "Residents", updated: "Feb 2026" },
];

const formats = ["All", "Webinar", "Toolkit", "Recording", "Slides", "Guide"] as const;
const topics = ["All", "Mental Health", "LTC", "Health Equity", "Leadership", "Exam Prep", "Wellness"] as const;

function PracticeSupports() {
  const [q, setQ] = useState("");
  const [format, setFormat] = useState<(typeof formats)[number]>("All");
  const [topic, setTopic] = useState<(typeof topics)[number]>("All");
  const filtered = useMemo(
    () => resources.filter((r) => (format === "All" || r.format === format) && (topic === "All" || r.topic === topic) && (q === "" || r.title.toLowerCase().includes(q.toLowerCase()))),
    [q, format, topic],
  );
  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="eyebrow text-teal-soft">Practice Supports & Continuing Education</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">The Resource Hub.</h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/70">
            Session materials, self-guided recordings, clinical tools, and knowledge translation resources - searchable and filterable by topic, format, and audience.
          </p>
        </div>
      </section>
      <section className="container-page -mt-12 md:-mt-16">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
          <label className="block">
            <span className="eyebrow">Search resources</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try: mental health, LTC, exam prep..."
              className="mt-3 w-full border-b border-border bg-transparent pb-3 font-display text-2xl text-primary placeholder:text-muted-foreground/60 focus:border-teal focus:outline-none md:text-3xl"
            />
          </label>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FilterRow label="Format" options={formats} value={format} onChange={setFormat} />
            <FilterRow label="Topic" options={topics} value={topic} onChange={setTopic} />
          </div>
        </div>
      </section>
      <section className="container-page py-16 md:py-24">
        <div className="flex items-baseline justify-between">
          <p className="text-sm text-muted-foreground">{filtered.length} resource{filtered.length === 1 ? "" : "s"}</p>
          <p className="text-sm text-muted-foreground">Sorted by most recent</p>
        </div>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {filtered.map((r) => (
            <li key={r.title} className="group grid gap-4 py-6 transition-colors md:grid-cols-[1fr_auto_auto_auto] md:items-center md:gap-8">
              <div>
                <h3 className="font-display text-xl text-primary group-hover:text-teal md:text-2xl">{r.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Updated {r.updated}</p>
              </div>
              <Tag>{r.format}</Tag>
              <Tag muted>{r.topic}</Tag>
              <Tag muted>{r.audience}</Tag>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="py-16 text-center text-muted-foreground">No resources match your filters. Try widening your search.</li>
          )}
        </ul>
      </section>
      <section className="container-page pb-24">
        <p className="eyebrow">Also in Practice Supports</p>
        <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Explore by program.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { t: "Mainpro+ Certification", d: "Continuing professional development credits tracked and integrated." },
            { t: "Leadership Academy", d: "Cohort-based leadership development for family physicians." },
            { t: "Peer Connect Mentorship", d: "One-to-one mentorship pairing across the province." },
            { t: "Practising Well", d: "Community of Practice for wellness, resilience, and sustainable practice." },
            { t: "Health Equity CoP", d: "Advancing equity-centred primary care." },
            { t: "Changing the Way We Work", d: "Rethinking practice models and team-based care." },
          ].map((c) => (
            <Link key={c.t} to="/practice-supports" className="group rounded-2xl border border-border p-6 transition-all hover:border-teal hover:bg-teal-soft/40">
              <h3 className="font-display text-xl text-primary">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
              <p className="mt-6 text-sm font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">Learn more &rarr;</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function FilterRow<T extends string>({ label, options, value, onChange }: { label: string; options: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${value === o ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground/70 hover:border-teal hover:text-teal"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Tag({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${muted ? "bg-secondary text-secondary-foreground" : "bg-teal-soft text-primary"}`}>
      {children}
    </span>
  );
}