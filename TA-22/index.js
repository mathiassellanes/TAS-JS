const spanElement = document.querySelector('span');

spanElement.textContent = window.innerWidth;

window.addEventListener('resize', () => {
  spanElement.textContent = window.innerWidth;
});
