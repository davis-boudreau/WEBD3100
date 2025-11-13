![alt text](image.png)

---

## 1. Workshop Details

**Title:** Workshop 07–09 – Building a Semantic, Token-Driven, Responsive Header Using Flexbox, clamp(), and ARIA
**Course:** WEBD1000 – Web Development / Web Design Fundamentals
**Case Study:** CORAH – Centre of Rural Aging & Health (shared with WEBD3100)
**Position in Course:** After students have seen basic HTML/CSS and the CORAH Figma header.

---

## 2. Purpose

In this activity, you will take the **CORAH header** from Figma and implement it as a **real, production-style header** using:

* **Design tokens** for colors, typography, and spacing
* **Semantic HTML** (`<header>`, `<nav>`, `<a>`, ARIA attributes)
* **Modern responsive CSS**:

  * Mobile-first
  * Flexbox for layout
  * `clamp()` for fluid typography and logo scaling
  * Figma → CSS mapping for padding and gaps

You will then **publish** your header using **GitHub Pages** and submit the **live URL** to Brightspace.

> Our mission:
> *“What we design in Figma (tokens, components, spacing) can be translated directly into clean, accessible HTML and CSS — and deployed on the web.”*

---

## 3. Learning Objectives (Aligned to Course Outcomes)

By the end of this workshop, you should be able to:

1. **Define and use CSS design tokens** (custom properties) for brand colors, type, and spacing.
2. **Implement a semantic header** with `<header>`, `<nav>`, `<a>`, and appropriate ARIA attributes (`aria-label`, `aria-current`).
3. **Use Flexbox** to align the CORAH logo on the left and navigation on the right in a mobile-first layout.
4. **Apply modern responsive techniques**, including `clamp()` and minimal media queries, to scale typography and assets smoothly.
5. **Publish a static page to GitHub Pages** and provide a live URL for evaluation.

---

## 4. Pre-Activity: Knowledge Check & Setup

### 4.1 Knowledge Check (Quick)

Before you start, you should be able to answer (even roughly):

* What is a **semantic HTML element**? Give two examples.
* What does **Flexbox** help you do with layout?
* What is a **media query**?
* Why is **contrast** important in a header?

(You can use these as a short in-class poll or 3–5 question quiz.)

### 4.2 Setup Checklist

1. Create a local project folder, e.g.:

   ```text
   studentID_WEBD1000_header-workshop07-09/
     index.html
     styles.css
     images/
       corah-brand-logo.svg
       corah-brand-wordmark-logo.svg
   ```

2. Ensure you have:

   * A GitHub account.
   * Git installed (optional but recommended).
   * The two CORAH SVG assets exported from Figma into the `images/` folder.

---

## 5. Activity Steps (Guided Build)

We’ll complete the header in three phases:

1. **HTML** – semantic structure, ARIA, and meaningful class names
2. **Tokens & Base Styles** – colors, type, spacing, `clamp()`
3. **Layout & Responsiveness** – Flexbox, spacing from Figma, media queries

---

### Phase 1 – HTML: Semantic Header & Navigation

