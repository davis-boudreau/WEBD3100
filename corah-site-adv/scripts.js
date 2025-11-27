// Function to load external HTML into a target element
function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Error loading HTML:", error));
}

// Call this function in each page
window.addEventListener("DOMContentLoaded", () => 
  {
    loadHTML("header-placeholder", "header.html");
    loadHTML("footer-placeholder", "footer.html");

    // Select all nav pills
    const pills = document.querySelectorAll('.nav-pill a');
    // 1️⃣ When a pill is clicked, make it active and scroll smoothly
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });
  });

