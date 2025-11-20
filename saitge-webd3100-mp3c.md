![alt text](image.png)

---

# **MP3C – CORAH Events Listing Prototype**

### *Responsive Multi-Card Events Page Using CORAH Design System*

---

## **1. Assignment Details**

* **Course:** WEBD1000 – Web Development Fundamentals
* **Mini-Project:** MP3 – Implementation
* **Assignment:** MP3C – CORAH Events Listing Page Prototype
* **Type:** Individual
* **Time Estimate:** 8–12 hours
* **Weight:** 10–15% (recommended as part of MP3)
* **Due Date:** End of Week 11
* **Naming Convention:**
  `studentID_WEBD1000_MP3C_CORAH_Events`

**Required Files:**

```
events.html
styles.css     (shared with MP3A/B)
images/        (event photos/icons optional)
```

---

# **2. Overview / Purpose / Objectives**

### **Overview**

In MP3C, you will implement the **Events Listing page** for CORAH using the existing design system from MP3A and MP3B.
This page will display upcoming or past events in a **clean, readable card layout** that works seamlessly across mobile, tablet, and desktop screens.

### **Purpose**

To demonstrate your ability to:

* Structure complex content using semantic HTML
* Create a **responsive card-based grid**
* Maintain visual and code consistency across pages
* Present multi-item lists in an accessible, scan-friendly layout
* Build real-world UI components based on a design system

### **Objectives**

By completing MP3C, you will:

* Build a responsive multi-card events layout using **CSS Grid or Flexbox**
* Apply CORAH **design tokens** (spacing, typography, color, radii, shadows)
* Use **fluid scaling** techniques (`clamp()`) for text and spacing
* Maintain **semantic and accessible** code with proper headings, ARIA, and link text
* Integrate this page into the CORAH multi-page prototype (Homepage → About → Events)

---

# **3. Learning Outcomes Addressed**

| LO  | Description                                     |
| --- | ----------------------------------------------- |
| LO1 | Apply design principles to content presentation |
| LO2 | Design mockups of user interfaces               |
| LO3 | Implement web applications based on mockups     |

MP3C primarily targets **LO1 (presentation patterns)** and **LO3 (implementation)**.

---

# **4. Assignment Description / Use Case**

### **Scenario**

CORAH hosts regular community-focused events for older adults, volunteers, families, and local partners.
They need an Events page that:

* Displays a list of upcoming events
* Provides clear event summaries
* Helps users quickly scan what is relevant
* Encourages interaction via links/CTAs
* Looks professional and consistent with the CORAH brand

You will build a **fully responsive Events Listing page** based on your MP2 Events mockups (or instructor-provided mockup), implementing it using HTML/CSS and the CORAH design system.

### **Required Sections**

Your **events.html** page must include:

### **1. Events Header Section**

At top of the `main` region:

* `<h1>Events</h1>`
* Short intro paragraph (e.g., “Upcoming community programs and workshops offered by CORAH.”)

---

### **2. Events Listing Section**

A grid of **events cards** (minimum **6** cards), each showing:

* Event image or icon (optional but recommended)
* Event title (`<h3>`)
* Event date
* Short description
* “Learn More” or “Register” link/button

Each card should be marked up semantically:

```html
<article class="event-card">
  <img src="images/event1.jpg" alt="" class="event-image">
  <h3>Senior Wellness Walk</h3>
  <p class="event-date">March 18, 2025</p>
  <p class="event-summary">Join us for a guided community walk promoting health and social interaction.</p>
  <a href="#" class="event-cta">Learn More</a>
</article>
```

---

### **3. Optional (Bonus) Section**

* Filter controls (not functional)
* Upcoming vs. Past Events
* Featured event highlight

These will not be graded for functionality, but will be recognized in design.

---

### **4. Footer Section**

Reuse the **same footer** from MP3A and MP3B.

---

# **5. Tasks / Instructions**

## **Step 1 – Setup Correct File Structure**

Extend your MP3A/MP3B project or create a new folder:

```
studentID_WEBD1000_MP3C_CORAH_Events/
    index.html
    about.html
    events.html   <-- new
    styles.css     <-- same shared design system
    images/        <-- optional event photos or icons
```

---

## **Step 2 – Build the Events Page Structure (`events.html`)**

Use semantic layout:

```html
<main id="main-content" class="events-main">
  <section class="events-header-section">
    <h1>Events</h1>
    <p>Upcoming community programs and workshops offered by CORAH.</p>
  </section>

  <section class="events-listing-section">
    <div class="events-grid">
      <!-- Event cards go here -->
    </div>
  </section>
</main>
```

---

## **Step 3 – Implement CORAH Design System (Tokens + clamp)**

Use the existing:

* Color ramp tokens (`--brand-600`, `--brand-900`, `--neutral-*`)
* Typography tokens (`--font-size-base`, `--font-size-h1`, `--font-size-small`)
* Spacing tokens (`--space-12`, `--space-16`, `--space-32`)
* Responsive spacing using `clamp()` (e.g., card padding)

