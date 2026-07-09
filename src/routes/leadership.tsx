import { createFileRoute, Link } from "@tanstack/react-router";
import collab from "@/assets/collaboration.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Physician Leadership - OCFP" },
      { name: "description", content: "Leadership Academy, Peer Connect Mentorship, and Communities of Practice from the Ontario College of Family Physicians." },
      { property: "og:title", content: "Physician Leadership - OCFP" },
      { property: "og:description", content: "Grow with a community of peers - Leadership Academy, Peer Connect, and Communities of Practice." },
    ],
  }),
  component: Leadership,
});

const programs = [
  { tag: "Leadership Academy", title: "A year-long, cohort-based leadership program.", body: "Build the skills, network, and confidence to lead change in family medicine - across your practice, your community, and the health system." },
  { tag: "FP-Administrative Leadership Partnership", title: "Physicians and health-system administrators, learning together.", body: "A partnership program pairing family physicians with health system leaders to co-design care improvements." },
  { tag: "Peer Connect Mentorship", title: "One-to-one mentorship, matched across Ontario.", body: "Residents and early-career physicians paired with experienced mentors for practical, ongoing guidance." },
  { tag: "Communities of Practice", title: "Practising Well - Health Equity - Changing the Way We Work.", body: "Ongoing peer forums for the messy, real, in-between questions that don't fit neatly into a webinar." },
];

function Leadership() {
  return (
    <>
      <section className="container-page pt-20 pb-16 md:pt-28">
        <p className="eyebrow">Physician Leadership</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Grow with a <em className="italic text-teal">community of peers.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          The OCFP invests in the family physicians shaping the future of primary care in Ontario
          - through cohort-based leadership development, mentorship, and communities of practice.
        </p>
      </section>

      <section className="container-page pb-16">
        <img src={collab} alt="Family physicians collaborating in a hospital hallway" width={1400} height={1000} loading="lazy" className="aspect-[21/9] w-full rounded-2xl object-cover" />
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <article key={p.tag} className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-teal hover:shadow-xl">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")} - {p.tag}</p>
              <h2 className="mt-6 font-display text-2xl leading-snug text-primary md:text-3xl">{p.title}</h2>
              <p className="mt-4 flex-1 text-muted-foreground">{p.body}</p>
              <Link to="/leadership" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-16">
          <p className="eyebrow text-teal-soft">OCFP Awards</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Every year, we honour family physicians nominated by their peers and patients.
          </h2>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-primary hover:bg-teal-soft">
            See our award recipients &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}