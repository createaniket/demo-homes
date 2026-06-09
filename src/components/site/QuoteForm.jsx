import { useState } from "react";
import { toast } from "sonner";

export function QuoteForm({ compact = false }) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      e.target.reset();
      toast.success("Thank you — a director will be in touch within one working day.");
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field name="name" label="Full name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" type="tel" />
        <Field name="postcode" label="Project postcode" />
      </div>
      <Field name="service" label="Service required" placeholder="e.g. Full refurbishment, Kitchen, HMO conversion" />
      <div className="grid md:grid-cols-2 gap-4">
        <Field name="budget" label="Indicative budget" placeholder="£50k – £250k" />
        <Field name="timeline" label="Ideal start" placeholder="e.g. Q3 2026" />
      </div>
      {!compact && (
        <label className="grid gap-2">
          <span className="eyebrow text-ink-soft">Project brief</span>
          <textarea name="brief" rows={4}
            className="w-full bg-transparent border-b border-line py-3 focus:outline-none focus:border-ink resize-none" />
        </label>
      )}
      <button disabled={submitting} className="btn-primary mt-4 disabled:opacity-60">
        {submitting ? "Sending…" : "Request a Quote"}
      </button>
      <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted regarding your enquiry. We respond within one working day.</p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="grid gap-2">
      <span className="eyebrow text-ink-soft">{label}{required && <span className="text-gold"> *</span>}</span>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        className="w-full bg-transparent border-b border-line py-3 focus:outline-none focus:border-ink placeholder:text-muted-foreground/60"
      />
    </label>
  );
}
