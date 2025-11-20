![alt text](image.png)

---

## 1. Assignment Details

* **Course:** WEBD1000 – Web Development / Web Design Fundamentals
* **Mini-Project:** MP3 – Implementation
* **Assignment:** MP3B – Multi-Section About Page Prototype
* **Case Study:** CORAH – Centre of Rural Aging & Health
* **Type:** Individual
* **Suggested Weight:** 10–15% (as part of MP3)
* **Estimated Time:** 8–12 hours
* **Due Date:** End of Week 10 (or as specified by instructor)

**Required project folder naming:**

* Folder / repo name:
  `studentID_WEBD1000_MP3B_CORAH_About`

**Key files:**

* `about.html` (About page)
* `styles.css` (shared with MP3A, extended)
* `images/` (team photos / icons / illustrations as needed)

---

## 2. Overview / Purpose / Objectives

In **MP3A**, you implemented the **CORAH homepage** (Header–Hero–Footer) using semantic HTML, design tokens, Flexbox, and fluid scaling with `clamp()`.

In **MP3B**, you will:

* Extend your site with a **multi-section About page** for CORAH.
* Reuse the **shared header and footer** from MP3A for consistency.
* Design and implement **clear, scannable content sections** (who they are, what they do, why it matters).
* Use advanced layout techniques (multi-column, cards, responsive sections) while preserving **semantic structure and accessibility**.

**Purpose:**

To demonstrate how a design system and component library scale beyond a single page, and how content-heavy pages can be made readable, accessible, and responsive.

**Objectives:**

You will:

* Organize CORAH’s story into **multiple content sections**.
* Implement these sections using **semantic HTML** and **responsive CSS**.
* Apply **design principles** (contrast, hierarchy, proximity) to content-heavy layouts.
* Maintain visual + code consistency with MP3A using the same **tokens, typography, and spacing system**.

---

## 3. Learning Outcomes Addressed

| LO      | Description                                                                          |
| ------- | ------------------------------------------------------------------------------------ |
| **LO1** | Apply design principles to web design fundamentals in terms of content presentation. |
| **LO2** | Design mock-ups of user interfaces based on requirements and specifications.         |
| **LO3** | Implement web applications based on design mock-ups.                                 |

MP3B strongly reinforces **LO1** (content presentation and structure) and **LO3** (implementation), and leverages your mockups from MP2.

---

## 4. Assignment Description / Use Case

### Scenario

CORAH needs an **About** page that:

* Tells visitors **who they are**, **what they do**, and **why it matters**.
* Highlights their **mission, story, team, and values**.
* Is **readable and scannable** on mobile, tablet, and desktop devices.
* Uses the **same design system and header/footer** as the homepage for a consistent experience.

You will implement a **multi-section About page** using the CORAH design system and your MP2 mockups (or the instructor-provided About page mockup, if applicable).

---

## 5. Tasks / Instructions

### Step 1 – Project & File Structure

You may extend the repo you created in MP3A or create a new one. Recommended:

1. In your existing MP3A project or new folder:

   ```text
   studentID_WEBD1000_MP3B_CORAH_About/
     index.html        (homepage from MP3A, unchanged or slightly improved)
     about.html        (new About page for MP3B)
     styles.css        (shared styles)
     images/           (any shared or new images)
   ```

2. Reuse the **header and footer** from MP3A to ensure consistent navigation and branding.

---

### Step 2 – Plan the About Page Content Structure

Your **About page** must include at *least* the following sections:

1. **Intro / Overview Section**

   * A short summary of CORAH (who they are, where they’re located, who they serve).
   * Clear heading (e.g., “About CORAH” or “Who We Are”).

2. **Mission & Vision Section**

   * Statements summarizing CORAH’s mission and future vision.
   * Presented with clear headings, e.g., “Our Mission”, “Our Vision”.

3. **Our Story / History Section**

   * A brief narrative about **why CORAH was started** and its impact.
   * Could be a timeline, milestones, or a story-styled layout.

4. **Programs / Focus Areas Section**

   * Cards or rows explaining CORAH’s main programs or focus areas (e.g., community outreach, research, volunteer programs, events, education).
   * Each item has a heading, short description, and optional icon.

5. **Team / People Section**

   * A small layout introducing key roles (not necessarily real people).
   * At minimum, 3–4 “roles” or sample team positions (e.g., Executive Director, Community Coordinator, Research Lead, Volunteer Coordinator).
   * Each entry should have a role title and short description.

Optionally, you may also include:

* **Values Section** (e.g., dignity, inclusion, community, health).
* **Impact Stats Section** (e.g., “Serving 500+ seniors in rural communities”).

