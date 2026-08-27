# Vanesa Ramírez — Personal Website

A bilingual (English / Spanish) static portfolio site for Vanesa Ramírez,  with the teal / navy / cream palette taken from her poster.

## Files

```
Pvanesa/
├── index.html   (English version)
├── es.html      (Spanish version)
├── styles.css   (colors, typography, layout — the theme)
├── script.js    (behaviour: nav, filters, interactive world map)
├── data.js      ⭐ ALL your content lives here
├── README.md
└── assets/images/   (drop photos here)
```

## Run it locally

Because it uses a CDN for fonts and the map, the easiest way is to serve it over HTTP:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. (Opening the `.html` files directly by double-clicking also works,
but the map/fonts need internet access.)

## Deploy to GitHub Pages

1. Create a new GitHub repository and push these files to the `main` branch.
2. In the repo: **Settings → Pages → Source: deploy from a branch → `main` / root (`/`)**.
3. After a minute, your site is published at `https://<your-username>.github.io/<repo>/`.

> The map and fonts load from public CDNs, so no additional setup is required.

## How to edit content (everything is in `data.js`)

Open `data.js`. All the page data — publications, studies, schools, conferences, awards, skills —
lives there as JavaScript arrays. You never need to touch the HTML/CSS to change content.

### Add a publication
Add a new `{ ... }` block inside the `PUBLICATIONS = [ ... ]` array:

```js
{
  id: "p8",
  year: "2026",
  authors: "Ramirez, V., Miguel, Y.",
  title: "Title of my new paper",
  journal: "Monthly Notices of the Royal Astronomical Society",
  link: "https://ui.adsabs.harvard.edu/...",  // optional link
  place: "Leiden, The Netherlands",            // used by the map
  lat: 52.155,
  lng: 4.483,
  selected: true                                // true = appears in "Selected" tab
}
```

To change where it appears on the map, edit `lat` / `lng` (find coordinates at this site in the
popup, or use a coords website).

### Add a study / school / research stay
Add a block to the `STUDIES = [ ... ]` array. `type: "degree"` uses the teal "Studies" category;
any other type (e.g. `type: "school"`) uses the orange "Schools & stays" category on the map.

### Add a conference
Add a block to the `CONFERENCES = [ ... ]` array. Use `kind: "talk"` or `kind: "poster"`.
Give it `lat` / `lng` (and `place` / `country`) if you want it pinned on the map; leave `lat: null`
to keep it in the list only.

### Add / edit awards, skills, team
Edit the `AWARDS`, `SKILLS`, and `TEAM` arrays in the same file.

### Change the bio / intro text
The bio and the short intro sentences are written directly in `index.html` (English) and
`es.html` (Spanish) — search for the `about-text` or `hero-intro` blocks. Edit the text there.

### Add photos
Drop images into `assets/images/`. To show them, add an `<img>` tag in the relevant section of
`index.html` / `es.html`, e.g. `<img src="assets/images/photo.jpg" alt="...">`.

## Language

- `index.html` = **English**
- `es.html` = **Spanish**
The header link toggles between them. Keep both files in sync when you change shared text.
