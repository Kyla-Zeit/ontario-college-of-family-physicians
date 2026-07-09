import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect - OCFP" },
      { name: "description", content: "Get in touch with the Ontario College of Family Physicians - media inquiries, membership, and general contact." },
      { property: "og:title", content: "Connect with the OCFP" },
      { property: "og:description", content: "Media inquiries, membership questions, and general contact." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container-page grid gap-16 pt-20 pb-24 md:grid-cols-2 md:pt-28">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] text-primary md:text-6xl">Connect with Us</h1>
        <div className="mt-10 space-y-6 text-sm">
          <ContactBlock label="General inquiries" a="ocfp@ocfp.on.ca" />
          <ContactBlock label="Media & communications" a="communications@ocfp.on.ca" />
          <ContactBlock label="Membership" a="membership@ocfp.on.ca" />
          <div>
            <p className="eyebrow">Office</p>
            <p className="mt-2 text-muted-foreground">400 University Avenue, Suite 2100<br />Toronto ON M5G 1S5</p>
            <p className="mt-4 text-muted-foreground">Telephone: <a href="tel:+14168679646" className="font-medium text-primary hover:text-teal">416-867-9646</a><br />Toll-free: <a href="tel:+18006706237" className="font-medium text-primary hover:text-teal">1-800-670-6237</a></p>
          </div>
        </div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl border border-border bg-card p-8 md:p-10">
        {sent ? (
          <div className="grid min-h-[420px] place-items-center text-center">
            <div>
              <p className="eyebrow">Message sent</p>
              <h2 className="mt-4 font-display text-3xl text-primary">Thanks - we'll be in touch.</h2>
              <p className="mt-3 text-muted-foreground">A member of the OCFP team will respond within two business days.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <Field label="Name"><input required className="w-full border-b border-border bg-transparent py-2 focus:border-teal focus:outline-none" /></Field>
            <Field label="Email"><input required type="email" className="w-full border-b border-border bg-transparent py-2 focus:border-teal focus:outline-none" /></Field>
            <Field label="Organization"><input className="w-full border-b border-border bg-transparent py-2 focus:border-teal focus:outline-none" /></Field>
            <Field label="Subject">
              <select className="w-full border-b border-border bg-transparent py-2 focus:border-teal focus:outline-none">
                <option>General Inquiries</option>
                <option>Education and Practice Supports</option>
                <option>Mainpro+ accreditation</option>
                <option>Media and Communications</option>
                <option>OCFP Awards</option>
                <option>Policy and Advocacy</option>
                <option>Practising Well</option>
                <option>OCFP President</option>
                <option>OCFP CEO</option>
                <option>Events and Conferences</option>
              </select>
            </Field>
            <Field label="Message"><textarea required rows={5} className="w-full border-b border-border bg-transparent py-2 focus:border-teal focus:outline-none" /></Field>
            <button type="submit" className="mt-4 w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-teal">Send message &rarr;</button>
          </div>
        )}
      </form>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function ContactBlock({ label, a }: { label: string; a: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <a href={`mailto:${a}`} className="mt-2 block font-display text-xl text-primary hover:text-teal">{a}</a>
    </div>
  );
}
