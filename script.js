/* ============================================================
Vanesa Ramírez — behaviour
Nav, smooth scroll, publication filter, Leaflet map.
Reads everything from data.js.
============================================================ */

document.addEventListener("DOMContentLoaded", function () {
renderHeroFacts();
renderEducation();
renderSkills();
renderAwards();
renderTeam();
renderPublications();
setupPublicationsTabs();
renderConferences();
renderContact();
setupNav();
setupMap();
});

/* ---------- helpers ---------- */
function el(tag, className, html) {
const node = document.createElement(tag);
if (className) node.className = className;
if (html !== undefined) node.innerHTML = html;
return node;
}
function esc(str) {
return String(str)
.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")
.replace(/"/g, """).replace(/'/g, "'");
}

/* ---------- HERO ---------- */
function renderHeroFacts() {
const wrap = document.getElementById("heroFacts");
if (!wrap) return;
HERO.facts.forEach(function (f) {
wrap.appendChild(el("div", "fact", "<strong>" + esc(f.label) + ":</strong> <span>" + esc(f.value) + "</span>"));
});
}

/* ---------- EDUCATION ---------- */
function renderEducation() {
const wrap = document.getElementById("educationList");
if (!wrap) return;
STUDIES.filter(function (s) { return s.type === "degree"; }).forEach(function (s) {
const li = el("li", null,
'<span class="tl-years">' + esc(s.years) + "</span>" +
'<div class="tl-title">' + esc(s.title) + "</div>" +
'<div class="tl-place">' + esc(s.institution) + " · " + esc(s.place) + "</div>" +
'<div class="tl-note">' + esc(s.note) + "</div>");
wrap.appendChild(li);
});
}

/* ---------- SKILLS ---------- */
function renderSkills() {
const prog = document.getElementById("skillsProgramming");
SKILLS.programming.forEach(function (s) { prog.appendChild(el("span", "chip", esc(s))); });

const astr = document.getElementById("skillsAstronomy");
SKILLS.astronomy.forEach(function (s) { astr.appendChild(el("span", "chip", esc(s))); });

const lang = document.getElementById("skillsLanguages");
SKILLS.languages.forEach(function (l) {
const row = el("div", "lang-row",
'<span class="lang-name">' + esc(l.name) + "</span>" +
'<div class="bar"><span style="width:' + l.pct + '%"></span></div>' +
'<span class="lang-level">' + esc(l.level) + "</span>");
lang.appendChild(row);
});
}

/* ---------- AWARDS ---------- */
function renderAwards() {
const wrap = document.getElementById("awardList");
AWARDS.forEach(function (a) {
wrap.appendChild(el("li", null,
'<span class="aw-year">' + esc(a.year) + "</span><span class="aw-text">" + esc(a.text) + "</span>"));
});
}

/* ---------- TEAM ---------- */
function renderTeam() {
const wrap = document.getElementById("teamCurrent");
function card(m) {
return el("div", "member",
'<div class="m-name">' + esc(m.name) + "</div>" +
'<div class="m-role">' + esc(m.role) + "</div>");
}
TEAM.current.forEach(function (m) { wrap.appendChild(card(m)); });
TEAM.alumni.forEach(function (m) { wrap.appendChild(card(m)); });
}

/* ---------- PUBLICATIONS ---------- */
var pubState = { filter: "all", query: "" };

function renderPublications() {
const list = document.getElementById("pubList");
const countAll = document.getElementById("countAll");
const countSel = document.getElementById("countSel");
list.innerHTML = "";
countAll.textContent = "(" + PUBLICATIONS.length + ")";
countSel.textContent = "(" + PUBLICATIONS.filter(function (p) { return p.selected; }).length + ")";

const q = pubState.query.trim().toLowerCase();
const items = PUBLICATIONS.filter(function (p) {
if (pubState.filter === "selected" && !p.selected) return false;
if (q) {
const hay = (p.authors + " " + p.title + " " + p.journal + " " + p.year + " " + p.place).toLowerCase();
if (hay.indexOf(q) === -1) return false;
}
return true;
});

if (!items.length) {
list.appendChild(el("li", "pub-empty", "No publications match your search."));
return;
}

items.forEach(function (p) {
const link = p.link
? ' · <a class="pub-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">DOI / ADS</a>'
: "";
const li = el("li", null,
'<span class="pub-year">' + esc(p.year) + "</span>" +
'<p class="pub-title">' + esc(p.title) + "</p>" +
'<p class="pub-authors">' + esc(p.authors) + "</p>" +
'<p class="pub-journal">' + esc(p.journal) + "</p>" +
'<div class="pub-meta">' + esc(p.place) + link + "</div>");
list.appendChild(li);
});
}

function setupPublicationsTabs() {
document.querySelectorAll("#pubTabs .pub-tab").forEach(function (tab) {
tab.addEventListener("click", function () {
document.querySelectorAll("#pubTabs .pub-tab").forEach(function (t) { t.classList.remove("active"); });
tab.classList.add("active");
pubState.filter = tab.getAttribute("data-filter");
renderPublications();
});
});
const search = document.getElementById("pubSearch");
search.addEventListener("input", function () {
pubState.query = search.value;
renderPublications();
});
}

/* ---------- CONFERENCES ---------- */
function renderConferences() {
const talks = document.getElementById("talkList");
const posters = document.getElementById("posterList");
CONFERENCES.forEach(function (c) {
const li = el("li", null,
'<span class="conf-years">' + esc(c.years) + "</span>" +
'<span class="conf-name">' + esc(c.title) + "</span>" +
'<span class="conf-note">' + esc(c.note) + "</span>");
if (c.kind === "talk") talks.appendChild(li);
else posters.appendChild(li);
});
}

/* ---------- CONTACT ---------- */
function renderContact() {
const email = document.getElementById("emailLink");
const phone = document.getElementById("phoneLink");
if (email) email.href = "mailto:" + SITE.email;
if (phone) phone.href = "tel:" + SITE.phone;

const meta = document.getElementById("footerMeta");
if (meta) meta.textContent = "Last updated: " + SITE.lastUpdated + " · © " + SITE.copyrightYear + " Vanesa Ramírez";
}

/* ---------- NAV ---------- */
function setupNav() {
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("siteNav");
toggle.addEventListener("click", function () {
nav.classList.toggle("open");
toggle.classList.toggle("open");
toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
});
nav.querySelectorAll("a").forEach(function (a) {
a.addEventListener("click", function () {
nav.classList.remove("open");
toggle.classList.remove("open");
});
});
}

/* ============================================================
MAP
============================================================ */
var map, markerGroup;

var CATEGORY = {
degree: {
label: "Studies (BSc / MSc / PhD)",
css: "p-degree",
badge: "b-degree",
color: "#2E7D74"
},
school: {
label: "Schools & stays",
css: "p-school",
badge: "b-school",
color: "#E8732A"
},
experience: {
label: "Industry Work Experience",
css: "p-experience",
badge: "b-experience",
color: "#7B4B94"
},
conf: {
label: "Conferences",
css: "p-conf",
badge: "b-conf",
color: "#1B3565"
},
pub: {
label: "Publications",
css: "p-pub",
badge: "b-pub",
color: "#1F5A54"
}
};

function buildMapData() {
const items = [];
let n = 0;

function push(obj) {
obj.id = obj.cat + "-" + (n++);
items.push(obj);
}

/* Degrees */
STUDIES.forEach(function (s) {
if (s.lat == null || s.type !== "degree") return;

```
push({
  cat: "degree",
  title: s.title,
  place: s.institution + (s.place ? " · " + s.place : ""),
  years: s.years,
  note: s.note,
  lat: s.lat,
  lng: s.lng
});
```

});

/* Schools and research stays */
STUDIES.forEach(function (s) {
if (s.lat == null || s.type === "degree" || s.type === "experience") return;

```
push({
  cat: "school",
  title: s.title,
  place: s.institution + (s.place ? " · " + s.place : ""),
  years: s.years,
  note: s.note,
  lat: s.lat,
  lng: s.lng
});
```

});

/* Industry work experience */
STUDIES.forEach(function (s) {
if (s.lat == null || s.type !== "experience") return;

```
push({
  cat: "experience",
  title: s.title,
  place: s.institution + (s.place ? " · " + s.place : ""),
  years: s.years,
  note: s.note,
  lat: s.lat,
  lng: s.lng
});
```

});

/* Conferences */
CONFERENCES.forEach(function (c) {
if (c.lat == null) return;

```
push({
  cat: "conf",
  title: c.title,
  place: (c.place ? c.place : "") + (c.country ? (c.place ? ", " : "") + c.country : ""),
  years: c.years,
  note: c.note,
  lat: c.lat,
  lng: c.lng
});
```

});

/* Publications */
PUBLICATIONS.forEach(function (p) {
if (p.lat == null) return;

```
push({
  cat: "pub",
  title: p.title,
  place: p.place,
  years: p.year,
  note: p.authors + " · " + p.journal,
  lat: p.lat,
  lng: p.lng,
  link: p.link
});
```

});

return items;
}

function pinIcon(cat) {
const ic = {
degree: "🎓",
school: "🌏",
experience: "💼",
conf: "🎤",
pub: "📄"
}[cat] || "📍";

return L.divIcon({
className: "",
html: '<div class="pin ' + CATEGORY[cat].css + '" data-ico="' + ic + '"></div>',
iconSize: [30, 30],
iconAnchor: [15, 30],
popupAnchor: [0, -26]
});
}

function popupFor(item) {
let html =
'<span class="pop-badge ' + CATEGORY[item.cat].badge + '">' +
esc(item.years) + " · " +
esc(CATEGORY[item.cat].label) +
"</span>" +
'<div class="pop-title">' + esc(item.title) + "</div>" +
'<div class="pop-meta">' + esc(item.place) + "</div>" +
'<div class="pop-note">' + esc(item.note) + "</div>";

if (item.link) {
html += '<a href="' + esc(item.link) + '" target="_blank" rel="noopener">Open publication</a>';
}

return html;
}

function setupMap() {
if (!window.L) {
renderNoMap();
return;
}

buildLegend();

const items = buildMapData();

map = L.map("worldMap", {
scrollWheelZoom: false,
zoomControl: true
}).setView([30, 0], 2);

/* Clean, minimal basemap — keyless OpenStreetMap tiles, lightened with a CSS filter
so it stays simple at every zoom (no API key / no dark unreadable watermark). */
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
maxZoom: 19,
subdomains: "abc",
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

markerGroup = L.markerClusterGroup({
showCoverageOnHover: false,
maxClusterRadius: 45
});

const markersById = {};

items.forEach(function (item) {
const marker = L.marker(
[item.lat, item.lng],
{ icon: pinIcon(item.cat) }
);

```
marker.bindPopup(popupFor(item));
marker._cat = item.cat;
marker._item = item;
markersById[item.id] = marker;
markerGroup.addLayer(marker);
```

});

map.addLayer(markerGroup);

/* Side cards — clicking one flies the map to its location */
let activeCard = null;

function renderCards(list) {
const wrap = document.getElementById("mapCards");
if (!wrap) return;

```
wrap.innerHTML = "";

list.forEach(function (item) {
  const li = document.createElement("li");

  li.className = "map-card m-" + item.cat;

  li.innerHTML =
    '<span class="mc-ico">' +
    ({
      degree: "🎓",
      school: "🌏",
      experience: "💼",
      conf: "🎤",
      pub: "📄"
    }[item.cat] || "📍") +
    "</span>" +
    '<div class="mc-body">' +
    '<div class="mc-title">' + esc(item.title) + "</div>" +
    '<div class="mc-place">' + esc(item.place) + "</div>" +
    '<span class="mc-years">' + esc(item.years) + "</span>" +
    "</div>";

  li.addEventListener("click", function () {
    flyToItem(item, li);
  });

  wrap.appendChild(li);
});

if (!list.length) {
  wrap.appendChild(
    el("li", "map-card map-empty", "No locations in this category yet.")
  );
}
```

}

function flyToItem(item, li) {
if (activeCard) activeCard.classList.remove("selected");

```
li.classList.add("selected");
activeCard = li;

const marker = markersById[item.id];

map.flyTo(
  [item.lat, item.lng],
  Math.max(map.getZoom(), 5),
  { duration: 0.8 }
);

if (marker) marker.openPopup();

li.scrollIntoView({
  behavior: "smooth",
  block: "nearest"
});
```

}

/* Filter buttons update both markers and cards */
const buttons = document.querySelectorAll("#mapFilters .map-filter");

buttons.forEach(function (btn) {
btn.addEventListener("click", function () {
buttons.forEach(function (b) {
b.classList.remove("active");
});

```
  btn.classList.add("active");
  applyMapFilter(btn.getAttribute("data-cat"));
});
```

});

let currentItems = items;

function setMapLayers(list) {
markerGroup.clearLayers();

```
list.forEach(function (item) {
  markerGroup.addLayer(markersById[item.id]);
});
```

}

window.applyMapFilter = function (cat) {
const list =
cat === "all"
? items
: items.filter(function (item) {
return item.cat === cat;
});

```
currentItems = list;

setMapLayers(list);
renderCards(list);

if (activeCard) {
  activeCard.classList.remove("selected");
  activeCard = null;
}
```

};

renderCards(items);
}

function buildLegend() {
const legend = document.getElementById("mapLegend");
Object.keys(CATEGORY).forEach(function (key) {
legend.appendChild(
el(
"li",
null,
'<span class="dot" style="background:' +
       CATEGORY[key].color +
       '"></span>' +
esc(CATEGORY[key].label)
)
);
});
}

function renderNoMap() {
const mapEl = document.getElementById("worldMap");
if (!mapEl) return;

mapEl.innerHTML =
'<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:30px;text-align:center">' +
"<p>The interactive map could not be loaded (no internet connection to reach map tiles). " +
"You can still browse the publications and conferences above.</p></div>";
}
