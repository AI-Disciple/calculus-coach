# Writing style for site text

These rules apply to every piece of text the app shows: node content, solutions, sheet items and interface labels. Agents write this text directly and do not need the student's approval for it. The content check enforces the first two automatically. The others are checked by the person or agent writing the text.

## Checked automatically

- No em dashes. Use a full stop and a short new sentence, or a comma.
- No filler phrases. The banned list lives in `content/style/banned-phrases.yaml`, one phrase per line, matched without regard to case. Add a phrase there when a new kind of filler shows up.

## Checked by the writer

- Do not force lists of three. Uneven lists are fine.
- No "not X but Y" polish, and no "instead of" or "rather than" pivots added for punch.
- Write full sentences. Compress only where the cut does not cost understanding.
- Teaching text never refers to the student's own notes or to a slip in any source. A trap states the correct rule and shows the wrong version failing.
- When an example is used as evidence, introduce the objects in words, name each computed quantity before its value, and end with the conclusion in a full sentence.
- One claim per clause, in the order a reader would verify it. If removing a word changes nothing, remove it.
- Cleanup of existing text is typo and grammar only.
- Conditions and cases go in bullet lists.
- Methods and procedures go in numbered steps.
- Every important formula gets its own displayed line. A calculation of more than one step becomes an aligned display, one step per line.
- Key terms are bold where they are introduced.
- A subheading (`###`) comes whenever the subject changes inside a long block.

There is no hard limit on paragraph length.

Reference for tone and density: "f = x^3 + y^2 has its only critical point at (0, 0) with D = 0. Along y = 0 it equals x^3, which is positive for x > 0 and negative for x < 0, so the point is neither a minimum nor a maximum."
