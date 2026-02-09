const scenes = document.querySelectorAll('.scene');

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function onScroll() {
  scenes.forEach(scene => {
    const rect = scene.getBoundingClientRect();
    const vh = window.innerHeight;

    // прогресс сцены от 0 до 1
    const progress = clamp(
      (vh - rect.top) / (vh + rect.height),
      0,
      1
    );

    // активное состояние
    if (progress > 0.15 && progress < 0.85) {
      scene.classList.add('active');
    } else {
      scene.classList.remove('active');
    }

    // передаём progress в CSS
    scene.style.setProperty('--progress', progress.toFixed(3));
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
onScroll();

/* FAQ */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('active');
  });
});
