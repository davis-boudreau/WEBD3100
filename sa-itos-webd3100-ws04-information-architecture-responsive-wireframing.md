# WEBD 3100 --- Workshop 04

## Information Architecture & Responsive Wireframing

**Student Workshop Guide \| Fall 2026**\
**Instructor:** Davis Boudreau\
**Weight:** 4% (Workshop 04)\
**Duration:** Approximately 3--4 hours, plus independent project
refinement\
**Prerequisites:** WS02 and WS03A/03B\
**Tools:** Figma, browser, VS Code, GitHub, Brightspace\
**Prepares for:** **M2 --- Sitemap + Responsive Figma Wireframes (10%)**

> **Challenge:** Organize a website around user tasks, build a clear
> sitemap, and design mobile-first wireframes that adapt to tablet and
> desktop. First use the NSCC event-management case study; then apply
> the same process to your semester redesign.

**Assessment distinction:** Workshop 04 (4%) and Milestone 2 (10%) are
separate assessments. WS04 provides draft artifacts and practical
preparation for M2.

------------------------------------------------------------------------

## 1. Overview and learning objectives

Information architecture (IA) organizes content around user needs. A
**sitemap** describes the relationship between pages; a **user journey**
describes steps toward a goal; a **wireframe** represents the structure
of an individual page before visual styling.

By the end, you should be able to:

1.  Inventory and group content into logical categories.
2.  Build a hierarchical sitemap with understandable navigation labels.
3.  Map two user journeys and identify obstacles.
4.  Create low-fidelity, mobile-first Figma wireframes.
5.  Adapt page structure for tablet and desktop.
6.  Evaluate accessibility, task flow, and responsive behaviour.
7.  Explain and revise design decisions, retaining evidence for M2.

### Learning journey

``` mermaid
flowchart TD
  A[Identify users and tasks] --> B[Inventory content]
  B --> C[Create sitemap]
  C --> D[Map user journeys]
  D --> E[Wireframe mobile]
  E --> F[Adapt tablet and desktop]
  F --> G[Peer walkthrough and revisions]
  G --> H[Apply to semester project]
  H --> I[Prepare Milestone 2]
```

## 2. Prior knowledge check (10 minutes)

In your Workshop Worksheet, answer:

-   How is a sitemap different from a navigation menu?
-   Why organize content before choosing colours and typefaces?
-   What makes a mobile wireframe different from a shrunken desktop
    layout?
-   What might prevent a visitor from completing an event registration?

**Discuss and analyze:** Compare the navigation of two websites. Which
better supports a common visitor task? Explain with specific evidence.

## 3. Concepts and demonstration (15 minutes)

  -----------------------------------------------------------------------
  Concept                 Definition              Design question
  ----------------------- ----------------------- -----------------------
  Content inventory       List of pages,          What must the website
                          functions, and          contain?
                          information             

  Information             Grouping and naming     Where should
  architecture            content                 information live?

  Sitemap                 Hierarchy and           How do pages connect?
                          relationships between   
                          pages                   

  Navigation              Interface for reaching  Can visitors find a
                          destinations            page?

  User journey            Sequence of steps to    Can a visitor complete
                          achieve a goal          the task?

  Wireframe               Low-fidelity page       What content takes
                          structure               priority?

  Responsive layout       Adaptation to available What changes at smaller
                          screen width            widths?
  -----------------------------------------------------------------------

**Example task:** Find an event → review details → register → receive
confirmation.

**Instructor/facilitator demonstration:** Explain why Registration and
Confirmation may be important pages without appearing in the top
navigation.

------------------------------------------------------------------------

## 4. Part A --- Information architecture (60 minutes)

### Activity 1 --- Content inventory and navigation (15 minutes)

**Scenario:** Design an NSCC event-management website.

  Content            Purpose
  ------------------ -------------------------------------------
  Home               Introduce the service and featured events
  Events             Browse and filter events
  Event Details      Review date, location, description
  Registration       Complete registration
  Confirmation       Confirm successful registration
  My Registrations   View existing registrations
  Contact            Request support

**What:** Group pages into primary navigation, secondary navigation, and
task-specific pages.\
**Why:** Not every destination belongs in the top menu.\
**How:** Create a Figma page called `WS04 — IA & Wireframes`, add a
`Content Inventory` frame, and use labelled shapes to group
destinations. Identify three key user tasks.

**Checkpoint A1:** Record your proposed main navigation and explain one
page you intentionally excluded.

