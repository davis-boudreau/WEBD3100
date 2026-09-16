![alt text](image.png)

---

# 🎓 **Mini-Project 3 (MP3) — CORAH Multi-Page HTML/CSS Prototype**

### *Student Package (MP3A + MP3B + MP3C)*

**Course:** WEBD1000 – Web Development Fundamentals
**Case Study:** CORAH – Centre of Rural Aging & Health
**Weeks Covered:** 8–11
**Deliverables:** 3 Complete Web Pages (Homepage, About, Events)
**Submission:** GitHub Pages + GitHub Repository for each assignment
**Naming Convention:**

```
studentID_WEBD1000_MP3A_CORAH_Homepage
studentID_WEBD1000_MP3B_CORAH_About
studentID_WEBD1000_MP3C_CORAH_Events
```

---

# **MP3 Overview — What You’re Building**

Mini-Project 3 is a **three-part HTML/CSS implementation project** where you build a **multi-page website** for the CORAH case study.

You will create:

### ✔ **MP3A — Homepage**

Header + Hero + Footer (using CORAH design system)

### ✔ **MP3B — About Page**

Multi-section content layout telling CORAH’s story

### ✔ **MP3C — Events Page**

Responsive card-based listing of upcoming events

All three pages:

* Share the same **header**
* Share the same **footer**
* Share the same **CSS design system**
* Are linked together using `<nav>` and semantic HTML landmarks
* Use **mobile-first responsive design**
* Use **tokens** for color, typography, and spacing
* Use **clamp()** for fluid, scalable text and layout spacing

By the end of MP3, you’ll have a **real, functioning three-page website** deployed on GitHub Pages.

---

# **Project Flow Diagram**

*(Text-based, accessible, works in Brightspace or PDF)*

```
                     ┌───────────────────────────┐
                     │        MP3A Homepage       │
                     │  header + hero + footer    │
                     └──────────────┬────────────┘
                                    │
             navigation links (Home, About, Events)
                                    │
         ┌──────────────────────────┴──────────────────────────┐
         │                                                     │
┌─────────────────────┐                             ┌────────────────────┐
│     MP3B About      │                             │    MP3C Events     │
│  multi-section page │                             │  responsive cards  │
└─────────────────────┘                             └────────────────────┘
```

---

# **Site Map Diagram (ASCII)**

```
/index.html       -> MP3A (Homepage)
    |
    ├─ About (link -> /about.html)
    |
    └─ Events (link -> /events.html)

/about.html       -> MP3B (About Page)
    |
    ├─ Home (-> /index.html)
    └─ Events (-> /events.html)

/events.html      -> MP3C (Events Listing)
    |
    ├─ Home (-> /index.html)
    └─ About (-> /about.html)
```

All three pages use the **same** class-based object model for:

* Header
* Navigation
* Footer

---

# **CORAH Design System Summary (Used in All MP3 Assignments)**

This section shows the tokens, typography, spacing, and object naming used throughout the MP3 assignments.

---

## **Color Tokens (Brand Ramp)**

Seed color: **brand-600 = #7B458F**
Ramp (brand-50 → brand-950 generated with Figma Color Ramp Generator)

Used for:

* Buttons
* Headings
* Backgrounds
* Borders
* Separator lines

Semantic color mapping:

```
--color-header-bg: var(--brand-900)
--color-header-link-primary: #FFFFFF
--color-header-separator: var(--brand-600)
--color-hero-bg: var(--neutral-50)
--color-footer-bg: var(--brand-900)
```

---

## **Typography Tokens (Open Sans)**

Base font size: **20px**
Type scale (Figma Type Scale plugin):

```
--font-size-base: clamp(1rem, 0.4vw + 0.9rem, 1.25rem)
--font-size-h1: clamp(2.25rem, 3vw + 1.5rem, 3.73rem)
--font-size-h2: clamp(1.75rem, 1.5vw + 1.3rem, 2.5rem)
--font-size-small: clamp(0.8rem, 0.1vw + 0.78rem, 0.87rem)
```

Used for:

* Headings
* Buttons
* Nav links
* Body content
* Footnote text

---

## **Spacing Tokens**

Figma-derived spacing mapped directly into tokens:

```
--space-3: 3px
--space-8: 8px
--space-12: 12px
--space-16: 16px
--space-32: 32px
```

Fluid spacing using `clamp()`:

```
--pad-header-inline: clamp(1rem, 4vw, 2rem)
--pad-nav-container: clamp(0.5rem, 1.5vw, 0.75rem)
--pad-nav-link-x: clamp(1rem, 2vw, 1.5rem)
```

---

## **Object Naming Model (Used in All Assignments)**

Consistent class naming for all major layout parts.

### **Header**

```
header-section-container
 └ header-container
     ├ logo-container
     │    ├ corah-brand-logo
     │    └ corah-brand-wordmark-logo
     └ nav-container
          ├ button-container > nav-link
          └ ...
separator-container > separator
```

### **Hero**

```
hero-section-container
 ├ hero-text-container
 │    ├ hero-title
 │    └ hero-subtitle
 └ hero-image-container (optional)
```

### **Footer**

```
footer-section-container
 ├ footer-links-container
 ├ footer-contact-container
 └ footer-legal-container
```

This naming model ensures **MP3A, MP3B, and MP3C** look like one consistent site.

---

# **How MP3A, MP3B, and MP3C Fit Together**

### **MP3A – Homepage**

You build:

* Header (logo + wordmark + nav)
* Hero section
* Footer
* Shared design system in CSS

This becomes the foundation for the whole site.

---

### **MP3B – About Page**

You build:

* Multi-section informational content
* Mission, Vision, Story, Team, Programs
* Reuse header + footer + tokens from MP3A

The About page demonstrates your ability to structure content and apply readability principles.

---

### **MP3C – Events Listing Page**

You build:

* Responsive event cards (6 minimum)
* A Grid layout that adapts from mobile → desktop
* CTA buttons with token colors
* Reuse header + footer + CSS tokens

