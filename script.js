// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  // Remover la clase 'active' de todos los slides
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function moveSlide(direction) {
  // Actualizar el índice de la diapositiva actual
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Opcional: avanzar automáticamente cada 5 segundos
setInterval(() => {
  moveSlide(1);
}, 8000);
