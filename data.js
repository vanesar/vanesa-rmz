/* ============================================================
   Vanesa Ramírez — Website content
   ------------------------------------------------------------
   EDIT ME: This file holds all the content of the site.
   Add / edit items below and the page + map update automatically.
   See README.md for a step-by-step guide.
   ============================================================ */

const SITE = {
  name: "Vanesa Ramírez",
  shortName: "Vanesa",
  role: "PhD Candidate in Astronomy",
  affiliation: ["Leiden Observatory", "SRON Netherlands Institute for Space Research"],
  location: "Leiden, The Netherlands",
  email: "ramirez@strw.leidenuniv.nl",
  phone: "+31 6 47 07 4243",
  lastUpdated: "August 2026",
  copyrightYear: "2026"
};

const HERO = {
  title: "Exploring the interiors of planets",
  subtitle: "Bayesian methods & machine learning to probe the composition of giant (exo)planets",
  facts: [
    { label: "Focus", value: "Planetary Interiors · Exoplanets" },
    { label: "Currently", value: "PhD @ Leiden Observatory" },
    { label: "Methods", value: "Bayesian · Machine Learning" },
    { label: "Tools", value: "JWST · Ariel · Voyager data" }
  ]
};

/* --------------------- Study (bachelor / MSc / PhD, schools, research stays) ----- */
const STUDIES = [
  {
    id: "phd",
    type: "degree",
    title: "PhD in Astronomy",
    institution: "Leiden University",
    place: "Leiden, The Netherlands",
    country: "Netherlands",
    lat: 52.155,
    lng: 4.483,
    years: "2024–Present",
    note: "Thesis: Probing the Interior of Giant Planets. Supervisor: Dr. Yamila Miguel. Using Bayesian methods and machine learning to constrain composition of giant (exo)planets and probe Love numbers."
  },
  {
    id: "msc",
    type: "degree",
    title: "MSc in Astronomy",
    institution: "Leiden University",
    place: "Leiden, The Netherlands",
    country: "Netherlands",
    lat: 52.155,
    lng: 4.483,
    years: "2020–2022",
    note: "Cum Laude. Specialization in Astronomy and Data Science. Theses on statistical modeling of Uranus/Neptune interiors and JWST synthetic observations of disequilibrium chemistry in HD 209458b."
  },
  {
    id: "bsc",
    type: "degree",
    title: "BSc in Astronomy",
    institution: "Universidad de Antioquia",
    place: "Medellín, Colombia",
    country: "Colombia",
    lat: 6.2442,
    lng: -75.5812,
    years: "2013–2018",
    note: "Thesis: A search for candidate LBV stars in NGC 7793 with HST and MUSE."
  },
  {
    id: "unam",
    type: "school",
    title: "Research internship",
    institution: "IA-UNAM",
    place: "Ensenada, Mexico",
    country: "Mexico",
    lat: 31.8666,
    lng: -116.6022,
    years: "2019",
    note: "Full scholarship for a one-month research internship at IA-UNAM.",
    tag: "School / Internship"
  },
  {
    id: "laserena",
    type: "school",
    title: "La Serena School (data science)",
    institution: "Applied classification & clustering",
    place: "La Serena, Chile",
    country: "Chile",
    lat: -29.9027,
    lng: -71.2519,
    years: "2019",
    note: "Applied classification and clustering to the Kepler dataset to identify potential exoplanets.",
    tag: "School"
  },
  {
    id: "asml",
    type: "work",
    title: "Data Scientist",
    institution: "ASML",
    place: "Eindhoven, The Netherlands",
    country: "Netherlands",
    lat: 51.4416,
    lng: 5.4697,
    years: "2022–2024",
    note: "Developed new data-driven strategies and solutions for ASML's optical lithography instruments.",
    tag: "Industry Work Experience"
  }
];

/* --------------------- Conferences, talks & posters --------------------------------- */
const CONFERENCES = [
  { id: "c1", kind: "talk", title: "Layers of Understanding", place: "", country: "", lat: null, lng: null, years: "2026", note: "Talk" },
  { id: "c2", kind: "talk", title: "Ariel Open Conference", place: "", country: "", lat: null, lng: null, years: "2026", note: "Talk" },
  { id: "c3", kind: "talk", title: "EPSC — European Planetary Science Congress", place: "", country: "", lat: null, lng: null, years: "2026", note: "Talk" },
  { id: "c4", kind: "talk", title: "Ariel Consortium Meeting", place: "Leiden", country: "Netherlands", lat: 52.155, lng: 4.483, years: "2025", note: "Talk · Local Organizer" },
  { id: "c5", kind: "talk", title: "COSPAR", place: "Busan", country: "South Korea", lat: 35.1796, lng: 129.0756, years: "2024", note: "Talk" },
  { id: "c6", kind: "talk", title: "ExoSLAM — Machine Learning for planetary interiors", place: "Montreal", country: "Canada", lat: 45.5017, lng: -73.5673, years: "2025", note: "Invited talk" },
  { id: "c7", kind: "poster", title: "Exoclimes", place: "", country: "", lat: null, lng: null, years: "2025", note: "Poster" },
  { id: "c8", kind: "poster", title: "Exoplanets V", place: "", country: "", lat: null, lng: null, years: "2024", note: "Poster" },
  { id: "c9", kind: "poster", title: "Diversis Mundi", place: "", country: "", lat: null, lng: null, years: "2018", note: "Poster" },
  { id: "c10", kind: "poster", title: "IX Taller de Ciencias Planetarias", place: "", country: "", lat: null, lng: null, years: "2018", note: "Poster" },
  { id: "c11", kind: "poster", title: "COCOA", place: "", country: "", lat: null, lng: null, years: "2017", note: "Poster" },
  { id: "c12", kind: "poster", title: "LARIM", place: "", country: "", lat: null, lng: null, years: "2016", note: "Poster" },
  { id: "c13", kind: "poster", title: "NAC conference", place: "", country: "", lat: null, lng: null, years: "2024", note: "Best Poster prize" }
];

