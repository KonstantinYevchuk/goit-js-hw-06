function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector("#controls input");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector("#boxes");

let boxSize = 30;

btnCreate.addEventListener("click", createHandle);
btnDestroy.addEventListener("click", destroyHandle);

function createHandle(amount) {
  amount = controlsEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxList = [];
  for (let i = 0; i < amount; i += 1) {
    const boxMarkup = `<div style= "width: ${boxSize}px; 
    height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxSize+=10;
    boxList.push(boxMarkup);
  
  } 
  boxEl.insertAdjacentHTML("beforeend", boxList.join(""))
  
}
function destroyHandle() {
  boxEl.innerHTML = "";
  controlsEl.value = "";
  boxSize = 30;
}






 
  
