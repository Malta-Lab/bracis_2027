# BRACIS Website

Official website structure for the **Brazilian Conference on Intelligent Systems (BRACIS)**.

The project was developed with **Astro 5** as a static website. It does not require a database or server-side application runtime.

The architecture was designed to preserve previous conference editions while allowing future organizing committees to create new editions using the same components, page structure and visual system.

---

## 1. Technology

- Astro 5
- TypeScript
- HTML / CSS / JavaScript
- Static site generation
- npm

No database is required.

After the production build, Astro generates static files that can be hosted on GitHub Pages or another static web server.

---

## 2. First-time setup

### Requirements

Install:

- Node.js
- npm
- A code editor such as Visual Studio Code

An active Node.js LTS version compatible with the project is recommended.

### Install the project

After downloading and extracting the project, open the project folder in Visual Studio Code.

Open a terminal in the project root and run:

```bash
npm ci
```

This installs the dependencies defined by `package-lock.json`.

> Do not copy or reuse an old `node_modules` directory. Dependencies should be installed locally with `npm ci`.

### Start the development server

```bash
npm run dev
```

Astro will display a local address, usually similar to:

```text
http://localhost:4321/
```

Open this address in a browser.

When files are changed and saved, the development version normally updates automatically.

---

## 3. Important: source files vs. generated files

All website changes must be made in the **source project**, mainly inside:

```text
src/
public/
```

Do not use the generated `dist/` directory as the source for future website changes.

The production files are generated with:

```bash
npm run build
```

The general workflow is:

```text
Source files
     ↓
Edit and test
     ↓
npm run build
     ↓
dist/
     ↓
Deployment
```

The following directories are generated locally and should not be distributed or committed to Git:

```text
node_modules/
dist/
.astro/
```

They can be recreated when necessary.

---

# Project Architecture

## 4. General website

The website has two levels:

1. The **general BRACIS website**, which provides institutional information and access to conference editions.
2. The **annual edition websites**, such as `/2026/`, which contain the information specific to each conference edition.

Previous editions should remain accessible when a new edition is created.

The general navigation also contains an edition selector.

---

## 5. Edition architecture

The 2026 edition is the reference implementation for future editions.

Main routes:

```text
/2026/
```

Edition homepage containing:

- annual conference banner
- registration/status information
- Call for Papers highlight
- host-city content and carousel
- sponsors/supporters

### Events & Call for Papers

`Events & Call for Papers` is a dropdown menu and does not require a parent landing page.

BRACIS itself is registered as an event in this menu, together with the other events and co-located events.

Example routes:

```text
/2026/events/bracis/
/2026/events/ctdiac/
```

Additional event pages are generated from:

```text
src/data/subevents-2026.ts
```

### Program

`Program` is also a dropdown menu.

Its standard pages are:

```text
/2026/program/general-schedule/
/2026/program/speakers/
/2026/program/challenge/
```

### Other edition pages

```text
/2026/attending/
/2026/organization/
```

---

# Important Project Files

## 6. Edition data

Shared information for the 2026 edition is stored in:

```text
src/data/edition-2026.ts
```

This file contains information such as:

- edition/year
- conference identity
- dates
- city
- venue
- venue address
- annual logo
- visual identity
- registration status
- navigation structure
- edition-specific links

Future editions should have their own equivalent file:

```text
src/data/edition-2027.ts
src/data/edition-2028.ts
...
```

---

## 7. Event and Call for Papers data

Event content is stored in:

```text
src/data/subevents-2026.ts
```

The same data structure is used for BRACIS and the other events listed under `Events & Call for Papers`.

A single dynamic template:

```text
src/pages/2026/events/[slug].astro
```

generates the individual event pages.

This avoids duplicating page markup and keeps the Call for Papers pages visually and structurally consistent.

### Creating an event

The safest method is to duplicate an existing complete event object in:

```text
src/data/subevents-2026.ts
```

and replace its content.

Do not create an incomplete object, because the page template expects specific fields and arrays.

Each event has a unique `slug`.

For example:

```ts
slug: 'bracis'
```

generates:

```text
/2026/events/bracis/
```

A standard event page may include:

- event banner
- acronym
- explanatory subtitle
- date
- location
- About
- Call for Papers
- Topics of Interest
- Submission
- Decision Process
- Publication / Selected Works
- Important Dates
- Event Chairs
- Contact Information

