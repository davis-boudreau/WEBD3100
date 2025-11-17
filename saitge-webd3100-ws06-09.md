![alt text](image.png)

---

## 1. Activity Title & Context

**Title:** Workshop 06–09 – Building a Fluid, Responsive CORAH Header (Semantic HTML, Tokens, Flexbox, `clamp()`)
**Course:** WEBD1000 / WEBD3100 (shared CORAH case study)
**Case Study:** CORAH – Centre of Rural Aging & Health
**Scope:** Combines former Workshops 6, 7, 8, 9 into a single guided build.

We will:

1. Build the **semantic CORAH header** (logo + wordmark + nav + separator).
2. Create a **token-based CSS system** (colors, typography, spacing).
3. Implement **fluid font-size and padding** using `clamp()`.
4. Make the header **responsive** with Flexbox and minimal media queries.
5. Add basic **accessibility** features (ARIA, focus states).

---

## 2. Purpose / Big Idea

> *“What you design in Figma — tokens, components, spacing — can be translated into clean, accessible, fluid HTML/CSS that works on any device.”*

This workshop bridges **design** (WEBD3100) and **implementation** (WEBD1000) around a **single component**: the CORAH header.

Students will:

* See **how Figma’s color ramp, type scale, and auto layout → CSS tokens, `clamp()`, Flexbox**.
* Practice building a **fluid, responsive header** that feels professional, not “fixed-width”.
* Understand how **semantic structure + ARIA** make the header accessible.

---

## 3. Learning Objectives

By the end of this integrated workshop, students will be able to:

1. **Describe** the role of design tokens (colors, type, spacing) in a web design system.
2. **Implement** a semantic header using `<header>`, `<nav>`, and `<a>` with meaningful structure and ARIA.
3. **Use Flexbox** to align the CORAH logo and navigation in a responsive, mobile-first layout.
4. **Apply `clamp()`** to scale font sizes and padding smoothly across different viewport widths.
5. **Evaluate** their header against design and accessibility principles (contrast, hierarchy, focus order).

---

## 4. Prerequisites

Students should:

* Know basic HTML tags (`<div>`, `<header>`, `<nav>`, `<a>`, `<img>`).
* Have seen or worked with the **CORAH Figma header** (logo, wordmark, nav).
* Understand basic CSS selectors and properties (color, padding, margin).
* Have GitHub set up (for later deployment, if you want to keep that piece).

---

## 5. Workshop Structure Overview

We’ll treat this as **one big workshop** with **four parts** (ex-Workshops 6–9):

1. **Part A (ex-WS06): Semantic CORAH Header – HTML Skeleton**
2. **Part B (ex-WS07): Design Tokens & Fluid Typography (`clamp()` for fonts)**
3. **Part C (ex-WS08): Flexbox Layout & Fluid Padding (`clamp()` for spacing)**
4. **Part D (ex-WS09): Accessibility & Evaluation (ARIA, focus, design principles)**

Each part includes:

* Concept framing
* Guided coding steps
* Mini knowledge check
* Micro reflection

---

## 6. Detailed Activity – Part A

### Semantic CORAH Header – HTML Skeleton

**Concept focus:**
Semantic HTML, landmarks, nav structure, object model → elements.

**Key ideas:**

* `<header>` is the **banner** region.
* `<nav>` is a **navigation landmark** with `aria-label`.
* We use `<a>` links, not buttons, for page navigation.
* Our class names follow the **header object model** you defined:

```text
header-section-container
  └─ header-container
      ├─ logo-container
      │    ├─ corah-brand-logo
      │    └─ corah-brand-wordmark-logo
      └─ nav-container
           ├─ button-container > nav-link (Home, About, …)
           └─ ...
  └─ separator-container > separator
```

**Guided steps (students code along):**

1. Create `index.html` and basic `<head>` (meta, title, Google Fonts, link to `styles.css`).
2. Inside `<body>`, scaffold:

```html
<header class="header-section-container">
  <div class="header-container">
    <div class="logo-container">
      <a href="index.html" class="brand-link" aria-label="CORAH Home">
        <img src="images/corah-brand-logo.svg" alt="" class="corah-brand-logo">
      </a>
      <img
        src="images/corah-brand-wordmark-logo.svg"
        alt="CORAH – Centre of Rural Aging & Health"
        class="corah-brand-wordmark-logo"
      >
    </div>

    <nav class="nav-container" aria-label="Main">
      <div class="button-container">
        <a class="nav-link is-active" href="index.html" aria-current="page">Home</a>
      </div>
      <div class="button-container">
        <a class="nav-link" href="about.html">About</a>
      </div>
      <div class="button-container">
        <a class="nav-link" href="events.html">Events</a>
      </div>
      <div class="button-container">
        <a class="nav-link" href="register.html">Register</a>
      </div>
      <div class="button-container">
        <a class="nav-link" href="profile.html">My Profile</a>
      </div>
      <div class="button-container">
        <a class="nav-link nav-link--secondary" href="login.html">Login</a>
      </div>
      <div class="button-container">
        <a class="nav-link nav-link--secondary" href="logout.html">Logout</a>
      </div>
    </nav>
  </div>

  <div class="separator-container">
    <div class="separator" role="presentation"></div>
  </div>
</header>
```