Create `index.html` with the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Mobile-first viewport for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CORAH – Header Demo</title>

  <!-- Open Sans from Google Fonts (design system font) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
    rel="stylesheet"
  >

  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!--
    header-section-container:
    Top-level header region (banner landmark).
    We’ll apply tokens, spacing, and background color here.
  -->
  <header class="header-section-container">
    <!--
      header-container:
      Horizontal Flexbox row:
        - logo-container on the left
        - nav-container on the right
    -->
    <div class="header-container">

      <!--
        logo-container:
        Holds CORAH brand logo + wordmark, exported from Figma as SVGs.
      -->
      <div class="logo-container">
        <!-- Brand icon/logo: linked to home -->
        <a href="index.html" class="brand-link" aria-label="CORAH Home">
          <img
            src="images/corah-brand-logo.svg"
            alt=""
            class="corah-brand-logo"
          >
          <!-- alt="" because the brand name is provided in the wordmark -->
        </a>

        <!-- Brand wordmark: CORAH name + tagline -->
        <img
          src="images/corah-brand-wordmark-logo.svg"
          alt="CORAH – Centre of Rural Aging & Health"
          class="corah-brand-wordmark-logo"
        >
      </div>

      <!--
        nav-container:
        Main navigation landmark for the site.
        aria-label="Main" helps screen readers.
      -->
      <nav class="nav-container" aria-label="Main">
        <!--
          Each button-container wraps one nav link.
          Figma’s button padding is applied inside the link (.nav-link).
        -->
        <div class="button-container">
          <a class="nav-link is-active" href="index.html" aria-current="page">
            Home
          </a>
        </div>
        <div class="button-container">
          <a class="nav-link" href="about.html">
            About
          </a>
        </div>
        <div class="button-container">
          <a class="nav-link" href="events.html">
            Events
          </a>
        </div>
        <div class="button-container">
          <a class="nav-link" href="register.html">
            Register
          </a>
        </div>
        <div class="button-container">
          <a class="nav-link" href="profile.html">
            My Profile
          </a>
        </div>
        <div class="button-container">
          <a class="nav-link nav-link--secondary" href="login.html">
            Login
          </a>
        </div>
        <div class="button-container">
          <a class="nav-link nav-link--secondary" href="logout.html">
            Logout
          </a>
        </div>
      </nav>
    </div>

    <!--
      separator-container:
      Holds a decorative line separating header from the next section.
      role="presentation" hides it from screen readers.
    -->
    <div class="separator-container">
      <div class="separator" role="presentation"></div>
    </div>
  </header>

</body>
</html>
```

**Concept check:**

* Why is `<nav>` used instead of a `<div>`?
* Why is `aria-current="page"` applied only to the “Home” link?

---

### Phase 2 – CSS Tokens & Global Styles (with clamp())

Create `styles.css` and start with tokens and base styles.

```css
/* ========== 1. DESIGN TOKENS (colors, type, spacing) ========== */

:root {
  /* Brand color ramp (approximate – from Color Ramp Generator) */
  --brand-50:  #F7EDF9;
  --brand-100: #EAD4F2;
  --brand-200: #D7AEE7;
  --brand-300: #C286DC;
  --brand-400: #A962D0;
  --brand-500: #8F4AC1;
  --brand-600: #7B458F; /* Seed brand color from case study */
  --brand-700: #62346E;
  --brand-800: #49264F;
  --brand-900: #311736;
  --brand-950: #1F0D23;

  /* Neutral ramp for backgrounds and text */
  --neutral-50:  #F9FAFB;
  --neutral-100: #F3F4F6;
  --neutral-200: #E5E7EB;
  --neutral-300: #D1D5DB;
  --neutral-400: #9CA3AF;
  --neutral-500: #6B7280;
  --neutral-600: #4B5563;
  --neutral-700: #374151;
  --neutral-800: #1F2933;
  --neutral-900: #111827;

  /* Typography tokens with clamp() for fluid scaling */
  --font-family-sans: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /*
    Base text (P):
    Min: 1rem (~16px), Max: 1.25rem (~20px)
  */
  --font-size-base: clamp(1rem, 0.4vw + 0.9rem, 1.25rem);

  /*
    H1 heading:
    Min: ~36px, Max: ~59.72px (from your type scale)
  */
  --font-size-h1: clamp(2.25rem, 3vw + 1.5rem, 3.73rem);

  /*
    Small supporting text:
    Min: ~12.8px, Max: ~13.89px
  */
  --font-size-small: clamp(0.8rem, 0.1vw + 0.78rem, 0.87rem);

  --line-height-base: 1.5;
  --line-height-heading: 1.1;

  /* Spacing tokens to match Figma values */
  --space-3:  3px;
  --space-8:  8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-32: 32px;

  /* Semantic tokens – header colors */
  --color-header-bg:               var(--brand-900);
  --color-header-text:             #FFFFFF;
  --color-header-text-muted:       var(--neutral-200);

  --color-header-link-primary:         #FFFFFF;
  --color-header-link-primary-bg:      transparent;
  --color-header-link-primary-bg-hover: var(--brand-600);

  --color-header-link-secondary-bg:      transparent;
  --color-header-link-secondary-border:  rgba(255, 255, 255, 0.4);
  --color-header-link-secondary-text:    var(--neutral-100);
  --color-header-link-secondary-bg-hover: rgba(255, 255, 255, 0.12);

  --color-header-separator:        var(--brand-600);

  /* Focus & border radius tokens */
  --color-focus-ring: #FFFFFF;
  --radius-pill: 999px;
  --radius-sm:   4px;
}

