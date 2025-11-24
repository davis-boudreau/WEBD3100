![alt text](image.png)

---

# 🎨 **MP3A — CORAH Homepage HTML Prototype**

### *Header – Hero – Footer Implementation Using Semantic HTML, Tokens & Flexbox*

---

## **Overview (What You’re Building)**

You’ll convert your CORAH homepage mock-up into a working, responsive HTML + CSS page.
This is your first full translation from **Figma → Code**, proving that you can combine visual design, semantic markup, and responsive behavior.

---

## **Purpose (Why It Matters)**

The homepage establishes the foundation for the entire CORAH site.
Everything you build here — the header, hero, and footer — will be reused on the About and Events pages.
Strong semantic structure and consistent tokens now will save you time later.

---

## **Learning Outcomes Addressed**

| #  | Outcome                                         |
| :- | :---------------------------------------------- |
| 1  | Apply design principles to content presentation |
| 2  | Design mock-ups of user interfaces              |
| 3  | Implement web applications based on mock-ups    |

---

## **Assignment Description (What to Do)**

### Header

Use the established CORAH object model:

```
<header class="header-section-container">
  <div class="header-container">
   <div class="logo-container">
     <img src="images/corah-brand-logo.svg" alt="Corah logo">
     <img src="images/corah-brand-wordmark-logo.svg" alt="Centre for Rural Aging and Health">
   </div>
   <nav class="nav-container" aria-label="Main">
     <a href="index.html" aria-current="page">Home</a>
     <a href="about.html">About</a>
     <a href="events.html">Events</a>
     <a href="#">Register</a>
     <a href="#">My Profile</a>
     <a href="#">Login</a>
   </nav>
  </div>
  <hr class="separator">
</header>
```

### Hero Section

Create a **hero-section-container** including headline, short paragraph, CTA button, and optional hero image.
Apply tokens and `clamp()` to scale padding and text fluidly.

### Footer

Include contact / utility links and a copyright line inside a `<footer>` landmark.

---

## **Tasks / Instructions (How to Build It)**

1. **Set Up Your Project**

   * Folder name: `studentID_WEBD1000_MP3A_CORAH_Homepage`
   * Files: `index.html`, `styles.css`, `/images/`

2. **Link Fonts & Styles**

   * Add Open Sans via Google Fonts
   * Link `styles.css` in `<head>`

3. **Define Design Tokens in :root**

   * Brand ramp (brand-50 → brand-950, seed #7B458F)
   * Typography + spacing tokens with `clamp()`

4. **Use Flexbox** for header layout

   * `display:flex; justify-content:space-between; align-items:center;`
   * Understand `gap`, `flex-basis`, and `flex-wrap`

5. **Add ARIA and Accessibility Attributes**

   * `aria-label="Main"` for nav
   * `aria-current="page"` on Home
   * Visible focus styles

6. **Implement Responsive Scaling**

   * Start mobile-first
   * Use `clamp()` to handle type/spacing fluidly
   * Add media queries for ≥ 768 px and ≥ 1024 px as needed

7. **Validate & Deploy**

   * Run HTML/CSS validator
   * Push to GitHub and enable Pages

---

## **Deliverables (What to Submit)**

1. GitHub Pages URL (live homepage)
2. GitHub Repo link
3. Working `index.html` + `styles.css` with responsive layout

---

## **Rubric (How You’ll Be Graded)**

| Criterion          | Excellent                                                           | Proficient        | Developing             | Needs Improvement  |
| :----------------- | :------------------------------------------------------------------ | :---------------- | :--------------------- | :----------------- |
| Semantic Structure | Proper use of header/nav/main/footer; clear headings; ARIA accurate | Minor issues      | Some semantic errors   | Structure unclear  |
| Design Token Use   | All colors, fonts, spacing from tokens                              | Mostly tokenized  | Mixed                  | Hard-coded values  |
| Responsiveness     | Fluid layout with `clamp()`                                         | Mostly responsive | Breakpoints need work  | Not responsive     |
| Accessibility      | Visible focus states, contrast OK                                   | Minor issues      | Some missing focus/alt | Poor accessibility |
| Code Quality       | Clean and readable                                                  | Minor issues      | Some redundant code    | Messy code         |

---

## **Resources**

* CORAH Figma design system
* Workshop 6–9 reference code
* HTML/CSS Validators
* GitHub Pages Guide

---

# 🟣 **MP3B — CORAH Multi-Section About Page Prototype**

### *Extending the Site with Structured Content & Responsive Layout*

---

## **Overview (What You’re Building)**

You’ll create `about.html` to tell CORAH’s story — who they are, what they do, and why it matters — using semantic HTML, consistent tokens, and responsive section layouts.

---

## **Purpose (Why It Matters)**

A professional About page demonstrates information hierarchy and content design skills.
You’ll practice structuring long-form text and using multi-column layouts that scale gracefully.

---

## **Learning Outcomes Addressed**

| #  | Outcome                                         |
| :- | :---------------------------------------------- |
| 1  | Apply design principles to content presentation |
| 2  | Design mock-ups based on specifications         |
| 3  | Implement web applications based on mock-ups    |

---

## **Assignment Description (What to Do)**

### Required Sections

1. Intro / Overview
2. Mission & Vision
3. Our Story (brief timeline or narrative)
4. Programs & Focus Areas (cards or columns)
5. Team Section (list or cards with roles)
   *(Optional Values or Impact section)*

Each section must use semantic containers and headings.

---

## **Tasks / Instructions (How to Build It)**

1. Create `about.html` alongside `index.html`.
2. Reuse header and footer from MP3A for consistency.
3. Add `<main>` containing five distinct `<section>` blocks.
4. Structure each with `<h2>`/`<h3>` and paragraphs or cards.
5. Apply design tokens for color, spacing, type.
6. Use Grid or Flexbox for multi-column layouts at ≥ 768 px.
7. Use `clamp()` to scale padding and headings.
8. Ensure links and focus states are accessible.

Example:

```html
<section class="about-programs-section">
 <h2>Programs & Focus Areas</h2>
 <div class="programs-grid">
   <article class="program-card">
     <h3>Community Outreach</h3>
     <p>Helping connect rural seniors through events and volunteering.</p>
   </article>
 </div>
</section>
```

---

## **Deliverables (What to Submit)**

1. GitHub Pages URL (`…/about.html`)
2. GitHub Repo link
3. Functional About page with 5 sections + responsive layout

---

## **Rubric (How You’ll Be Graded)**

| Criterion          | Excellent                      | Proficient        | Developing             | Needs Improvement    |
| :----------------- | :----------------------------- | :---------------- | :--------------------- | :------------------- |
| Content Structure  | Logical, semantic, accessible  | Minor issues      | Some missing semantics | Disorganized         |
| Design Consistency | Tokens match MP3A              | Mostly consistent | Some hard-coding       | No token use         |
| Responsiveness     | Smooth scaling + columns       | Mostly OK         | Minor breakpoints      | Broken layout        |
| Accessibility      | Good headings, focus, contrast | Minor issues      | Some problems          | No attention to a11y |
| Code Quality       | Clean + commented              | Mostly clean      | Some redundant         | Messy                |

---

## **Resources**

* MP3A header/footer code
* CORAH design system tokens
* HTML sectioning guide
* CSS Grid/Flexbox reference
Submission Checklist**
