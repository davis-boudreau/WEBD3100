![alt text](image.png)

---

## **1  Assignment Details**

* **Course Code:** WEBD 3100 – Web Design Fundamentals
* **Assignment Title:** MP2C – Responsive Design Layouts (Home + Subpage)
* **Type:** Mini-Project 2C (Individual)
* **Weight:** See LMS (Brightspace)
* **Estimated Time:** 2 – 4 hours
* **Due Date:** See LMS (Brightspace)
* **Submission Format:** **Figma project link only** (shared with `davis.boudreau@nscc.ca`)
* **Figma Project Name:** `studentID_WEBD3100_MP2C_Corah`

---

## **2  Overview / Purpose / Objectives**

This project extends your high-fidelity mockups from MP2B into a fully responsive design system.
You’ll demonstrate how your CORAH Homepage and Subpage adapt gracefully across desktop, tablet, and mobile devices while maintaining clarity, hierarchy, and accessibility.

**Objectives**

* Apply mobile-first design thinking and progressive enhancement.
* Create responsive frames for Desktop, Tablet, and Mobile.
* Use Auto Layout, Constraints, and Variants to adapt components.
* Ensure accessibility (contrast, touch targets, readability) across devices.

---

## **3  Learning Outcomes Addressed**

| #       | Description                                                                  |
| :------ | :--------------------------------------------------------------------------- |
| **LO2** | Design mock-ups of user interfaces based on requirements and specifications. |
| **LO3** | Implement web applications based on design mock-ups.                         |

---

## **4  Assignment Description / Use Case**

**CORAH (Caring Outreach for Rural Aging & Health)** serves a broad audience using different devices — seniors on phones, staff on tablets, and administrators on desktops.
Your task is to translate your static mockups into responsive layouts that adjust intuitively to these viewports.

You’ll use your MP2B file to create **three breakpoints** for each page:

* Desktop (1440 px)
* Tablet (768 px)
* Mobile (375 px)

---

## **5  Tasks / Instructions**

### **A  Continue from MP2B Figma File**

1. Duplicate your MP2B file and rename it `studentID_WEBD3100_MP2C_Corah`.
2. Add three frames per page (Desktop, Tablet, Mobile).
3. Use Auto Layout and Constraints to create fluid, adaptive layouts.
4. Maintain your design system (colors, typography, components).

---

### **B  Breakpoints & Grid Setup (Integrated Reference)**

| Device      | Width (px)  | Columns | Layout Behavior                 | Usage                      |
| :---------- | :---------- | :------ | :------------------------------ | :------------------------- |
| **Mobile**  | 375 × 812   | 4       | Single column, stacked sections | Core content, primary CTA  |
| **Tablet**  | 768 × 1024  | 8       | 2 columns, moderate spacing     | Balance content & image    |
| **Desktop** | 1440 × 1024 | 12      | Full layout, multi-column grids | Rich imagery, expanded nav |

💡 *Margins: Mobile 16–24 px, Desktop 40–120 px. Use the 8-point spacing system consistently.*

---

### **C  Mobile-First Design Workflow**

**Start small → enhance upward**

1. **Mobile (375 px)** – Simplify navigation (☰ menu), 1 CTA, 1 column.
2. **Tablet (768 px)** – Add columns and visual hierarchy; introduce side content.
3. **Desktop (1440 px)** – Expand white space and multi-column content.

> “Design for constraint first — then add enhancement.”

---

### **D  Homepage Responsive Examples**

#### **Desktop (Base Layout)**

```
────────────────────────────────────────────────────────────
| HEADER | Logo | Nav Menu | CTA | Login |
────────────────────────────────────────────────────────────
| HERO   | Split Hero (Image + Text)                      |
────────────────────────────────────────────────────────────
| MAIN   | [Event] [Volunteer] [News] Cards (3-col)        |
────────────────────────────────────────────────────────────
| FOOTER | Quick Links | Contact | Social Icons | © CORAH |
────────────────────────────────────────────────────────────
```

#### **Tablet**

```
────────────────────────────────────────────────────────────
| HEADER | Logo | Menu ☰ |
────────────────────────────────────────────────────────────
| HERO   | Stacked: Headline / CTA / Image below |
────────────────────────────────────────────────────────────
| MAIN   | 2 Cards per row (Events + Volunteer) |
────────────────────────────────────────────────────────────
| FOOTER | 2-Column Footer |
────────────────────────────────────────────────────────────
```

#### **Mobile**

```
────────────────────────────────────────────────────────────
| HEADER | Logo  ☰ |
────────────────────────────────────────────────────────────
| HERO   | Headline / CTA Buttons (Stacked) |
────────────────────────────────────────────────────────────
| MAIN   | Cards (Stacked vertically) |
────────────────────────────────────────────────────────────
| FOOTER | Stacked info | Centered social icons |
────────────────────────────────────────────────────────────
```

---

### **E  Subpage Responsive Examples (Events Page)**

#### **Desktop**

```
────────────────────────────────────────────────────────────
| HEADER | Same as Homepage |
────────────────────────────────────────────────────────────
| TITLE  | "Upcoming Events"  | Breadcrumbs |
────────────────────────────────────────────────────────────
| MAIN   | Sidebar + 3-column event cards |
────────────────────────────────────────────────────────────
| FOOTER | Standard footer |
────────────────────────────────────────────────────────────
```

#### **Tablet**

```
────────────────────────────────────────────────────────────
| HEADER | Collapsed nav (☰) |
────────────────────────────────────────────────────────────
| MAIN   | 2 Cards per row; filters below cards |
────────────────────────────────────────────────────────────
| FOOTER | Compact footer |
────────────────────────────────────────────────────────────
```

