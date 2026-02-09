const scenes = document.querySelectorAll('.scene');

function onScroll() {
  scenes.forEach(scene => {
    const rect = scene.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);

    scene.style.setProperty('--progress', progress.toFixed(3));

    if (progress > 0.15 && progress < 0.85) {
      scene.classList.add('active');
      
      // Анимация свитка в легенде
      const scroll = scene.querySelector('.castle-scroll');
      if (scroll) {
        const tilt = (progress - 0.5) * 15; // Наклон
        scroll.style.transform = `perspective(1000px) rotateX(${tilt}deg) translateY(${tilt * 2}px)`;
      }
    } else {
      scene.classList.remove('active');
    }
  });
}

// Плавное раскрытие FAQ
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const parent = q.parentElement;
    parent.classList.toggle('active');
    const icon = q.querySelector('i');
    icon.style.transform = parent.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

window.addEventListener('scroll', onScroll);
onScroll();
