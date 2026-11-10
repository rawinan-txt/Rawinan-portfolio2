# Rawinan Bunsai — Portfolio

**Live site: [https://rawinan-txt.github.io/Rawinan-portfolio2/](https://rawinan-txt.github.io/Rawinan-portfolio2/)**

Personal portfolio of Rawinan Bunsai, a second-year ICT student at Mahidol University, looking for an internship in QA, Business Analysis, Project Management or Software Engineering.

## What's on the site

- About, internship goals, skills, education and contact
- Three projects with detail views:
  - [Student Life Manager](https://github.com/rawinan-txt/student-life-manager) (individual)
  - [Starbucks Database Systems](https://github.com/rawinan-txt/Starbucks-Database-Systems) (team)
  - [CondoFlow](https://github.com/rawinan-txt/CondoFlow) (team)
- Light and dark themes with a toggle (the choice is remembered in the browser)
- Responsive layout, with reduced-motion support

## Project structure

```text
├── index.html        page markup
├── css/
│   └── styles.css    all styles, light and dark theme tokens
├── js/
│   ├── data.js       profile, skills and project content (edit text here)
│   └── main.js       rendering, project dialog, navigation and theme toggle
├── assets/
│   ├── eerd-improved.png        diagram shown in the Starbucks project
│   └── condoflow-reports.png    screen shown in the CondoFlow project
└── .nojekyll
```

## Built with

Plain HTML, CSS and JavaScript. There is no build step and no framework. Fonts are loaded from Google Fonts.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Adding a project

Add an entry to the `PROJECTS` array in `js/data.js`. The cards and the detail dialog are generated from it.

## Links

- GitHub: https://github.com/rawinan-txt
- LinkedIn: https://www.linkedin.com/in/rawinan-bunsai-613912443
