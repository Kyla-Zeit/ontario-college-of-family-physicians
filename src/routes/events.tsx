import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events - OCFP" },
      { name: "description", content: "Workshops, webinars, and Mainpro+ certified events from the Ontario College of Family Physicians." },
      { property: "og:title", content: "Upcoming Events - OCFP" },
      { property: "og:description", content: "Register for OCFP workshops, webinars, and Mainpro+ certified events." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "Wed - Jul 15, 2026 - 9:00 AM EDT", title: "Osteoporosis and Fracture Prevention Workshop", body: "Insights from the 2023 updated clinical practice guideline for management of osteoporosis and fracture prevention in Canada.", credits: "Mainpro+ 3.0" },
  { date: "Wed - Jul 22, 2026 - 8:00 AM EDT", title: "ADHD in Primary Care: Meeting Growing Demand with Practical Tools", body: "Demand for ADHD diagnosis and support continues to increase - practical tools for family physicians.", credits: "Mainpro+ 1.5" },
  { date: "Fri - Jul 24, 2026 - 8:00 AM EDT", title: "Infectious Disease & Practical Nutrition Guidance for Clinicians", body: "Session 111 of Changing the Way We Work - updates on circulating infectious diseases.", credits: "Mainpro+ 1.0" },
  { date: "Sat - Aug 22, 2026 - 8:00 AM EDT", title: "CFPC Exam Orientation Workshop", body: "An introduction to the components of the CFPC certification exam for residents preparing to certify.", credits: "For Residents" },
  { date: "Wed - Aug 26, 2026 - 8:00 AM EDT", title: "ADHD in Practice: Treatment and Management for Family Physicians", body: "Managing ADHD treatment in the presence of co-morbid psychiatric conditions and limited specialist access.", credits: "Mainpro+ 1.5" },
  { date: "Thu - Aug 27, 2026 - 6:00 PM EDT", title: "OCFP Ask Me Anything (AMA) Webinar: Wellness in Family Medicine", body: "Experienced family physicians answer questions from medical students, residents, and internationally trained physicians about wellness, career pathways, work-life balance, and transition to practice.", credits: "AMA" },
  { date: "Fri - Sep 4, 2026 - 12:00 PM EDT", title: "Clinical Application of LTC Fracture Prevention Recommendations", body: "Evidence-based recommendations for frail older adults in long-term care.", credits: "Mainpro+ 1.5" },
  { date: "Wed - Oct 7, 2026 - 1:30 PM EDT", title: "Foundations of Children's Mental Health", body: "The Foundations workshop focuses on the core principles of mental health assessment in children.", credits: "Mainpro+ 3.0" },
];

function Events() {
  return (
    <>
      <section className="container-page pt-20 pb-12 md:pt-28">
        <p className="eyebrow">Upcoming Events</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
          Workshops, webinars, and Mainpro+ certified events.
        </h1>
      </section>
      <section className="container-page pb-24">
        <ul className="divide-y divide-border border-y border-border">
          {events.map((e) => (
            <li key={e.title}>
              <a href="#" className="group grid gap-4 py-10 md:grid-cols-[220px_1fr_auto_auto] md:items-baseline md:gap-8">
                <p className="text-xs uppercase tracking-widest text-teal">{e.date}</p>
                <div>
                  <h2 className="font-display text-2xl leading-snug text-primary group-hover:text-teal md:text-3xl">{e.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{e.body}</p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-primary">{e.credits}</span>
                <span className="text-2xl text-primary/40 transition-transform group-hover:translate-x-1 group-hover:text-teal">&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
