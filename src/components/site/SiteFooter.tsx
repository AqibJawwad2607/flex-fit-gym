import { useLang } from "@/i18n/useLang";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 text-sm text-muted-foreground sm:px-6 md:grid-cols-2">
        <div>
          <p className="font-display text-lg font-bold uppercase text-foreground">
            {t.brand} <span className="text-primary">{t.city}</span>
          </p>
          <p className="mt-2">{t.footer.tagline}</p>
        </div>
        <div className="md:text-right">
          <p>{t.footer.unverified}</p>
          <p className="mt-2">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

export function DemoBanner() {
  const { t } = useLang();
  return (
    <div role="note" className="bg-warning px-4 py-2 text-center text-xs font-semibold text-warning-foreground">
      {t.demoBanner}
    </div>
  );
}
