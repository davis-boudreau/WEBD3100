In user interface (UI) design for web pages, especially when using buttons, it's essential to communicate the **interactive states** of those buttons clearly to users. These states help users understand what the button is doing or will do, and improve usability and accessibility. Here are the **key button states** a designer should articulate:

---

### **1. Default (Resting) State**
- **What it is**: The button's normal appearance when it's not being interacted with.
- **Design cues**: Color, shape, label, icon (if any), and size should be clear and consistent with the design system.

---

### **2. Hover State**
- **What it is**: When the user moves the cursor over the button.
- **Design cues**: Slight color change, shadow, border highlight, or animation to indicate interactivity.
- **Purpose**: Provides feedback that the button is clickable.

---

### **3. Focus State**
- **What it is**: When the button is selected via keyboard navigation (e.g., using the Tab key).
- **Design cues**: Often a visible outline or glow around the button.
- **Purpose**: Crucial for accessibility and keyboard users.

---

### **4. Active (Pressed) State**
- **What it is**: When the button is being clicked or tapped.
- **Design cues**: Usually a darker shade, inset shadow, or slight scale-down effect.
- **Purpose**: Indicates that the action is being initiated.

---

### **5. Disabled State**
- **What it is**: When the button is not available for interaction.
- **Design cues**: Dimmed color, reduced contrast, no hover or active effects.
- **Purpose**: Communicates that the action is unavailable, often with a tooltip or explanation.

---

### **6. Loading State**
- **What it is**: When the button has been clicked and the action is in progress.
- **Design cues**: Spinner or progress indicator, label change (e.g., “Submitting…”).
- **Purpose**: Prevents duplicate actions and informs the user that something is happening.

---

### **7. Success / Confirmation State**
- **What it is**: After a successful action.
- **Design cues**: Color change (e.g., green), icon (checkmark), label update (e.g., “Done”).
- **Purpose**: Provides positive feedback.

---

### **8. Error State**
- **What it is**: When the action fails.
- **Design cues**: Red color, error icon, tooltip or message.
- **Purpose**: Alerts the user to a problem and may suggest a fix.

---

### Optional Enhancements:
- **Animated transitions** between states for smoother UX.
- **Tooltips** for additional context.
- **ARIA attributes** for accessibility (e.g., `aria-disabled`, `aria-busy`).

---

### ✅ **HTML Structure**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>UI Button States</title>
  styles.css
</head>
<body>
  <h1>UI Button States Demo</h1>
  <button class="ui-button">Click Me</button>
  <button class="ui-button" disabled>Disabled</button>
  <button class="ui-button loading">Loading...</button>
</body>
</html>

---

### 🎨 **CSS Styling**

```css
.ui-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Hover State */
.ui-button:hover {
  background-color: #005ea2;
}

/* Focus State */
.ui-button:focus {
  outline: 2px solid #ffbf47;
  outline-offset: 2px;
}

/* Active (Pressed) State */
.ui-button:active {
  background-color: #004578;
  transform: scale(0.98);
}

/* Disabled State */
.ui-button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

/* Loading State */
.ui-button.loading {
  background-color: #0078d4;
  color: #ffffff;
  position: relative;
  pointer-events: none;
}

.ui-button.loading::after {
  content: '';
  position: absolute;
  right: 10px;
  top: 50%;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  border: 2px solid white;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Spinner Animation */
@keyframes spin {
  to { transform: rotate(360deg); }
}

```

### 🧪 Optional Enhancements

*   You can add icons using SVG or font libraries like Font Awesome.
*   Use ARIA attributes for accessibility: `aria-disabled="true"`, `aria-busy="true"`, etc.
*   Consider using a design system like Tailwind CSS or Material UI for scalable styling.