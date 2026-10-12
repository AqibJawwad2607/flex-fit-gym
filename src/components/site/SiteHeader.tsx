import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/useLang";

const links = [
  { to: "/", key: "home" },
  { to: "/membership", key: "membership" },
  { to: "/gallery", key: "gallery" },
  { to: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const { lang, t, search } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navLink =
    "rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-base hover:text-foreground data-[status=active]:text-primary";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" search={search} className="font-display text-xl font-bold uppercase">
          {t.brand} <span className="text-primary">{t.city}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} search={search} className={navLink} activeOptions={{ exact: true }}>
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="."
            search={lang === "bn" ? {} : { lang: "bn" }}
            aria-label={t.langSwitchLabel}
            lang={lang === "bn" ? "en" : "bn"}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-semibold transition-base hover:border-primary hover:text-primary"
          >
            {t.langSwitch}
          </Link>
          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  search={search}
                  onClick={() => setOpen(false)}
                  className={`${navLink} block py-3 text-base`}
                  activeOptions={{ exact: true }}
                >
                  {t.nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
