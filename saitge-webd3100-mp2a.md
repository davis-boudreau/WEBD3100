![alt text](image.png)

---

## **1. Assignment Details**

* **Course Code:** WEBD 3100 – Web Design Fundamentals
* **Assignment Title:** MP2A – Wireframe Set (Home + Subpage)
* **Type:** Mini-Project 2A (Individual)
* **Weight:** See LMS (Brightspace)
* **Estimated Time:** 5–8 hours
* **Due Date:** See LMS (Brightspace)
* **Submission Format:** Figma link only (shared to `davis.boudreau@nscc.ca`)
* **Figma Project Name:** `studentID_WEBD3100_MP2A_Corah`

---

## **2. Overview / Purpose / Objectives**

This project converts your **MP1 planning** (personas, sitemap, and content inventory) into clear, structural wireframes.
You’ll design a **Homepage** and one **Subpage** that communicate layout, hierarchy, and accessibility without any styling.

**Objectives**

* Create accessible, grid-aligned wireframes using Figma.
* Apply the **8-point spacing system**, alignment, and proximity rules.
* Organize content with **Auto Layout** and professional layer naming.
* Demonstrate understanding of **visual scanning patterns** (F, Z, Split Hero).

---

## **3. Learning Outcomes Addressed**

| #       | Description                                               |
| :------ | :-------------------------------------------------------- |
| **LO1** | Apply design principles to web content presentation.      |
| **LO2** | Design mock-ups based on requirements and specifications. |

---

## **4. Assignment Description / Use Case**

**CORAH (Caring Outreach for Rural Aging & Health)** connects Nova Scotia seniors with events and volunteer opportunities.
You’ll transform its site architecture into two wireframes that organize information clearly for both senior users and staff.

---

## **5. Tasks / Instructions**

### **A. Project Setup**

1. Create a new Figma file named `studentID_WEBD3100_MP2A_Corah`.
2. Add two desktop frames (1440 × 1024): **Homepage** and **Subpage (Events or Volunteer)**.
3. Enable a **12-column grid** (120 px margins, 24 px gutters).
4. Use **Auto Layout** for Header, Hero, Main, and Footer sections.
5. Follow this layer naming hierarchy:
   `Section / Container / Component / Element`
   e.g. `Header / Navigation / NavItem – Events`

---

### **B. Homepage Structure (Required Sections)**

#### **1) Header – Navigation & Identity**

Select 3–6 components and arrange logically:

* Logo
* Navigation (5–7 links)
* Search icon or field
* Language toggle (optional)
* Login / Logout (for staff)
* Primary CTA (e.g., Volunteer Now)
* Utility links (Contact, Donate)

Use Auto Layout (Row) with equal padding (24 px).
Apply 8-point spacing for consistent gaps.

---

#### **2) Hero Section – Intro & CTA**

Select 2–4 components: Headline, Subheadline, Primary CTA, Secondary CTA, Visual Placeholder, or Support Text.
Pick a **layout pattern** (F, Z, or Split Hero) and label your choice on the canvas.

---

#### **3) Footer – Information & Trust**

Include 3–6 components such as: Contact info, Quick Links, Social Icons, Copyright, Accessibility Statement, Newsletter Signup.
Use Auto Layout (Column) and group related items by proximity.

---

### **📘 Homepage Layout Example (Low-Fidelity Wireframe)**

```
------------------------------------------------------------
| HEADER |  Logo   |  Navigation Menu  |  CTA  |  Login    |
------------------------------------------------------------
| HERO   |  Headline: "Connecting Communities"             |
|        |  Subheadline: "Empowering Seniors in Nova Scotia"|
|        |  [Primary CTA: View Events] [Secondary: Volunteer]|
------------------------------------------------------------
| MAIN   |  3 Column Highlights:                           |
|        |  [Event Teaser] [Volunteer Story] [News Card]    |
------------------------------------------------------------
| FOOTER |  Quick Links | Contact Info | Social Icons       |
|        |  © CORAH 2025 | Accessibility Statement           |
------------------------------------------------------------
```

💡 Each section (Header, Hero, Main, Footer) must be its own Frame with Auto Layout enabled.
Maintain vertical rhythm in multiples of 8 px.

---

### **C. Subpage Structure (Choose One)**

#### **Option 1 – Events Page**

* Page Header (H1: “Upcoming Events”)
* Breadcrumbs (optional)
* Event Cards (3–6 stubs)
* Optional Sidebar (Filters or Categories)
* CTA (“Register for Event”)

#### **Option 2 – Volunteer Page**

* Page Header (H1: “Volunteer with CORAH”)
* Role Cards (list of positions)
* CTA (“Sign Up to Help”)
* Optional FAQ block

---

### **📄 Events Subpage Example**

