// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('aberto');
});

// Fechar menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('aberto');
  });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
  ancora.addEventListener('click', function(e) {
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animação de entrada ao carregar
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Analytics (opcional)
if (typeof gtag !== 'undefined') {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'whatsapp_click');
    });
  });
}