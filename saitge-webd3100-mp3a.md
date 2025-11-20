![alt text](image.png)

---

# **1. Assignment Details**

* **Assignment Title:** MP3A – CORAH Homepage HTML Prototype
* **Type:** Individual Project
* **Time Estimate:** 8–12 hours
* **Due Date:** End of Week 9 (unless otherwise specified)
* **Files Required:**

  * `index.html`
  * `styles.css`
  * `images/` (CORAH logo + wordmark + any hero assets)

---

# **2. Overview / Purpose / Objectives**

MP3A is the **first implementation assignment** in the CORAH website project.
You will convert your MP2A/B/C design work into a **functional, semantic, responsive homepage prototype** using:

* Semantic HTML5
* CSS design tokens (color, type, spacing)
* Modern responsive design techniques (`clamp()`, mobile-first media queries)
* Flexbox for layout
* Accessibility (ARIA, focus-visible, contrast)

This assignment bridges the gap between **design** (MP1 & MP2) and **functional development** (MP3 & final project).

### **Purpose**

To demonstrate your ability to translate a mockup into real HTML/CSS code using professional standards.

### **Objectives**

You will:

* Build the CORAH **Header**, **Hero**, and **Footer** sections in clean HTML/CSS.
* Use **design tokens** to maintain consistency with the CORAH design system.
* Implement **mobile-first responsive layouts** using Flexbox + `clamp()`.
* Demonstrate **accessibility best practices**.
* Deploy your page via **GitHub Pages**.

---

# **3. Learning Outcomes Addressed**

| LO      | Description                                      |
| ------- | ------------------------------------------------ |
| **LO1** | Apply design principles to content presentation. |
| **LO2** | Design mockups based on requirements.            |
| **LO3** | Implement web applications based on mockups.     |

MP3A is primarily LO3 but reinforces LO1 and LO2.

---

# **4. Assignment Description / Use Case**

### **Scenario**

You are implementing the **public-facing CORAH homepage**. The homepage must follow the brand system and object model used throughout MP1 and MP2.

### **Functional & Design Requirements – Homepage Must Include:**

## **A) Header**

Based on our CORAH object model:

```
header-section-container
   └── header-container
         ├── logo-container
         │      ├── corah-brand-logo.svg
         │      └── corah-brand-wordmark-logo.svg
         └── nav-container
                ├── button-container > nav-link (Home)
                ├── button-container > nav-link (About)
                ├── button-container > nav-link (Events)
                ├── button-container > nav-link (Register)
                ├── button-container > nav-link (My Profile)
                ├── button-container > nav-link (Login)
                └── button-container > nav-link (Logout)
   └── separator-container > separator
```

**Header Rules:**

* **Logo left**, **navigation right** (Flexbox).
* Use **semantic HTML**: `<header>`, `<nav aria-label="Main">`, `<a>`.
* Active page uses: `aria-current="page"`.
* Use **clamp() for typography & padding**.
* Use **color, spacing, and type tokens** from CORAH design system.
* Mobile-first: nav scrolls horizontally if necessary.

---

## **B) Hero Section**

Must include:

* `<main>` (semantic landmark)
* `<section class="hero-section">` (or similar)
* A headline (`<h1>`) matching your MP2 mockups (fluid size via `clamp()`).
* Supporting text (`<p>` or `<h2>`).
* Primary call-to-action button (e.g. “View Events”).
* Optional: Hero image (SVG/PNG) respecting CORAH brand.

**Hero Layout Requirements:**

* Mobile-first stack
* Tablet+ uses either:

  * **Two-column layout** (content + image), or
  * **Centered layout with large type emphasis**, based on MP2
* Spacing uses tokens (`--space-…`, fluid clamp values)

---

## **C) Footer Section**

Use semantic `<footer>`.

**Must contain:**

* CORAH address or community-region description
* Basic utility nav links (Privacy, Terms, Accessibility, Contact)
* Copyright line
* Optional: Social icons

**Layout:**

* Stacked for mobile
* Optional columns for desktop (Flexbox or Grid)

---

# **5. Tasks / Instructions**

### **Step 1 – Project Setup & File Structure**

Create the folder:

```
studentID_WEBD1000_MP3A_CORAH_Homepage/
    index.html
    styles.css
    images/
        corah-brand-logo.svg
        corah-brand-wordmark-logo.svg
        hero-image.svg (optional)
```

Link Google Fonts (Open Sans) in `<head>`.

---

### **Step 2 – Implement Semantic HTML Structure**

Build:

* `<header>`
* `<main>` with hero section
* `<footer>`

Use the CORAH object hierarchy for class names.

---

### **Step 3 – Implement CORAH Design Tokens**

In `:root`, include:

### **Color ramp tokens (from CORAH brand**):

* brand-50 → brand-950
* brand-600 = `#7B458F` (seed color)
* neutral-50 → neutral-900

