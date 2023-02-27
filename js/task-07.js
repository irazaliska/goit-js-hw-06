const inputEl = document.querySelector('#font-size-control');

const textInputEl = document.querySelector('#text');

textInputEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', () => {
  textInputEl.style.fontSize = `${inputEl.value}px`;
});