#### **Mobile**

```
────────────────────────────────────────────────────────────
| HEADER | Logo  ☰ |
────────────────────────────────────────────────────────────
| TITLE  | "Upcoming Events" |
────────────────────────────────────────────────────────────
| MAIN   | Cards stacked vertically |
────────────────────────────────────────────────────────────
| FOOTER | Stacked content + centered links |
────────────────────────────────────────────────────────────
```

---

### **F  Layout Adaptation Patterns**

#### **1. Stacking**

```
Desktop: [Hero Img] [Text + CTA]
Tablet:  [Hero Img]
          [Text + CTA]
Mobile:  [Text]
          [CTA]
          [Hero Img]
```

#### **2. Fluid Grid**

```
Desktop: [Card][Card][Card]
Tablet:  [Card][Card]
Mobile:  [Card]
          [Card]
          [Card]
```

#### **3. Responsive Navigation**

```
Desktop: [Logo] [Nav Links] [CTA]
Tablet:  [Logo] [Menu ☰]
Mobile:  [☰] Logo [CTA (optional)]
```

---

### **G  Responsive Design Principles + Accessibility**

| Principle              | Guideline                                                 |
| :--------------------- | :-------------------------------------------------------- |
| **Fluid Grids**        | Use relative widths (% or fractions) instead of fixed px. |
| **Flexible Images**    | Images scale with container; don’t crop key content.      |
| **Typography Scaling** | Desktop H1 32 px → Tablet 28 px → Mobile 22 px.           |
| **Touch Targets**      | ≥ 44×44 px min for buttons/links.                         |
| **Color Contrast**     | WCAG AA (≥ 4.5 : 1). Test with plugins.                   |
| **Line Height**        | 1.4–1.6× font size for readability.                       |
| **Focus Order**        | Logical top → bottom → CTA.                               |
| **Navigation**         | Avoid hover-only states; ensure touch feedback.           |

💡 *Use plugins such as Able or Contrast Checker to validate accessibility.*

---

### **H  Layer Naming Example (for Responsive Frames)**

```
Homepage/
 ├── Frame – Desktop (1440)
 ├── Frame – Tablet (768)
 ├── Frame – Mobile (375)
 └── Components/
      ├── Header (Variants)
      ├── Hero (Responsive)
      ├── Card – Event
      └── Footer (Responsive)
```

🧩 Each component should use Auto Layout and scale properly at each breakpoint.

---

### **I  Student Checklist (Before Submitting)**

✅ Three frames for each page (Desktop, Tablet, Mobile)
✅ Mobile-first approach used (document your workflow)
✅ Auto Layout + Constraints applied to sections
✅ Navigation adapts appropriately (☰ menu on mobile)
✅ Consistent color + font styles across devices
✅ Accessible contrast and touch targets
✅ Annotations explaining breakpoints and pattern choices

---

### **J  Annotate Your Work**

Include a Notes frame with:

* Breakpoints used (Desktop, Tablet, Mobile).
* Grid and spacing logic.
* Accessibility choices (font, contrast).
* Component behavior (navigation, cards, footer).

---

## **6  Deliverable**

| Deliverable                     | Format            | Details                                                                                                      |
| :------------------------------ | :---------------- | :----------------------------------------------------------------------------------------------------------- |
| Figma Responsive Design Project | Shared Figma link | Homepage and Subpage layouts for Desktop, Tablet, and Mobile. Project named `studentID_WEBD3100_MP2C_Corah`. |

---

## **7  Submission Guidelines**

* Share your Figma link with view access to **`davis.boudreau@nscc.ca`**
* Confirm project name matches the naming standard.
* Ensure frames, components, and annotations are visible for assessment.

---

## **8  Assessment & Rubric**

| Criteria                           | Excellent (A)                                             | Proficient (B)         | Developing (C)        | Needs Improvement (D/F)     |
| :--------------------------------- | :-------------------------------------------------------- | :--------------------- | :-------------------- | :-------------------------- |
| **Responsive Layouts (30%)**       | Fully adaptive across devices; smooth flow and hierarchy. | Mostly responsive.     | Partial adaptation.   | One layout or poor scaling. |
| **Consistency & Branding (25%)**   | Visual system consistent across devices.                  | Mostly consistent.     | Partial reuse.        | Disjointed styles.          |
| **Accessibility (25%)**            | Contrast, readability, touch targets fully met.           | Minor issues.          | Some low contrast.    | Fails basic accessibility.  |
| **Auto Layout & Components (20%)** | All responsive with clean structure.                      | Minor inconsistencies. | Some static elements. | No adaptive behavior.       |

---

## **9  Resources / Equipment**

| Resource                         | Purpose                        | Link                                                                                                                                           |
| :------------------------------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Figma**                        | Responsive frames & components | [https://www.figma.com](https://www.figma.com)                                                                                                 |
| **Material Design Layout Guide** | Responsive spacing reference   | [https://m3.material.io/foundations/layout/responsive-design](https://m3.material.io/foundations/layout/responsive-design)                     |
| **Contrast Checker**             | Test color contrast            | [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)                                                 |
| **Breakpoints Plugin**           | Preview transitions            | [https://www.figma.com/community/plugin/781195371206832697/Breakpoints](https://www.figma.com/community/plugin/781195371206832697/Breakpoints) |
| **Able Plugin (A11y)**           | Accessibility testing in Figma | Figma Community Plugins                                                                                                                        |

---

## **10  Academic Policies**

All work must be your own. Use your MP2B file as a starting point but apply your own responsive design logic and annotations.

---

## **11  Copyright Notice**

© 2025 Nova Scotia Community College – School of Technology & Environment.
For educational use only.
