document.querySelector('#year').textContent = new Date().getFullYear();
const sections = [...document.querySelectorAll('main section[id], main[id]')];
const links = [...document.querySelectorAll('.side-nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  }, {rootMargin:'-15% 0px -65% 0px'});
  sections.forEach(section => observer.observe(section));
}
