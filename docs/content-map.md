# Content map

Where every piece of visible text on rohit-nair.com lives, so you can edit it directly on GitHub (or locally) without needing to ask for help. Line numbers are accurate as of this file's last update — if the surrounding code has shifted since, the file name will still get you close.

## Site-wide

| Element | File | Line(s) |
|---|---|---|
| Nav bar wordmark ("Rohit Nair") | `src/components/ui/site-header.tsx` | 26 |
| Nav bar menu labels (Home / Articles / About / Experiments) | `src/components/ui/site-header.tsx` | 8–11 |
| Footer copyright line | `src/layouts/Layout.astro` | 60 |
| Footer email address (`mailto:` link) | `src/layouts/Layout.astro` | 62 |
| Footer LinkedIn URL | `src/layouts/Layout.astro` | 67 |
| Default page `<title>` + meta description (used by the homepage; other pages override it, see below) | `src/layouts/Layout.astro` | 17–18 |

## Homepage — `src/pages/index.astro`

| Element | Line(s) |
|---|---|
| Hero headline ("Credit risk," / "meet AI.") | 23–24 |
| Hero subtext paragraph | 27–29 |
| Hero button labels ("Read Articles" / "About") | 33, 36 |
| Bento tile: "10+ yrs" stat + caption | 45–46 |
| Bento tile: Sectors list | 50 |
| Bento tile: "Right now" | 54 |
| Bento banner: "Say hello" label | 57 |
| Bento banner: email address (`mailto:` link) | 59 |
| Bento banner: LinkedIn URL | 64 |
| "Featured Articles" / "Featured AI Experiments" headings | 81, 97 |

Note the email address and LinkedIn URL each appear **twice** on the site (footer, and again in this "Say hello" banner) — they aren't linked, so a change needs to happen in both spots.

## About page — `src/pages/about.astro`

| Element | Line(s) |
|---|---|
| Page title / meta description (for search engines & link previews) | 6–7 |
| Avatar initials ("RN") | 12 |
| Name + role | 15–16 |
| Bio (3 paragraphs) | 20–35 |

## Articles list page — `src/pages/articles/index.astro`

| Element | Line(s) |
|---|---|
| Page title / meta description | 13–14 |
| Heading + intro line | 17–18 |

## Experiments list page — `src/pages/experiments/index.astro`

| Element | Line(s) |
|---|---|
| Page title / meta description | 13–14 |
| Heading + intro line | 17–18 |

## London Flight Deals sign-up — `src/pages/flightalert.astro`

Lives at **flightalert.rohit-nair.com** (not linked from the main site's nav). `vercel.json` rewrites that subdomain's `/` to this page, and redirects `rohit-nair.com/flightalert` to the subdomain. Sign-ups post to a Google Form; its URL and field IDs live in `src/data/flightalert-form.ts` (lines 5, 7, 8).

| Element | Line(s) |
|---|---|
| Page title / meta description | 13–14 |
| Eyebrow ("London Flight Deals") | 21 |
| Hero headline ("Cheap flights," / "only when they're real.") | 23–24 |
| Hero subtext paragraph | 27–28 |
| Weekend Deals card (label, headline, description) | 36–38 |
| Holiday Deals card (label, headline, description) | 41–43 |
| Form heading ("Get the email") + intro line | 50, 52 |
| Field labels ("Email" / "Name (optional)") | 61, 73 |
| Button label ("Sign me up") | 87 |
| Privacy / unsubscribe line | 92–93 |
| Message after submitting (success / error) | 120, 123 |

## Articles & experiments themselves

Each article and experiment is its own Markdown file — this is also how you add a new one.

- Articles: `src/content/articles/*.md`
- Experiments: `src/content/experiments/*.md`

Every file has two parts: **frontmatter** (the `---`-fenced block at the top, structured data) and a **body** (plain Markdown below it, rendered on that entry's own page).

Frontmatter fields:

| Field | Articles | Experiments |
|---|---|---|
| `title` | required | required |
| `description` | required — also used as the card blurb and the SEO meta description for that page | required, same use |
| `date` | required, `YYYY-MM-DD` | required, `YYYY-MM-DD` |
| `tag` | required (e.g. `"Credit"`, `"AI"`) | not used |

**To add a new article or experiment:** create a new `.md` file in the matching folder with that frontmatter plus a body underneath. No other page needs to change — the homepage's "Featured" sections and the full listing pages both pull from these files automatically, newest first by `date`.

**To remove one:** delete the file.

Current entries:
- `src/content/articles/europes-glassmakers-energy-risk.md` — a preview (first two paragraphs) plus a button linking out to the full piece on Scope Ratings, since it's published on the employer's research portal rather than written for this site.
- `src/content/experiments/building-this-website.md` — placeholder, not yet written.
- `src/content/experiments/credit-watchlist-experiment.md` — placeholder, not yet written.

## Images (not text — these need regenerating, not editing)

| What | File |
|---|---|
| Favicon (browser tab icon) | `public/favicon.svg` (source), `public/favicon.ico`, `public/apple-touch-icon.png` |
| Link preview image (shown when the site is shared on Slack, LinkedIn, iMessage, etc.) | `public/og-image.png` |

If you want the wording or design on either changed, ask — they're generated images, not something you'd hand-edit.
