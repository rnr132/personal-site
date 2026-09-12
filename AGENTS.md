## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Content map

`docs/content-map.md` maps every piece of visible site text to its file and line number. It's also rendered live at `/content-map` (unlisted — noindexed, excluded from the sitemap, not linked in the nav), since that page imports `docs/content-map.md` directly as its content — the file is the single source of truth for both.

Whenever a page, section, or new visible element is added, removed, or moved to a different file/line, update `docs/content-map.md` in the same change. Line numbers should stay accurate.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
