import { createFileRoute, Link } from "@tanstack/react-router";
import collab from "@/assets/collaboration.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Ontario College of Family Physicians" },
      {
        name: "description",
        content:
          "Learn who the Ontario College of Family Physicians represents, what guides its work, and how the OCFP supports family physicians across Ontario.",
      },
      { property: "og:title", content: "About the OCFP" },
      {
        property: "og:description",
        content:
          "The OCFP represents more than 18,000 family physicians and medical students across Ontario.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Leadership",
    body: "Promoting high-quality, patient-centred health care anchored by family physicians.",
  },
  {
    title: "Commitment",
    body: "Reflecting the views and needs of members across Ontario's diverse communities.",
  },
  {
    title: "Integrity",
    body: "Remaining accountable, transparent, and clear in the work that affects members and patients.",
  },
  {
    title: "Inclusivity",
    body: "Advancing equity, diversity, and belonging in the organization and across the work itself.",
  },
  {
    title: "Collaboration",
    body: "Working with partners who share responsibility for practical, solution-driven system change.",
  },
];

const priorities = [
  {
    title: "Make practicing better",
    body: "Support strategies that ease burden and help family physicians focus more of their time on patient care.",
  },
  {
    title: "Champion family physicians",
    body: "Amplify the diverse, foundational expertise family physicians bring to Ontario's health system.",
  },
  {
    title: "Lead system change",
    body: "Empower family physicians to advance solutions that support healthier communities across Ontario.",
  },
];

const pathways = [
  { title: "Leadership", body: "Board, executive leadership, committees, and physician leadership opportunities.", to: "/leadership" },
  { title: "Advocacy", body: "Policy priorities, submissions, and campaigns shaping primary care in Ontario.", to: "/advocacy" },
  { title: "Practice Supports", body: "Evidence-based tools, clinical resources, and Mainpro+ learning opportunities.", to: "/practice-supports" },
  { title: "Newsroom", body: "Updates, announcements, media releases, and member stories from across Ontario.", to: "/news" },
  { title: "Events", body: "Workshops, webinars, communities of practice, and certified learning sessions.", to: "/events" },
  { title: "Connect", body: "Contact details, membership questions, media inquiries, and ways to reach the OCFP.", to: "/connect" },
];

function About() {
  return (
    <>
      <section className="overflow-hidden bg-card py-24 lg:py-32">
        <div className="container-page">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={collab}
                  alt="Family physicians collaborating in a clinical education setting"
                  width={1400}
                  height={1000}
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 max-w-[280px] rounded-lg bg-primary p-6 text-primary-foreground shadow-xl md:-right-6">
                <p className="font-display text-xl italic leading-snug text-teal-soft">
                  Thriving family physicians in a healthy Ontario.
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
                  OCFP Vision
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Who we are</p>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-primary md:text-6xl">
                A College built <span className="italic text-teal">by</span> family physicians, for family physicians.
              </h1>
              <div className="mt-8 h-1 w-16 rounded-full bg-teal" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                The Ontario College of Family Physicians represents more than 18,000 family physicians
                and medical students, including residents, retired family physicians, and more than
                15,000 physicians working in communities across Ontario.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                As the provincial chapter of the College of Family Physicians of Canada, the OCFP
                supports members through evidence-based education, professional development,
                leadership, advocacy, practice supports, and health system leadership rooted in primary care.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Its work spans comprehensive community practice, hospitals, emergency departments,
                urgent care, palliative care, and the many other settings where family physicians care
                for Ontarians across the health system.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-teal pl-4">
                  <p className="font-display text-4xl font-semibold text-primary">18,000+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Family physicians and medical students represented</p>
                </div>
                <div className="border-l-2 border-magenta pl-4">
                  <p className="font-display text-4xl font-semibold text-primary">1954</p>
                  <p className="mt-1 text-sm text-muted-foreground">National College founded to advance family medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Mission, vision, and values</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
              Guided by member needs and grounded in primary care.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The OCFP's mandate is to develop education, leadership, advocacy, and research initiatives
              that help family physicians across Ontario provide the highest quality primary health care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-xl md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-soft">Mission</p>
              <h3 className="mt-4 font-display text-3xl leading-tight">
                Supporting family physicians in their practice, advocating for their well-being, and providing health system leadership.
              </h3>
            </article>

            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-teal hover:shadow-xl">
                <h3 className="font-display text-2xl text-primary">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24 md:py-32">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Strategic plan 2024-2029</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
              Family physicians lead health for Ontarians.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Developed by family physicians for family physicians, the OCFP's strategic plan recognizes
              the difference family physicians make in patients' lives and in Ontario's overall health system.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {priorities.map((priority, index) => (
              <article key={priority.title} className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-lg">
                <p className="font-display text-5xl font-semibold text-teal/30">0{index + 1}</p>
                <h3 className="mt-6 font-display text-2xl text-primary">{priority.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{priority.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Explore the OCFP</p>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Clear pathways into the work behind family medicine.
            </h2>
          </div>
          <Link to="/connect" className="w-fit border-b-2 border-teal pb-1 text-sm font-bold text-teal transition-colors hover:border-primary hover:text-primary">
            Connect with us &rarr;
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-teal hover:shadow-xl"
            >
              <h3 className="font-display text-2xl text-primary">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              <span className="mt-8 inline-flex text-sm font-bold text-teal opacity-0 transition-opacity group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