**Requirement:**
Sections must be structured with **semantic headings and containers**, NOT just `<div>`s without meaning. Think: `<section>`, `<article>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, etc.

---

### Step 3 – Implement the HTML Structure in `about.html`

1. Start with a basic HTML skeleton:

   * `<!DOCTYPE html>`
   * `<html lang="en">`
   * `<head>` with same `<meta>`, title (“CORAH – About”), Google Fonts, and stylesheet link as `index.html`.

2. In `<body>`:

   * Include the **same header** markup from `index.html` (MP3A).

   * Implement a `main` region, e.g.:

     ```html
     <main id="main-content" class="about-main">
       <!-- Intro Section -->
       <!-- Mission & Vision -->
       <!-- Our Story -->
       <!-- Programs / Focus Areas -->
       <!-- Team -->
     </main>
     ```

   * Include the **same footer** markup from MP3A.

3. Each main section should use `<section>` with descriptive headings:

   ```html
   <section class="about-intro-section">
     <h1>About CORAH</h1>
     <p>Short paragraph describing CORAH...</p>
   </section>

   <section class="about-mission-section">
     <h2>Our Mission</h2>
     <p>Mission content here...</p>
     <h2>Our Vision</h2>
     <p>Vision content here...</p>
   </section>

   <section class="about-story-section">
     <h2>Our Story</h2>
     <!-- Story, timeline, or milestones -->
   </section>

   <section class="about-programs-section">
     <h2>Programs & Focus Areas</h2>
     <div class="programs-grid">
       <article class="program-card">
         <h3>Community Outreach</h3>
         <p>Short description...</p>
       </article>
       <!-- more cards -->
     </div>
   </section>

   <section class="about-team-section">
     <h2>Our Team</h2>
     <div class="team-grid">
       <article class="team-card">
         <h3>Executive Director</h3>
         <p>Role summary...</p>
       </article>
       <!-- more team cards -->
     </div>
   </section>
   ```

4. Consider including a **skip link** near the top of the page:

   ```html
   <a class="skip-link" href="#main-content">Skip to main content</a>
   ```

   (Styled visually in CSS.)

---

### Step 4 – Apply the CORAH Design System (Tokens + clamp)

In `styles.css`:

1. Reuse the existing **tokens** from MP3A:

   * Color ramp (`--brand-*`, `--neutral-*`)
   * Typography tokens (`--font-size-base`, `--font-size-h1`, `--font-size-small`, etc.)
   * Spacing tokens (e.g., `--space-8`, `--space-12`, `--space-16`, `--space-32`)
   * Fluid versions for padding and margin using `clamp()` as needed

2. For the About page, define **semantic tokens** if needed:

   ```css
   :root {
     --color-about-bg: var(--neutral-50);
     --color-about-section-bg: #FFFFFF;
     --color-about-heading: var(--neutral-900);
     --color-about-text: var(--neutral-800);
   }
   ```

3. Style each section with **good vertical rhythm**:

   * Use `clamp()` for section padding, e.g.:

     ```css
     .about-main {
       padding-inline: clamp(1rem, 5vw, 3rem);
       padding-block: clamp(1.5rem, 4vw, 3rem);
     }

     .about-main section {
       margin-bottom: clamp(2rem, 5vw, 4rem);
     }
     ```

   * Ensure headings and paragraphs use the shared font tokens and maintain consistent hierarchy.

---

### Step 5 – Layout & Responsive Design

Implement responsive layouts:

1. **Intro, Mission, Story Sections:**

   * Mobile: single column, full-width text.
   * Larger screens: you may use a two-column layout for mission/vision, or keep them stacked for clarity.

2. **Programs / Focus Areas Section:**

   * Implement as **cards** in a flex or grid layout:

     ```css
     .programs-grid {
       display: grid;
       grid-template-columns: 1fr;
       gap: clamp(1rem, 2vw, 2rem);
     }

     @media (min-width: 768px) {
       .programs-grid {
         grid-template-columns: repeat(2, 1fr);
       }
     }

     @media (min-width: 1024px) {
       .programs-grid {
         grid-template-columns: repeat(3, 1fr);
       }
     }
     ```

3. **Team Section:**

   * Use a similar grid or Flexbox layout.
   * Ensure cards resize and reflow at different viewport sizes.

4. **Use `clamp()` for spacing and titles where appropriate** to keep everything fluid.

---

### Step 6 – Accessibility & Semantics

Ensure:

* Sections use **clear headings** (`<h1>` for page title, then `<h2>` / `<h3>`).

* The About page has **one H1**, usually “About CORAH.”

* Links have descriptive text (no bare “Click here”).

* Enough color contrast between:

  * Section backgrounds vs text
  * Links vs surrounding text

* Focus styles are visible for all interactive elements:

  ```css
  a:focus-visible {
    outline: 2px solid var(--brand-600);
    outline-offset: 2px;
  }
  ```

---

### Step 7 – Integration With Navigation & Testing

1. Ensure the header nav (from MP3A) is updated so:

   * On `index.html`, “Home” has `aria-current="page"`.
   * On `about.html`, “About” has `aria-current="page"` instead.

2. Test:

   * Clicking “About” in the nav goes to `about.html`.
   * Clicking “Home” goes back to `index.html`.

3. Test responsiveness:

   * Use browser dev tools to check small, medium, and large viewports.
   * Readability of text, spacing, and card layout at each size.

---

### Step 8 – Deployment (GitHub Pages)

If using the same repo as MP3A:

* Confirm that both `index.html` and `about.html` are in the root of the repo.
* Your existing GitHub Pages URL will now serve the About page at:

  * `https://username.github.io/studentID_WEBD1000_MP3A_CORAH_Homepage/about.html`
    *(or the equivalent repo name if you split MP3A/MP3B)*

