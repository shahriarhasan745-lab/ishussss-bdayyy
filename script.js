document.addEventListener('DOMContentLoaded', () => {
  // 1. Chill Music Toggle
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.innerHTML = '🎵 Vibe Music: OFF';
    } else {
      bgMusic.play().catch(() => {
        alert('Page-e ektuhani click kore abar button press koron!');
      });
      musicBtn.innerHTML = '🎶 Vibe Music: ON';
    }
    isPlaying = !isPlaying;
  });

  // 2. Lightbox Fullscreen Preview
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');

  document.querySelectorAll('.interactive-frame').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src') || item.querySelector('img').src;
      lightboxImg.src = src;
      lightbox.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // 3. Interactive Click Sparkle Effect
  document.addEventListener('click', (e) => {
    if (e.target.closest('#lightbox') || e.target.closest('#music-btn')) return;

    const sparkle = document.createElement('span');
    sparkle.innerText = ['✨', '⭐', '💫', '🌿'][Math.floor(Math.random() * 4)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '18px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.transition = 'all 0.8s ease-out';
    sparkle.style.zIndex = '999';

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.style.transform = 'translateY(-35px) scale(1.3) rotate(20deg)';
      sparkle.style.opacity = '0';
    }, 40);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  });
});
