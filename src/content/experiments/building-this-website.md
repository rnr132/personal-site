---
title: "Building this website"
description: "Documenting the process of building this site from scratch, using AI as a hands-on learning tool."
date: 2026-09-12
---

I've spent the last little while building this site almost entirely by talking to an AI coding agent (Claude Code) instead of writing the code myself. I wanted to actually understand what that's like, not just read about it, so this is the honest version of what happened.

It started from basically nothing — a blank template and a few lines of hero text. Everything else, the layout, the design, the way articles and experiments show up on the site, came out of back-and-forth conversation. I'd describe what I wanted, it would build something, I'd look at it and say what was wrong, and we'd go again.

A couple of things surprised me. The first was how much it tested its own work rather than just handing me something and moving on. At one point it pulled in a ready-made header design from a library, and while checking it in an actual browser, noticed the header was positioned wrong — sitting a quarter of the way down the page instead of at the top. It fixed that before I ever saw the bug. Small thing, but it wasn't something I'd asked it to check for.

The bigger one came later, while it was redesigning the site to feel less plain. It had built a nice effect where sections fade and slide into view as you scroll down. Except when it tested the page with JavaScript switched off, on its own, not because I asked, it found that the whole effect depended on JavaScript to make the content visible in the first place. If a visitor's browser ever failed to load that bit of code, whole sections of my homepage would just never show up. Not broken-looking, just gone. It rebuilt the thing a different way so that can't happen. That's the kind of bug I'd never have caught myself, and honestly I'm not sure I'd have thought to ask for it to be checked.

A couple of other odds and ends along the way: a routine check turned up an actual security hole in one of the underlying pieces of software the site runs on, nothing to do with what we were working on at the time, and that got patched in passing. And when I wanted to put one of my Scope Ratings research pieces on the site, we went back and forth on whether to post the whole thing or just a preview with a link back to the original — landed on the preview, since it's technically my employer's published work, not something written for this site.

What's stuck with me most isn't really about the code. It's that the speed only felt safe because everything actually got checked, in a real browser, under real conditions, rather than assumed to be right because it looked right on screen.
