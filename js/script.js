document.addEventListener('DOMContentLoaded', () => {
  const scenes = document.querySelectorAll('.scene');

  // Функция контроля видимости сцен
  const observerOptions = {
    threshold: 0.3 // Сцена активируется, когда видна на 30%
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  scenes.forEach(scene => observer.observe(scene));

  // Логика FAQ (аккордеон)
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-q');
    question.addEventListener('click', () => {
      // Закрыть другие, если нужно (опционально)
      // faqItems.forEach(i => { if(i !== item) i.classList.remove('active'); });
      
      item.classList.toggle('active');
    });
  });

  // Параллакс эффект для свитка при скролле (только для десктопа)
  if (window.innerWidth > 1024) {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      const legendScroll = document.querySelector('.castle-scroll');
      if (legendScroll) {
        legendScroll.style.transform = `translateY(${scrollY * 0.05}px) rotateX(${scrollY * 0.01}deg)`;
      }
    });
  }
});