**Mini knowledge check (3 quick questions):**

* Why is `aria-current="page"` only on “Home”?
* Why use `<nav aria-label="Main">` instead of just a `<div>`?
* Which elements in this header are *decorative* vs *informational*?

**Micro reflection:**

> “What is one way this structure is clearer than a `div` soup?”

---

## 7. Detailed Activity – Part B

### Design Tokens & Fluid Typography (clamp for fonts)

**Concept focus:**
Design tokens → CSS custom properties, mapping Figma’s brand & type scale; `clamp()` for fonts.

**Key ideas:**

* **Raw tokens**: `--brand-600` = `#7B458F` (seed).
* **Semantic tokens**: `--color-header-bg`, `--color-header-link-primary`.
* **Type scale**: base ≈ 20px, H1 ≈ 59.72px, small ≈ 13.89px.
* `clamp(min, preferred, max)` gives **fluid, readable typography**.

**Guided steps:**

1. In `styles.css`, set up tokens and base styles:

```css
:root {
  /* Brand ramp (simplified) */
  --brand-600: #7B458F;
  --brand-900: #311736;

  /* Neutrals */
  --neutral-50: #F9FAFB;
  --neutral-900: #111827;

  /* Typography – fluid with clamp() */
  --font-family-sans: "Open Sans", system-ui, -apple-system, "Segoe UI", sans-serif;

  /* Body ~16–20px */
  --font-size-base: clamp(1rem, 0.4vw + 0.9rem, 1.25rem);

  /* H1 ~36–60px */
  --font-size-h1: clamp(2.25rem, 3vw + 1.5rem, 3.73rem);

  /* Small text ~12–14px */
  --font-size-small: clamp(0.8rem, 0.1vw + 0.78rem, 0.87rem);

  --line-height-base: 1.5;
  --line-height-heading: 1.1;

  /* Spacing tokens (we’ll reuse them for clamp padding later) */
  --space-3: 3px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-32: 32px;

  /* Semantic colors – header */
  --color-header-bg: var(--brand-900);
  --color-header-text: #FFFFFF;
  --color-header-link-primary: #FFFFFF;
  --color-header-link-primary-bg: transparent;
  --color-header-link-primary-bg-hover: var(--brand-600);
  --color-header-separator: var(--brand-600);
}

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
  background-color: var(--neutral-50);
  color: var(--neutral-900);
}
```

2. Discuss: how `clamp()` keeps text **legible on phones** and **not huge on desktops**.

**Mini knowledge check:**

* What happens if we remove `clamp()` and just hard-code `font-size: 20px`?
* Which token(s) would you change if CORAH rebranded to a new purple?

---

## 8. Detailed Activity – Part C

### Flexbox Layout & Fluid Padding (clamp for spacing)

**Concept focus:**
Mobile-first Flexbox + using `clamp()` to scale **padding and gaps**.

**Key ideas:**

* Figma gave us **fixed padding and gap values**.
* We can **anchor** those values inside `clamp()` to make them fluid.
* Flexbox handles **logo left / nav right** and **nav row**.

**Guided steps:**

1. Define **fluid spacing tokens** that wrap your Figma numbers:

```css
:root {
  /* ... previous tokens ... */

  /* Fluid header paddings (around 32px horizontally) */
  --pad-header-inline: clamp(1rem, 4vw, 2rem);   /* L/R padding */
  --pad-header-block-top: clamp(1rem, 3vw, 2rem);
  --pad-header-block-bottom: clamp(0.25rem, 1vw, 0.5rem);

  /* Fluid nav gap & padding that hover around 12/24px */
  --gap-header-main: clamp(1rem, 2vw, 2rem);     /* between logo + nav */
  --gap-nav-links: clamp(0.5rem, 1.5vw, 0.75rem);

  --pad-nav-container: clamp(0.5rem, 1.5vw, 0.75rem);
  --pad-nav-link-x: clamp(1rem, 2vw, 1.5rem);    /* L/R padding */
  --pad-nav-link-y-top: clamp(0.4rem, 0.8vw, 0.5rem);
  --pad-nav-link-y-bottom: clamp(0.6rem, 1vw, 0.75rem);
}
```

