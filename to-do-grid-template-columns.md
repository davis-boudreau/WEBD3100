
### **What is `grid-template-columns` in CSS?**

`grid-template-columns` is a **CSS property used in Grid Layout** to define the number and size of columns in a grid container. It tells the browser how wide each column should be.

***

### **How It Works**

*   You apply it to a container that has `display: grid;`.
*   It accepts **lengths**, **percentages**, **fractions (fr)**, or keywords like `auto`.

Example:

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
}
```

**Explanation:**

*   First column: `200px` wide (fixed size).
*   Second column: `1fr` (takes up 1 fraction of remaining space).
*   Third column: `2fr` (takes up twice as much space as the second column).

***

### **Common Units**

*   **px**: Fixed pixel width.
*   **%**: Percentage of the container width.
*   **fr**: Fractional unit (distributes remaining space proportionally).
*   **auto**: Size based on content.

***

### **Repeat Function**

You can use `repeat()` to simplify:

```css
grid-template-columns: repeat(3, 1fr);
```

This creates **3 equal columns**.

***

### **Why Use It?**

*   Makes responsive layouts easier.
*   Gives precise control over column sizing.
*   Works well with `grid-template-rows` for full grid control.

***

Great question! The **`fr` unit** is one of the most powerful features of CSS Grid, so explaining it well will really help your students understand responsive design.

***

### **What is the `fr` Unit?**

`fr` stands for **fractional unit**. It represents a **portion of the available space** in a grid container after accounting for:

*   Fixed-width columns (like `px` or `%`)
*   Gaps (`grid-gap` or `gap`)
*   Content-based columns (`auto`)

So, `fr` is not an absolute size like `px` or `%`. Instead, it divides the **remaining free space** into fractions.

***

### **How It Works**

Imagine you have:

```css
grid-template-columns: 1fr 2fr;
```

*   The **total available space** (after subtracting fixed widths and gaps) is divided into **3 equal parts**.
*   First column gets **1 part** (1/3 of the space).
*   Second column gets **2 parts** (2/3 of the space).

***

### **Key Points**

*   `fr` only applies to **free space**, not the entire container width.
*   If you mix `fr` with fixed units, the fixed units are allocated first, then the remaining space is divided by `fr`.

Example:

```css
grid-template-columns: 200px 1fr 1fr;
```

*   First column: **200px fixed**.
*   Remaining space: split equally between the two `1fr` columns.

***

### **Why Use `fr`?**

*   Makes layouts **flexible and responsive**.
*   Avoids hardcoding widths for every screen size.
*   Works well with `repeat()` for equal columns:

```css
grid-template-columns: repeat(3, 1fr);
```

Creates **3 equal columns** that share available space.

***

