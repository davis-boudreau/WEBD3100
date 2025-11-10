# 🎓 **Tutorial: Implementing Light and Dark Themes with HTML & CSS**

### 🧑‍🏫 **Objective**

Create a webpage that supports both light and dark themes using semantic HTML and modern CSS techniques. This includes:

*   Theme-aware color variables
*   A toggle-ready structure
*   SVG and text color adaptation

***

## 🧩 **Step 1: Set Up the HTML Structure**

Use semantic HTML and add a class to the `<body>` to control the theme.



***

## 🎨 \*\*Step 2-color: #ffffff;

\--text-color: #000000;
\--accent-color: #0077cc;
}

/\* Dark theme overrides \*/
body.dark-theme {
\--bg-color: #121212;
\--text-color: #f0f0f0;
\--accent-color: #66ccff;
}

/\* Apply variables \*/
body {
background-color: var(--bg-color);
color: var(--text-color);
font-family: sans-serif;
transition: background-color 0.3s ease, color 0.3s ease;
}

button {
background-color: var(--accent-color);
color: var(--bg-color);
border: none;
padding: 0.5rem 1rem;
cursor: pointer;
}

.icon {
width: 50px;
height: 50px;
color: var(--accent-color); /\* SVG uses currentColor \*/
}

````

---

## 🧪 **Step 3: Optional JavaScript for Theme Toggle**

If you want users to switch themes interactively:

```html
<script>
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
  });
</script>
````

***

## 🧠 **Best Practices Recap**

| Practice                      | Why It Matters                             |
| ----------------------------- | ------------------------------------------ |
| Use `:root` and CSS variables | Makes theme management scalable            |
| Use `currentColor` in SVG     | Ensures icons adapt to text color          |
| Avoid hardcoded colors        | Enables dynamic theming                    |
| Use semantic HTML             | Improves accessibility and maintainability |
| Add transitions               | Smooth visual experience                   |

***

## 🧪 **Student Challenge**

*   Add a third theme (e.g., sepia)
*   Animate the theme toggle button
*   Apply theme-aware styles to links and borders

***