```
------------------------------------------------------------
| HEADER |  Reuse same header frame from Homepage           |
------------------------------------------------------------
| PAGE TITLE |  "Upcoming Events" | Breadcrumbs (Home > Events)
------------------------------------------------------------
| MAIN CONTENT AREA |
|  [Filter Sidebar]   [Event Cards Container]
|   - Filter by Date   - Event 1 (Title + Date + CTA)
|                      - Event 2 (Title + Date + CTA)
------------------------------------------------------------
| FOOTER |  Reuse Footer frame from Homepage                |
------------------------------------------------------------
```

🧭 Keep the vertical spacing consistent (8, 16, 24, 32 px).
Label each container clearly in the Layers panel.

---

### **D. Layout Pattern Theory (F, Z, and Split Hero)**

| Pattern        | When to Use                                    | Eye Flow                                                                                               | Common Use Case                            |
| :------------- | :--------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| **F-Layout**   | Pages with lots of text or structured content. | Eye moves down left margin (first lines of each paragraph) then right across short bursts – forms “F”. | Blogs, news articles, content-heavy pages. |
| **Z-Pattern**  | Simpler pages with few key sections and a CTA. | Eye moves left → right (top row), diagonally to bottom left, then right again – forms “Z”.             | Landing pages, heroes with CTA button.     |
| **Split Hero** | When text and image share equal importance.    | Eye travels between two columns – visual (left copy / right image).                                    | Homepages, brand introductions.            |

💬 In your annotations, note which pattern you applied and why it fits CORAH’s audience.

---

### **E. Layer Naming Example (for both pages)**

```
Homepage/
 ├── Header/
 │    ├── Logo
 │    ├── Navigation/
 │    │    ├── NavItem – About
 │    │    ├── NavItem – Events
 │    │    └── NavItem – Contact
 │    └── CTA – Volunteer
 ├── Hero/
 │    ├── Headline
 │    ├── Subheadline
 │    └── ButtonGroup/
 │         ├── CTA – View Events
 │         └── CTA – Volunteer
 ├── Main/
 │    ├── Card – Event
 │    ├── Card – News
 │    └── Card – Volunteer
 └── Footer/
      ├── Quick Links
      ├── Social
      └── Legal
```

🧱 Each section is a Frame with Auto Layout. Nested containers control alignment and Z-order.
Use clear titles for all elements to support future high-fidelity design and HTML conversion.

---

### **F. Annotate Your Work**

Add a small notes area on each page:

* List chosen components and brief rationale.
* State the layout pattern (F/Z/Split).
* Describe accessibility and spacing choices (8-point examples).

---

## **6. Deliverable**

| Deliverable             | Format            | Details                                                                                                                                     |
| :---------------------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Figma Wireframe Project | Shared Figma link | Homepage (Header + Hero + Footer) and Subpage layout (Events or Volunteer) with annotations. Project named `studentID_WEBD3100_MP2A_Corah`. |

---

## **7. Submission Guidelines**

* Share your Figma link (view access) to **`davis.boudreau@nscc.ca`**
* Ensure project is named **`studentID_WEBD3100_MP2A_Corah`**
* No PDF upload required. Instructor will review layers and annotations directly in Figma.

---

## **8. Assessment & Rubric**

| Criteria                              | Excellent (A)                                                     | Proficient (B)              | Developing (C)                        | Needs Improvement (D/F)       |
| :------------------------------------ | :---------------------------------------------------------------- | :-------------------------- | :------------------------------------ | :---------------------------- |
| **Layout Structure (30%)**            | Strong hierarchy, grid alignment, logical flow.                   | Mostly clear, minor issues. | Mixed hierarchy or inconsistent flow. | Disorganized layout.          |
| **Component Suitability (25%)**       | Components well-chosen for CORAH audience and justified in notes. | Mostly appropriate.         | Limited rationale.                    | Random or irrelevant choices. |
| **Containers & Layers (25%)**         | Accurate Auto Layout use, proper nesting and naming.              | Mostly correct.             | Partial structure.                    | Poor organization.            |
| **8-Point Spacing & Alignment (20%)** | Consistent spacing and grid discipline.                           | Minor inconsistencies.      | Uneven spacing.                       | No spacing logic applied.     |

---

## **9. Resources / Equipment**

| Resource                | Purpose                        | Link                                                                                               |
| :---------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------- |
| **Figma**               | Wireframing & Auto Layout tool | [https://www.figma.com](https://www.figma.com)                                                     |
| **Wireframe Kits**      | Starter components             | [Figma Community – Wireframe Templates](https://www.figma.com/community/)                          |
| **Auto Layout Guide**   | Learn containers               | [Figma Help: Auto Layout](https://help.figma.com/hc/en-us/articles/5731487356183)                  |
| **8-Point Grid System** | Spacing rules                  | [Material Design Spacing Guide](https://m3.material.io/foundations/layout/applying-layout/spacing) |

---

## **10. Academic Policies**

All wireframes must be individually authored. Collaboration on ideas is allowed; copying layouts is not.

---

## **11. Copyright Notice**

© 2025 Nova Scotia Community College – School of Technology & Environment. For educational use only.
