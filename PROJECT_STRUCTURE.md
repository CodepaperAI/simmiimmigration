# Simmi Immigration — Project Structure & Summary

A premium, production-ready marketing website for **Simmi Immigration**, a regulated
Canadian immigration consultancy. Built as a single Next.js application with a
data-driven content layer, full light/dark theming, and 37 SEO-optimized routes.

---

## 1. Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (Pages Router) |
| Language | JavaScript (`.js` / `.jsx`) — no TypeScript |
| Styling | Tailwind CSS (custom `maple` + `ink` palettes) |
| Animation | Framer Motion |
| Images | `next/image` (Unsplash remote + local `public/`) |
| Fonts | Plus Jakarta Sans (display) + Inter (body) via `next/font` |
| State | React Context (theme) |
| Icons | Custom inline-SVG set (no icon library) |

No TypeScript, App Router, MUI, Bootstrap, or Chakra — all deliberately excluded.

---

## 2. Routes (37 total)

### Static / hand-built pages
| URL | File | Notes |
| --- | --- | --- |
| `/` | `pages/index.js` | Homepage — all sections + JSON-LD |
| `/services` | `pages/services/index.js` | Directory of every program by category |
| `/services/super-visa` | `pages/services/super-visa.js` | Flagship page (comparison table, 70+ FAQ tabs) |
| `/services/visitor-visa` | `pages/services/visitor-visa.js` | Custom layout |
| `/services/study-permit` | `pages/services/study-permit.js` | Custom layout |
| `/404` | `pages/404.js` | Not-found (noindex) |
| `/sitemap.xml` | `pages/sitemap.xml.js` | Server-rendered XML sitemap |

### Data-driven service pages (32)
All rendered by a single dynamic route — `pages/services/[slug].js` — which looks up
`data/servicePages.js` and renders through `components/service/ServicePage.jsx`.

- **Work Permits (13):** work-permit, pgwp, lmia-work-permit, lmia-services,
  spouse-open-work-permit, bridging-open-work-permit, global-talent-stream,
  francophone-mobility, international-experience-canada, caregiver-program,
  vulnerable-open-work-permit, c10-work-permit, c11-work-permit
- **Permanent Residence (6):** permanent-residence, express-entry,
  provincial-nominee-program, family-sponsorship, spousal-sponsorship,
  canadian-citizenship
- **Business (4):** business-visa, business-exploratory-visit,
  intra-company-transfer, self-employed-program
- **Super Visa Guides (9):** super-visa-eligibility-checklist,
  super-visa-income-requirement, super-visa-invitation-letter,
  super-visa-medical-exam, super-visa-insurance-guide, super-visa-insurance-monthly,
  super-visa-extension, super-visa-refusal-reasons, super-visa-vs-visitor-visa

**To add a service:** add one object to `data/servicePages.js` keyed by slug. The URL,
the `/services` listing card, the sitemap entry, and the SEO schema all follow
automatically. Add a nav entry in `data/navigation.js` if it should appear in the menu.

---

## 3. Directory tree

