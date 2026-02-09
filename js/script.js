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
document.addEventListener('DOMContentLoaded', () => {
  // ... (весь предыдущий JavaScript код: observer, faqItems, window.addEventListener('scroll')) ...

  // ЭФФЕКТ ПАДАЮЩИХ ИСКР
  const sparkleContainer = document.getElementById('sparkle-container');
  const numSparkles = 50; // Количество искр

  function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    const size = Math.random() * 3 + 1; // Размер искры от 1 до 4px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    sparkle.style.left = `${Math.random() * 100}%`; // Случайная позиция по горизонтали
    sparkle.style.animationDelay = `${Math.random() * -8}s`; // Случайная задержка для бесконечного цикла

    sparkleContainer.appendChild(sparkle);
  }

  for (let i = 0; i < numSparkles; i++) {
    createSparkle();
  }
});
