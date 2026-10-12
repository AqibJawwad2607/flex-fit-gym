import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Dumbbell, HeartPulse, MapPin, MessageCircle, Navigation, Phone, Shirt, StretchHorizontal } from "lucide-react";
import hero from "@/assets/hero-placeholder.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { useLang } from "@/i18n/useLang";
import { homeDict } from "@/i18n/home";
import { DraftBadge, Section } from "@/components/site/Section";

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

const facilityIcons = [Dumbbell, HeartPulse, StretchHorizontal, Shirt];
const galleryImgs = [g1, g2, g3];

function Index() {
  const { lang, t, search } = useLang();
  const h = homeDict[lang];
  const ctaPrimary =
    "inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition-base hover:-translate-y-0.5";
  const ctaSecondary =
    "inline-block rounded-md border border-border px-6 py-3 font-semibold transition-base hover:border-primary hover:text-primary";

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t.home.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold uppercase leading-[1.05] sm:text-7xl">{t.home.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.home.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" search={search} className={ctaPrimary}>{t.cta}</Link>
            <Link to="/membership" search={search} className={ctaSecondary}>{t.home.secondary}</Link>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">{t.home.imageNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">{h.intro.title}</h2>
          <p className="text-lg text-muted-foreground">{h.intro.body}</p>
        </div>
      </section>

      <Section id="facilities" title={h.facilities.title} lead={h.facilities.lead}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {h.facilities.items.map((f, i) => {
            const Icon = facilityIcons[i];
            return (
              <li key={f.title} className="rounded-lg border border-border bg-card p-6 transition-base hover:border-primary">
                <Icon className="size-7 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-4"><DraftBadge>{h.draft}</DraftBadge></div>
      </Section>

      <Section id="services" title={h.services.title}>
        <ol className="divide-y divide-border border-y border-border">
          {h.services.items.map((s, i) => (
            <li key={s.title} className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr_2fr] sm:items-baseline">
              <span className="font-display text-2xl text-primary">0{i + 1}</span>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4"><DraftBadge>{h.draft}</DraftBadge></div>
      </Section>

      <Section id="membership" title={h.membership.title} lead={h.membership.lead}>
        <ul className="grid gap-4 md:grid-cols-3">
          {h.membership.plans.map((p) => (
            <li key={p} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display text-2xl font-bold uppercase">{p}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.membership.planNote}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/contact" search={search} className={ctaPrimary}>{t.cta}</Link>
          <Link to="/membership" search={search} className={ctaSecondary}>{h.membership.cta}</Link>
        </div>
      </Section>

      <Section id="gallery" title={h.gallery.title}>
        <div className="grid gap-4 sm:grid-cols-3">
          {galleryImgs.map((src, i) => (
            <img key={i} src={src} alt={h.gallery.note} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-lg object-cover" />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link to="/gallery" search={search} className={ctaSecondary}>{h.gallery.cta}</Link>
          <span className="text-xs text-muted-foreground">{h.gallery.note}</span>
        </div>
      </Section>

      <Section id="faq" title={h.faq.title}>
        <div className="divide-y divide-border border-y border-border">
          {h.faq.items.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-4 text-lg font-semibold">
                {f.q}
                <ChevronDown className="size-5 shrink-0 transition-base group-open:rotate-180" aria-hidden />
              </summary>
              <p className="pb-4 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-4"><DraftBadge>{h.draft}</DraftBadge></div>
      </Section>

      <Section id="location" title={h.location.title}>
        <div className="rounded-xl border border-border bg-card p-6 sm:p-10">
          <p className="flex items-center gap-2 text-xl font-bold"><MapPin className="size-5 text-primary" aria-hidden />{h.location.city}</p>
          <p className="mt-2 text-muted-foreground">{h.location.pending}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: Phone, label: h.location.call },
              { icon: MessageCircle, label: h.location.whatsapp },
              { icon: Navigation, label: h.location.directions },
            ].map(({ icon: Icon, label }) => (
              <li key={label}>
                <button type="button" disabled aria-disabled className="flex cursor-not-allowed items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-muted-foreground opacity-70">
                  <Icon className="size-4" aria-hidden />
                  {label} — {h.location.unavailable}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8"><Link to="/contact" search={search} className={ctaPrimary}>{h.location.contactCta}</Link></div>
        </div>
      </Section>
    </>
  );
}