### **Typography tokens (fluid):**

* `--font-size-base: clamp(1rem, 0.4vw + 0.9rem, 1.25rem);`
* `--font-size-h1: clamp(2.25rem, 3vw + 1.5rem, 3.73rem);`
* `--font-size-small: clamp(0.8rem, 0.1vw + 0.78rem, 0.87rem);`

### **Spacing tokens:**

Include your exact CORAH spacing system:

* `--space-3: 3px`
* `--space-8: 8px`
* `--space-12: 12px`
* `--space-16: 16px`
* `--space-32: 32px`

Add **fluid versions** using `clamp()` for:

* Header padding
* Nav link padding
* Overall layout spacing

---

### **Step 4 – Style the CORAH Header**

Use Flexbox:

* Logo container → left
* Nav container → right
* Button containers use Figma-derived spacing
* Nav links use **pill style** with tokens and `clamp()`

Add hover, active, and focus-visible states.

Add decorative separator line using a gradient token.

---

### **Step 5 – Build the Hero Section**

Use tokens for:

* Background
* Typography
* Spacing

Use Flexbox or Grid to reorganize content at larger widths.

Use `clamp()` for:

* Headline font size
* Padding
* Spacing between text and CTA

---

### **Step 6 – Build the Footer**

Use tokens for:

* Background
* Text
* Spacing

Ensure:

* Sufficient contrast
* Semantic structure (`<footer> → <nav>` optional)
* Readability across breakpoints

---

### **Step 7 – Make the Entire Page Responsive**

Mobile-first:

* Stack layout
* Smaller spacing

Enhance with media queries (768px, 1024px):

* Scale spacing
* Constrain max-width of header content
* Adjust hero and footer layout

Use **as few media queries as possible**, relying on `clamp()` for fluid behaviour.

---

### **Step 8 – Testing & Validation**

Test:

* Desktop
* Tablet
* Small mobile
* High-contrast mode
* Keyboard navigation (Tab)

Ensure all images load and alt text is correct.

---

### **Step 9 – Deploy via GitHub Pages**

1. Push code to GitHub.
2. Go to **Settings → Pages**.
3. Enable GitHub Pages (root folder).
4. Copy your live URL.

---

# **6. Deliverables**

Submit the following to Brightspace:

### **1. GitHub Pages Live Link**

Example:
`https://username.github.io/studentID_WEBD1000_MP3A_CORAH_Homepage/`

### **2. GitHub Repository Link**

Example:
`https://github.com/username/studentID_WEBD1000_MP3A_CORAH_Homepage`

### **3. Final Homepage Prototype**

With functional:

* Header
* Hero
* Footer
* Responsive layout
* Tokens
* Semantic HTML
* Accessibility features

---

# **7. Assessment & Rubric**

| Criteria                              | Excellent                                                                                                 | Proficient                    | Developing                         | Needs Improvement                  |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------- | ---------------------------------- |
| **Semantic Structure** (20%)          | Correct use of `<header>`, `<nav>`, `<main>`, `<footer>`; ARIA applied; headings structured meaningfully. | Mostly correct; minor issues. | Some missing semantics.            | Structure unclear or incorrect.    |
| **Design Token Usage** (20%)          | Tokens used consistently for color, type, spacing; strong link to CORAH system.                           | Tokens mostly used.           | Limited token use.                 | Hard-coded values dominate.        |
| **Visual Layout & Fidelity** (20%)    | Strong alignment with MP2 mockups; professional spacing; appropriate CORAH branding.                      | Mostly aligned.               | Some mismatches or spacing issues. | Layout poorly reflects design.     |
| **Responsiveness & Modern CSS** (20%) | Smooth scaling via `clamp()`; minimal media queries; layout holds on all sizes.                           | Mostly responsive.            | Some breakpoints issues.           | Layout breaks on multiple screens. |
| **Accessibility** (10%)               | Clear focus states; correct ARIA; readable contrast.                                                      | Mostly accessible.            | Some issues.                       | Major accessibility problems.      |
| **Deployment & Code Quality** (10%)   | Clean, readable, working deployment; both links submitted.                                                | Minor issues.                 | Missing minor parts.               | No deployment or broken.           |

---

# **8. Resources & Equipment**

* CORAH Figma Files (Header, Hero, Footer design system)
* CORAH color ramp, typography system, spacing spec
* Figma → HTML/CSS translation workshop
* GitHub Pages documentation
* VS Code (recommended)
* Browser DevTools (for testing responsiveness)

---

# **9. Academic Policies**

You must complete your own work.
You may consult class notes, workshops, and references, but your code must be original.
GitHub history may be reviewed.

---

# **10. Copyright Notice**

© 2025 Nova Scotia Community College – School of Technology & Environment.
For educational use only.
The CORAH brand is used for instructional purposes.
