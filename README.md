# piano-scales

Hosted at https://mikecullimore.github.io/piano-scales/

Purpose: help you to memorise piano scales, by learning some music theory and a few tricks.

## TODO

- Add more scales!
- Option to select from list rather than randomise.

## Scales in Trinity book

Focus on the scales in this book in grade order.

- Piano Scales & Arpeggios
- For Trinity College London exams from 2015
- Initial - Grade 5
- Trinity College London Press

I find it easier to approach the minor scales in the order natural, harmonic, melodic.

- Natural: as the key signature.
- Harmonic: raised seventh.
- Melodic: raised sixth and seventh ascending, as key signature descending.

### Initial

All hands apart i.e. right then left, scales all one octave.

1. C major
1. C major broken triad to 5th
1. A harmonic minor
1. A melodic minor
1. A natural minor
1. A minor broken triad to 5th

### Grade 1

1. F major
1. F major broken chord
1. G major
1. G major broken chord
1. D harmonic minor
1. D melodic minor
1. D natural minor
1. D minor broken chord
1. E harmonic minor
1. E melodic minor
1. E natural minor
1. E minor broken chord
1. C major contrary motion scale
1. Chromatic scale in contrary motion hands together starting on D

### Grade 2

All two octaves.

1. Bb major
1. Bb major arpeggio
1. D major
1. D major arpeggio
1. G minors (x3)
1. G minor arpeggio
1. B minors (not natural: why?)
1. B minor arpeggio
1. C major contrary motion
1. Chromatic scale in similar motion starting on Bb

## Deploy to GitHub Pages

(This applies to any React app.)

Install the GitHub Pages package as a dev dependency:

```bash
npm install gh-pages --save-dev
```

Add the following to `package.json`:

```json
"homepage": "https://<username>.github.io/<repository-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Build:

```bash
npm run build
```

Deploy:

```bash
npm run deploy
```

Navigate to the home page!

## Worked examples

- Order in which sharps are added: Father Christmas Gave Dad An Electric Blanket (F C G D A E B).
- Order in which flats are added: reverse it i.e. Blanket Exploded And Dad Got Cold Feet (B E A D G C F).
- For a minor key, work out the relative major.
    - 4 semitones above.
    - Starting note counts as 1.
    - E.g. A minor: 1 = A, 2 = A#/Bb, 3 = B, 4 = C, relative major is C.

### C major

- Does it work for C?! So obvious it doesn't need to?
- Leading note is B
- Count to B: Father Christmas Gave Dad An Electric Blanket: 7...

### G major

- Leading note is F.
- Father: first.
- So one sharp: F.

### F major

- An exception?
- One flat: Bb.

## How to add a new scale.

1. Write Lilypond markup, compile to SVG.
1. Optimise SVG with e.g. https://svgomg.net/
