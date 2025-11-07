Great! Here's a **tutorial-style lesson** designed for students to learn how to build a **responsive logo container using Flexbox and CSS concepts**. This guide is structured to teach foundational CSS layout techniques while building a practical component.

***

# 🎓 **Web Design Tutorial: Building a Responsive Logo Container with Flexbox**

### 🧑‍🏫 **Lesson Overview**

In this tutorial, students will learn how to:

*   Structure HTML for layout flexibility
*   Use CSS Flexbox for responsive design
*   Apply media queries for device-specific styling
*   Understand key CSS concepts like `flex`, `object-fit`, and `max-width`

***

## 📘 **Part 1: Understanding the Goal**

We want to create a logo section that:

*   Displays **two logos side-by-side** on desktop screens
*   **Stacks the logos vertically** on mobile screens
*   Allows **individual control** over each logo’s size and styling

> 📌 **Use Case**: This layout is ideal for websites with multiple brand partners, sponsors, or co-branded initiatives.

***

## 🧩 **Part 2: HTML Structure**

We start by creating a container that holds two logo items. Each logo is placed in its own `div` for maximum control.

### ✅ HTML Code


> 🧠 **Why use separate containers?**\
> This allows us to style each logo independently, control spacing, and apply responsive behavior more easily.

***

## 🎨 **Part 3: Styling with Flexbox**

Flexbox is a powerful layout model in CSS that makes it easy to align and distribute space among items in a container.

### ✅ CSS Code

```css
.logo-container {
  display: flex;              /* Enables Flexbox */
  flex-wrap: wrap;            /* Allows items to wrap on smaller screens */
  justify-content: center;    /* Centers items horizontally */
  align-items: center;        /* Aligns items vertically */
  gap: 1rem;                  /* Adds space between items */
  padding: 1rem;
}

.logo-item {
  flex: 1 1 300px;            /* Grow, shrink, and base width */
  max-width: 400px;           /* Prevents logos from getting too large */
}

.logo-item img {
  width: 100%;                /* Makes image fill its container */
  height: auto;               /* Maintains aspect ratio */
  object-fit: contain;        /* Ensures image fits without distortion */
  display: block;
}
```

***

## 📱 **Part 4: Making It Responsive with Media Queries**

Media queries let us apply different styles depending on the screen size.

### ✅ CSS Media Queries

```css
/* Medium screens (tablets) */
@media (max-width: 768px) {
  .logo-item {
    flex: 1 1 45%;
    max-width: 100%;
  }
}

/* Small screens (phones) */
@media (max-width: 480px) {
  .logo-container {
    flex-direction: column; /* Stack logos vertically */
  }

  .logo-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
```

***

## 🧠 **Key CSS Concepts Explained**

| Concept               | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `display: flex`       | Turns the container into a Flexbox layout                    |
| `flex-wrap: wrap`     | Allows items to wrap to the next line                        |
| `flex: 1 1 300px`     | Sets grow, shrink, and base width                            |
| `max-width`           | Limits how wide an element can grow                          |
| `object-fit: contain` | Ensures the image fits inside its container without cropping |
| `media queries`       | Apply styles based on screen width                           |

***

## 🖼️ **Part 5: Illustration Placeholder**

> 📌 **Insert Illustration Here**\
> *(You can provide a visual showing how the logos appear on desktop, tablet, and mobile views. I’ll help you insert it when ready.)*

***

## 🧪 **Part 6: Student Challenge**

Try modifying the layout to:

*   Add a third logo
*   Change the layout to a grid instead of Flexbox
*   Add hover effects to each logo

***

## ✅ **Summary**

By completing this tutorial, students will:

*   Understand how to use Flexbox for layout control
*   Learn how to make designs responsive with media queries
*   Gain confidence in structuring HTML and CSS for real-world components

***

Would you like this formatted into a printable PDF or include a quiz section at the end for review?