```
simmi-immigration/
├── pages/                      # Routes (file path = URL)
│   ├── _app.js                 # ThemeProvider + Layout + page transitions
│   ├── _document.js            # <html>, favicon, no-flash theme script
│   ├── index.js                # Homepage (composes all home sections)
│   ├── 404.js
│   ├── sitemap.xml.js          # Dynamic XML sitemap (SSR)
│   └── services/
│       ├── index.js            # /services directory
│       ├── [slug].js           # Dynamic route → 32 service pages
│       ├── super-visa.js       # Hand-built
│       ├── visitor-visa.js     # Hand-built
│       └── study-permit.js     # Hand-built
│
├── components/
│   ├── layout/                 # Header, Footer, Layout, Logo, MobileMenu
│   ├── home/                   # 13 homepage sections (Hero, Programs, FAQ, …)
│   ├── service/                # ServiceHero, ServicePage, ServiceCta, FaqTabs
│   ├── ui/                     # 20 primitives (Button, Card, Icon, Section, …)
│   └── common/                 # Seo, ThemeToggle, Reveal, WhatsAppButton
│
├── data/                       # ALL business content lives here (edit these,
│   │                           #   not the components)
│   ├── company.js              # Name, phone, email, WhatsApp, socials, stats
│   ├── navigation.js           # Navbar + footer link structure
│   ├── servicePages.js         # 32 service pages' content
│   ├── superVisa.js            # Super Visa page content
│   ├── visitorVisa.js          # Visitor Visa page content
│   ├── studyPermit.js          # Study Permit page content
│   ├── services.js             # Homepage services grid
│   ├── programs.js             # Homepage "6 categories" tabs
│   ├── process.js, refusals.js, testimonials.js, faqs.js,
│   ├── whyChooseUs.js, credentials.js
│
├── context/
│   └── ThemeContext.js         # useTheme() hook, localStorage persistence
│
├── hooks/
│   ├── useScrolled.js          # Sticky-header scroll state
│   └── useLockBodyScroll.js    # Locks scroll behind mobile drawer
│
├── lib/
│   └── motion.js               # Shared Framer Motion variants + easing
│
├── seo/
│   ├── seo.config.js           # Default + per-page meta
│   ├── buildMeta.js            # Canonical / OG / Twitter builder
│   └── schema.js               # JSON-LD: Organization, LocalBusiness,
│                               #   FAQPage, Breadcrumb, Website
│
├── utils/
│   ├── cn.js                   # className joiner
│   └── validation.js           # Contact-form validation
│
├── styles/
│   └── globals.css             # Base layer, .surface, .text-gradient, scrollbar
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt              # References /sitemap.xml
│   ├── sitemap.xml             # Static fallback sitemap
│   └── logos/                  # simmi-logo-light/dark.png, simmi-mark.png, …
│
├── tailwind.config.js          # maple + ink palettes, fonts, shadows, keyframes
├── next.config.js              # Image remote patterns (Unsplash), avif/webp
├── postcss.config.js
├── jsconfig.json               # '@/*' path alias → project root
├── package.json
└── README.md
```

---

## 4. Key architectural patterns

**Data / presentation split.** Every component reads its copy from `data/*`. To change
wording, prices, phone numbers, or add a service, edit a data file — never a component.

**One template, many pages.** 32 service pages share `ServicePage.jsx`. It renders only
the sections each entry provides (prose, cards, comparison table, documents, process,
why-us, FAQ) and auto-stripes their backgrounds by position, so a page that omits a
section never produces two same-colored bands in a row.

**Theming.** `dark` class on `<html>`, toggled by `ThemeContext` and persisted to
`localStorage` (`simmi-theme`). A no-flash inline script in `_document.js` sets the class
before first paint. Every surface uses Tailwind `dark:` pairs; the logo swaps between a
light-text and dark-text PNG via CSS (`dark:hidden` / `hidden dark:block`).

**Navigation.** `data/navigation.js` drives both navbar and footer. Desktop shows a pill
nav with mega-dropdowns (2-column when a group has >5 items); mobile uses a slide-in
drawer with collapsible accordion groups and a pinned CTA footer.

**Homepage deep-links.** Navbar items like "Additional Services" link to
`/#additional-services`; `Programs.jsx` reads the hash on load and pre-selects the
matching category tab, and the homepage smooth-scrolls to it.

**Contact / conversion.** Floating WhatsApp button (all pages) → prefilled `wa.me` chat;
"Call now" in the navbar and a validated consultation form on the homepage.

---

## 5. SEO

- Per-page `<title>`, meta description, canonical, Open Graph, Twitter card via the
  `Seo` component + `seo/buildMeta.js`.
- JSON-LD structured data: Organization, LocalBusiness, Website, BreadcrumbList on all
  pages; FAQPage on pages that have FAQs.
- `sitemap.xml` (dynamic route + static fallback) lists all 37 URLs with priority and
  change frequency; `robots.txt` references it.
- Semantic HTML, `lang="en-CA"`, skip-to-content link, alt text on imagery.

---

## 6. Running the project

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

---

## 7. Before going live — checklist

- [ ] Replace Unsplash placeholder images with licensed photography in `public/`.
- [ ] Point the consultation form's `handleSubmit` at a real API route or CRM.
- [ ] Replace illustrative stats and review counts in `data/company.js` with real
      figures (approval-rate claims are regulated territory for an RCIC).
- [ ] Verify every rule with a hard date/threshold (PGWP language levels, income
      thresholds, Super Visa insurance minimums) against current IRCC guidance.
- [ ] Set real Facebook / LinkedIn URLs in `data/company.js` (currently placeholders).
- [ ] Confirm `company.url` matches the production domain (used by the sitemap).
- [ ] Add an OG share image at `public/images/og-simmi-immigration.jpg`.
```
