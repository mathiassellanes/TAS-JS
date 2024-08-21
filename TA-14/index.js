const button = document.querySelector('button');
const input = document.querySelector('input');
const ulElement = document.querySelector('ul');

button.addEventListener('click', () => {
  const liElement = document.createElement('li');
  liElement.textContent = input.value;
  input.value = '';
  ulElement.appendChild(liElement);
});
