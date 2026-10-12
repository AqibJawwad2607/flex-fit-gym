# Flex Fit Gym Khulna — Phase 0 review and build plan

## What's here now vs. what we're building
- **Now:** an empty starter site with a blank home page. It has no content, no brand styling and no Bangla.
- **Target:** a website in English and Bangla with four pages: Home, Membership, Gallery and Contact. It's a premium concept demo, shared at an unlisted preview link.

## Facts I can't confirm (I will not make these up)
The documents don't confirm the gym's phone, WhatsApp, address, map pin, opening hours, prices, trainers or official brand colours. Until you send them:
- Call, WhatsApp and directions buttons show as "Not yet confirmed" and stay unclickable.
- Membership shows plan types with draft labels and no prices, plus an "Enquire" button.
- Gallery uses photos marked "Placeholder — concept image", not real photos of the gym.
- FAQ answers are marked as drafts.

## Design direction
I won't use the Animoza reference colours as the gym's brand, because the brief rejects them. The proposed look:
- A dark charcoal base with one strong energetic accent colour (lime/volt), with contrast checked to meet the accessibility (WCAG AA) standard
- A bold condensed font for headings, a clean readable font for body text, and a Bangla-friendly font (Hind Siliguri)
- A spacing scale based on 4px steps, a few rounded-corner sizes, and real animation timings that switch off for visitors who prefer reduced motion

## Phases (I stop for your approval after each one)
1. **Foundation:** design system, page frame, accessible header with a mobile menu, footer, and the English/Bangla switcher. The chosen language stays as you move between pages.
2. **Home page:** hero, introduction, facilities, services, membership preview, gallery preview, FAQ, and location/contact.
3. **Membership, Gallery and Contact pages:** includes a gallery viewer that works with the keyboard and on phones.
4. **Enquiry form (demo only):** clearly labelled as a test. It uses a stand-in connection, shows success only when that connection confirms it, and has error and validation states in both languages.
5. **Search and sharing info:** a title and description for each page, and a "noindex" tag so search engines skip the preview. Note: this hides the site from search but does not password-protect it.
6. **Quality check:** small and large screens, keyboard-only use, Bangla coverage, and contrast.
7. **Handoff notes:** what was built, what the backend team needs, and the gaps still open.

## Technical details
- Built with TanStack Start routes: `index.tsx`, `membership.tsx`, `gallery.tsx`, `contact.tsx`
- Folders: `src/i18n` (en/bn dictionaries + context), `src/content` (typed structured content with `verified` flags), `src/lib/api` (typed enquiry adapter interface + mock), `src/components/site/*`
- Language is kept in the URL (`?lang=bn`) so it survives navigation and SSR, and `<html lang>` updates to match
- No new packages beyond what's already installed. No backend or database work. Images are generated and marked as placeholders.
- Note: the Laravel backend and the Vercel hosting in the brief are outside this project. This site runs on Lovable's own setup.
