import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/advocacy")({
  head: () => ({
    meta: [
      { title: "Advocacy - OCFP" },
      { name: "description", content: "Active campaigns, submissions, and position statements from the Ontario College of Family Physicians." },
      { property: "og:title", content: "Advocacy - OCFP" },
      { property: "og:description", content: "How the OCFP advocates for family medicine and the patients Ontarians care for." },
    ],
  }),
  component: Advocacy,
});

const campaigns = [
  { tag: "Technology", title: "Smarter, More Efficient Workflows", body: "Centralized intake and referral, digital health, AI strategy, and digital innovation built around family physician workflows." },
  { tag: "Infrastructure", title: "Building Better, Connected Care", body: "Integrated EMRs, portable patient records, northern and rural connectivity, IT support, training, security, and immunization registry." },
  { tag: "Workforce", title: "Making Family Medicine a More Attractive Option", body: "Digital infrastructure support, allied health wage gaps, and change management led with family physician expertise." },
  { tag: "Teams", title: "Meeting the Needs of Patients and Family Physicians", body: "Team-based care, FHT contract review, clinical support, reduced administrative burden, and removal of financial barriers to delegation." },
];

function Advocacy() {
  return (
    <>
      <section className="container-page pt-20 pb-16 md:pt-28">
        <p className="eyebrow">Advocacy</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Strengthening Primary Care in Ontario.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Family physicians care for Ontarians for life. The OCFP advocates for the technology,
          infrastructure, workforce, and teams needed so every Ontarian can access a family physician.
        </p>
      </section>
      <section className="container-page grid gap-6 pb-24 md:grid-cols-2">
        {campaigns.map((c, i) => (
          <article
            key={c.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-teal hover:shadow-xl md:min-h-[320px]"
          >
            <div>
              <p className="eyebrow">{String(i + 1).padStart(2, "0")} - {c.tag}</p>
              <h2 className="mt-6 font-display text-2xl leading-snug text-primary md:text-3xl">{c.title}</h2>
              <p className="mt-4 text-muted-foreground">{c.body}</p>
            </div>
            <p className="mt-8 text-sm font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">Read submission &rarr;</p>
          </article>
        ))}
      </section>
    </>
  );
}