If using a new repo named `studentID_WEBD1000_MP3B_CORAH_About`:

* Enable GitHub Pages as before (root folder).
* Verify that the About page is accessible from the live URL.

---

## 6. Deliverables

Submit in Brightspace:

1. **GitHub Pages Live URL**

   * Must link directly to the CORAH site root (where users can click into About).
   * Example:
     `https://username.github.io/studentID_WEBD1000_MP3B_CORAH_About/`

2. **GitHub Repository URL**

   * Example:
     `https://github.com/username/studentID_WEBD1000_MP3B_CORAH_About`

3. **Functional About Page** (`about.html`)

   * Accessible via navigation from the homepage.

(Optional short note):

> 2–3 sentences on what you focused on for the About page (e.g., section hierarchy, readability, or card layout).

---

## 7. Assessment & Rubric

| Criterion                                 | Excellent (A)                                                                                                          | Proficient (B)                                            | Developing (C)                                          | Needs Improvement (D/F)                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| **Content Structure & Semantics** (20%)   | Clear multi-section About page; semantic use of `<main>`, `<section>`, `<article>`, headings; strong hierarchy.        | Mostly well-structured; minor semantic or heading issues. | Sections present but structure is weak or inconsistent. | Content is unstructured; poor use of headings and semantics. |
| **Design Principles & Readability** (20%) | Strong hierarchy, spacing, and contrast; sections easily scanned; visual design supports content.                      | Generally readable; some uneven spacing or hierarchy.     | Some clutter or readability issues.                     | Hard to read; sections blur together.                        |
| **Use of Design System & Tokens** (20%)   | Consistent use of CORAH tokens (color, type, spacing) across About page; aligns with MP3A.                             | Tokens mostly used; minor hard-coded color/spacing.       | Some token use; many hard-coded values.                 | No meaningful use of tokens; inconsistent style.             |
| **Responsive Layout** (20%)               | About page adapts smoothly from mobile to desktop; cards and sections rearrange cleanly; uses Grid/Flex appropriately. | Responsive with minor layout issues.                      | Responsive in some cases, but breaks at common sizes.   | Non-responsive or severely broken at multiple viewports.     |
| **Accessibility & Interaction** (10%)     | Good contrast; clear focus state; ARIA and landmarks used properly; keyboard navigation works.                         | Mostly accessible; minor issues.                          | Some accessibility concerns.                            | Major accessibility issues ignored.                          |
| **Code Quality & Deployment** (10%)       | Clean HTML/CSS; consistent naming; GitHub Pages deployment works; URLs correctly submitted.                            | Mostly clean code; minor deployment or structure issues.  | Meets minimum; some messy code or partial deployment.   | Code incomplete, unreadable, or no working deployment.       |

---

## 8. Resources / Equipment

* CORAH Figma files (including About page references, if provided).
* Your MP2 mockups (About page design).
* MP3A project (header/footer implementation + tokens).
* VS Code (or other editor), Git, GitHub, and browser DevTools.

Optional:

* Online contrast checker.
* HTML/CSS validator.

---

## 9. Academic Policies

* Your About page must be your own work, though you can reuse your own MP2 assets and class examples.
* Discussing ideas and troubleshooting with peers is allowed; copying code is not.
* Plagiarism or code lifting from other students or online sources without attribution is a violation of NSCC policy.

---

## 10. Copyright Notice

© 2025 Nova Scotia Community College – School of Technology & Environment.
The CORAH case study is for educational use only and may not be used commercially.
