const button = document.querySelector('button');
const pElement = document.querySelector('p');

button.addEventListener('click', () => {
  const elementIsOnPage = pElement.style.display !== 'none';

  pElement.style.display =  elementIsOnPage ? 'none' : 'block';
  button.textContent = elementIsOnPage ? 'Mostrar' : 'Esconder';
});
