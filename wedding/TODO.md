# TODO after Phase 1

Every `[TBD]` still on the site, by section. Fill these in `index.html` unless a line says otherwise.

## Home

- [ ] Short welcome line
- [ ] RSVP deadline (also used in the FAQ)

## Our story

- [ ] "How we met" paragraphs
- [ ] "The proposal, and why we chose Oʻahu" paragraphs
- [ ] Photos 1 to 6, with captions. Upload them on the photo drop page and I'll add them

## Schedule

- [ ] Arrival time, and where guests should go when they arrive
- [ ] Ceremony time. Also set `ceremonyStart` in `site.config.json` so the countdown shows hours and minutes
- [ ] Cocktail hour time
- [ ] Reception time
- [ ] Last dance or end time (no later than 10:00 pm under the venue rules)

## Venue

- [ ] Where in the park the ceremony and reception are
- [ ] Shuttle or overflow parking plan

## Travel and stay

- [ ] Hotel suggestions: name, area and drive time, booking link or room block code (two cards are in place; add or remove as needed)

## What to wear

- [ ] Dress code (for example, aloha attire)

## Registry

- [ ] A note about gifts
- [ ] Registry names and links (two cards are in place)

## Questions

- [ ] RSVP deadline
- [ ] Plus-one policy
- [ ] Kids policy
- [ ] Rain plan
- [ ] Unplugged ceremony or not
- [ ] Accessibility: paths, seating, restrooms, drop-off point
- [ ] Where the designated smoking area is
- [ ] End time

## Footer (every page)

- [ ] Contact email. Set `contactEmail` in `site.config.json`, then run `node build.mjs`

## RSVP page

- [ ] Date RSVP opens, and the deadline (Phase 2 replaces this page with the real form)

## Facts I added that you should confirm

From public sources:

- Address: 46-465 Kamehameha Hwy, Kāneʻohe, HI 96744 (Hawaiʻi DLNR State Parks listing)
- Map pin at 21.43972, -157.80889 (Wikipedia's coordinates for the park). The map couldn't load from my test environment, so check that the pin lands in the right spot once the site is live
- "Kealohi Point" spelling. The rental agreement writes "Ke'alohi"; the venue's own domain is kealohipoint.com
- The view across Kāneʻohe Bay toward Mokuoloʻe (Coconut Island)
- Drive times: 30 to 45 minutes from HNL, 35 to 45 minutes from Waikīkī (travel guides; traffic varies)
- Sunset about 6:45 pm HST on September 5, 2027 (solar calculation for the park's location)

From the 2027 rental agreement (these apply whichever package you book):

- About 70 marked stalls in the main lot, more in the front lot; no parking on grass; the driveway is an emergency lane; violators are towed
- Events end by 10:00 pm; all guests and cars out by 10:30 pm, when the gate is locked
- The park is open to the public until 5:00 pm
- Children must be supervised at all times
- No confetti, glitter, rice, or artificial petals; no open flames, candles, or sparklers; no balloon or lantern releases
- Smoking and vaping are banned in state parks; the venue provides one designated smoking area
- Alcohol only in and around the hall and cottage; no open containers on the grounds or in the parking lot

## Planning notes (not on the site)

- The Koʻolau mountains are west of the park, so the sun will drop behind them before the 6:45 pm sunset, likely 30 to 50 minutes earlier. If you can, visit around that time of day before picking the ceremony time and planning photos.
- Every package lists the "Hula/Wedding Mound Site with up to 50 chairs." If more than 50 people will be at the ceremony, plan for extra seating or standing room.
- A ceremony before 5:00 pm means sharing the grounds and parking lot with the public.
