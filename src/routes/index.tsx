import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-placeholder.jpg";
import { useLang } from "@/i18n/useLang";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flex Fit Gym Khulna — Concept website" },
      { name: "description", content: "Concept demo website for Flex Fit Gym in Khulna: facilities, membership enquiries and contact." },
      { property: "og:title", content: "Flex Fit Gym Khulna — Concept website" },
      { property: "og:description", content: "Explore facilities and membership options at Flex Fit Gym, Khulna (concept demo)." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, search } = useLang();
  return (
    <section className="relative isolate overflow-hidden">
      <img src={hero} alt="" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-fade" />
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.home.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold uppercase leading-[1.05] sm:text-7xl">
          {t.home.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.home.lead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            search={search}
            className="rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition-base hover:-translate-y-0.5"
          >
            {t.cta}
          </Link>
          <Link
            to="/membership"
            search={search}
            className="rounded-md border border-border px-6 py-3 font-semibold transition-base hover:border-primary hover:text-primary"
          >
            {t.home.secondary}
          </Link>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">{t.home.imageNote}</p>
      </div>
    </section>
  );
}
