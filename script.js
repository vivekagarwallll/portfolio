// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
let darkMode = false;
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkMode = !darkMode;
  // Toggle icon
  toggleButton.textContent = darkMode ? '☀️' : '🌙';
});

// ScrollReveal Animations
ScrollReveal().reveal('.hero-content, .section-title, .section-desc, .card, .skills li, .contact-info p, .contact-row', {
  delay: 200,
  distance: '30px',
  duration: 800,
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: false
});
