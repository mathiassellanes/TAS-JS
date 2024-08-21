const input = document.querySelector('input');
const ulElement = document.querySelector('ul');

const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');

addButton.disabled = true;
removeButton.disabled = true;

const addElement = () => {
  const liElement = document.createElement('li');
  liElement.textContent = input.value;
  input.value = '';
  ulElement.appendChild(liElement);
  removeButton.disabled = false;
  addButton.disabled = true;
};

const removeElement = () => {
  const lastLiElement = ulElement.lastElementChild;

  if (lastLiElement) {
    ulElement.removeChild(lastLiElement);
  }

  if (ulElement.children.length === 0) {
    removeButton.disabled = true;
  }
}

input.addEventListener('input', () => {
  addButton.disabled = input.value === '';
})
