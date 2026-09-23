---
title: "London Flight Deals"
description: "A free email that flags unusually cheap flights from UK airports, and the sign-up page I built with AI so people can join without messaging me."
date: 2026-09-23
---

London Flight Deals is a hobby project: an email that flags unusually cheap flights from UK airports. It only goes out on nights when something genuinely good turns up, so there's no daily digest to ignore. No deal, no email.

Deals fall into two groups:

- **Weekend Deals**: Friday–Sunday, Saturday–Monday, or Saturday–Sunday trips, so a weekend away without using up much leave.
- **Holiday Deals**: flights during, or within a couple of days of, a UK school holiday, which is when prices usually jump.

## Letting people sign up

Until now, the recipient list was family and friends I added by hand, which meant anyone who wanted in had to message me first. So I built a sign-up page at its own address, [flightalert.rohit-nair.com](https://flightalert.rohit-nair.com), using Claude Code to do most of the building.

I kept it deliberately simple. There's no backend: the form posts straight to a Google Form, and each sign-up lands as a row in a Google Sheet. I still review that list and add people myself, so the page removes the friction without removing me from the loop.

## What I learned

The page itself came together quickly. Nearly all the time went on the last step: getting it to actually work in the real world.

- **An unpublished form fails silently.** My first test sign-up never reached the Sheet. The cause was that I hadn't pressed *Publish* on the Google Form, and until you do, it quietly rejects every entry.
- **"Thanks" doesn't mean it worked.** Google doesn't tell a page like this whether it accepted an entry, so the page shows a thank-you either way. The only real check is a test sign-up and a look at the Sheet.
- **The first attempt at the address didn't work.** After going live, the new address still showed my homepage. The routing rule the AI wrote only applied when no real file matched the address, and the homepage always matched. Claude Code worked that out by building the site the way my host does and reading the resulting route table, then switched to a rule that runs first. It was a good reminder that "it built fine" and "it works live" are different claims.

The useful habit from this one: for anything that touches the outside world, finish by checking the real result yourself, not the message on screen.

<a href="https://flightalert.rohit-nair.com" target="_blank" rel="noopener noreferrer" class="not-prose inline-block mt-2 px-5 py-2.5 rounded-full bg-teal-700 text-white font-medium hover:bg-teal-800 transition-colors">Sign up for London Flight Deals →</a>
