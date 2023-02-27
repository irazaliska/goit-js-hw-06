function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const bgColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

changeColorBtnEl.addEventListener('click', (event) => {
  const currentBgColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentBgColor;
  bgColorEl.textContent = currentBgColor;
});