### Activity 2 --- Hierarchical sitemap (20 minutes)

Use Figma shapes and connectors to reproduce and improve this example:

``` mermaid
flowchart TD
  H[Home] --> E[Events]
  H --> M[My Registrations]
  H --> C[Contact]
  E --> D[Event Details]
  D --> R[Registration]
  R --> F[Confirmation]
```

**How:** Label pages clearly, connect destinations, distinguish primary
from task-specific pages, and check that each major user goal has a
plausible route.

**Checkpoint A2:** Ask another student to trace the route from Home to
Registration. Record one improvement.

### Activity 3 --- Two user journeys (25 minutes)

Create two journeys in Figma:

1.  **Primary:** Find an event and register.
2.  **Supporting:** Find an existing registration or contact support.

For each, record the user action, screen/page, possible obstacle, and
proposed improvement.

  Step   User action            Page            Possible obstacle
  ------ ---------------------- --------------- --------------------------
  1      Find upcoming events   Home            Link difficult to locate
  2      Select an event        Events          Poor labels
  3      Review event           Event Details   Key information hidden
  4      Register               Registration    Confusing form
  5      Confirm                Confirmation    Unclear success message

**Checkpoint A3:** Identify the greatest obstacle in each journey and
propose a response.

------------------------------------------------------------------------

## 5. Part B --- Responsive wireframing (80 minutes)

### Activity 4 --- Mobile-first Figma wireframes (35 minutes)

**What:** Create two low-fidelity frames at approximately **375px**
wide:

-   `Home — Mobile 375`
-   One important task page, such as `Event Details — Mobile 375`

**Why:** A narrow screen encourages prioritization and a clear reading
order.

**How:**

1.  Use grayscale rectangles, labels, and placeholder content rather
    than finished colours or imagery.
2.  Include header, navigation access, page heading, primary content,
    call to action, and footer.
3.  Ensure controls have clear names and a logical sequence.
4.  Show the most important task without requiring horizontal scrolling.
5.  Annotate key content and navigation choices.

**Checkpoint B1:** Save both frames and describe your most important
mobile content decision.

### Activity 5 --- Tablet and desktop adaptations (30 minutes)

Duplicate the Home frame and create:

-   `Home — Tablet 768`
-   `Home — Desktop 1280`

These are **reference viewport widths**, not mandatory CSS breakpoints.

  -----------------------------------------------------------------------
  Design choice     Mobile (\~375px)  Tablet (\~768px)  Desktop
                                                        (\~1280px)
  ----------------- ----------------- ----------------- -----------------
  Navigation        Compact but       Compact or        Expanded when
                    discoverable      expanded          appropriate

  Grid              Typically one     Often two         Often multiple
                    column                              

  Content order     Task-first        Preserve reading  Preserve
                                      logic             hierarchy

  Main CTA          Visible and       Clearly prominent Clearly prominent
                    touch-friendly                      
  -----------------------------------------------------------------------

**How:** Reconsider navigation, columns, alignment, spacing, and content
priority. Use Figma Auto Layout where appropriate; do not merely stretch
the mobile elements.

**Checkpoint B2:** Annotate **three responsive decisions** and compare
the three frames side by side.

### Activity 6 --- Peer walkthrough and revision (15 minutes)

Give a peer this task: **"Find an upcoming event and show me where you
would register."**

Observe without coaching. Record:

-   Whether the intended path was discoverable.
-   Two observations or points of confusion.
-   One specific revision you made.

**Checkpoint B3:** Include before/after notes. This is a formative
walkthrough, **not** the formal usability testing required for M4.

------------------------------------------------------------------------

## 6. Part C --- Apply to your semester project (45--60 minutes or independent follow-up)

Create a Figma section titled `WS04 — Semester Project IA & Wireframes`.
For your **own selected redesign project**, produce:

1.  Content inventory and proposed primary navigation.
2.  Hierarchical sitemap.
3.  Two user journeys.
4.  Mobile Home and one task-page wireframe.
5.  Tablet and desktop Home wireframes.
6.  Three responsive design annotations.
7.  Peer feedback, one documented revision, and a short rationale.

**Connection to WS03A/03B:** Your Colour System V1 and Typography System
V1 will inform later high-fidelity design. Keep these wireframes **low
fidelity** and focused on structure.

Complete in the worksheet:

> Our primary users need to \_\_\_\_. We organized the site around
> \_\_\_\_. On mobile, we prioritize \_\_\_\_. We will test these
> decisions by \_\_\_\_.

