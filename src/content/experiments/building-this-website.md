---
title: "Building this website"
description: "Documenting the process of building this site from scratch, using AI as a hands-on learning tool."
date: 2026-09-12
---

I wanted to see what it actually looks like to build and ship a real site almost entirely through an AI coding agent — not a toy demo, but something with real deploys, real bugs, and a real domain on the line. This site is that experiment, built end to end with Claude Code.

## Starting point

The site began as a bare Astro and Tailwind scaffold with a handful of sentences of hero copy. From there, everything — the header, the visual design, the content structure, the SEO basics — was built through conversation: describing what I wanted, watching it get built, testing it, and correcting course.

## Pulling in real components, not fabricated ones

Early on I had it wire up [21st.dev](https://21st.dev)'s component catalog through MCP, so instead of hand-rolling a navigation header it pulled a real, existing React component, adapted it to this site's actual pages, and fixed a real bug in the process — the sourced component had a `sticky top-1/4` position that would have pinned the header a quarter of the way down the page instead of at the top. Small thing, but it's the kind of detail that's easy to miss just eyeballing generated code, and it only turned up because the page actually got rendered and looked at.

Sourcing a LinkedIn icon hit a more interesting snag: the icon library it wanted to pull from was blocked by the sandbox's own network policy. Rather than give up or fake something, it found the exact same glyph shipped in a different, unrelated npm package, installed it just long enough to copy the path data out, then removed the dependency again.

## The deploy loop

Getting changes onto this domain surfaced something I hadn't set up myself: Vercel was already connected to the GitHub repo, auto-deploying preview builds off every branch. The gap wasn't access — it was that nothing had been merged to `main` yet. Once that was clear, the loop settled into: branch, build, verify in an actual headless browser, open a pull request, merge, confirm it's live.

## A bug caught by testing, not by generating

The most interesting moment came during the visual redesign. The first version of the "scroll in as you read" animation used React and hid each section (`opacity: 0`) until JavaScript detected it on screen. Testing — deliberately loading the page with JavaScript disabled — showed the real problem: that hidden state was baked into the page before any JavaScript ran, so if a script failed to load, whole sections of the homepage would stay invisible forever, not just unanimated. It got rebuilt as a CSS-only version that never touches opacity, only position — worst case, content just doesn't slide in, it's never actually hidden. That's the kind of bug that's obvious once you go looking for it and invisible if you don't.

## A few other things that turned up along the way

- Adding a couple of packages triggered a routine `npm audit`, which turned up a critical remote-code-execution advisory in Astro itself, unrelated to anything I'd asked for. Fixed with an in-range version bump, in the same sitting.
- Getting a first real article onto the site — actual Scope Ratings research I'd written — raised a smaller judgment call: reproduce the whole thing, or treat it as published-elsewhere work and link out? We landed on a two-paragraph preview plus a link to the original, which felt like the right call for something published under my employer's name.

## Where it landed

A live site with a custom design system, a content pipeline where new Markdown files become pages automatically, SEO basics, and a maintenance map documenting exactly where every piece of text on the site lives — kept in sync going forward as a standing rule, not a one-time favour.

The honest takeaway: it moves fast, but "fast" only stayed safe because of testing at every step — real browser checks, JavaScript-disabled checks, actual builds — not just trusting that generated code was correct because it looked right.
