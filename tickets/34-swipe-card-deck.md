# 34: Cards as a swipe deck

**What to build:** Cards are shown one at a time as a deck, in the node's Recall section and in the review queue. A tap flips a card, and a swipe rates it.

**Blocked by:** 29, 32

**Status:** done

**Suggested model:** Claude Sonnet 5.5 xhigh with the `apple-design` skill (pointer tracking, momentum projection and springs are spelled out there). If the drag still feels off after one pass, hand the tuning to Claude Opus 5.5 medium.

**Read first:** `src/ui/marking.tsx` (`CardBody`, `CardRatingButtons`), `src/ui/ReviewPage.tsx`, the `apple-design` skill sections on direct manipulation, momentum projection and springs.

## Background

A node shows about ten cards stacked one under another, each with a `<details>` "Back" that snaps open. Rating is two plain buttons.

## Acceptance criteria

- [ ] One card shows at a time with a count ("3 of 10"). Tap or Space flips it with a 3D turn.
- [ ] Dragging follows the pointer one to one from the point where it was grabbed. Swiping right means "Got it" and swiping left means "Again". Release speed is used to project where the card lands, and the card flies off at the speed of the finger.
- [ ] A short drag returns the card to the centre on a spring. The card can be grabbed again mid-flight.
- [ ] The buttons and the arrow keys still work for mouse and keyboard users, and the rating calls the same API as today.
- [ ] With reduced motion the flip and the swipe become cross-fades.
- [ ] In a node, a deck that has not been rated saves nothing. Rating schedules the card exactly as today.
- [ ] A smoke test covers flipping and rating with the keyboard.
