document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.slides img'));
    const next  = document.querySelector('.carousel-next');
    const prev  = document.querySelector('.carousel-prev');
    let idx = 0;
  
    function show(i) {
      slides.forEach((img, j) => {
        img.classList.toggle('active', j === i);
      });
    }
  
    function goNext() { idx = (idx + 1) % slides.length; show(idx); }
    function goPrev() { idx = (idx - 1 + slides.length) % slides.length; show(idx); }
  
    next.addEventListener('click', goNext);
    prev.addEventListener('click', goPrev);
  
    // clique na imagem leva ao data-link correto
    slides.forEach(img => {
      img.addEventListener('click', () => {
        const url = img.getAttribute('data-link');
        if (url) window.location.href = url;
      });
    });
  
    show(idx);
    setInterval(goNext, 5000);
  });
  