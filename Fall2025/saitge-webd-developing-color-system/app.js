// Theme toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const html = document.documentElement;
    const dark = html.dataset.theme === 'dark';
    html.dataset.theme = dark ? 'light' : 'dark';
    toggle.setAttribute('aria-pressed', String(!dark));
  });
}

// Fake form alert demo
const fakeBtn = document.getElementById('fakeError');
const formAlert = document.getElementById('formAlert');
if (fakeBtn && formAlert) {
  fakeBtn.addEventListener('click', () => {
    formAlert.hidden = false;
    formAlert.className = 'alert alert--danger';
    formAlert.textContent = 'Example error: please check required fields.';
    formAlert.focus?.();
  });
}
