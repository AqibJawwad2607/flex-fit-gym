import type { ReactNode } from "react";

export function Section({ id, title, lead, children }: { id: string; title: string; lead?: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
      <h2 id={`${id}-title`} className="font-display text-3xl font-bold uppercase sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-3 max-w-2xl text-muted-foreground">{lead}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function DraftBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-warning/60 px-2 py-0.5 text-xs font-semibold text-warning">
      {children}
    </span>
  );
}