Example fluid padding:

```css
.event-card {
  padding: clamp(1rem, 1vw + 0.5rem, 1.5rem);
}
```

---

## **Step 4 – Add CSS Grid for the Events Layout**

### **Mobile-first styles**

```css
.events-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 2vw, 2rem);
}
```

### **Tablet (≥ 768px)**

```css
@media (min-width: 768px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### **Desktop (≥ 1024px)**

```css
@media (min-width: 1024px) {
  .events-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## **Step 5 – Style Event Cards**

Cards must apply:

* CORAH color system
* Fluid typography
* Clean spacing
* Hover + focus-visible states

Example:

```css
.event-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.08);
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 1vw, 1.25rem);
}

.event-card h3 {
  font-size: clamp(1.25rem, 1vw + 1rem, 1.5rem);
  margin: 0;
}

.event-date {
  font-size: var(--font-size-small);
  opacity: 0.8;
}

.event-cta {
  align-self: flex-start;
  padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem);
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  background-color: var(--brand-600);
  color: white;
}

.event-cta:hover,
.event-cta:focus-visible {
  background-color: var(--brand-900);
}
```

---

## **Step 6 – Enhance Accessibility**

Page must include:

* **One** `<h1>` (“Events”)
* `<h2>` for major page sections (if used)
* `<h3>` inside each event card
* Keyboard focus states on links
* Adequate color contrast
* Meaningful ARIA labels only when necessary (avoid overuse)

---

## **Step 7 – Integrate Page into Site Navigation**

Update nav:

* On `events.html`, add `aria-current="page"` to the “Events” link.
* Ensure the header/footer remain consistent across all three pages.

Example:

```html
<a href="events.html" aria-current="page" class="nav-link">Events</a>
```

---

## **Step 8 – Testing & QA**

Test:

* Phone (narrow width)
* Tablet (medium width)
* Desktop (large width)
* High-contrast mode
* Keyboard-only navigation
* Broken image fallback (alt text empty for decorative)

---

## **Step 9 – Deployment (GitHub Pages)**

If you are using a single repo for all MP3 assignments:

* Your Events page URL will look like:
  `https://username.github.io/studentID_WEBD1000_MP3A_CORAH_Homepage/events.html`

If MP3C is in a separate repo:

* URL will be:
  `https://username.github.io/studentID_WEBD1000_MP3C_CORAH_Events/`

---

# **6. Deliverables**

Submit **two URLs** to Brightspace:

### **1. GitHub Pages Live URL**

Example:
`https://username.github.io/studentID_WEBD1000_MP3C_CORAH_Events/`

### **2. GitHub Repository URL**

Also provide:

### **3. Functional Events Listing Page**

* Minimum 6 event cards
* Responsive Grid layout
* Design system applied
* Accessibility features in place
* Header/footer consistent with MP3A/B

No screenshots required unless your instructor specifies them.

---

# **7. Assessment & Rubric**

| Criterion                              | Excellent (A)                                                                            | Proficient (B)                       | Developing (C)                                    | Needs Improvement (D/F)             |
| -------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------- | ----------------------------------- |
| **Card Layout & Presentation** (20%)   | Clean, readable, high fidelity; strong hierarchy; excellent spacing & contrast.          | Mostly clean; minor spacing issues.  | Some readable issues; inconsistent visual rhythm. | Cards disorganized or hard to read. |
| **Grid Responsiveness** (20%)          | Layout adapts smoothly across breakpoints; uses modern Grid/Flex patterns correctly.     | Mostly responsive; minor issues.     | Some breakpoints broken or awkward.               | Non-responsive.                     |
| **Semantic & Accessible Markup** (15%) | Clear structure; correct headings; descriptive links; good focus states.                 | Mostly correct; minor errors.        | Several issues with semantics or accessibility.   | Major structural errors.            |
| **Design Token Consistency** (20%)     | All tokens used correctly (colors, fonts, spacing); no hard-coded values without reason. | Mostly consistent token use.         | Mixed token/hard-coded values.                    | Tokens ignored.                     |
| **Code Quality & Reuse** (15%)         | Clean, consistent, well-structured code; effective reuse of components and tokens.       | Mostly clean; needs some refinement. | Some inconsistent spacing or naming.              | Chaotic or difficult to follow.     |
| **Deployment & Navigation** (10%)      | Live site deployed; navigation integrated across all pages; links work.                  | Live with minor issues.              | Missing or partially working deployment.          | No deployment or broken.            |

---

# **8. Resources & Equipment**

* CORAH Figma design system
* MP2 mockups (Events page)
* MP3A/B tokens and header/footer components
* VS Code
* Browser DevTools
* GitHub Pages
* Online contrast checker
* W3C HTML/CSS validators

---

# **9. Academic Policies**

Students must submit original work.
You may collaborate conceptually, but code and design must be your own.
GitHub commit history may be used to verify authenticity.

---

# **10. Copyright Notice**

© 2025 Nova Scotia Community College – School of Technology & Environment.
CORAH case study materials for instructional use only.
