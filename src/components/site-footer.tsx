import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      {/* Subscribe band */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-teal-soft">Newsletter</p>
            <h3 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              The latest from the OCFP, in your inbox.
            </h3>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
              President's Message, advocacy updates, and new professional development opportunities - once a month, never spam.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 md:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@practice.ca"
              className="flex-1 rounded-full border border-primary-foreground/25 bg-transparent px-5 py-3 text-sm placeholder:text-primary-foreground/40 focus:border-teal focus:outline-none"
            />
            <button className="rounded-full bg-teal px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-teal-soft">
              Subscribe &rarr;
            </button>
          </form>
        </div>
      </div>

      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow text-teal-soft">Ontario College of Family Physicians</p>
          <h3 className="mt-4 font-display text-2xl leading-tight">
            Strengthening family medicine, together.
          </h3>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Representing more than 18,000 family physicians and medical students across Ontario since 1954.
          </p>
          <div className="mt-6 flex gap-3">
            {["Twitter", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" aria-label={s} className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/25 text-xs hover:border-teal hover:text-teal">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Explore" items={[
          { l: "About the OCFP", to: "/about" },
          { l: "Advocacy", to: "/advocacy" },
          { l: "New and emerging", to: "/news" },
          { l: "Supports for family docs", to: "/practice-supports" },
          { l: "Physician leadership", to: "/leadership" },
        ]} />
        <FooterCol title="Members" items={[
          { l: "Upcoming Events", to: "/events" },
          { l: "Mainpro+ Credits", to: "/practice-supports" },
          { l: "Communities of Practice", to: "/leadership" },
          { l: "Peer Connect Mentorship", to: "/leadership" },
          { l: "OCFP Awards", to: "/about" },
        ]} />
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/60">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>400 University Avenue, Suite 2100</li>
            <li>Toronto ON M5G 1S5</li>
            <li><a href="mailto:ocfp@ocfp.on.ca" className="hover:text-teal-soft">ocfp@ocfp.on.ca</a></li>
            <li>Telephone: 416-867-9646</li>
            <li>Toll-free: 1-800-670-6237</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} Ontario College of Family Physicians. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-teal-soft">Privacy</a>
            <a href="#" className="hover:text-teal-soft">Terms</a>
            <a href="#" className="hover:text-teal-soft">Accessibility (AODA)</a>
            <span>Provincial chapter of the CFPC.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; to: string }[] }) {
  return (
    <div className="md:col-span-2">
      <p className="text-xs uppercase tracking-widest text-primary-foreground/60">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.l}><Link to={i.to} className="text-primary-foreground/85 hover:text-teal-soft">{i.l}</Link></li>
        ))}
      </ul>
    </div>
  );
}