/* ========== 2. GLOBAL RESET & BASE TYPOGRAPHY ========== */

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--neutral-900);
  background-color: var(--neutral-50);
}
```

---

### Phase 3 – Header Layout, Spacing, Flexbox & Responsive Behaviour

Now apply your **exact spacing** and layout rules.

```css
/* ========== 3. HEADER SECTION & LAYOUT (Figma → CSS) ========== */

/*
  header-section-container:
  - Vertical stack: header-container + separator-container.
  - gap = 32px between them.
  - Paddings: top 32, right 32, bottom 8, left 32.
*/
.header-section-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-32);       /* 32px gap between header and separator */

  padding-top: var(--space-32);   /* 32 */
  padding-right: var(--space-32); /* 32 */
  padding-bottom: 8px;            /* 8 */
  padding-left: var(--space-32);  /* 32 */

  background-color: var(--color-header-bg);
  color: var(--color-header-text);
}

/*
  header-container:
  - Flex row: logo left, nav right.
  - gap = 32 between logo-container and nav-container.
  - No internal padding (0).
*/
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: var(--space-32); /* 32px gap */
  padding: 0;           /* all padding = 0 */
}

/*
  logo-container:
  - Flex row for logo + wordmark.
  - gap = 16, padding = 0.
*/
.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: var(--space-16); /* 16px between logo and wordmark */
  padding: 0;
}

/* Brand logo SVG with fluid width */
.corah-brand-logo {
  width: clamp(32px, 2.5vw + 24px, 48px);
  height: auto;
  display: block;
}

/* Brand wordmark SVG with fluid height */
.corah-brand-wordmark-logo {
  height: clamp(20px, 2vw + 12px, 32px);
  width: auto;
  display: block;
}

/*
  nav-container:
  - Flex row for navigation links.
  - gap = 12, padding = 12.
  - overflow-x: auto for small screens (horizontal scroll if needed).
*/
.nav-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: var(--space-12);      /* 12px gap between button-containers */
  padding: var(--space-12);  /* 12px on all sides */

  overflow-x: auto;
}

/*
  button-container:
  - Subtle 3px padding around each link.
*/
.button-container {
  padding: var(--space-3);  /* 3px all around */
  margin: 0;
}

/*
  nav-link (equivalent of Figma "button"):
  - Padding-left/right: 24
  - Padding-top: 8, bottom: 12
  - Rounded pill, no text decoration.
*/
.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding-top: 8px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;

  border-radius: var(--radius-pill);
  border: none;
  text-decoration: none;

  font-size: clamp(0.85rem, 0.3vw + 0.8rem, 1rem);
  font-weight: 600;

  color: var(--color-header-link-primary);
  background-color: var(--color-header-link-primary-bg);

  white-space: nowrap;
}

/* Hover state for primary nav links */
.nav-link:hover {
  background-color: var(--color-header-link-primary-bg-hover);
}

/* Active/current page link (aria-current="page") */
.nav-link.is-active {
  background-color: var(--color-header-link-primary-bg-hover);
  color: var(--color-header-link-primary);
}