2. Apply Flexbox + these tokens to the header:

```css
.header-section-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-32);

  padding-top: var(--pad-header-block-top);
  padding-right: var(--pad-header-inline);
  padding-bottom: var(--pad-header-block-bottom);
  padding-left: var(--pad-header-inline);

  background-color: var(--color-header-bg);
  color: var(--color-header-text);
}

/* Flex row: logo left, nav right */
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: var(--gap-header-main);
  padding: 0;
}

/* Logo row */
.logo-container {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 1vw, 1rem);
}

/* Fluid logo & wordmark size */
.corah-brand-logo {
  width: clamp(32px, 2.5vw + 24px, 48px);
  height: auto;
  display: block;
}

.corah-brand-wordmark-logo {
  height: clamp(20px, 2vw + 12px, 32px);
  width: auto;
  display: block;
}

/* Nav row */
.nav-container {
  display: flex;
  align-items: center;
  flex-direction: row;

  gap: var(--gap-nav-links);
  padding: var(--pad-nav-container);

  overflow-x: auto;
}

/* Each nav “button” wrapper */
.button-container {
  padding: var(--space-3);
}

/* Nav link as a pill */
.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding-top: var(--pad-nav-link-y-top);
  padding-right: var(--pad-nav-link-x);
  padding-bottom: var(--pad-nav-link-y-bottom);
  padding-left: var(--pad-nav-link-x);

  border-radius: 999px;
  border: none;
  text-decoration: none;

  font-size: clamp(0.85rem, 0.3vw + 0.8rem, 1rem);
  font-weight: 600;
  color: var(--color-header-link-primary);
  background-color: var(--color-header-link-primary-bg);

  white-space: nowrap;
}
```

3. Add simple hover/focus + separator, as before.

4. Add **minimal media queries** (layout only):

```css
@media (min-width: 768px) {
  .nav-container {
    overflow-x: visible;
  }
}

@media (min-width: 1024px) {
  .header-container {
    max-width: 1200px;
    margin-inline: auto;
  }
}
```

**Mini knowledge check:**

* Which parts of the layout are controlled by Flexbox vs media queries vs `clamp()`?
* What happens to the nav links if the viewport becomes very narrow?

**Micro reflection:**

> “What surprised you about how little CSS was needed to make this header feel modern and fluid?”

---

## 9. Detailed Activity – Part D

### Accessibility & Evaluation (ARIA, Focus, Design Principles)

**Concept focus:**
Accessibility basics, ARIA attributes, visual feedback, design principles.

**Key ideas:**

* Landmarks help screen readers **jump** around.
* `aria-current="page"` helps users know where they are.
* Visible focus outlines help keyboard users navigate.
* Design principles: contrast, alignment, proximity, hierarchy.

**Guided steps:**

1. Ensure ARIA and semantics are in place:

   * `<nav class="nav-container" aria-label="Main">`
   * `aria-current="page"` on the active link
   * `role="presentation"` on decorative separator

2. Add focus-visible states:

```css
.nav-link:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 2px;
}
```

3. Check contrast:

   * Header background (`--color-header-bg`) vs nav text (`--color-header-link-primary`).
   * Make adjustments if needed (lighten/darken the background).

4. In small groups or individually, have students **critique** their own header:

   * Where is **contrast** strongest or weakest?
   * How do **alignment and proximity** help group related items (logo + wordmark, nav links)?
   * Is **hierarchy** clear: brand first, then nav?

**Mini knowledge check:**

* Name one ARIA attribute used in this header and its purpose.
* How could you make the nav easier to use for someone who only uses a keyboard?

---

## 10. Optional Extension – Deployment (GitHub Pages)

If you want this integrated:

* Have students:

  1. Create a repo: `studentID_WEBD1000_CORAH_Header_Workshop`
  2. Push `index.html`, `styles.css`, `images/`
  3. Enable GitHub Pages and get a live URL.

* Submission = **GitHub Pages URL** + **repo URL**.

---

## 11. Summary: High-Level Topics Covered

This single integrated workshop covers:

1. **Design systems & tokens** – brand ramp, type scale, spacing.
2. **Semantic HTML** – header/nav landmarks, meaningful class names.
3. **Accessibility & ARIA** – `aria-label`, `aria-current`, focus-visible.
4. **Flexbox layout** – logo left, nav right, responsive nav row.
5. **Modern responsive CSS** – mobile-first, `clamp()` for font-size & padding, minimal media queries.
6. **Design principles in code** – implementing contrast, alignment, proximity, hierarchy in a real header.

