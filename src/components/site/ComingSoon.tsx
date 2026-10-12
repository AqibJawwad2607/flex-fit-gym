import { useLang } from "@/i18n/useLang";

export function ComingSoon({ page }: { page: "membership" | "gallery" | "contact" }) {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h1 className="font-display text-5xl font-bold uppercase">{t.pages[page]}</h1>
      <p className="mt-4 text-muted-foreground">{t.comingSoon}</p>
    </section>
  );
}