When creating a new event, preserve the complete data structure of an existing working event and replace the content as needed.

---

# Creating a New BRACIS Edition

## 8. Example: creating BRACIS 2027

The recommended workflow is to use the previous edition as the starting point.

### Step 1 — Duplicate the page structure

Duplicate:

```text
src/pages/2026/
```

as:

```text
src/pages/2027/
```

Do not remove the 2026 directory. Previous editions must remain available.

---

### Step 2 — Duplicate the edition data

Duplicate:

```text
src/data/edition-2026.ts
```

as:

```text
src/data/edition-2027.ts
```

---

### Step 3 — Duplicate the event data

Duplicate:

```text
src/data/subevents-2026.ts
```

as:

```text
src/data/subevents-2027.ts
```

---

### Step 4 — Update imports

Pages inside:

```text
src/pages/2027/
```

must import the 2027 data files instead of the 2026 files.

Check all copied pages for references to:

```text
edition-2026
subevents-2026
```

and update them accordingly.

---

### Step 5 — Update the edition information

In:

```text
src/data/edition-2027.ts
```

replace the previous edition's information, including:

- year
- edition number
- conference dates
- host city
- venue
- venue address
- map information
- annual logo
- registration status
- navigation URLs
- accent color
- banner gradient colors

Review all URLs carefully and replace `/2026/` with `/2027/` where appropriate.

---

### Step 6 — Create the edition asset directory

Create:

```text
public/assets/2027/
```

Use it for the new edition's:

- annual logo
- host-city photographs
- venue photograph
- speaker portraits
- event-chair portraits
- organizer portraits
- sponsor/supporter logos

Do not overwrite assets from previous editions.

---

### Step 7 — Update Events & Call for Papers

Edit:

```text
src/data/subevents-2027.ts
```

Keep only the events applicable to the new edition and update their complete content.

BRACIS should have its own event/Call for Papers entry.

Add or remove co-located events as required.

---

### Step 8 — Update Program

Review:

```text
General Schedule
Speakers
Challenge
```

If the edition does not have a Challenge, remove the corresponding child from the `nav` configuration in the edition data.

Also update the relevant page content.

---

### Step 9 — Update Attending

Review and replace:

- venue
- venue image
- venue address
- Google Maps location
- venue description
- Getting to the City
- Getting to the Venue
- Leaving the Venue
- accommodation
- nearby dining
- hospitals and emergency information

---

### Step 10 — Update Organization

Replace organizer information, roles, institutions and portraits for the new edition.

---

### Step 11 — Update the annual homepage

Review:

- conference banner
- registration/status information
- Call for Papers CTA
- Call for Papers link
- host-city section
- host-city carousel
- sponsors and supporters

The Call for Papers CTA on the homepage should link to the BRACIS event page for the corresponding edition.

For example:

```text
/2027/events/bracis/
```

The complete Call for Papers information should remain on the event page rather than being duplicated on the homepage.

---

### Step 12 — Add the edition to the general website

Add the new year to the edition selector in:

```text
src/layouts/GlobalLayout.astro
```

Also update the edition information displayed on the general BRACIS homepage where applicable.

---

### Step 13 — Search for references to the previous year

Before considering the new edition complete, search the project for:

```text
2026
```

Review every result inside the new 2027 files.

Some references to 2026 are expected because the previous edition remains part of the website.

The goal is to ensure that the **new edition files** do not accidentally point to old content.

Also search for placeholder content before publication.

---

# Edition Visual Identity

## 9. Annual banner

The standard annual banner intentionally does not use a background photograph.

Each edition can personalize a two-color gradient while preserving the same layout and hierarchy.

In:

```text
src/data/edition-AAAA.ts
```

the relevant variables are:

```ts
accentColor: '#5f6368',
heroGradientStart: '#202124',
heroGradientEnd: '#6b7075',
```

Where:

- `accentColor` controls CTAs, active states and small interface highlights.
- `heroGradientStart` is the first banner color.
- `heroGradientEnd` is the second banner color.

The default design uses a neutral gray gradient.

Prefer medium or dark gradient colors so that white text maintains adequate contrast.

Keep the annual banner to two main gradient colors for consistency between editions.

The annual edition logo is displayed inside a light glassmorphism container to maintain legibility over different gradients.

