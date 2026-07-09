import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/advocacy", label: "Advocacy" },
  { to: "/news", label: "New and emerging" },
  { to: "/practice-supports", label: "Supports for family docs" },
  { to: "/leadership", label: "Physician leadership" },
  { to: "/connect", label: "Connect" },
] as const;

const quickLinks = [
  { label: "Find resources to help me manage my practice", to: "/practice-supports" },
  { label: "Earn Mainpro+ Credits", to: "/practice-supports" },
  { label: "Find the latest tools for my practice", to: "/news" },
  { label: "Learn about leadership opportunities", to: "/leadership" },
  { label: "Certify a Program for Mainpro+ credits", to: "/practice-supports" },
  { label: "Recognize my family doctor", to: "/about" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [quick, setQuick] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v18M3 12h18" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-primary">OCFP</span>
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Ontario College of Family Physicians</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-teal"
              activeProps={{ className: "text-teal" }}
            >
              {n.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearch((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-teal"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setQuick((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-teal px-5 py-2 text-sm font-medium text-teal transition-colors hover:bg-teal hover:text-primary-foreground"
            >
              I want to...
              <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${quick ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {quick && (
              <div className="absolute right-0 top-12 w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <p className="px-5 pt-4 text-xs uppercase tracking-widest text-muted-foreground">Quick links</p>
                <ul className="py-2">
                  {quickLinks.map((q) => (
                    <li key={q.label}>
                      <Link
                        to={q.to}
                        onClick={() => setQuick(false)}
                        className="block px-5 py-2.5 text-sm text-foreground hover:bg-teal-soft hover:text-primary"
                      >
                        {q.label} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {search && (
        <div className="border-t border-border bg-card">
          <div className="container-page flex items-center gap-3 py-4">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              autoFocus
              placeholder="Search resources, events, news..."
              className="w-full bg-transparent py-2 text-lg placeholder:text-muted-foreground/60 focus:outline-none"
            />
            <button onClick={() => setSearch(false)} className="text-xs uppercase tracking-widest text-muted-foreground hover:text-teal">Close</button>
          </div>
        </div>
      )}
      {open && (
        <div className="border-t border-border lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/about" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">About</Link>
            <div className="mt-3 border-t border-border pt-3">
              <p className="px-3 pb-2 text-xs uppercase tracking-widest text-muted-foreground">Quick links</p>
              {quickLinks.map((q) => (
                <Link key={q.label} to={q.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-teal hover:bg-teal-soft">
                  {q.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
