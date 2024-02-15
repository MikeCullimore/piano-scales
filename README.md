# piano-scales

Purpose: help you to memorise piano scales, by learning some music theory and a few tricks.

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
