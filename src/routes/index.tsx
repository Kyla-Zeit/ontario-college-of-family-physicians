import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-physician.jpg";
import collabImg from "@/assets/collaboration.jpg";
import abstractImg from "@/assets/abstract-teal.jpg";
import presidentImg from "@/assets/dr-jobin-varughese.png";
import resourcesImg from "@/assets/resources.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const hotTopics = [
  { title: "ColonCancerCheck: Key Changes in Effect on July 1, 2026", tag: "Clinical update", to: "/practice-supports" },
  { title: "Practical Ways to Reduce HRM Report Volumes", tag: "Practice tool", to: "/practice-supports" },
  { title: "OCFP Advocacy: Primary Care Reform", tag: "Advocacy", to: "/advocacy" },
  { title: "Family Physicians in Action", tag: "Member stories", to: "/advocacy" },
];

const stats = [
  { k: "18,000+", v: "Family physicians represented" },
  { k: "72", v: "Years advancing family medicine" },
  { k: "300+", v: "CPD sessions each year" },
  { k: "AODA", v: "WCAG 2.1 AA accessible" },
];

const events = [
  { date: "Wed - Jul 15 - 9:00 AM EDT", title: "Osteoporosis and Fracture Prevention Workshop", body: "Insights from the 2023 updated clinical practice guideline for management of osteoporosis and fracture prevention in Canada." },
  { date: "Wed - Jul 22 - 8:00 AM EDT", title: "ADHD in Primary Care: Meeting Growing Demand", body: "Practical tools for family physicians as demand for ADHD diagnosis and support continues to increase." },
  { date: "Fri - Jul 24 - 8:00 AM EDT", title: "Infectious Disease & Practical Nutrition Guidance", body: "Session 111 of Changing the Way We Work - updates on circulating infectious diseases." },
  { date: "Sat - Aug 22 - 8:00 AM EDT", title: "CFPC Exam Orientation Workshop", body: "An introduction to the components of the CFPC certification exam for residents." },
  { date: "Wed - Aug 26 - 8:00 AM EDT", title: "ADHD in Practice: Treatment & Management", body: "Managing ADHD treatment in the presence of co-morbid psychiatric conditions and limited specialist access." },
  { date: "Thu - Aug 27 - 6:00 PM EDT", title: "OCFP Ask Me Anything (AMA) Webinar: Wellness in Family Medicine", body: "Experienced family physicians answer questions from medical students, residents, and internationally trained physicians about wellness and career pathways." },
  { date: "Fri - Sep 4 - 12:00 PM EDT", title: "Clinical Application of LTC Fracture Prevention", body: "Evidence-based recommendations for frail older adults in long-term care." },
];

const resources = [
  { title: "Advice to Reduce Report Volumes through HRM", body: "Streamline your HRM inbox - stop eNotifications and faxed copies of reports you already receive electronically." },
  { title: "OCFP Pre-budget One Pager", body: "OCFP's 2026 pre-budget submission summarizing priorities for the Government of Ontario." },
  { title: "New HPV Testing for Cervical Screening", body: "A summary of the new HPV testing recommendations from the Ontario Cervical Screening Program." },
  { title: "Measles: Prevention & Management", body: "The most up-to-date information on prevention and management of suspected measles cases in your practice." },
  { title: "Universal RSV Prevention Program: Summary", body: "Updated RSV prevention programs in Ontario and the role of family physicians." },
  { title: "Transition to Practice Guide", body: "Essential insights into practice models, compensation and benefits, and regulatory requirements." },
];

const news = [
  { date: "May 19, 2026", title: "Happy World Family Doctor Day from the OCFP", body: "Across Ontario, more than 18,000 family physicians, residents, and medical students are caring for patients." },
  { date: "May 19, 2026", title: "Ontario family doctors driving innovation on World Family Doctor Day", body: "OCFP celebrates the vital role of family doctors in delivering care and driving innovation across Ontario." },
  { date: "March 26, 2026", title: "OCFP welcomes commitment to family physicians in 2026 Budget", body: "The OCFP congratulates the Government of Ontario on the release of the 2026 Budget." },
  { date: "March 3, 2026", title: "Welcoming the Next Generation of Family Physicians", body: "602 medical students matched to family medicine in the first iteration of CaRMS in Ontario." },
];

