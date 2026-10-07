// Lightweight portfolio interactions.
// The page intentionally contains no fabricated business results.
// Replace [ENTER VALUE] placeholders after validating the final analysis.

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});