Do not change the website's shared typography for individual editions.

---

# Content and Interface Standards

## 10. Heading hierarchy

Maintain the same hierarchy throughout the website.

### H1

The page title.

Examples:

```text
Attending
Organization
General Schedule
BRACIS
CTDIAC
```

Use only one content H1 per page.

On internal edition pages, the annual conference name displayed in the shared edition banner is intentionally not another H1.

### H2

Main content sections.

Examples:

```text
Venue
Important Dates
Event Chairs
Accommodation
```

Standard section headings use the edition accent-color bar rather than a repeated icon.

### H3

Cards and subsections.

Examples:

```text
By Plane
Hotel name
Organizer name
```

### Eyebrows

Small labels such as:

```text
PLAN YOUR TRIP
CALL FOR PAPERS
```

should be implemented as labels (`p` or `span`), not as headings.

---

## 11. Alignment

All regular page sections should use the same:

```css
.container
```

grid so that their left and right edges remain aligned, even when section backgrounds change.

Do not make the entire section container narrower because a section contains little text.

For comfortable reading, constrain only the text using classes such as:

```css
.prose
.lead
```

or another text-specific width rule.

---

## 12. Icons

The interface uses a lightweight local SVG icon library:

```text
src/components/Icon.astro
```

Use icons selectively.

Recommended uses include:

- plane
- bus
- taxi / ride-hailing
- car rental
- hotel
- dining
- hospital
- date/location metadata
- external-link actions

Do not add icons to standard H2 section titles. The accent-color bar already communicates this hierarchy.

Avoid decorative repetition.

Icons should not replace visible text when the meaning needs to be understood by the user.

---

# Attending Page

## 13. Standard structure

The standard Attending page contains:

### Venue

- venue photograph
- embedded Google Map
- venue name
- address
- description

### Getting to the City

- By Plane
- By Bus

### Getting to the Venue

- Ride-hailing / Taxi Apps
- Bus
- Car Rental

### Leaving the Venue

- Ride-hailing / Taxi Apps
- Bus

### Additional sections

- Accommodation
- Nearby Dining
- Hospitals & Emergencies

Venue information is primarily configured in:

```text
src/data/edition-AAAA.ts
```

The current Google Maps implementation uses a simple map embed and does not require an API key.

---

# Image Guidelines

## 14. Recommended image specifications

### Annual logo

Preferred:

```text
SVG
```

Alternative:

```text
Transparent PNG
1600 × 700 px
minimum width: 1200 px
ideally ≤ 700 KB
```

### Host-city carousel

```text
WebP or JPG
1600 × 1000 px
3–6 photographs
ideally ≤ 350 KB each
```

### Venue photograph

```text
WebP or JPG
1600 × 1000 px
ideally ≤ 350 KB
```

### Speaker portrait

```text
WebP or JPG
800 × 800 px
ideally ≤ 250 KB
```

### Event chair portrait

```text
WebP or JPG
600 × 600 px
ideally ≤ 180 KB
```

### Organizer portrait

```text
WebP or JPG
600 × 600 px
ideally ≤ 180 KB
```

### Sponsor logo

Preferred:

```text
SVG
```

Alternative:

```text
Transparent PNG
approximately 800 × 400 px
ideally ≤ 250 KB
```

Optimize images before adding them to the repository whenever possible.

---

# Testing

## 15. Development test

Start the local development environment with:

```bash
npm run dev
```

Review the website in the browser.

Test at least:

- general homepage
- edition homepage
- global navigation
- edition navigation
- edition selector
- Events & Call for Papers dropdown
- BRACIS Call for Papers page
- other event pages
- Program pages
- Attending
- Organization
- links
- images
- mobile/responsive layout

---

## 16. Production test

Before publishing changes, run:

```bash
npm run build
```

The command must finish without errors.

Then run:

```bash
npm run preview
```

Review the production build locally.

Do not publish a new version if the production build fails.

---

# Version Control and GitHub

## 17. Recommended repository workflow

The project should eventually be stored in an institutional BRACIS/SBC GitHub repository.

The recommended primary branch is:

```text
main
```

`main` should represent the approved production version.

For significant changes, create a separate working branch.

Examples:

```text
edition-2027
update-speakers
update-sponsors
fix-mobile-navigation
```

Recommended workflow:

