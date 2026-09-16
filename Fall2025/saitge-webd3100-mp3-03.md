![alt text](image.png)

---

# 🎯 **MP3C – CORAH Events Listing Prototype**

### *Responsive Card-Based Layout Using Grid & Design Tokens*

---

## **Overview (What You’re Building)**

You’ll implement an **Events Listing page** (`events.html`) for CORAH that lists community programs and workshops in a **responsive card grid**.
Each card will include an event title, date, short summary, and a call-to-action link or button.

---

## **Purpose (Why It Matters)**

This page shows your ability to manage **multi-item content layouts**—a core web design skill.
It combines **Grid layout**, **responsive behavior**, and **token-based styling**, while maintaining consistency with your previous CORAH pages.

---

## **Learning Outcomes Addressed**

| #  | Outcome                                             |
| :- | :-------------------------------------------------- |
| 1  | Apply design principles to web content presentation |
| 2  | Design mock-ups based on requirements               |
| 3  | Implement web applications based on mock-ups        |

---

## **Assignment Description (What to Do)**

### Required Sections

1. **Header** – reuse from MP3A/B
2. **Events Intro** – page title + short paragraph
3. **Events Grid** – minimum 6 cards (each an `<article>` with title/date/summary/link)
4. **Footer** – reuse from MP3A/B

---

## **Tasks / Instructions (How to Build It)**

### Step 1 – Project Setup

```
studentID_WEBD1000_MP3C_CORAH_Events/
│ index.html
│ about.html
│ events.html
│ styles.css
└ images/
```

### Step 2 – HTML Structure

```html
<main id="main-content" class="events-main">
 <section class="events-header-section">
   <h1>Events</h1>
   <p>Upcoming community programs and workshops offered by CORAH.</p>
 </section>

 <section class="events-listing-section">
   <div class="events-grid">
     <article class="event-card">
      <img src="images/event1.jpg" alt="" class="event-image">
      <h3>Senior Wellness Walk</h3>
      <p class="event-date">March 18, 2025</p>
      <p class="event-summary">Join us for a guided community walk promoting health and social interaction.</p>
      <a href="#" class="event-cta">Learn More</a>
     </article>
   </div>
 </section>
</main>
```

### Step 3 – Grid Layout & Responsiveness

```css
.events-grid {
  display:grid;
  grid-template-columns:1fr;
  gap:clamp(1rem, 2vw, 2rem);
}

@media (min-width:768px){
 .events-grid{grid-template-columns:repeat(2,1fr);}
}

@media (min-width:1024px){
 .events-grid{grid-template-columns:repeat(3,1fr);}
}
```

### Step 4 – Event Card Styling

```css
.event-card{
 background:white;
 border-radius:12px;
 box-shadow:0 2px 6px rgb(0 0 0 / 0.08);
 display:flex;
 flex-direction:column;
 gap:clamp(0.75rem, 1vw, 1.25rem);
 padding:clamp(1rem, 1vw + 0.5rem, 1.5rem);
}
.event-card h3{
 font-size:clamp(1.25rem, 1vw + 1rem, 1.5rem);
 margin:0;
}
.event-cta{
 align-self:flex-start;
 padding:clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem);
 font-weight:600;
 border-radius:999px;
 background-color:var(--brand-600);
 color:#fff;
 text-decoration:none;
}
.event-cta:hover,
.event-cta:focus-visible{background-color:var(--brand-900);}
```

### Step 5 – Accessibility Checklist

* One `<h1>` per page
* Descriptive headings in each card
* Alt text only if images are informational
* Focus states visible on links and buttons
* Sufficient color contrast

### Step 6 – Navigation Integration

Update the nav to highlight “Events” on this page:
`<a href="events.html" aria-current="page">Events</a>`

### Step 7 – Testing & Deployment

* Validate HTML/CSS
* Test on mobile/tablet/desktop
* Publish to GitHub Pages

---

## **Deliverables (What to Submit)**

1. GitHub Pages URL (e.g. `…/events.html`)
2. GitHub Repo link
3. Fully functional Events page (6+ cards, responsive grid)

---

## **Rubric (How You’ll Be Graded)**

| Criterion            | Excellent                      | Proficient        | Developing               | Needs Improvement |
| :------------------- | :----------------------------- | :---------------- | :----------------------- | :---------------- |
| Card Layout & Design | Clean, readable, on-brand      | Mostly consistent | Some layout issues       | Cluttered         |
| Responsiveness       | Smooth grid scaling            | Mostly responsive | Breakpoints need work    | Broken            |
| Semantics & A11y     | Proper headings + focus states | Minor issues      | Several missing elements | Poor              |
| Token Use            | All design tokens applied      | Mostly used       | Partial                  | Hard-coded        |
| Code Quality         | Clean + consistent             | Minor issues      | Messy naming             | Disorganized      |
| Deployment           | Working Pages site             | Minor issue       | Broken links             | No deployment     |

---

# 🧩 **CORAH Object Model Summary**

### Header

```
header-section-container
 └ header-container
   ├ logo-container
   │  ├ corah-brand-logo.svg
   │  └ corah-brand-wordmark-logo.svg
   └ nav-container
     ├ nav-link (Home)
     ├ nav-link (About)
     └ nav-link (Events)
separator-container > separator
```

### Hero

```
hero-section-container
 ├ hero-text-container
 │  ├ hero-title
 │  └ hero-subtitle
 └ hero-image-container (optional)
```

### Footer

```
footer-section-container
 ├ footer-links-container
 ├ footer-contact-container
 └ footer-legal-container
```

**Class Naming Principles**

* Hyphenated BEM-like structure (`section-container`, `logo-container`)
* Semantic wrappers match HTML landmarks
* Consistency across pages enables reusability

---

# ✅ **Final Submission Checklist**

### Project Structure

* [ ] index.html (Home)
* [ ] about.html (About)
* [ ] events.html (Events)
* [ ] styles.css (shared CSS)
* [ ] images/ (folder with logos and hero assets)

### Design System

* [ ] Uses CORAH tokens for color, type, spacing
* [ ] Typography scales with `clamp()`
* [ ] Spacing tokens match Figma ramp

### Semantics & Accessibility

* [ ] All pages have 1 `<h1>`
* [ ] Landmarks: header / main / footer
* [ ] ARIA labels for nav (`aria-label="Main"`)
* [ ] Visible focus states
* [ ] Color contrast checked

### Responsiveness

* [ ] Mobile-first styles
* [ ] Grid/Flexbox layouts adapt smoothly
* [ ] Minimal media queries + `clamp()`

### Deployment

* [ ] GitHub Pages enabled (root folder)
* [ ] Live URLs for all pages accessible
* [ ] Repo links shared in Brightspace

### File Naming

* [ ] Follows `studentID_WEBD1000_MP3X_CORAH_PageName` format

---

# 🏁 **End of Mini-Project 3 Student Package**

This completes your **MP3A + MP3B + MP3C** assignments.
When all three pages are live, your CORAH website will demonstrate:

* End-to-end translation of Figma → HTML/CSS
* Design system thinking
* Accessibility integration
* Responsive web design proficiency

