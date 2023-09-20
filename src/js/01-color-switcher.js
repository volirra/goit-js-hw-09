const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
console.log(bodyEl);

startEl.addEventListener('click', onStart);
stopEl.addEventListener('click', onStop);

let id;
stopEl.disabled = true;

function onStart() {
  id = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    startEl.disabled = true;
    stopEl.disabled = false;
  }, 1000);
}

function onStop() {
  clearInterval(id);
  startEl.disabled = false;
  stopEl.disabled = true;
}

// random color function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
