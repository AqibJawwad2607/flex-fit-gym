import { useRouterState } from "@tanstack/react-router";
import { dictionaries, type Lang } from "./dictionary";

export function useLang() {
  const search = useRouterState({ select: (s) => s.location.search as { lang?: string } });
  const lang: Lang = search.lang === "bn" ? "bn" : "en";
  return { lang, t: dictionaries[lang], search: lang === "bn" ? { lang: "bn" as const } : {} };
}
