const nameElement = document.getElementById('name');
const nameErrorElement = document.getElementById('name-error');
const emailElement = document.getElementById('email');
const emailErrorElement = document.getElementById('email-error');
const passwordElement = document.getElementById('password');
const passwordErrorElement = document.getElementById('password-error');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const name = nameElement.value;
  const email = emailElement.value;
  const password = passwordElement.value;

  let nameError;
  let emailError;
  let passwordError;

  if (!name) {
    nameError = 'El campo nombre es requerido';
  } else {
    nameError = '';
  }

  if (!email) {
    emailError = 'El campo correo electrónico es requerido';
  } else {
    if (!email.includes('@') || !email.includes('.')) {
      emailError = 'El correo electrónico no es válido';
    } else {
      emailError = '';
    }
  }

  if (!password) {
    passwordError = 'El campo contraseña es requerido';
  } else if (password.length < 8) {
    passwordError = 'La contraseña debe tener al menos 8 caracteres';
  } else {
    passwordError = '';
  }

  nameErrorElement.textContent = nameError;
  emailErrorElement.textContent = emailError;
  passwordErrorElement.textContent = passwordError;

  if (nameError || emailError || passwordError) {
    throw new Error('Formulario inválido');
  }

  alert('Formulario enviado');
});

nameElement.addEventListener('input', () => {
  if (nameElement.value) {
    nameErrorElement.textContent = '';
  }
});

emailElement.addEventListener('input', () => {
  if (emailElement.value) {
    emailErrorElement.textContent = '';
  }
})

passwordElement.addEventListener('input', () => {
  if (passwordElement.value) {
    passwordErrorElement.textContent = '';
  }
})
