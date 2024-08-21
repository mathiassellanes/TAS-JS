const spanElement = document.querySelector('span');
let value = 0;

const increment = () => {
  value += 1;
  spanElement.textContent = value;
}

const decrement = () => {
  value -= 1;
  spanElement.textContent = value;
}
