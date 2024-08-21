const ulElement = document.querySelector('ul');
const inputElement = document.querySelector('input');

const listaPersonas = Array.from({ length: 10 }, (_, index) => `Persona ${index + 1}`);

ulElement.innerHTML = `
  ${listaPersonas
    .map((liElement) => {
      return `<li>${liElement}</li>`;
    })
    .join('')
  }
`

inputElement.addEventListener('input', () => {
  const value = inputElement.value;

  if (value) {
    return ulElement.innerHTML = `
      ${listaPersonas
        .filter((persona) => {
          return persona.toLowerCase().includes(value.toLowerCase());
        })
        .map((persona) => {
          return `<li>${persona}</li>`;
        })
        .join('')
      }
    `
  } else {
    return ulElement.innerHTML = `
      ${listaPersonas
        .map((persona) => {
          return `<li>${persona}</li>`;
        })
        .join('')
      }
    `
  }
})