------------------------------------------------------------------------

## 7. Checkpoints and verification

  -----------------------------------------------------------------------
  Checkpoint                          Evidence
  ----------------------------------- -----------------------------------
  A1                                  Content inventory and navigation
                                      rationale

  A2                                  Sitemap and peer route check

  A3                                  Two journeys and obstacles

  B1                                  Two mobile wireframes

  B2                                  Tablet/desktop Home frames and
                                      three annotations

  B3                                  Peer observations and one revision

  Project application                 Own-project sitemap, journeys,
                                      wireframes, rationale
  -----------------------------------------------------------------------

### Troubleshooting

-   **Sitemap looks like a page:** Show page relationships, not content
    blocks.
-   **Every page is in the main menu:** Separate primary navigation from
    task-specific screens.
-   **Tablet is a stretched mobile page:** Reconsider the layout and
    content grouping.
-   **Wireframes are visually polished:** Return to grayscale; focus on
    structure.
-   **Peer feedback is vague:** Ask the peer to perform a specific task.

------------------------------------------------------------------------

## 8. Reflection and closing review

Answer in the Workshop Worksheet and complete the required Brightspace
reflection:

1.  Which IA decision most influenced your sitemap?
2.  What changed most between mobile and desktop, and why?
3.  What did the peer walkthrough reveal?
4.  How will WS03A/03B design tokens affect your eventual visual design?
5.  What needs refinement before M2?

**Instructor-led class review (10--15 minutes):** Show your sitemap and
responsive Home frames. Explain one decision, one concern, and one
revision.

------------------------------------------------------------------------

## 9. Student deliverables & submission guidelines

**All students** complete the Workshop Worksheet during the activities,
recording predictions, observations, test results, decisions, peer
feedback, and reflections. Retain the Figma link and clearly labelled
workshop frames.

**In-class students** complete the worksheet and join the instructor-led
review at the end; worksheet submission is **not required unless
separately directed**. **Absent students** complete the full workshop
and worksheet independently and submit the completed worksheet to
**Brightspace**.

**All students** retain their Figma evidence and commit/push any
supporting technical files to GitHub **where applicable**. Complete the
required **Brightspace reflection**. No empty code commit is necessary
for Figma-only work.

### Evidence to retain

-   NSCC guided sitemap, journeys, and responsive wireframes.
-   Own-project sitemap, journeys, and responsive wireframes.
-   Peer feedback and revision notes.
-   Worksheet and Brightspace reflection.
-   GitHub link if technical work was created.

------------------------------------------------------------------------

## 10. Evaluation --- Workshop 04 (4%)

  -----------------------------------------------------------------------
  Criterion                           Evidence
  ----------------------------------- -----------------------------------
  **A --- Attendance**                Engagement or completion of
                                      independent pathway

  **P --- Participation**             Discussion, walkthrough, and review

  **T --- Task Progress**             IA artifacts, journeys, wireframes,
                                      revisions

  **F --- Focus & Professional        Productive independent work and
  Conduct**                           constructive feedback

  **R --- Reflection / Exit           Reasoning, feedback, lessons, and
  Evidence**                          next steps
  -----------------------------------------------------------------------

The established workshop scoring framework applies; **no new assessment
weight** is introduced.

------------------------------------------------------------------------

## 11. Milestone 2 readiness --- Separate assessment (10%)

**M2 --- Sitemap + Responsive Figma Wireframes** is a separate formal
project assessment. Refine your WS04 draft into a coherent,
reviewer-ready set of artifacts.

  -----------------------------------------------------------------------
  M2 requirement          Prepared in WS04        Refine for submission
  ----------------------- ----------------------- -----------------------
  Sitemap                 Hierarchical page       Confirm scope, labels,
                          structure               relationships

  Responsive wireframes   Mobile Home/task page;  Complete page coverage
                          tablet/desktop Home     in M2 brief

  Design rationale        Journey and responsive  Explain choices and
                          annotations             feedback

  Figma organization      Named WS04 frames       Organize reviewer-ready
                                                  submission
  -----------------------------------------------------------------------

**The M2 assignment brief controls the final required page count,
submission method, and due date.** WS04 does not replace or alter those
requirements.

**Next:** WS04 → **M2** → WS05 (Responsive UI & Interactive Prototyping)
→ M3.

------------------------------------------------------------------------

*WEBD 3100 --- Workshop 04 \| Information Architecture & Responsive
Wireframing \| Fall 2026*
