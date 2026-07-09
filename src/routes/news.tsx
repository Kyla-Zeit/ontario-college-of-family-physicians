import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "New and Emerging - OCFP" },
      { name: "description", content: "New and emerging tools, President's Message, sector updates, and OCFP news." },
      { property: "og:title", content: "New and Emerging - OCFP" },
      { property: "og:description", content: "Latest tools, sector updates, events, and news from the Ontario College of Family Physicians." },
    ],
  }),
  component: News,
});

const items = [
  { tag: "President's Message", date: "Updated June 15, 2026", title: "ColonCancerCheck Changes Take Effect July 1 and Mainpro+ Credit Cycle Ends June 30", excerpt: "World Family Doctor Day, ColonCancerCheck program changes, OCFP advocacy, and the Mainpro+ credit cycle reminder." },
  { tag: "Tools for Your Practice", date: "July 1, 2026", title: "ColonCancerCheck Changes Take Effect July 1", excerpt: "Screening age, eligibility, lab provider, FIT device, and workflow updates for family physicians." },
  { tag: "Resource of the Day", date: "Current", title: "Practical Ways To Reduce HRM Report Volumes", excerpt: "Steps to streamline HRM inboxes and stop duplicate eNotifications or faxed copies." },
  { tag: "Newsroom", date: "May 19, 2026", title: "Happy World Family Doctor Day from the OCFP", excerpt: "A message celebrating family physicians, residents, and medical students across Ontario." },
  { tag: "Newsroom", date: "May 19, 2026", title: "Ontario family doctors driving innovation in health care on World Family Doctor Day", excerpt: "OCFP recognizes family doctors' vital role in delivering care and driving innovation." },
  { tag: "Newsroom", date: "March 26, 2026", title: "OCFP welcomes continued commitment to strengthening access to family physicians in Ontario's 2026 Budget", excerpt: "OCFP response to the 2026 Ontario Budget and primary care commitments." },
  { tag: "Newsroom", date: "March 3, 2026", title: "Welcoming the Next Generation of Family Physicians", excerpt: "A message welcoming 602 medical students who matched to family medicine in Ontario." },
];

function News() {
  return (
    <>
      <section className="container-page pt-20 pb-12 md:pt-28">
        <p className="eyebrow">New and emerging</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">Current tools, updates, and OCFP news.</h1>
      </section>
      <section className="container-page pb-24">
        <ul className="divide-y divide-border border-y border-border">
          {items.map((n) => (
            <li key={n.title}>
              <a href="#" className="group grid gap-4 py-10 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8">
                <div>
                  <p className="eyebrow">{n.tag}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{n.date}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl leading-snug text-primary group-hover:text-teal md:text-3xl">{n.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{n.excerpt}</p>
                </div>
                <span className="text-2xl text-primary/40 transition-transform group-hover:translate-x-1 group-hover:text-teal">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
