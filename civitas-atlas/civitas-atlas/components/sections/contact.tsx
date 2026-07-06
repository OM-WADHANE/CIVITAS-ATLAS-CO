"use client";

import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Partner with Civitas Atlas."
              description="For government partnerships, institutional access, research collaboration, or press inquiries — reach out and our team will respond within two business days."
            />
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-3 text-sm text-atlas-mist">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Mail className="h-4 w-4 text-atlas-gold" />
                  </span>
                  contact@civitasatlas.in
                </div>
                <div className="flex items-center gap-3 text-sm text-atlas-mist">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <MapPin className="h-4 w-4 text-atlas-gold" />
                  </span>
                  Pune, Maharashtra, India
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-atlas-gold/10">
                    <ArrowRight className="h-6 w-6 text-atlas-gold" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-atlas-white">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-atlas-mist">
                    Thank you for reaching out. A member of the Civitas
                    Atlas team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" id="name" placeholder="Your name" />
                    <Field
                      label="Email address"
                      id="email"
                      type="email"
                      placeholder="you@organization.com"
                    />
                  </div>
                  <Field
                    label="Organization"
                    id="organization"
                    placeholder="Government body, institution, or company"
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-atlas-fog"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell us about your use case"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-atlas-white placeholder:text-atlas-fog/70 outline-none transition-colors focus:border-atlas-gold/50"
                    />
                  </div>
                  <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                    Send message
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-atlas-fog"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-atlas-white placeholder:text-atlas-fog/70 outline-none transition-colors focus:border-atlas-gold/50"
      />
    </div>
  );
}
