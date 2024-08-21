const button = document.querySelector('button');
const pElement = document.querySelector('p');

button.addEventListener('click', () => {
  if (pElement.textContent === "Texto original") {
    pElement.textContent = "Texto alterado";
  } else {
    pElement.textContent = "Texto original";
  }
});
