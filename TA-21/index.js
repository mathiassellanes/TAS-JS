const inputEl = document.querySelector('input');

inputEl.addEventListener('focus', () => {
  inputEl.style.border = '1px solid blue';
  inputEl.style.outline = 'none';
})

inputEl.addEventListener('blur', () => {
  inputEl.style.border = null
})
