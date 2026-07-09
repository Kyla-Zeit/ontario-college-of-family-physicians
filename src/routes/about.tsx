import { createFileRoute } from "@tanstack/react-router";
import collab from "@/assets/collaboration.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Ontario College of Family Physicians" },
      { name: "description", content: "Who we are, our leadership, governance, and the OCFP 2024-2029 Strategic Plan." },
      { property: "og:title", content: "About the OCFP" },
      { property: "og:description", content: "Who we are, our leadership, governance, and strategic plan." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-page pt-20 pb-16 md:pt-28">
        <p className="eyebrow">About the OCFP</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          A College built <em className="italic text-teal">by</em> family physicians, <em className="italic text-teal">for</em> family physicians.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          As the provincial chapter of the College of Family Physicians of Canada, the OCFP
          supports its members through advocacy, professional development, practice supports,
          and health system leadership.
        </p>
      </section>

      <section className="container-page grid gap-12 pb-24 md:grid-cols-2">
        <img src={collab} alt="Family physicians collaborating" width={1400} height={1000} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Strategic plan 2024-2029</p>
          <h2 className="mt-4 font-display text-3xl text-primary md:text-4xl">
            Strengthening family medicine. Improving the health of Ontarians.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Our five-year strategy focuses on three horizons: equipping physicians with the tools
            they need, strengthening the family physician community, and amplifying the collective
            voice of family medicine.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 pb-24 md:grid-cols-3">
        {[
          { t: "Leadership", d: "Board of Directors, executive team, and committee chairs." },
          { t: "Governance", d: "Bylaws, Annual Meeting of Members, and audited financials." },
          { t: "Awards", d: "Recognizing exemplary family physicians across Ontario each year." },
          { t: "Careers", d: "Join our team of communicators, educators, and system leaders." },
          { t: "FAQ", d: "Answers to the questions members and the public ask most." },
          { t: "Contact", d: "Media inquiries, membership questions, and general contact." },
        ].map((c) => (
          <div key={c.t} className="border-t border-border pt-6">
            <h3 className="font-display text-2xl text-primary">{c.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}