```text
main
  ↓
create working branch
  ↓
make changes
  ↓
test
  ↓
commit
  ↓
push
  ↓
open Pull Request
  ↓
review
  ↓
merge into main
```

Avoid having multiple people edit independent ZIP copies of the project after the institutional repository has been created.

Once the GitHub repository becomes the official source, collaborators should clone or pull from that repository before starting work.

---

## 18. Files that should not be committed

The repository should not contain generated/local directories such as:

```text
node_modules/
dist/
.astro/
```

These should be covered by `.gitignore`.

Keep the following files versioned:

```text
package.json
package-lock.json
```

Do not commit passwords, API keys, access tokens or other credentials.

---

# Deployment

## 19. Production build

Generate the deployable static website with:

```bash
npm run build
```

Astro generates the production files in:

```text
dist/
```

These generated files can be deployed to a compatible static hosting environment.

`dist/` should not become the editable source of the project.

---

## 20. GitHub Pages

The project includes a GitHub Actions workflow under:

```text
.github/workflows/
```

for GitHub Pages deployment. It runs on every push to `main` (or manually via `workflow_dispatch`).

The site is currently deployed as a GitHub Pages project site:

```text
https://malta-lab.github.io/bracis_2027/
```

so `astro.config.mjs` uses:

```js
site: 'https://malta-lab.github.io',
base: '/bracis_2027',
```

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

### Internal paths and `withBase()`

Because the site is served from a subdirectory, every internal link and asset path must go through the helper in:

```text
src/utils/paths.ts
```

Example:

```astro
<a href={withBase(`/${edition.year}/attending/`)}>Attending</a>
<img src={withBase(edition.editionLogo)} alt="..." />
```

Data files (`src/data/edition-AAAA.ts`, `src/data/subevents-AAAA.ts`) keep plain paths such as `/2027/attending/`; the helper is applied where they are rendered. External URLs (`https:`, `mailto:`) and in-page anchors (`#...`) are returned unchanged.

Do not write `href="/..."` or `src="/..."` directly: those paths ignore `base` and break under the subdirectory.

### Moving to a root domain

To publish at the root of a domain (for example the official `https://bracis.sbc.org.br/`), change `site` to that domain, set `base: '/'`, and add `public/CNAME` containing the domain. No page changes are required.

After deployment, test all navigation, images and edition routes in the production URL.

---

# Project Handoff

## 21. Receiving this project as a ZIP

If this project was received as a ZIP:

1. Extract the complete project directory.
2. Open the extracted directory in Visual Studio Code.
3. Make sure Node.js and npm are installed.
4. Open a terminal in the project root.
5. Run:

```bash
npm ci
```

6. Start the website:

```bash
npm run dev
```

7. Follow the instructions in this README when creating or modifying an edition.
8. Before publishing, run:

```bash
npm run build
npm run preview
```

The ZIP intentionally does not need to include:

```text
node_modules/
dist/
.astro/
```

These directories are generated locally.

---

## 22. Recommended handoff practice

Until the project is placed in an institutional Git repository, keep one clearly identified master copy of the source project.

Avoid having different organizers independently modify separate copies of the ZIP, as those versions may become difficult to reconcile later.

As soon as an institutional repository is available, use it as the single source of truth for future development.

---

## 23. Maintenance checklist

Before publishing a new edition:

- [ ] Create the new edition without deleting the previous edition.
- [ ] Update annual data and navigation.
- [ ] Update all Events & Call for Papers.
- [ ] Verify the BRACIS Call for Papers page.
- [ ] Update Program.
- [ ] Update Attending information.
- [ ] Update Organization.
- [ ] Replace annual images and logos.
- [ ] Update sponsors/supporters.
- [ ] Add the edition to the global edition selector.
- [ ] Update the general homepage where necessary.
- [ ] Search the new edition files for references to the previous year.
- [ ] Remove placeholder content.
- [ ] Test desktop and mobile layouts.
- [ ] Test internal and external links.
- [ ] Run `npm run build`.
- [ ] Run `npm run preview`.
- [ ] Review the production version before deployment.

---

## 24. General rule for future editions

When creating a new edition, prefer **updating data and reusing the existing templates** rather than creating new page structures unnecessarily.

Shared components and layouts should only be changed when the change is intended to affect the website system as a whole.

This helps preserve visual consistency, reduce maintenance effort and keep previous BRACIS editions functional.