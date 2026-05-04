"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

type Option = { value: string; label: string };

export function ContactForm({ categoryOptions }: { categoryOptions: Option[] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="mx-auto h-12 w-12 flex items-center justify-center bg-brand text-white rounded-full mb-5">
          <Check className="h-6 w-6" />
        </div>
        <div className="text-xs uppercase tracking-wider font-semibold text-accent-dark mb-2">
          Brief received
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">Thank you — we'll be in touch.</h3>
        <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          A member of our engineering team will respond within one working day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-brand"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" required>
          <input type="text" name="name" required placeholder="Full name" className="form-input" />
        </Field>
        <Field label="Organisation" required>
          <input
            type="text"
            name="organisation"
            required
            placeholder="Company / institute"
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" required>
          <input type="email" name="email" required placeholder="you@example.in" className="form-input" />
        </Field>
        <Field label="Phone">
          <input type="tel" name="phone" placeholder="+91 …" className="form-input" />
        </Field>
      </div>

      <Field label="Interested in">
        <select name="category" className="form-input">
          <option value="">Select an instrument category</option>
          {categoryOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
          <option value="other">Other / not sure</option>
        </select>
      </Field>

      <Field label="Project brief" required>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your application — site, parameters, scale, timing."
          className="form-input resize-y"
        />
      </Field>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
        <button type="submit" className="btn-primary justify-center">
          Send brief <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-xs text-slate-500">
          By sending, you agree to be contacted about your enquiry. No spam, ever.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 block">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