/* --------------------- Publications ------------------------------------------------ */
const PUBLICATIONS = [
  {
    id: "p1",
    year: "2026",
    authors: "Ramirez, V., Miguel, Y., Howard, S.",
    title: "Reassessing planetary composition: Evidence of rock-dominated envelopes in Uranus and Neptune",
    journal: "Astronomy & Astrophysics",
    link: "https://www.aanda.org/articles/aa/full_html/2026/05/aa59098-26/aa59098-26.html",
    place: "Leiden, The Netherlands",
    lat: 52.155,
    lng: 4.483,
    selected: true
  },
  {
    id: "p2",
    year: "2026",
    authors: "Ramirez, V., Miguel, Y., Edwards, B., Akinsanmi, B., Mercado, D.",
    title: "Identifying deformed exoplanets with JWST and Ariel: A target selection metric for phase curve observations",
    journal: "In review",
    link: "",
    place: "Leiden, The Netherlands",
    lat: 52.155,
    lng: 4.483,
    selected: true
  },
  {
    id: "p4",
    year: "2020",
    authors: "Ramirez, V., Cridland, A. J., Mollière, P.",
    title: "Tracing bulk elemental ratios in exoplanetary atmospheres with TiO chemistry",
    journal: "Astronomy & Astrophysics",
    link: "https://www.aanda.org/articles/aa/abs/2020/09/aa38186-20/aa38186-20.html",
    place: "Leiden, The Netherlands",
    lat: 52.155,
    lng: 4.483,
    selected: true
  },
  {
    id: "p5",
    year: "2020",
    authors: "Wofford, A., Ramirez, V., Lee, J. C., et al.",
    title: "Candidate LBV stars in galaxy NGC 7793 found via HST photometry + MUSE spectroscopy",
    journal: "Monthly Notices of the Royal Astronomical Society",
    link: "https://academic.oup.com/mnras/article/493/2/2410/5721530",
    place: "Ensenada, Mexico",
    lat: 31.8666,
    lng: -116.6022,
    selected: true
  },
  {
    id: "p6",
    year: "2019",
    authors: "Sucerquia, M., Ramirez, V., Alvarado-Montes, J. A., Zuluaga, J. I.",
    title: "Can close-in giant exoplanets retain detectable exomoons?",
    journal: "Monthly Notices of the Royal Astronomical Society",
    link: "https://ieeexplore.ieee.org/document/9114127",
    place: "Medellín, Colombia",
    lat: 6.2442,
    lng: -75.5812,
    selected: true
  },
  {
    id: "p7",
    year: "2017",
    authors: "Sucerquia, M., Alvarado-Montes, J. A., Ramirez, V., Zuluaga, J. I.",
    title: "Anomalous lightcurves of young tilted exorings",
    journal: "Monthly Notices of the Royal Astronomical Society",
    link: "https://academic.oup.com/mnrasl/article/472/1/L120/4259571",
    place: "Medellín, Colombia",
    lat: 6.2442,
    lng: -75.5812,
    selected: true
  }
];

/* --------------------- Awards & honors ---------------------------------------------- */
const AWARDS = [
  { year: "2024", text: "Best Poster prize, NAC conference" },
  { year: "2020–2022", text: "Oort Scholarship, Leiden Observatory (full MSc scholarship)" },
  { year: "2019", text: "Best Undergraduate Astronomy Student, U. de Antioquia" },
  { year: "2019", text: "Full scholarship for a research internship at IA-UNAM" },
  { year: "2013–2018", text: "Dean's List (2013, 2015, 2016, 2018), Universidad de Antioquia" }
];

/* --------------------- Skills -------------------------------------------------------- */
const SKILLS = {
  programming: ["Python (emcee, dynesty, Pandas, SciPy, NumPy, scikit-learn, TensorFlow, Keras)", "MATLAB", "IDL", "Bash"],
  astronomy: ["CEPAM", "VULCAN", "petitRADTRANS", "PandExo", "MESA", "IRAF", "DS9", "REBOUND", "TOPCAT"],
  languages: [
    { name: "Spanish", level: "Native", pct: 100 },
    { name: "English", level: "Advanced", pct: 85 },
    { name: "Italian", level: "Basic", pct: 40 }
  ]
};

/* --------------------- Team / supervised students ------------------------------------ */
const TEAM = {
  current: [
    { name: "Matt Kirwan", role: "MSc student, Leiden University" }
  ],
  alumni: [
    { name: "Deivy Mercado", role: "Summer student, LEAPS program" }
  ]
};
