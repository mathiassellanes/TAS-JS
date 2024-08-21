const imageEl = document.querySelector('img');

imageEl.addEventListener('mouseover', () => {
  imageEl.src = 'lobo.jpg';
});

imageEl.addEventListener('mouseout', () => {
  imageEl.src = 'camaleon.webp';
});
