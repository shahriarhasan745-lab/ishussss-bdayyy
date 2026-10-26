// GitHub file list er Baki Screenshot image-gulo JavaScript swap gallery jonno add kora hoyeche:
const extraPhotos = [
  '4',
  'Screenshot 2026-10-27 025700.png',
  'Screenshot 2026-10-27 025942.png',
  'Screenshot 2026-10-27 030027.png',
  'Screenshot 2026-10-27 030403.png',
  'Screenshot 2026-10-27 030436.png',
  'Screenshot 2026-10-27 030537.png',
  'Screenshot 2026-10-27 031141.png',
  'Screenshot 2026-10-27 031203.png'
];

// Frame e click korle frame er photo auto-change hobe
document.querySelectorAll('.interactive-frame').forEach((frame) => {
  frame.addEventListener('click', () => {
    const imgElement = frame.querySelector('img');
    const randomIndex = Math.floor(Math.random() * extraPhotos.length);
    imgElement.src = extraPhotos[randomIndex];
  });
});