const mainpro = [
  { title: "Certified group learning", body: "Mainpro+ certified workshops, webinars, and communities of practice curated by family physicians." },
  { title: "Self-learning credits", body: "Self-assessment programs and on-demand recordings - accessible when your schedule allows." },
  { title: "Report your credits", body: "Straightforward credit reporting integrated with your OCFP member profile." },
  { title: "Get certified", body: "Guidance on how to get your own program Mainpro+ certified with the OCFP." },
];

type Tab = "Events" | "Resources" | "News" | "Mainpro+";
const tabs: Tab[] = ["Events", "Resources", "News", "Mainpro+"];

function Home() {
  const [tab, setTab] = useState<Tab>("Events");
  return (
    <>
      {/* HERO - architectural overlap */}
      <section className="relative overflow-hidden pt-12 pb-40 md:pt-16">
        <div aria-hidden className="absolute top-0 right-0 z-0 hidden h-full w-2/3 -skew-x-12 translate-x-32 bg-primary/5 md:block" />
        <div className="container-page relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-teal" />
                <span className="text-xs font-semibold uppercase tracking-widest text-teal">The Ontario College of Family Physicians</span>
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] text-primary md:text-7xl">
                Advancing <span className="italic text-teal">family medicine</span> in Ontario.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Join a community of 18,000+ family physicians. Access Mainpro+ credits, clinical
                resources, advocacy, and peer support - from the College that's championed
                family medicine since 1954.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/practice-supports" className="rounded-sm bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-xl transition-all hover:bg-primary/90">
                  Explore Mainpro+
                </Link>
                <Link to="/about" className="rounded-sm border-2 border-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                  Become a member
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative z-20 aspect-[4/5] w-full overflow-hidden rounded-lg shadow-2xl">
                  <img src={heroImg} alt="Family physician in a modern Ontario clinic" width={1200} height={1500} className="h-full w-full object-cover" />
                </div>
                <div aria-hidden className="absolute -right-6 -top-6 z-10 h-32 w-32 border-r-8 border-t-8 border-magenta" />
                <div aria-hidden className="absolute -bottom-8 -left-8 z-10 h-24 w-24 border-b-4 border-l-4 border-teal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STATS - overlap under hero */}
      <div className="container-page relative z-30 -mt-24">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => {
            const styles = [
              "bg-card border-b-4 border-teal text-primary",
              "bg-primary text-primary-foreground md:translate-y-4",
              "bg-card border-b-4 border-magenta text-primary",
              "bg-teal text-primary-foreground md:translate-y-4",
            ] as const;
            return (
              <div
                key={s.v}
                className={`p-8 shadow-2xl transition-transform hover:-translate-y-1 ${styles[i]}`}
              >
                <div className="font-display text-4xl font-semibold md:text-5xl">{s.k}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider opacity-80">{s.v}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* HOT TOPICS - bento grid */}
      <section className="container-page py-28 md:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Hot topics</p>
            <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">What everyone's reading.</h2>
            <p className="mt-4 text-muted-foreground">The latest advocacy updates, practice supports, and clinical news for Ontario family physicians.</p>
          </div>
          <Link to="/news" className="border-b-2 border-teal pb-1 text-sm font-bold text-teal transition-colors hover:border-primary hover:text-primary">
            View all updates &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {/* Featured */}
          <Link
            to={hotTopics[0].to}
            className="group relative min-h-[420px] overflow-hidden rounded-lg bg-primary md:col-span-2 md:row-span-2"
          >
            <div className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-105">
              <img src={collabImg} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-10 md:p-12">
              <span className="mb-4 w-fit bg-magenta px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                {hotTopics[0].tag}
              </span>
              <h3 className="max-w-lg font-display text-3xl leading-tight text-primary-foreground md:text-4xl">
                {hotTopics[0].title}
              </h3>
              <span className="mt-8 w-fit bg-background px-6 py-3 text-xs font-bold uppercase tracking-wide text-primary transition-colors group-hover:bg-teal group-hover:text-primary-foreground">
                Read the update
              </span>
            </div>
          </Link>
          {/* Secondary */}
          {hotTopics.slice(1).map((t, i) => {
            const accent = ["border-teal", "border-magenta", "border-primary"][i % 3];
            const accentText = ["text-teal", "text-magenta", "text-primary"][i % 3];
            return (
              <Link
                key={t.title}
                to={t.to}
                className={`group rounded-lg border-l-4 bg-secondary/60 p-8 transition-shadow hover:shadow-lg ${accent}`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest ${accentText}`}>{t.tag}</span>
                <h4 className="mt-4 font-display text-xl leading-snug text-primary">{t.title}</h4>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read more <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PRESIDENT'S MESSAGE - circle portrait + floating badge */}
      <section className="border-y border-border bg-secondary/40 py-24 md:py-32">
        <div className="container-page grid items-center gap-20 lg:grid-cols-2">
          <div className="relative">
            <div className="mx-auto aspect-square max-w-md overflow-hidden rounded-full border-8 border-background shadow-2xl">
              <img src={presidentImg} alt="Dr. Jobin Varughese, OCFP President" width={800} height={800} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 right-1/4 bg-teal p-6 text-primary-foreground shadow-xl">
              <div className="font-display text-lg font-semibold">Dr. Jobin Varughese</div>
              <div className="text-xs uppercase tracking-widest opacity-90">OCFP President</div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl italic text-primary md:text-5xl">President's Message</h2>
            <p className="mt-8 font-display text-2xl leading-relaxed text-primary md:text-3xl">
              "The strength of family medicine lies in our collective commitment to our patients.
              Together, we're building a more resilient system for every Ontarian."
            </p>
            <p className="mt-6 text-muted-foreground">
              Read the full message on World Family Doctor Day, the upcoming ColonCancerCheck
              program changes, and the Mainpro+ credit cycle ending June 30.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/news" className="bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90">
                Read the message
              </Link>
              <Link to="/leadership" className="font-bold text-muted-foreground hover:text-teal">View leadership archive</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TABBED SECTION: Events / Resources / News / Mainpro+ */}
      <section>
        <div className="container-page py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">In the College</p>
              <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">What's happening now.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`border-b-2 px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                    tab === t
                      ? "border-magenta text-primary"
                      : "border-transparent text-muted-foreground hover:text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12">
            {tab === "Events" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((e) => (
                  <article key={e.title} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-teal hover:shadow-lg">
                    <p className="eyebrow">{e.date}</p>
                    <h3 className="mt-4 flex-1 font-display text-xl leading-snug text-primary group-hover:text-teal">{e.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
                    <span className="mt-6 text-sm font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">Register &rarr;</span>
                  </article>
                ))}
              </div>
            )}
            {tab === "Resources" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((r) => (
                  <article key={r.title} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-teal hover:shadow-lg">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-soft text-primary">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h12l4 4v12H4z"/><path d="M16 4v4h4"/></svg>
                    </div>
                    <h3 className="mt-5 flex-1 font-display text-xl leading-snug text-primary group-hover:text-teal">{r.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{r.body}</p>
                    <span className="mt-6 text-sm font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">Download &rarr;</span>
                  </article>
                ))}
              </div>
            )}
            {tab === "News" && (
              <ul className="divide-y divide-border border-y border-border bg-card">
                {news.map((n) => (
                  <li key={n.title}>
                    <Link to="/news" className="group grid gap-3 px-6 py-8 md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-8">
                      <p className="text-xs uppercase tracking-widest text-teal">{n.date}</p>
                      <div>
                        <h3 className="font-display text-xl leading-snug text-primary group-hover:text-teal md:text-2xl">{n.title}</h3>
                        <p className="mt-2 text-muted-foreground">{n.body}</p>
                      </div>
                      <span className="text-2xl text-primary/40 transition-transform group-hover:translate-x-1 group-hover:text-teal">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {tab === "Mainpro+" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {mainpro.map((m) => (
                  <div key={m.title} className="rounded-2xl border border-border bg-card p-6">
                    <span className="inline-block rounded-md bg-teal-soft px-2 py-1 font-display text-xs font-medium text-primary">Mainpro+</span>
                    <h3 className="mt-5 font-display text-xl leading-snug text-primary">{m.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURE: RESOURCE HUB */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page grid gap-16 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <img
              src={resourcesImg}
              alt=""
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow text-teal-soft">The Resource Hub</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              One central destination for every learning, clinical, and practice-enabling resource.
            </h2>
            <p className="mt-6 max-w-xl text-primary-foreground/70">
              Searchable, filterable, and always current. Session recordings, slides, clinical
              tools, and knowledge translation resources - organized by topic, format, and
              audience.
            </p>
            <dl className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                ["Searchable", "Filter by topic, format, and audience in seconds."],
                ["Curated", "Reviewed and dated by OCFP staff, never stale."],
                ["Accessible", "AODA / WCAG 2.1 AA on every page, no PDFs required."],
                ["Connected", "Mainpro+ credits and event registration in one flow."],
              ].map(([k, v]) => (
                <div key={k} className="border-l-2 border-teal pl-4">
                  <dt className="font-display text-lg">{k}</dt>
                  <dd className="mt-1 text-sm text-primary-foreground/70">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/practice-supports"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-teal-soft"
            >
              Enter the Resource Hub &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PHYSICIAN LEADERSHIP */}
      <section className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Physician leadership</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">Grow with a community of peers.</h2>
            <p className="mt-4 text-muted-foreground">
              From the Leadership Academy to Peer Connect Mentorship, the OCFP invests in the
              family physicians shaping the future of primary care in Ontario.
            </p>
            <Link to="/leadership" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline">
              Explore all programs &rarr;
            </Link>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {[
                { tag: "01 - Leadership Academy", title: "Cohort-based leadership development for family physicians.", body: "A year-long immersive program building the next generation of family medicine leaders across Ontario." },
                { tag: "02 - Peer Connect", title: "One-to-one mentorship, matched across the province.", body: "Early-career and residents matched with experienced mentors - practical guidance when it counts." },
                { tag: "03 - Communities of Practice", title: "Practising Well, Health Equity, and Changing the Way We Work.", body: "Ongoing peer forums for the questions that don't fit neatly into a webinar." },
                { tag: "04 - Awards & Recognition", title: "Celebrating exemplary family physicians every year.", body: "Nominated by their peers and patients - recognizing dedication, innovation, and impact." },
              ].map((p) => (
                <li key={p.tag}>
                  <Link to="/leadership" className="group grid gap-4 py-10 md:grid-cols-[180px_1fr_auto] md:items-start md:gap-8">
                    <span className="text-xs uppercase tracking-widest text-teal">{p.tag}</span>
                    <div>
                      <h3 className="font-display text-2xl leading-snug text-primary group-hover:text-teal">{p.title}</h3>
                      <p className="mt-3 max-w-xl text-muted-foreground">{p.body}</p>
                    </div>
                    <span className="text-2xl text-primary/40 transition-all group-hover:translate-x-1 group-hover:text-teal">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA - high-contrast closer */}
      <section className="relative overflow-hidden bg-primary py-24 text-center text-primary-foreground md:py-28">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-teal/25 via-transparent to-magenta/20" />
        <div className="container-page relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl italic md:text-5xl">
            Shape the future of family medicine.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/70">
            Whether you're a resident, a mid-career physician, or nearing retirement, the OCFP is
            your advocate and your home.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link to="/about" className="bg-magenta px-10 py-5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-xl transition-opacity hover:opacity-90">
              Join the OCFP
            </Link>
            <Link to="/practice-supports" className="border-2 border-primary-foreground px-10 py-5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary">
              Member benefits
            </Link>
          </div>
        </div>
      </section>

      {/* MAINPRO+ BAND */}
      <section className="container-page pb-24">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-10 md:grid-cols-[auto_1fr_auto] md:items-center md:p-12">
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v18M3 12h18" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">Mainpro+</p>
            <h3 className="mt-2 font-display text-2xl text-primary md:text-3xl">
              Find OCFP offerings, report your credits, or get certified.
            </h3>
          </div>
          <Link to="/practice-supports" className="justify-self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-teal md:justify-self-end">
            Learn about Mainpro+ &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

// silence unused-import when abstractImg not currently referenced
void abstractImg;
