// Select all nav pills and sections
const pills = document.querySelectorAll('.nav-pill a');
const sections = document.querySelectorAll('section');

// 1️⃣ When a pill is clicked, make it active and scroll smoothly
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

// 2️⃣ Scroll spy: Observe which section is in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      // Remove all active classes
      pills.forEach(pill => pill.classList.remove('active'));
      // Add to the matching pill
      document
        .querySelector(`.nav-pill a[href="#${id}"]`)
        .classList.add('active');
    }
  });
}, {
  threshold: 0.5 // 50% of section must be visible to trigger
});

// Attach observer to each section
sections.forEach(section => {
  observer.observe(section);
});
