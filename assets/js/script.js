/**
 * Interações leves e elegantes
 * Nada de efeito circo 🎪
 */

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    links.forEach(l => {
      if (l !== link) l.style.opacity = '0.4';
    });
  });

  link.addEventListener('mouseleave', () => {
    links.forEach(l => l.style.opacity = '1');
  });
});