/* Secondary nav links (Login / Logout) */
.nav-link--secondary {
  border: 1px solid var(--color-header-link-secondary-border);
  background-color: var(--color-header-link-secondary-bg);
  color: var(--color-header-link-secondary-text);
}

/* Hover state for secondary nav links */
.nav-link--secondary:hover {
  background-color: var(--color-header-link-secondary-bg-hover);
}

/* Focus-visible outline for keyboard navigation (accessibility) */
.nav-link:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/*
  separator-container:
  - No padding (0).
*/
.separator-container {
  padding: 0;
}

/*
  separator:
  - Decorative gradient line under header.
*/
.separator {
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-header-separator),
    transparent
  );
}

/* ========== 4. MEDIA QUERIES (LAYOUT ENHANCEMENT) ========== */

/* Tablet and up (≥ 768px) */
@media (min-width: 768px) {
  .nav-container {
    overflow-x: visible; /* nav should fit without scrolling */
  }
}

/* Desktop and up (≥ 1024px) */
@media (min-width: 1024px) {
  .header-container {
    max-width: 1200px;
    margin-inline: auto; /* center header content */
  }
}
```

---

## 8. Reflection & Discussion

After you’ve built and viewed your header:

* Where do you see **contrast, alignment, proximity, and hierarchy** in your header?
* How did **tokens** (custom properties) make the CSS easier to read or update?
* How does **`clamp()`** change how you think about “fixed” font sizes?
* What would break (or not break) if we added another nav link called “News”?

You can discuss in small groups or write a short reflection paragraph.

---

## 9. Deliverables & Submission (GitHub Pages)

### 9.1 GitHub Repo Requirements

1. Create a new public repository on GitHub with a clear name, for example:
   `studentID_WEBD1000_header-workshop07-09`
   (Replace `studentID` with your actual student ID.)

2. Add your files:

   * `index.html`
   * `styles.css`
   * `images/corah-brand-logo.svg`
   * `images/corah-brand-wordmark-logo.svg`

3. Commit and push your code to GitHub.

### 9.2 Enable GitHub Pages

1. In your GitHub repo, go to **Settings → Pages**.
2. Set **Source** to:

   * Branch: `main` (or `master`)
   * Folder: `/ (root)`
3. Save. GitHub will generate a **Pages URL**, e.g.:

   `https://your-github-username.github.io/studentID_WEBD1000_header-workshop07-09/`

### 9.3 What to Submit

In Brightspace (or your LMS), submit:

1. **GitHub Pages URL** (live site):

   * e.g. `https://your-github-username.github.io/studentID_WEBD1000_header-workshop07-09/`
2. **GitHub Repository URL** (source code):

   * e.g. `https://github.com/your-github-username/studentID_WEBD1000_header-workshop07-09`

Optionally, you can paste a short note (2–3 sentences) about:

* One design principle you focused on
* One thing you learned about tokens or Flexbox

---

## 10. Evaluation / Assessment (Light Rubric)

| Criterion                    | Excellent                                                                       | Satisfactory                                            | Needs Work                                       |
| ---------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------ |
| **Semantics & ARIA**         | Uses `<header>`, `<nav aria-label>`, `<a>` plus `aria-current` correctly.       | Mostly correct; minor issues.                           | Missing or misuses semantic tags / ARIA.         |
| **Tokens & Consistency**     | Color, type, and spacing are implemented via tokens; consistent use.            | Some tokens used; a few hard-coded values.              | Mostly hard-coded, inconsistent.                 |
| **Layout & Responsiveness**  | Logo left, nav right; layout holds at different widths; scroll or wrap handled. | Layout mostly works; minor overlap or scrolling issues. | Layout breaks on small screens or large screens. |
| **Accessibility & Contrast** | Text readable; focus states visible; good contrast.                             | Some contrast/focus issues but overall usable.          | Poor contrast; focus invisible; unclear.         |
| **GitHub Pages Deployment**  | Live link works; repo organized and readable.                                   | Live link works with minor issues.                      | No live link or broken deployment.               |

---
