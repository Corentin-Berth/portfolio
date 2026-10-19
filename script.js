document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
});

function revealSections() {
  document.querySelectorAll('section.hidden').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.remove('hidden');
      section.classList.add('fade-in');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

document.querySelectorAll('.skill-logo, .contact-social-logo').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.15)';
    img.style.transition = 'transform 0.2s, box-shadow 0.2s';
    img.style.boxShadow = '0 0 16px #3a7bd5';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = '';
  });
});

const topBtn = document.createElement('button');
topBtn.innerText = '↑ Haut';
topBtn.id = 'topBtn';
topBtn.style.display = 'none';
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carrousel de projets
const slides = document.querySelectorAll('.project-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('prevProject').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
document.getElementById('nextProject').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Affiche le premier slide au chargement
showSlide(currentSlide);