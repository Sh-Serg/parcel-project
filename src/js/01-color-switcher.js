// нажать на кнопку запустить функцию изменения цвета
// кнопка не активна
//
//

const bodyEl = document.querySelector('body');
const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStartEl.addEventListener('click', clickOnStart);
buttonStopEl.addEventListener('click', clickOnStop);

buttonStopEl.setAttribute('disabled', '');

function clickOnStart(e) {
  e.target.setAttribute('disabled', true);
  buttonStopEl.removeAttribute('disabled');

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function clickOnStop(e) {
  e.target.setAttribute('disabled', true);
  buttonStartEl.removeAttribute('disabled');

  clearInterval(intervalId);
}
