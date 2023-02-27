const inputEl = document.querySelector('#validation-input');

const inputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', (event) => {
  if (event.target.value.trim().length === Number(inputLength)) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
  }
});